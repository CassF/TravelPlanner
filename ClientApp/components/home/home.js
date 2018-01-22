import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  selectedDestination = null;
  selectedInterests = null;
  countries = [
    'London', 'Barcelona', 'Amsterdam', 'Berlin',
    'Dubai', 'Paris', 'Rome'
  ];
  options = [
    'Accommodation', 'Attraction', 'Restaurant', 'Point Of Interest'
  ];


  checkArray() {
    console.log(this.selectedDestination);
    console.log(this.selectedInterests);
  }
}