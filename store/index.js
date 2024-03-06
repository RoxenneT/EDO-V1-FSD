export const state = () => ({
  docsInfo: [],
  cardsData: [],
});

export const mutations = {
  setDocsInfo(state, data) {
    state.docsInfo = data
  },
  setCardsData(state, data) {
    state.cardsData = data
  },
};

export const getters = {
  getDocsInfo(store) {
    return store.docsInfo
  },
  getCardsData(store) {
    return store.cardsData
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const urls = [
      "https://run.mocky.io/v3/29399123-f800-4c9f-a782-229417591999",
      "https://run.mocky.io/v3/ebba6ca3-eeff-4b81-8bb2-766b7a893e83"
    ];

    const [docs, cardsData] = await Promise.all(urls.map(url => this.$axios.$get(url)));

    commit('setDocsInfo', docs);
    commit('setCardsData', cardsData);
  },
};

