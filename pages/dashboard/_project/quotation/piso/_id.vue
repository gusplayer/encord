<template>
  <!-- <div>User {{ $route.params.id }}</div> -->
  <div class="piso">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard">Aria Condominio </nuxt-link>
          <nuxt-link to="/dashboard/quotation">/ Cotizar </nuxt-link>
          <a>/ {{ $route.params.id }}</a>
        </h2>
      </template>
      <div slot="section" class="section">
        <template>
          <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <swiper-slide>
              <bathrooms @change="selectImagen" />
            </swiper-slide>
            <swiper-slide>
              <floors @change="selectImagen" />
            </swiper-slide>
          </swiper>

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
.piso {
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
  padding: 20px 40px;
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
</style>
