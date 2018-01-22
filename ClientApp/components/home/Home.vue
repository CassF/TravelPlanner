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
    <v-layout>
      <v-flex xs10>
        <div v-if="items.length > 0">
          <v-data-table :headers="headers" :items="items" :pagination.sync="pagination" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
              <tr @click="props.expanded = !props.expanded">
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.formatted_address
                  }}</td>
              </tr>
            </template>
            <template slot="expand" slot-scope="props">
                <v-card flat>
                  <v-card-text>Peek-a-boo!</v-card-text>
                </v-card>
              </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
          </div>
        </div>
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