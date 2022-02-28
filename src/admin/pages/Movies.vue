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
                    <form enctype="multipart/form-data">
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
                          <v-file-input
                            accept="image/*"
                            v-model="image"
                            label="Choose an Image"
                            @change="handleUploadFile($event)"
                          ></v-file-input>
                        </v-col>
                      </v-row>
                    </form>
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
                    <form enctype="multipart/form-data">
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
                            :items="categories"
                            item-value="_id"
                            item-text="name"
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
                          <v-file-input
                            accept="image/*"
                            v-model="editedItem.image"
                            label="Choose an Image"
                            @change="handleUploadEditedFile($event)"
                          ></v-file-input>
                        </v-col>
                      </v-row>
                    </form>
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
      { text: "Category", value: "category.name", sortable: false },
      { text: "Description", value: "description", sortable: false },
      { text: "Rating", value: "rating", sortable: false },
      { text: "Image", value: "photo", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      id: "",
      title: "",
      price: "",
      category: "",
      description: "",
      rating: "",
      image: undefined,
    },
    title: "",
    price: "",
    category: "",
    description: "",
    rating: "",
    image: undefined,

    idd: "621acb149b869c9822de8acd",
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
      console.log(this.editedItem._id);
      console.log(this.editedItem.id);
      this.editedItem.id = this.editedItem._id;
      console.log(this.editedItem.id);

      this.editDialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.movies.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.dispatch("deleteMovie", this.editedItem);
      this.closeDelete();
    },

    close() {
      this.addDialog = false;
      this.editDialog = false;
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    saveAdd() {
      var formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("price", this.price);
      formData.append("category", this.category);
      formData.append("rating", this.rating);
      formData.append("photo", this.image);
      this.$store.dispatch("addMovie", formData);
      this.close();
    },
    saveEdit() {
      var formData = new FormData();
      formData.append("_id", this.editedItem.id);
      formData.append("title", this.editedItem.title);
      formData.append("description", this.editedItem.description);
      formData.append("price", this.editedItem.price);
      formData.append("category", this.editedItem.category);
      formData.append("rating", this.editedItem.rating);
      formData.append("photo", this.editedItem.image);
      
      console.log("getID" + formData.get("_id"));

      this.$store.dispatch("updateMovie", formData);
      console.log(this.editedItem);
      this.close();
    },
    handleUploadFile(files) {
      this.image = files;
    },
    handleUploadEditedFile(files) {
      this.editedItem.image = files;
      console.log(this.editedItem.image);
    },
  },
};
</script>
