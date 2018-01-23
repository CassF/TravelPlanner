import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import travelApi from '../../lib/travelApi';

@Component
export default class Home extends Vue {
  selectedDestination = null;
  selectedInterests = null;
  searchResults = null;
  // countries = [
  //   'London', 'Barcelona', 'Amsterdam', 'Berlin',
  //   'Dubai', 'Paris', 'Rome'
  // ];
  countries = [
    {name: 'London', latitude:'51.5074', longitude: '0.1278'},
    {name: 'Barcelona', latitude:'41.3851', longitude: '2.1734'},
    {name: 'Amsterdam', latitude:'52.3702', longitude: '4.8952'},
    {name: 'Berlin', latitude:'52.5200', longitude: '13.4050'},
    {name: 'Dubai', latitude:'25.2048', longitude: '55.2708'},
    {name: 'Paris', latitude:'48.8566', longitude: '2.3522'},
    {name: 'Rome', latitude:'41.9028', longitude: '12.4964'}
  ]
  options = [
    'Accommodation', 'Attraction', 'Restaurant', 'POI'
  ];
  headers = [
    { text: 'Name', value: 'calories' },
    { text: 'Address', value: 'fat' },
  ]
  items = [];
  page = 1;
  pagination = {rowsPerPage: 10};

  fetchSearchResults() {
    this.items = [];
    this.selectedInterests.forEach(function (element) {
      travelApi.fetchResults(this.selectedDestination, element.toLowerCase()).then(results => {
        results.data.results.forEach(function(element) {
          this.items.push(element)
        }, this);
        console.log(this.items[0].photos[0].photo_reference);
      }).catch(err => {
        console.log(err);
      })
    }, this);
  }

  pages () {
    if (this.pagination.rowsPerPage == null ||
      this.pagination.totalItems == null
    ) return 0

    return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
  }
}