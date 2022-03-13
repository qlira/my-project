<template>
  <v-app>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="tickets"
        class="elevation-1"
        :search="search"
        :custom-filter="filterOnlyCapsText"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <template>
              <v-text-field v-model="search" label="Search"></v-text-field>
            </template>
            <v-spacer></v-spacer>
            

          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    search: "",
    headers: [
      { text: "First Name", value: "user.firstName", sortable: false },
      { text: "Last Name", value: "user.lastName", sortable: false },
      { text: "Email", value: "user.email", sortable: false },
      { text: "Movie Title", value: "movie.title", sortable: false },
      { text: "Quantity", value: "quantity", sortable: false },
      { text: "Total Price", value: "totalPrice", sortable: false },

    ],
  }),

  computed: {
    tickets() {
      return this.$store.getters.tickets;
    },
  },

  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleLowerCase().indexOf(search) !== -1
      );
    },
  },
};
</script>
