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
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM2Nzc4ZDIwZjZjMzZkYTljNzg5YTM2YTdhNzJhMGUyMDFmZGNhNzM4ZGQwYjVlZTIwMjlhZjJlMmY5NTEyMzg1NzZlOWFiN2ZlNmJmNDhlIn0.eyJhdWQiOiIyIiwianRpIjoiMzY3NzhkMjBmNmMzNmRhOWM3ODlhMzZhN2E3MmEwZTIwMWZkY2E3MzhkZDBiNWVlMjAyOWFmMmUyZjk1MTIzODU3NmU5YWI3ZmU2YmY0OGUiLCJpYXQiOjE1NDA1MDA4OTgsIm5iZiI6MTU0MDUwMDg5OCwiZXhwIjoxNTQxNzk2ODk4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Rxyq3SAJwykSbpbncwcDpQ9lDAlpeSTtXoesCv4ZFXreTUo5XVSUYSU-KpgnaJ09oSrIEQLZ7NjXWVHFtllNCiy4AHPD4zYbqFUtEFesL-SoWrJX3pBSMTXNvrKTLAlBgIq3ffL_RtolRbibPcRz35YO1Y3fm27zOolPFRHVbqh_jCOHeFRdpfjuQ6B8hWoR-An7B7KKcLW-SckTpBf94Tt1BstXOtJWCT3y0i6ZE0lLmRateQZ12mqdcjqO5HKqWw8JuE_GsmqAUWGhHX7fqQ2loqqzU74MgZQNUUxkcu9hNacx-IaOkN3gR3lGjaPe8hXtefMq97UmkZDjCLVOm6O42ePY5R6hrEzmjzaFF2NUpzJ_88U7jB_H0eI3pDvBQs7Idijwk2NQJe2YGvZXI4urC44hSZYr69-Ub-XJtV45Ki4qgRkHRCGA-uuiXfq1u2e2Dv1MQG7_dVsKPV_eyleSni9s-Y2gOHeH0eoZ9viUBka9o7tsfAtMFKN0R1yqXbJnPD4DcpR4l60VLQQbMMC2NZW5AFq4443HSm3wevYYHuHrxZ7enPMA3sSegxgK2zTPUZxJE5SMTnRS1H0eY_jzKWWDwnQghfLy_4UkxFBMmcBLwlCBE4bRzxj6RZFKKSS1j6LKrhSBKWO9GLIXlTqe5h69T6JMbz2aTjuswxY',
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
