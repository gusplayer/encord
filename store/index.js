import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      infoContract: null,
      showModal: false,
      sentNum: ''
    }),
    mutations: {
      CHANGE_MODAL_STATE(state, value) {
        state.showModal = value
      },
      SET_SENTNUM(state, value) {
        state.sentNum = value
      }
    }
  })
}

export default createStore
