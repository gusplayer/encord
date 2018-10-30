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
                <div class="btn_flat" @click="select(index)" v-for="(item, index) in flats" :key="index">{{item.piso}}</div>
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
        <!-- <nuxt-link class="btn_link" @click.native="sentNum" :to="`${$route.path}/${numFlat}`">Siguiente <i class="icon-right-open-big"></i></nuxt-link> -->
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
    // numApartment() {
    //   return this.flats[this.numFlat - 1][this.selected].piso
    // },
    flats() {
      return this.$store.state.sentInfo.pisos
    },
    nameProject() {
      return this.$store.state.sentInfo.nombre
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
