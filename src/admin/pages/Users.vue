<template>
  <v-app>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="users"
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
            
            <!-- edit DIALOGGGGGGGG -->
            <v-dialog v-model="editDialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="text-h5">Edit Role</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.id"
                          hidden
                          label="ID"
                          type="hidden"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.role"
                          label="Role"
                          type="checkbox"
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
    editDialog: false,
    dialogDelete: false,
    headers: [
      { text: "First Name", value: "firstName", sortable: false },
      { text: "Last Name", value: "lastName", sortable: false },
      { text: "Email", value: "email", sortable: false },
      { text: "Role", value: "role", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      id: "",
      role: false,
    },
    role: false,
  }),

  computed: {
    users() {
      return this.$store.getters.users;
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
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log(this.editedItem);
      console.log(this.editedItem._id);
      console.log(this.editedItem.role);

      this.editDialog = true;
    },

    // deleteItem(item) {
    //   this.editedIndex = this.users.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialogDelete = true;
    // },

    // deleteItemConfirm() {
    //   // this.categories.splice(this.editedIndex, 1);
    //   this.$store.dispatch("deleteCategory", this.editedItem);
    //   this.closeDelete();
    // },

    close() {
      this.editDialog = false;
    },

    // closeDelete() {
    //   this.dialogDelete = false;
    // },

    // saveAdd() {
    //   let category = {
    //     name: this.name,
    //   };
    //   this.$store.dispatch("addCategory", category);
    //   this.close();
    // },
    saveEdit() {
      this.$store.dispatch("updateRole", this.editedItem);
      console.log("save "+this.editedItem.role);
      this.close();
    },
  },
};
</script>
