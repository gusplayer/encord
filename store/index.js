import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      infoContract: null,
      showModal: false,
      sentNum: '',
      sentInfo: {},
      sentFlats: [],
      apartments: [],
      authUser: null,
      projectsData: [],
      currentUnit: null
    }),
    mutations: {
      CHANGE_MODAL_STATE(state, value) {
        state.showModal = value;
      },
      SET_SENTNUM(state, value) {
        state.sentNum = value;
      },
      SET_SENTINFO(state, value) {
        state.sentInfo = value;
      },
      SET_SENTFLATS(state, value) {
        state.sentFlats = value;
      },
      SET_APARTMENTS(state, value) {
        state.apartments = value;
      },
      SET_USER: function(state, user) {
        state.authUser = user;
      },
      SET_PROJECTS(state, value) {
        state.projectsData = value;
      },
      SET_CURRENTUNIT(state, value) {
        state.currentUnit = value;
      }
    },
    actions: {
      GET_PROJECTS({ commit }) {
        const config = {
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc2MDQ2YmNmMmJiMDljNTJiN2Q3ZjRlYmM3MGU5Zjc2ZTU4MTBjYWE5NmI2NjI4NDJlNGJlYjQ1NmQ0YTA5M2ExNzc3YWQyNTUyM2FhMjllIn0.eyJhdWQiOiIyIiwianRpIjoiNzYwNDZiY2YyYmIwOWM1MmI3ZDdmNGViYzcwZTlmNzZlNTgxMGNhYTk2YjY2Mjg0MmU0YmViNDU2ZDRhMDkzYTE3NzdhZDI1NTIzYWEyOWUiLCJpYXQiOjE1NDE3OTk5NTAsIm5iZiI6MTU0MTc5OTk1MCwiZXhwIjoxNTQzMDk1OTUwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ju_IkJp65C7djqPTRlM1r4F3G_mqHcseCVzCoExr0yJkiq9goDWR9yrRv2mBTN0l9LLuB2HzOV1OUdWDlk26pMDC8vxxvx_wAu68kwsPixcg5fW1gRfAhjCdLcD_m5uHigHFckK1dluY5E8ujjTo2dHubtnsrRSOQXYd6EGxI1r2fuzSQuzmdoysWYqSf4gyyfUamcggdLNzIUtCc4Gv95Q-NzCTZc4auO7Rsi6-VN_-T6LoHbzYwlOmP8r4eD-83e4oP7PhynqakhiO1i24nG1F6iUqzj7lrhgBiSLk-cuF38xL73XNBcR77BH_LztAVPYzdrkSRH76P4285O49Zg7loMmr0yQ6O8_AGul5wcJdZi-5Ph2r1gZ8ycRQE7k7It9uzKMjWsgSsaUPWl0lcsxiYWVIw6QhC7bUzyPdeJ_QSWXXiNfTzueTAqwBpTXBuzPTqDLFB8HCkBN-A57M2AE6heO5r1wGNu0WN5kPvB2BQOgus7qLiyPjI-BwFL_xiHmpZWxURYfB5pv3hd5TmMpi97qQEIKC5yRdGnm9rpvLYhHbnFFVnNRSL9KpW3cDUKBYpyVfWGacqgSLAI_n434Uozoj6WlD93MsKqjsC1Y-DnrYBYEti42VtQSd4vx6QOJYluiir_HQxazMTAeq2aDy79eRrSB0Hm7GYHtmVHQ',
            'content-type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': true
          }
        };

        axios
          .get('http://administrador.app-encord.com/api/proyectos', config)
          .then(response => {
            commit(
              'SET_PROJECTS',
              response.data.data.filter(project => project.estado == 1)
            );
          })
          .catch(e => {
            console.log(e);
          });
      },
      nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.authUser) {
          commit('SET_USER', req.session.authUser);
        }
      },
      async login({ commit }, { email, password }) {
        try {
          const { data } = await axios.post('/auth/login', {
            email,
            password
          });
          commit('SET_USER', data);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            throw new Error('Bad credentials');
          }
          throw error;
        }
      },

      async logout({ commit }) {
        await axios.post('/auth/logout');
        commit('SET_USER', null);
      }
    }
  });
};

export default createStore;
