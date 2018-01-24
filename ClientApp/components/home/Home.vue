<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs5>
        <v-select :items="countries" item-text="name" item-value="countries" v-model="selectedDestination" label="Destination" autocomplete></v-select>
      </v-flex>
      <v-flex xs5>
        <v-select :items="options" v-model="selectedInterests" multiple chips deletable-chips hint="What are you interested in?"
          persistent-hint></v-select>
      </v-flex>
      <v-flex xs2>
        <v-btn block depressed color="primary" @click="fetchSearchResults()">Search
          <v-icon right dark>search</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <template>
        <div v-for="(item, index) in items" id="e3"  style="max-width: 600px;" class="grey lighten-3">
            <v-card>
              <v-container fluid style="min-height: 0;" grid-list-lg>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card color="primary" class="white--text">
                      <v-container fluid grid-list-lg>
                        <v-layout row>
                            <v-flex xs7>
                                <div>
                                  <div class="headline">{{item.name}}</div>
                                  <div>{{item.vicinity}}</div>
                                </div>
                              </v-flex>
                          <v-flex xs5>
                            <v-card-media src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyBTp182BVjiJfS3mqywnfh3f0Y9RQnh6X0"
                              height="125px" contain></v-card-media>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </div>
          <v-pagination :length="4" v-model="page" circle></v-pagination>
    </template>
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