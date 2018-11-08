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
      <div slot="section" class="section">
        <div class="section_one">
          <div class="col left">
            <building @change="getFlat" />
            <div>
              <div class="group">
                <!-- <div class="btn_flat" :class="{btn_select: selected == index, btn_disabled: flats[0][index].estado == 0 }" @click="select(index)" v-for="(item, index) in flats" :key="index">{{item.piso}}</div> -->
                <!-- <div class="btn_flat" @click="select(index)" v-for="(item, index) in flats" :key="index">{{item.piso}}</div> -->
              </div>
            </div>
          </div>
          <div class="col right">
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
        <!-- <nuxt-link class="btn_link" @click.native="sentNum" :to="`${$route.path}/${numFlat}`">Siguiente <i class="icon-right-open-big"></i></nuxt-link> -->
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
import Building from '~/components/building'
import axios from 'axios'

export default {
  components: {
    Card,
    Building
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
    // numApartment() {
    //   return this.flats[this.numFlat - 1][this.selected].piso
    // },

    // flats() {
    //   return this.$store.state.sentFlats
    // },
    nameProject() {
      return this.$store.state.sentInfo.nombre
    },
    changeIdProject() {
      return this.$store.state.sentInfo.id
    }
  },
  data() {
    return {
      selected: 0,
      numFlat: 1,
      radio: '1',
      url: '',
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
    select(value) {
      this.selected = value
    },
    getFlat(value) {
      this.numFlat = value
    }
    // sentNum() {
    //   this.$store.commit(
    //     'SET_SENTNUM',
    //     this.flats[this.numFlat - 1][this.selected].piso
    //   )
    // }
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
</style>
