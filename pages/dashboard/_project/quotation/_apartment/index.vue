<template>
  <!-- <div>User {{ $route.params.id }}</div> -->
  <div class="apartment">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">Aria Condominio </nuxt-link>-
          <nuxt-link :to="`/dashboard/${$route.params.project}/quotation`"> Cotizar </nuxt-link>-
          <nuxt-link :to="`/dashboard/${$route.params.project}/quotation/${$route.params.apartment}`"> Acabados </nuxt-link>
          <!-- <a>/{{ $route.params.id }}</a> -->
        </h2>
        <div class="num-apartment">{{numApartment}}</div>
      </template>
      <div slot="section" class="section">
        <!-- <div class="total">Total: $505.200.000</div> -->
        <template>
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <bathrooms @change="selectImagen" />
            </swiper-slide>
            <swiper-slide>
              <floors @change="selectImagen" />
            </swiper-slide>
          </swiper>
          <div class="tag"> <span class="bold">Valor Total: </span><span class="total">1.000.000</span></div>

          <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">custom header</h3>
            <img class="img_modal" slot="body" :src="img" alt="">
          </modal>
        </template>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
import Bathrooms from '~/components/section-bathrooms'
import Floors from '~/components/section-floors'
import Modal from '~/components/modal'
export default {
  components: {
    Card,
    Bathrooms,
    Modal,
    Floors
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
      return this.$store.state.sentNum
    }
  },
  data() {
    return {
      img: '',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        width: '600',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    selectCard(value) {
      this.card = value
    },
    selectImagen(value) {
      this.img = value
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #aaa;
  font-size: 18px;
}
.apartment {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
a:first-child {
  color: #98c253;
  font-size: 24px;
}
h2 {
  font-weight: 400;
}
h4 {
  text-align: center;
}
.container {
  display: flex;
  font-family: 'Dosis', Helvetica, Arial, sans-serif;
}
.col {
  min-height: 315px;
}
.left {
  flex: 0.5;
}
img {
  max-height: 600px;
  max-width: 750px;
}
.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  border-left: 2px solid #98c253;
  margin-left: 20px;
}
ul {
  list-style: none;
}
li {
  font-size: 22px;
  margin: 12px 0;
  color: #606468;
  padding: 5px 10px;
  background-color: #eee;
  cursor: pointer;
  border-radius: 4px;
}
.select {
  background-color: #98c253;
  color: #fff;
}
.red {
  background-color: rgb(255, 64, 64);
  color: #fff;
}
.yellow {
  background-color: rgb(255, 195, 64);
  color: #fff;
}
.section {
  padding: 0 40px 0 50px;
  max-width: 700px;
  /* position: relative; */
}
.group_bathrooms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-gap: 10px;
  margin-top: 10px;
}
.img_modal {
  width: 100%;
}
.num-apartment {
  background-color: #98c253;
  color: #fff;
  padding: 5px 10px;
  font-weight: 600;
  border-radius: 6px;
}
/* .total {
  position: absolute;
  top: 0;
  right: calc(50% - 80px);
  border-radius: 5px;
  border: 1px solid #98c253;
  padding: 7px 10px;
  background-color: #49526da4;
  color: #fff;
} */
.tag {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: rgba(103, 123, 158, 0.075);
  border: 1px solid rgba(103, 123, 158, 0.822);
  line-height: 1;
  border-radius: 4px;
  color: rgba(38, 52, 75, 0.6);
  margin: 20px auto 0;
  width: 300px;
}
.total {
  font-size: 20px;
  font-weight: 400;
}
.bold {
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
}
</style>

