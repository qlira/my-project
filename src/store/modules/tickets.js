import axios from "axios";

const state = {
  tickets: [],
  userTickets: [],
  ticket: {},
};

const mutations = {
  ticket_success(state, ticket) {
    state.ticket = ticket;
  },
  loadTickets(state, tickets) {
    state.tickets = tickets;
  },
  loadUserTickets(state, userTickets) {
    state.userTickets = userTickets;
  },
};

const actions = {
  loadContacts({ commit }) {
    axios.get("http://localhost:5000/tickets/").then((response) => {
      console.log(response.data);
      const tickets = response.data;
      commit("loadTickets", tickets);
    });
  },

  async addTicket({ commit, dispatch }, ticket) {
    let res = await axios.post("http://localhost:5000/tickets/create", ticket, {
      header: {
        Accept: "application/json",
        // "x-auth-token": token,
      },
    });
    console.log(res);
    if (res.status == 200) {
      const ticket = res.data.ticket;
      commit("ticket_success", ticket);
    }
    dispatch("loadTickets");
    return res;
  },

  async updateEdit({ commit, dispatch }, ticket) {
    let res = await axios.put(
      "http://localhost:5000/tickets/" + ticket._id,
      ticket
    );
    console.log(res);
    if (res.satus == 200) {
      const ticket = res.data.ticket;
      commit("ticket_success", ticket);
    }
    dispatch("loadTickets");
    return res;
  },

  async deleteTicket({ commit, dispatch }, ticket) {
    let res = await axios.delete(
      "http://localhost:5000/tickets/" + ticket._id,
      ticket
    );
    console.log(res);
    if (res.satus == 200) {
      const ticket = res.data.ticket;
      commit("ticket_success", ticket);
    }
    dispatch("loadTickets");
    return res;
  },
};

const getters = {
  tickets: (state) => {
    return state.tickets;
  },
  userTickets: (state) => {
    return state.userTickets;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
