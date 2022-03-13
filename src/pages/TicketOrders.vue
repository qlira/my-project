<template>
  <v-app>
    <v-main style="padding-bottom: 0">
      <v-container fluid style="height: 100%">
        <v-row>
          <v-col v-for="ticket in userTickets" :key="ticket._id">
            <v-card elevation="2" outlined shaped active-class="carda">
              <v-card-title>{{ ticket.movie.title }}</v-card-title>
              <v-card-subtitle>{{ticket.user.firstName}} {{ticket.user.lastName}}</v-card-subtitle>
              <v-card-text>{{ ticket.user.email }}</v-card-text>
              <v-card-text>{{ ticket.quantity }}</v-card-text>
              <v-card-text>{{ ticket.totalPrice }}</v-card-text>

              <v-card-actions>
                <v-btn>Edit</v-btn>
                <v-btn>Delete</v-btn>
              </v-card-actions>
            </v-card>
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
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    tickets() {
      return this.$store.getters.tickets;
    },
  },

  mounted() {
      this.userTickets = this.tickets.filter((ticket) => {
      return ticket.user._id === this.user.id;
    });
    console.log('usertickets', this.userTickets)
    console.log('ticekt', this.tickets)
  }

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
