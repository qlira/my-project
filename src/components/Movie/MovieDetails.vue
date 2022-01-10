<template>
  <v-app>
    <v-main>
      <div class="container">
        <img :src="image" alt="" height="739" width="890" />
        <div class="desc-container">
          <div style="text-align: center">
            <h1>{{ selectedMovie.title }}</h1>
          </div>
          <div>
            <p>{{ description }}</p>
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                padding-top: 40px;
              "
            >
              <ul>
                <li
                  v-for="(category, index) in selectedMovie.categories"
                  :key="index"
                >
                  {{ category }}
                </li>
              </ul>
              <h3>{{ rating }} IMDB</h3>
            </div>
          </div>
          <v-btn depressed elevation="3" x-large @click="openReserveDialog">
            Reserve Ticket
          </v-btn>
          <v-dialog v-model="reserveTicket" max-width="700px">
            <v-card color="">
              <v-card-title>
                <span class="text-h5">Reserve Tickets</span>
              </v-card-title>
              <v-form>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          :value="selectedMovie.title"
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Quantity"
                          v-model="quantity"
                          type="number"
                          :rules="[rules.required, rules.max, rules.min]"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          :items="dates"
                          label="Avaiable Dates"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-checkbox
                          v-model="isVIP"
                          label="VIP SEAT"
                        ></v-checkbox>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-form>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeReserveDialog">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="closeReserveDialog">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) => value > 0 || "Quantity should be above 0",
        max: (value) => value <= 5 || "Quantity should not be above 5",
      },
      quantity: "",
      isVIP: false,
      reserveTicket: false,
      selectedMovie: null,
      dates: ["18/01/2022", "22/01/2022", "24/01/2022", "26/01/2022"],
    };
  },
  computed: {
    image() {
      return this.selectedMovie.image;
    },
    rating() {
      return this.selectedMovie.rating;
    },
    description() {
      return this.selectedMovie.description;
    },
  },
  methods: {
    openReserveDialog() {
      this.reserveTicket = true;
    },
    closeReserveDialog() {
      this.reserveTicket = false;
    },
  },
  created() {
    console.log(this.$store.getters.movies);
    console.log("id:" + this.id);
    this.selectedMovie = this.$store.getters.movies.find(
      (movie) => movie.id === this.id
    );
  },
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 140px 0px 60px 0px;
  width: 100%;
}
.desc-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 50%;
  background-color: #3d3d3d;
  color: whitesmoke;
}
h1 {
  font-size: 40px;
}

ul li {
  display: inline-block;
  list-style: none;
  padding-right: 10px;
  font-size: 22px;
}

p {
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding: 40px;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
}
</style>
