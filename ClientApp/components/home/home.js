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

  checkArray() {
    this.selectedInterests.forEach(function (element) {
      travelApi.fetchResults(this.selectedDestination, element.toLowerCase()).then(results => {
        console.log(results);
      }).catch(err => {
        console.log(err);
      })
    }, this);
  }
}