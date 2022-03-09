import axios from 'axios';

const state = {
    contacts: [],
    contact: {},
};

const mutations = {
    contact_success(state, contact) {
        state.contact = contact;
    },
    loadContacts(state, contacts){
        state.contacts = contacts;
    },
};

const actions = {
    loadContacts({ commit }) {
        axios.get("http://localhost:5000/contacts/").then((response) => {
          console.log(response.data);
          const contacts = response.data;
          commit("loadContacts", contacts);
        });
      },

    async addContact({ commit, dispatch }, contact) {
        let res = await axios.post(
            "http://localhost:5000/contacts/create",
            contact
          );
          console.log(res);
          if (res.status == 200) {
            const contact = res.data.contact;
            commit("contact_success", contact);
          }
          dispatch('loadContacts');
          return res;
    },
};

const getters = {
    contacts: (state) => {
        return state.contacts;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
  };
  