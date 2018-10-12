import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      infoContract: null
    })
  })
}

export default createStore
