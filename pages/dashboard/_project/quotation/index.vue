<template>
  <div class="quotation">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">{{nameProject}}</nuxt-link> -
          <span>Cotizar</span>
        </h2>
        <div class="num-apartment">{{numApartment}}</div>
      </template>
      <div slot="section" class="section" v-loading="loading" element-spinner-color="red">
        <div class="section_one">
          <div class="col left">
            <building @change="getFlat" />
            <div>
              <div class="group">
                <div class="btn_flat" :class="{btn_select: selected == index, btn_disabled: units.estado == 0 }" @click="select({item, index})" v-for="(item, index) in units" :key="index">{{item.numero}}</div>
                <!-- <div class="btn_flat" @click="select(index)" v-for="(item, index) in flats" :key="index">{{item.piso}}</div> -->
              </div>
            </div>
          </div>
          <div class="col right" v-if="currentUnit">
            <div class="container-img">
              <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                  <img class="plano" :src="`http://administrador.app-encord.com/imagenes_unidades/${currentUnit.imagenes[0].imagen}`">
                </swiper-slide>
                <swiper-slide>
                  <div class="info">
                    <h3 class="title">Title</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam accusamus explicabo deserunt obcaecati doloremque maxime, aliquam quisquam.</p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>

          <div class="col right" v-else>
            <div class="container-img">
              <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                  <img class="plano" :src="`http://administrador.app-encord.com/imagenes_pisos/${flatImage}`">
                </swiper-slide>
                <swiper-slide>
                  <div class="info">
                    <h3 class="title">Title</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam accusamus explicabo deserunt obcaecati doloremque maxime, aliquam quisquam.</p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>

        </div>
        <nuxt-link class="btn_link" @click.native="sentNum" :to="`${$route.path}/${numFlat}`">Siguiente <i class="icon-right-open-big"></i></nuxt-link>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
import Building from '~/components/building'
import axios from 'axios'
import debounce from 'debounce'

