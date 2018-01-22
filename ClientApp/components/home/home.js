import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import travelApi from '../../lib/travelApi';

@Component
export default class Home extends Vue {
  selectedDestination = null;
  selectedInterests = null;
  searchResults = null;
  countries = [
    'London', 'Barcelona', 'Amsterdam', 'Berlin',
    'Dubai', 'Paris', 'Rome'
  ];
  options = [
    'Accommodation', 'Attraction', 'Restaurant', 'POI'
  ];
  headers = [
    { text: 'Name', value: 'calories' },
    { text: 'Address', value: 'fat' },
  ]
  items = [];
  page = 1;
  pagination = {};

  checkArray() {
    this.selectedInterests.forEach(function (element) {
      travelApi.fetchResults(this.selectedDestination, element.toLowerCase()).then(results => {
        console.log(results);
        this.items = results.data
        //this.items.concat(results.data);
        console.log(this.items)
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