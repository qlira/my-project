<template>
  <v-app>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="movies"
        sort-by="calories"
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
            <!-- ADD MOVIE DIALOG -->
            <v-dialog v-model="addDialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Add User
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.title"
                          label="Title"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.categories"
                          label="Categories"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.description"
                          label="Description"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.rating"
                          label="Rating"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.image"
                          label="Image"
                          type="text"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="saveAdd">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- edit DIALOGGGGGGGG -->
            <v-dialog v-model="editDialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.title"
                          label="Title"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.categories"
                          label="Categories"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.description"
                          label="Description"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.rating"
                          label="Rating"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.image"
                          label="Image"
                          type="text"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="saveEdit">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    search: "",
    addDialog: false,
    editDialog: false,
    dialogDelete: false,
    headers: [
      { text: "Title", value: "title", sortable: false },
      { text: "Categories", value: "categories", sortable: false },
      { text: "Description", value: "description", sortable: false },
      { text: "Rating", value: "rating", sortable: false },
      { text: "Image", value: "image", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    // desserts: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      categories: 0,
      description: 0,
      rating: 0,
      image: 0,
    },
    defaultItem: {
      title: "",
      categories: 0,
      description: 0,
      rating: 0,
      image: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Movie" : "Edit Movie";
    },
    movies() {
      return this.$store.getters.movies;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  // created() {
  //   this.initialize();
  // },

  methods: {
    // initialize() {
    //   this.desserts = [
    //     {
    //       name: "Frozen Yogurt",
    //       calories: 159,
    //       fat: 6.0,
    //       carbs: 24,
    //       protein: 4.0,
    //     },
    //     {
    //       name: "Ice cream sandwich",
    //       calories: 237,
    //       fat: 9.0,
    //       carbs: 37,
    //       protein: 4.3,
    //     },
    //     {
    //       name: "Eclair",
    //       calories: 262,
    //       fat: 16.0,
    //       carbs: 23,
    //       protein: 6.0,
    //     },
    //     {
    //       name: "Cupcake",
    //       calories: 305,
    //       fat: 3.7,
    //       carbs: 67,
    //       protein: 4.3,
    //     },
    //     {
    //       name: "Gingerbread",
    //       calories: 356,
    //       fat: 16.0,
    //       carbs: 49,
    //       protein: 3.9,
    //     },
    //     {
    //       name: "Jelly bean",
    //       calories: 375,
    //       fat: 0.0,
    //       carbs: 94,
    //       protein: 0.0,
    //     },
    //     {
    //       name: "Lollipop",
    //       calories: 392,
    //       fat: 0.2,
    //       carbs: 98,
    //       protein: 0,
    //     },
    //     {
    //       name: "Honeycomb",
    //       calories: 408,
    //       fat: 3.2,
    //       carbs: 87,
    //       protein: 6.5,
    //     },
    //     {
    //       name: "Donut",
    //       calories: 452,
    //       fat: 25.0,
    //       carbs: 51,
    //       protein: 4.9,
    //     },
    //     {
    //       name: "KitKat",
    //       calories: 518,
    //       fat: 26.0,
    //       carbs: 65,
    //       protein: 7,
    //     },
    //   ];
    // },
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleLowerCase().indexOf(search) !== -1
      );
    },
    editItem(item) {
      this.editedIndex = this.movies.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editDialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.movies.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.movies.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.addDialog = false;
      this.editDialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    saveAdd() {
      this.movies.push(this.editedItem);
      this.close();
    },
    saveEdit() {
      Object.assign(this.movies[this.editedIndex], this.editedItem);
      this.close();
    },
  },
};
</script>
