<template>
  <div class="quotation">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">Aria Condominio</nuxt-link> -
          <span>Cotizar</span>
        </h2>
        <div class="num-apartment">{{numApartment}}</div>
      </template>
      <div slot="section" class="section">
        <div class="section_one">
          <div class="col left">
            <building :limit="flats.length" @change="getFlat" />
            <div>
              <div class="group">
                <div class="btn_flat" :class="{btn_select: selected == index, btn_disabled: flats[numFlat-1][index].state == 'disabled' }" @click="select(index)" v-for="(item, index) in flats[numFlat - 1]" :key="index">{{item.num}}</div>
              </div>
            </div>
          </div>
          <div class="col right">
            <div class="container-img">
              <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                  <img class="plano" src="../../../../assets/plano.jpg">
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

export default {
  components: {
    Card,
    Building
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
    numApartment() {
      return this.flats[this.numFlat - 1][this.selected].num
    }
  },
  data() {
    return {
      selected: 0,
      numFlat: 1,
      radio: '1',
      url: '',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        width: '350',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      flats: [
        [
          {
            num: 101,
            state: 'available'
          },
          {
            num: 102,
            state: 'available'
          },
          {
            num: 103,
            state: 'available'
          },
          {
            num: 104,
            state: 'available'
          },
          {
            num: 105,
            state: 'available'
          },
          {
            num: 106,
            state: 'disabled'
          }
        ],
        [
          {
            num: 201,
            state: 'available'
          },
          {
            num: 202,
            state: 'disabled'
          },
          {
            num: 203,
            state: 'available'
          },
          {
            num: 204,
            state: 'available'
          },
          {
            num: 205,
            state: 'disabled'
          },
          {
            num: 206,
            state: 'available'
          }
        ],
        [
          {
            num: 301,
            state: 'available'
          },
          {
            num: 302,
            state: 'available'
          },
          {
            num: 303,
            state: 'available'
          },
          {
            num: 304,
            state: 'available'
          },
          {
            num: 305,
            state: 'disabled'
          },
          {
            num: 306,
            state: 'available'
          }
        ],
        [
          {
            num: 401,
            state: 'available'
          },
          {
            num: 402,
            state: 'available'
          },
          {
            num: 403,
            state: 'available'
          },
          {
            num: 404,
            state: 'disabled'
          },
          {
            num: 405,
            state: 'disabled'
          },
          {
            num: 406,
            state: 'available'
          }
        ],
        [
          {
            num: 501,
            state: 'disabled'
          },
          {
            num: 502,
            state: 'disabled'
          },
          {
            num: 503,
            state: 'available'
          },
          {
            num: 504,
            state: 'available'
          },
          {
            num: 505,
            state: 'disabled'
          },
          {
            num: 506,
            state: 'available'
          }
        ]
      ]
    }
  },
  methods: {
    select(value) {
      this.selected = value
    },
    getFlat(value) {
      this.numFlat = value
    },
    sentNum() {
      console.log('ashdgfsdf')
      this.$store.commit(
        'SET_SENTNUM',
        this.flats[this.numFlat - 1][this.selected].num
      )
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
.container-img {
  position: relative;
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
