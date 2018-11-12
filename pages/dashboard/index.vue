<template>
  <div class="index">
    <card>
      <div slot="header" class="header">
        <h2>Proyectos</h2>
        <search v-model="search" />
      </div>
      <div slot="section" class="section">
        <nuxt-link :to="`/dashboard/${item.nombre.replace(/ /g, '_')}`" @click.native="sentInfo(item.id)" v-for="item in projects" :key="item.id" v-show="!search">
          <div class="project">
            <h3 class="title">{{item.nombre.toLowerCase()}}</h3>
            <p class="subhead">{{item.ubicacion}}</p>
            <p class="description" v-html="item.descripcion.substr(0, 85).toLowerCase()"></p>
            <div class="container-img">
              <img :src="`${urlEncord}imagenes_proyectos/${item.logo}`" alt="">
            </div>
          </div>
        </nuxt-link>
        <nuxt-link :to="`/dashboard/${item.nombre.replace(/ /g, '_')}`" @click.native="sentInfo(item.id)" v-for="item in newList" :key="item.id" v-hide>
          <div class="project">
            <h3 class="title">{{item.nombre.toLowerCase()}}</h3>
            <p class="subhead">{{item.ubicacion}}</p>
            <p class="description" v-html="item.descripcion.substr(0, 85).toLowerCase()"></p>
            <div class="container-img">
              <img :src="`${urlEncord}/imagenes_proyectos/${item.logo}`" alt="">
            </div>
          </div>
        </nuxt-link>
        <div class="show" v-show="!newList.length && search != ''">
          <h4>No se encontraron resultados</h4>
          <img src="@/assets/whoops.jpg" alt="">
        </div>
      </div>
    </card>
    <!-- <nuxt-link to="/dashboard/89">Condominio 89</nuxt-link>
    <nuxt-link to="/dashboard/6">Condominio 6</nuxt-link> -->
  </div>
</template>

<script>
import Card from '../../components/card'
import ListCard from '../../components/list-card'
import ImgCard from '../../components/img-card'
import Search from '../../components/search'
import axios from 'axios'

export default {
  components: {
    Card,
    ListCard,
    ImgCard,
    Search
  },
  created() {
    const config = {
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc2MDQ2YmNmMmJiMDljNTJiN2Q3ZjRlYmM3MGU5Zjc2ZTU4MTBjYWE5NmI2NjI4NDJlNGJlYjQ1NmQ0YTA5M2ExNzc3YWQyNTUyM2FhMjllIn0.eyJhdWQiOiIyIiwianRpIjoiNzYwNDZiY2YyYmIwOWM1MmI3ZDdmNGViYzcwZTlmNzZlNTgxMGNhYTk2YjY2Mjg0MmU0YmViNDU2ZDRhMDkzYTE3NzdhZDI1NTIzYWEyOWUiLCJpYXQiOjE1NDE3OTk5NTAsIm5iZiI6MTU0MTc5OTk1MCwiZXhwIjoxNTQzMDk1OTUwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ju_IkJp65C7djqPTRlM1r4F3G_mqHcseCVzCoExr0yJkiq9goDWR9yrRv2mBTN0l9LLuB2HzOV1OUdWDlk26pMDC8vxxvx_wAu68kwsPixcg5fW1gRfAhjCdLcD_m5uHigHFckK1dluY5E8ujjTo2dHubtnsrRSOQXYd6EGxI1r2fuzSQuzmdoysWYqSf4gyyfUamcggdLNzIUtCc4Gv95Q-NzCTZc4auO7Rsi6-VN_-T6LoHbzYwlOmP8r4eD-83e4oP7PhynqakhiO1i24nG1F6iUqzj7lrhgBiSLk-cuF38xL73XNBcR77BH_LztAVPYzdrkSRH76P4285O49Zg7loMmr0yQ6O8_AGul5wcJdZi-5Ph2r1gZ8ycRQE7k7It9uzKMjWsgSsaUPWl0lcsxiYWVIw6QhC7bUzyPdeJ_QSWXXiNfTzueTAqwBpTXBuzPTqDLFB8HCkBN-A57M2AE6heO5r1wGNu0WN5kPvB2BQOgus7qLiyPjI-BwFL_xiHmpZWxURYfB5pv3hd5TmMpi97qQEIKC5yRdGnm9rpvLYhHbnFFVnNRSL9KpW3cDUKBYpyVfWGacqgSLAI_n434Uozoj6WlD93MsKqjsC1Y-DnrYBYEti42VtQSd4vx6QOJYluiir_HQxazMTAeq2aDy79eRrSB0Hm7GYHtmVHQ',
        'content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': true
      }
    }

    axios
      .get('http://administrador.app-encord.com/api/proyectos', config)
      .then(response => {
        this.projects = response.data.data.filter(
          project => project.estado == 1
        )
      })
      .catch(e => {
        console.log(e)
      })
  },
  data() {
    return {
      fuse: null,
      urlEncord: 'http://administrador.app-encord.com/',
      projects: [],
      search: '',
      newList: [],
      result: [],
      options: {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['nombre', 'ubicacion']
      }
    }
  },
  methods: {
    sentInfo(id) {
      this.$store.commit(
        'SET_SENTINFO',
        this.projects.find(project => project.id === id)
      )
    }
  },
  watch: {
    search(value) {
      this.$search(value, this.projects, this.options).then(results => {
        this.newList = results
      })
    }
  }
}
</script>

<style scoped>
.index {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 40px 0px;
  height: 100vh;
  overflow: auto;
}
h2 {
  font-weight: 400;
  color: #98c253;
}
.section {
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
.section a {
  text-decoration: none;
}
.project {
  max-width: 200px;
  /* border: 1px solid #eee; */
  box-shadow: 0px 2px 6px 2px rgba(28, 42, 66, 0.089);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 15px 10px;
  cursor: pointer;
  text-decoration: none !important;
}
.container-img {
  width: 100%;
  height: 80px;
  margin-top: 10px;
}
.project img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
}
.title {
  font-size: 14px;
  text-transform: capitalize;
  color: #1c2a42;
  line-height: 1;
}
.subhead {
  font-size: 12px;
  font-weight: 600;
  color: rgba(28, 42, 66, 0.718);
}
.description {
  font-style: normal;
  margin: 5px 0;
  font-size: 12px;
  line-height: 1.2;
  color: rgba(28, 42, 66, 0.718);
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.show {
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-column: 1 / span 3;
}
.show > h4 {
  font-size: 24px;
  color: #bbb;
  font-weight: 300;
  line-height: 1;
}
.show > img {
  width: 100%;
}
</style>
