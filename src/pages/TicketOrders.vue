<template>
  <v-app>
    <v-main style="padding-bottom: 0">
      <v-container fluid style="height: 100%">
        <v-row v-if="tti.length > 0">
          <v-col v-for="ticket in tti" :key="ticket._id">
            <v-card elevation="2" outlined shaped active-class="carda">
              <v-card-title>{{ ticket.movie.title }}</v-card-title>
              <v-card-subtitle
                >{{ ticket.user.firstName }}
                {{ ticket.user.lastName }}</v-card-subtitle
              >
              <v-card-subtitle>{{ ticket.user.email }}</v-card-subtitle>
              <v-card-subtitle>Quantity: {{ ticket.quantity }}</v-card-subtitle>
              <v-card-subtitle
                >Price to pay: {{ ticket.totalPrice }}$</v-card-subtitle
              >

              <v-card-actions>
                <v-btn color="red" @click="openDialog">Cancel</v-btn>
              </v-card-actions>
            </v-card>
            <v-dialog v-model="confirm" max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="text-h5">Are you sure?</span>
                </v-card-title>
                <v-card-actions>
                  <v-btn @click="closeDialog">No</v-btn>
                  <v-btn @click="cancelTicket(ticket)">Yes</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row v-if="tti.length === 0">
          <v-col style="padding-top: 30px">
          <v-alert outlined dense border="left" type="warning">
            <!-- could be removed -->
            Nuk keni asnje tiket te rezervuar
          </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      userTickets: [],
      confirm: false,
    };
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
    tickets() {
      return this.$store.getters.tickets;
    },

    tti(){
      return this.tickets.filter((ticket) => {
      return ticket.user._id === this.user.user.id;
    });
    },
  },
  methods: {
    openDialog() {
      this.confirm = true;
      console.log("tti: ", this.tti);
    },
    closeDialog() {
      this.confirm = false;
    },
    cancelTicket(ticket) {
      console.log("tiketa qe po fshihet", ticket);
      this.$store.dispatch("deleteTicket", ticket);
      this.confirm = false;
    },
  },
};
</script>

<style scoped>
.col {
  max-width: 30%;
}
.row {
  margin: 0;
}
.v-card {
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>
