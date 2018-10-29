import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      infoContract: null,
      showModal: false,
      sentNum: '',
      sentInfo: {}
    }),
    mutations: {
      CHANGE_MODAL_STATE(state, value) {
        state.showModal = value
      },
      SET_SENTNUM(state, value) {
        state.sentNum = value
      },
      SET_SENTINFO(state, value) {
        state.sentInfo = value
      }
    }
  })
}

export default createStore
