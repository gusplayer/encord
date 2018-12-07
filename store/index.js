import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: () => ({
    axiosConfig: {
      headers: {
        Authorization: Cookies.get('auth._token.local'),
        'content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': true
      }
    },
    axiosUrl: 'https://administrador.app-encord.com',
    infoContract: null,
    showModal: false,
    sentNum: '',
    sentInfo: {},
    sentFlats: [],
    apartments: [],
    authUser: null,
    projectsData: [],
    typesContractsData: [],
    listContractsData: [],
    listQuotationsData: [],
    listActionsData: [],
    currentProject: null,
    currentUnit: null,
    currentCustomer: null,
    currentFinishes: [],
    customersData: null,
    actionsData: null,
    deparmentsData: null,
    dataContract: {},
    profileInfo: {},
    imagenModal: ''
  }),
  mutations: {
    SET_TOKEN(state) {
      state.axiosConfig.headers.Authorization = Cookies.get('auth._token.local')
    },
    CHANGE_MODAL_STATE(state, value) {
      state.showModal = value
    },
    SET_SENTNUM(state, value) {
      state.sentNum = value
    },
    SET_SENTINFO(state, value) {
      state.sentInfo = value
    },
    SET_CURRENTPROJECT(state, value) {
      state.currentProject = value
    },
    SET_SENTFLATS(state, value) {
      state.sentFlats = value
    },
    SET_APARTMENTS(state, value) {
      state.apartments = value
    },
    SET_USER: function(state, user) {
      state.authUser = user
    },
    SET_PROJECTS(state, value) {
      state.projectsData = value
    },
    SET_IMGMODAL(state, value) {
      state.imagenModal = value
    },
    SET_CURRENTUNIT(state, value) {
      state.currentUnit = value
    },
    SET_CUSTOMERS(state, value) {
      state.customersData = value
    },
    SET_TYPESCONTRATCS(state, value) {
      state.typesContractsData = value
    },
    SET_LISTCONTRATCS(state, value) {
      state.listContractsData = value
    },
    SET_LISTQUOTATIONS(state, value) {
      state.listQuotationsData = value
    },
    SET_LISTACTIONS(state, value) {
      state.listActionsData = value
    },
    SET_ACTIONS(state, value) {
      state.actionsData = value
    },
    SET_CURRENTCUSTOMER(state, value) {
      state.currentCustomer = value
    },
    SET_CURRENTFINISHES(state, value) {
      state.currentFinishes = value
    },
    SET_DEPARTMENTS(state, value) {
      state.deparmentsData = value
    },
    SET_DATACONTRACT(state, value) {
      state.dataContract = value
    },
    SET_PROFILEINFO(state, value) {
      state.profileInfo = value
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
    loggedInUser(state) {
      return state.auth.user
    }
  },
  actions: {
    GET_PROJECTS({ state, commit }) {
      axios
        .get(`${state.axiosUrl}/api/proyectos`, state.axiosConfig)
        .then(response => {
          commit(
            'SET_PROJECTS',
            response.data.data.filter(project => project.estado == 1)
          )
        })
        .catch(e => {
          console.log(e)
        })
    },
    async GET_FLOORS({ state, commit }, id) {
      const response = await axios.get(
        `${state.axiosUrl}/api/proyectos/${id}/pisos`,
        state.axiosConfig
      )
      commit(
        'SET_SENTFLATS',
        response.data.data.sort((a, b) => parseInt(a.piso) - parseInt(b.piso))
      )
    },
    async GET_UNITS({ state, commit }, id) {
      const response = await axios.get(
        `${state.axiosUrl}/api/pisos/${id}/unidades`,
        state.axiosConfig
      )
      commit(
        'SET_APARTMENTS',
        response.data.data.sort(
          (a, b) => parseInt(a.numero) - parseInt(b.numero)
        )
      )
    },
    GET_CUSTOMERS({ state, commit }) {
      axios
        .get(`${state.axiosUrl}/api/clientes`, state.axiosConfig)
        .then(response => {
          commit('SET_CUSTOMERS', response.data.clientes)
        })
        .catch(e => {
          console.log(e)
        })
    },
    async CREATE_CUSTOMER({ state }, customer) {
      await axios.post(
        `${state.axiosUrl}/api/clientes`,
        customer,
        state.axiosConfig
      )
    },
    async CREATE_CONTRACT({ state }, contract) {
      await axios.post(
        `${state.axiosUrl}/api/contratos`,
        contract,
        state.axiosConfig
      )
    },
    async CREATE_QUOTATION({ state }, quotation) {
      await axios.post(
        `${state.axiosUrl}/api/cotizacion`,
        quotation,
        state.axiosConfig
      )
    },
    GET_ACTIONS_BY_CUSTOMER({ state, commit }, customer_id) {
      axios
        .get(`${state.axiosUrl}/api/acciones/${customer_id}`, state.axiosConfig)
        .then(response => {
          commit('SET_ACTIONS', response.data.cliente.acciones)
          commit('SET_CURRENTCUSTOMER', response.data.cliente)
        })
        .catch(e => {
          console.log(e)
        })
    },
    async CREATE_ACTION({ state }, action) {
      await axios.post(
        `${state.axiosUrl}/api/acciones`,
        action,
        state.axiosConfig
      )
    },
    GET_DEPARMENTSWITHCITIES({ state, commit }) {
      axios
        .get(`${state.axiosUrl}/api/departamentos`, state.axiosConfig)
        .then(response => {
          // commit('SET_CITIES', response.data.data.map(depart => depart.ciudades))
          commit('SET_DEPARTMENTS', response.data.data)
        })
        .catch(e => {
          console.log(e)
        })
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
    async GET_TYPESCONTRACTS({ state, commit }) {
      axios
        .get(`${state.axiosUrl}/api/formatos-contratos`, state.axiosConfig)
        .then(response => {
          commit('SET_TYPESCONTRATCS', response.data.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    async GET_PROFILEINFO({ state, commit }) {
      axios
        .get(`${state.axiosUrl}/api/mi-perfil`, state.axiosConfig)
        .then(response => {
          commit('SET_PROFILEINFO', response.data.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    async GET_LISTCONTRACTS({ state, commit }) {
      axios
        .get(`${state.axiosUrl}/api/contratos`, state.axiosConfig)
        .then(response => {
          let contracts = response.data.data.map(contract => {
            contract.proyecto = state.projectsData.find(
              project => project.id == contract.proyectos_id
            )
            contract.forma_pago = JSON.parse(contract.forma_pago)
            contract.acabados = JSON.parse(contract.acabados)
            contract.separacion = JSON.parse(contract.separacion)
            return contract
          })
          commit('SET_LISTCONTRATCS', contracts)
        })
        .catch(e => {
          console.log(e)
        })
    },
    async GET_LISTQUOTATIONS({ state, commit }) {
      axios
        .get(`${state.axiosUrl}/api/cotizacion`, state.axiosConfig)
        .then(response => {
          let quotations = response.data.data.map(quotation => {
            quotation.proyecto = state.projectsData.find(
              project => project.id == quotation.proyectos_id
            )
            quotation.acabados = JSON.parse(quotation.acabados)
            return quotation
          })
          commit('SET_LISTQUOTATIONS', quotations)
        })
        .catch(e => {
          console.log(e)
        })
    },
    async GET_LISTACTIONS({ state, commit }) {
      axios
        .get(`${state.axiosUrl}/api/acciones/listado`, state.axiosConfig)
        .then(response => {
          let actions = response.data.data.map(action => {
            action.proyecto = state.projectsData.find(
              project => project.id == action.proyectos_id
            )
            return action
          })
          commit('SET_LISTACTIONS', actions)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
