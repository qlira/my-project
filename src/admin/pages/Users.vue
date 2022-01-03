<template>
  <v-app>
    <v-container class="con">
      <v-data-table
        calculate-widths
        :headers="headers"
        :items="desserts"
        :items-per-page="10"
        class="elevation-1"
        :search="search"
        :custom-filter="filterOnlyCapsText"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search (UPPER CASE ONLY)"
            class="mx-4"
          ></v-text-field> </template
      ></v-data-table>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Full Name",
          align: "left",
          sortable: false,
          value: "name",
          width: "500px",
        },
        { text: "Email", value: "calories", align: "left" },
        { text: "Age (g)", value: "fat" },
        // { text: 'Carbs (g)', value: 'carbs' },
        // { text: 'Protein (g)', value: 'protein' },
        // { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: "qliraa@gmail.com",
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: "qliraa@gmail.com",
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: "qliraa@gmail.com",
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: "qliraa@gmail.com",
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: "qliraa@gmail.com",
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: "qliraa@gmail.com",
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: "qliraa@gmail.com",
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: "qliraa@gmail.com",
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: "qliraa@gmail.com",
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: "qliraa@gmail.com",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "Haribo",
          calories: "qliraa@gmail.com",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
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

<style scoped>
.con {
  margin: auto;
  margin-left: 256px;
  margin-top: 94px;
  height: 100%;
  width: 83%;
}
</style>
