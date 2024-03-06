export const state = () => ({
  cardsData: [],
  searchQuery: '',
});

export const mutations = {
  setCardsData(state, data) {
    state.cardsData = data
  },
  setSearchQuery(state, value) {
    state.searchQuery = value;
  },
};

export const getters = {
  getCardsData(store) {
    return store.cardsData
  }
}

export const actions = {
  async nuxtServerInit({
    commit
  }, context) {
    const res = await this.$axios.$get("https://run.mocky.io/v3/8d4169ff-31e3-4762-8dc2-c19f58ca304d");
    commit('setCardsData', res);
  },
  updateSearchQuery({ commit }, value) {
    commit('setSearchQuery', value);
  },
};
