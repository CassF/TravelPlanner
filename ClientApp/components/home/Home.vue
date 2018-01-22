<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs5>
        <v-select :items="countries" v-model="selectedDestination" label="Destination" autocomplete></v-select>
      </v-flex>
      <v-flex xs5>
        <v-select :items="options" v-model="selectedInterests" multiple chips deletable-chips hint="What are you interested in?"
          persistent-hint></v-select>
      </v-flex>
      <v-flex xs2>
          <v-btn block depressed color="primary" @click="checkArray()">Search
              <v-icon right dark>search</v-icon>
          </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  .grid-list-md {
    margin-top: 150px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
<script src="./home.js"></script>