import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state: {
    search: 'a',
  },
  mutations: {
    searchInApi (state: any, search: string) {
      state.search = search;
    }
  }
})