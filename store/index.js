import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      infoContract: null,
      showModal: false,
      sentNum: '',
      sentInfo: {},
      sentFlats: {},
      authUser: null
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
      },
      SET_SENTFLATS(state, value) {
        state.sentFlats = value
      },
      SET_USER: function(state, user) {
        state.authUser = user
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.authUser) {
          commit('SET_USER', req.session.authUser)
        }
      },
      async login({ commit }, { email, password }) {
        try {
          const { data } = await axios.post('/auth/login', {
            email,
            password
          })
          commit('SET_USER', data)
        } catch (error) {
          if (error.response && error.response.status === 401) {
            throw new Error('Bad credentials')
          }
          throw error
        }
      },

      async logout({ commit }) {
        await axios.post('/auth/logout')
        commit('SET_USER', null)
      }
    }
  })
}

export default createStore
