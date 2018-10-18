import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      infoContract: null,
      showModal: false
    }),
    mutations: {
      CHANGE_MODAL_STATE(state, value) {
        state.showModal = value
      }
    }
  })
}

export default createStore
