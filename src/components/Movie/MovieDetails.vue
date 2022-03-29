<template>
  <v-app>
    <v-main>
      <v-container class="con-1">
        <v-card  class="cardI" color="" width="50%" height="auto" style="border-radius: 15px">
          <v-img :src="photoSrc" height="600px"></v-img>
        </v-card>
        <v-card
          color=""
          width="50%"
          height="auto%"
          active-class="card"
          class="cardC"
        >
          <v-content>{{ title }}</v-content>
          <v-content>{{ description }}</v-content>
          <v-content>
            <v-list-item
              style="display: inline-block; padding: 0 10px 0 0; color: white"
              >{{ category }}</v-list-item
            >
            <v-content style="display: inline-block">{{ rating }}</v-content>
          </v-content>

          <v-btn
            depressed
            elevation="3"
            x-large
            @click="openReserveDialog"
            style="display: block"
          >
            Reserve Ticket
          </v-btn>
        </v-card>
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
                        label="Quantity"
                        v-model="quantity"
                        :value="1"
                        type="number"
                        :rules="[rules.required, rules.max, rules.min]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="8" md="9">
                      <p>Total: {{ price * quantity }}</p>
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
              <v-btn color="blue darken-1" text @click="submitTicket">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
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
      quantity: 1,
      reserveTicket: false,
      selectedMovie: null,
    };
  },
  computed: {
    title() {
      return this.selectedMovie.title;
    },
    photoSrc() {
      return "http://localhost:5000/movies/movie/photo/" + this.id;
    },
    rating() {
      return this.selectedMovie.rating;
    },
    description() {
      return this.selectedMovie.description;
    },
    category() {
      return this.selectedMovie.category.name;
    },
    price() {
      return this.selectedMovie.price;
    },
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  watch: {
    quantity(value) {
      if (value > 5) {
        setTimeout(() => {
          this.quantity = 5;
        }, 1200);
      } else if (value < 1) {
        setTimeout(() => {
          this.quantity = 1;
        }, 1200);
      }
    },
  },
  methods: {
    openReserveDialog() {
      this.reserveTicket = true;
    },
    closeReserveDialog() {
      this.reserveTicket = false;
    },

    submitTicket() {
      let ticket = {
        quantity: this.quantity,
        totalPrice: this.price * this.quantity,
        user: this.user.user.id,
        movie: this.selectedMovie._id,
      };
      this.$store.dispatch("addTicket", ticket);
      console.log("tiketa", ticket);
      console.log("useri i loguar", this.user);

      this.reserveTicket = false;
    },
  },
  created() {
    console.log(this.$store.getters.movies);
    console.log("id:" + this.id);
    this.selectedMovie = this.$store.getters.movies.find(
      (movie) => movie._id === this.id
    );
  },
};
</script>

<style scoped>
.cardC {
  background: #3d3d3d !important;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 50px 15px;
}
.v-content:first-child {
  font-size: 30px;
}
.v-content {
  font-size: 20px;
  color: white;
}

.con-1 {
  display: flex;
  height: 100%;
  align-items: center;
}

@media screen and (max-width: 789px) {
  .con-1 {
    flex-direction: column;
    padding-top: 50px !important;
  }
  .cardC {
    width: 90% !important;
    border-radius: 0 0 15px 15px !important;

  }
  .cardI {
    width: 90% !important;
    border-radius: 15px 15px 0 0 !important;
  }
}
</style>