export default {
  components: {
    Card,
    Building
  },
  created() {
    const config = {
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjEzM2U2YWU4MDVjMTM4YTlkZmVhZjYwNzQyNWE4NDU5YjE3YjE0NGRlNjA2Mzk5MDE1NjQ0YTMwNjlmMTI2YWU3NmZhOGQxOWIyYzU5YzY4In0.eyJhdWQiOiIyIiwianRpIjoiMTMzZTZhZTgwNWMxMzhhOWRmZWFmNjA3NDI1YTg0NTliMTdiMTQ0ZGU2MDYzOTkwMTU2NDRhMzA2OWYxMjZhZTc2ZmE4ZDE5YjJjNTljNjgiLCJpYXQiOjE1NDIyOTM1NzgsIm5iZiI6MTU0MjI5MzU3OCwiZXhwIjoxNTQzNTg5NTc3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.k9M0E6XuYlVB-BlsgMO2DOwF6Jt-R4mAWgKOsj_0GdUwjIjJC3we1Fs2q2HkqKlpcIUeuU2UQ7lQPKWyLX1sspxJVIo0hrn_qhs2cafyTqKnFlq5ofQB9F79Mi0NwhHAfS-7IcSGS25c22ER4SMdAqNTeg44oei79xYISCFBUOsmzV690n7r83bG8NI4lS7qmnrzmogQu2dzx4GF6rzFzKzmUxedTAIPz2I9Wdk2JvSqgKEZtrJ6MOfwFiaJvnJfLo_cpMXTZ06MFi4R-VwfV87t_t678IU6ACZ08nwV5pGTPfDbBV6-SF--uW_u6128tcnFqhT05Q336EVhCjhoNRbY34BEh3lot3y3Pio-areh1bYQA_XcUfAbkqgnFvEfMK3IQz9dTWj519o1UqLnE0y6gPOLjJwLYGQejwFUnWsi-4jMyDvZA_gwsNqrkutPSMAc_DVQ-acoRj0ybzVcXmwyhzlQJoJbKaDhTKpL_sMdJbi1c7FvDSpnlEue0aba1bhGZn_DIO61iNQRyZtinvUULgJWHUh8ICfYzRfVnN4BVswc9XUTF_elkOuF1Y4_H6iY9eI45Ca95mjks8xevo7CdQl5gDaIBBJrZFsdKkhiAI6NiaHeS3LUQ4trNAOUeRXV0ogI-fGP5UG5GpfSJ6JvFasA3ta8o5xC7pfV2TM',
        'content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': true
      }
    }
    axios
      .get(
        `http://administrador.app-encord.com/api/proyectos/${
          this.changeIdProject
        }/pisos`,
        config
      )
      .then(response => {
        this.flats = response.data.data.sort(
          (a, b) => parseInt(a.piso) - parseInt(b.piso)
        )
        this.$store.commit(
          'SET_SENTFLATS',
          response.data.data.sort((a, b) => parseInt(a.piso) - parseInt(b.piso))
        )
        this.getUnits()
      })
      .catch(e => {
        console.log(e)
      })
  },
  computed: {
    showModal: {
      get() {
        return this.$store.state.showModal
      },
      set(newValue) {
        this.$store.commit('CHANGE_MODAL_STATE', newValue)
      }
    },

    flatImage() {
      if (this.$store.state.sentFlats[this.numFlat - 1]) {
        return this.$store.state.sentFlats[this.numFlat - 1].imagen
      }
    },
    units: {
      get() {
        return this.$store.state.apartments
      },
      set(newValue) {
        this.$store.commit('SET_APARTMENTS', newValue)
      }
    },
    numApartment() {
      if (this.units.length) {
        return this.units[this.selected].numero
      }
      return ' '
    },
    nameProject() {
      return this.$store.state.sentInfo.nombre
    },
    changeIdProject() {
      return this.$store.state.sentInfo.id
    },
    currentFlat() {
      return this.flats.find(flat => flat.piso == this.numFlat) || {id: 0}
    }
  },
  data() {
    return {
      loading: true,
      selected: 0,
      numFlat: 1,
      radio: '1',
      url: '',
      currentUnit: null,
      flats: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        width: '350',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    select({item, index}) {
      this.selected = index
      this.currentUnit = item
    },
    getFlat(value) {
      this.units = []
      this.numFlat = value
      this.getUnits()
      this.currentUnit = null
      this.selected = 0
    },
    getUnits: debounce(function(e) {
      this.loading = true
      const config = {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjEzM2U2YWU4MDVjMTM4YTlkZmVhZjYwNzQyNWE4NDU5YjE3YjE0NGRlNjA2Mzk5MDE1NjQ0YTMwNjlmMTI2YWU3NmZhOGQxOWIyYzU5YzY4In0.eyJhdWQiOiIyIiwianRpIjoiMTMzZTZhZTgwNWMxMzhhOWRmZWFmNjA3NDI1YTg0NTliMTdiMTQ0ZGU2MDYzOTkwMTU2NDRhMzA2OWYxMjZhZTc2ZmE4ZDE5YjJjNTljNjgiLCJpYXQiOjE1NDIyOTM1NzgsIm5iZiI6MTU0MjI5MzU3OCwiZXhwIjoxNTQzNTg5NTc3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.k9M0E6XuYlVB-BlsgMO2DOwF6Jt-R4mAWgKOsj_0GdUwjIjJC3we1Fs2q2HkqKlpcIUeuU2UQ7lQPKWyLX1sspxJVIo0hrn_qhs2cafyTqKnFlq5ofQB9F79Mi0NwhHAfS-7IcSGS25c22ER4SMdAqNTeg44oei79xYISCFBUOsmzV690n7r83bG8NI4lS7qmnrzmogQu2dzx4GF6rzFzKzmUxedTAIPz2I9Wdk2JvSqgKEZtrJ6MOfwFiaJvnJfLo_cpMXTZ06MFi4R-VwfV87t_t678IU6ACZ08nwV5pGTPfDbBV6-SF--uW_u6128tcnFqhT05Q336EVhCjhoNRbY34BEh3lot3y3Pio-areh1bYQA_XcUfAbkqgnFvEfMK3IQz9dTWj519o1UqLnE0y6gPOLjJwLYGQejwFUnWsi-4jMyDvZA_gwsNqrkutPSMAc_DVQ-acoRj0ybzVcXmwyhzlQJoJbKaDhTKpL_sMdJbi1c7FvDSpnlEue0aba1bhGZn_DIO61iNQRyZtinvUULgJWHUh8ICfYzRfVnN4BVswc9XUTF_elkOuF1Y4_H6iY9eI45Ca95mjks8xevo7CdQl5gDaIBBJrZFsdKkhiAI6NiaHeS3LUQ4trNAOUeRXV0ogI-fGP5UG5GpfSJ6JvFasA3ta8o5xC7pfV2TM',
          'content-type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': true
        }
      }
      axios
        .get(
          `http://administrador.app-encord.com/api/pisos/${
            this.currentFlat.id
          }/unidades`,
          config
        )
        .then(response => {
          this.units = response.data.data
          this.$store.commit('SET_APARTMENTS', response.data.data)
          this.loading = false
        })
    }, 800),
    sentNum() {
      this.$store.commit('SET_SENTNUM', this.units[this.selected].numero)
      this.$store.commit('SET_CURRENTUNIT', this.currentUnit)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #98c253;
}
.quotation {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;
  padding: 20px 20px;
}
h2 {
  font-weight: 400;
  color: #98c253;
}
h2 span {
  font-size: 18px;
  color: #aaa;
}
h4 {
  text-align: center;
}
.section_one {
  display: flex;
}
.left {
  flex: 0.5;
}
.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
}
.circle-icon > i {
  font-size: 40px;
  color: #98c253;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  padding: 20px 40px 0;
  display: flex;
  flex-direction: column;
}
.group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 10px;
  margin-top: 20px;
}
.btn_flat {
  background-color: #eee;
  padding: 5px 0;
  border-radius: 6px;
  color: #666;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.btn_select {
  background-color: #98c253;
  color: #fff;
}
.btn_disabled {
  background-color: rgb(255, 215, 128);
  color: #666;
  cursor: initial;
  pointer-events: none;
}
.plano {
  max-width: 350px;
  width: 100%;
  border-radius: 20px;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn_link {
  width: 120px;
  align-self: flex-end;
  cursor: pointer;
  margin: 20px 30px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.btn_link > i {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding-left: 10px;
}
.info {
  position: absolute;
}
.swiper-wrapper {
  max-width: 350px;
}
.title {
  color: #1c2a42;
  font-weight: 600;
}
.description {
  line-height: 1.4;
  font-size: 16px;
  color: rgba(28, 42, 66, 0.733);
}
.num-apartment {
  background-color: #98c253;
  color: #fff;
  padding: 5px 10px;
  font-weight: 600;
  border-radius: 6px;
}
/* .Related {
  max-width: 100%;
  height: 450px;
}
.Related img {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
</style>
