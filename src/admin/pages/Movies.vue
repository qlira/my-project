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
                    <v-form>
                      <v-row>
                        <v-col cols="12" sm="6" md="4"> </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="title"
                            label="Title"
                            type="text"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select
                            v-model="category"
                            label="Categories"
                            :items="categories"
                            item-value="_id"
                            item-text="name"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="description"
                            label="Description"
                            type="text"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="rating"
                            label="Rating"
                            type="text"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="14" sm="6" md="13">
                          <v-text-field
                            v-model="price"
                            label="Price"
                            type="text"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="14" sm="6" md="13">
                          <v-text-field
                            v-model="image"
                            label="Choose an Image"
                            type="text"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-form>
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
                          v-model="editedItem.id"
                          label="ID"
                          type="text"
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.title"
                          label="Title"
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.category"
                          label="Categories"
                          :items="staticCategoriesName"
                        ></v-select>
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
      { text: "Category", value: "category", sortable: false },
      { text: "Description", value: "description", sortable: false },
      { text: "Rating", value: "rating", sortable: false },
      { text: "Image", value: "image", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      id: "",
      title: "",
      category: "",
      description: "",
      rating: "",
      image: "",
    },
    title: "",
    price: "",
    category: "",
    description: "",
    rating: "",
    image: "",

    staticCategoriesName: [
      "Aksion",
      "Anime",
      "Adventure",
      "Drama",
      "Fantashkence",
      "Shkence",
      "Histori",
      "Horror",
      "Komedi",
      "Krim",
      "Romance",
      "Thriller",
    ],
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Movie" : "Edit Movie";
    },
    movies() {
      return this.$store.getters.movies;
    },
    categories() {
      return this.$store.getters.categories;
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

  methods: {
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
      let movie = {
        title: this.title,
        description: this.description,
        price: this.price,
        category: this.category,
        photo: this.image,
      };
      this.$store.dispatch("addMovie", movie);
      this.close();
    },
    saveEdit() {
      Object.assign(this.movies[this.editedIndex], this.editedItem);
      this.close();
    },
  },
};
</script>
