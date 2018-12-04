<template>
  <div class="quotation">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">{{nameProject}}</nuxt-link>-
          <span>Cotizar</span>
        </h2>
        <div class="num-apartment">{{numApartment}}</div>
      </template>
      <div
        slot="section"
        class="section"
        v-loading="loading"
        element-spinner-color="red"
      >
        <div class="section_one">
          <div class="col left">
            <building @change="getFlat" />
            <div>
              <div class="group">
                <div
                  class="btn_flat"
                  :class="{btn_select: selected == index, btn_disabled: units.estado == 0 }"
                  @click="select({item, index})"
                  v-for="(item, index) in units"
                  :key="index"
                >{{item.numero}}</div>
              </div>
            </div>
          </div>
          <div
            class="col right"
            v-if="currentUnit"
          >
            <div class="container-img">
              <swiper
                :options="swiperOption"
                ref="mySwiper"
              >
                <swiper-slide>
                  <img
                    v-if="currentUnit.imagenes[0]"
                    class="plano"
                    :src="`http://administrador.app-encord.com/imagenes_unidades/${currentUnit.imagenes[0].imagen}`"
                  >
                </swiper-slide>
                <swiper-slide>
                  <div class="info">
                    <h3 class="title">Descripción</h3>
                    <p
                      class="description"
                      v-html="currentUnit.descripcion"
                    ></p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>

          <div
            class="col right"
            v-else
          >
            <div class="container-img">
              <swiper
                :options="swiperOption"
                ref="mySwiper"
              >
                <swiper-slide>
                  <img
                    v-if="flatImage"
                    class="plano"
                    :src="`http://administrador.app-encord.com/imagenes_pisos/${flatImage}`"
                  >
                </swiper-slide>
                <swiper-slide>
                  <div class="info">
                    <h3 class="title">Title</h3>
                    <p
                      class="description"
                      v-html="flats"
                    ></p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <nuxt-link
          class="btn_link"
          @click.native="sentNum"
          to
        >
          Siguiente
          <i class="icon-right-open-big"></i>
        </nuxt-link>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "~/components/card";
import Building from "~/components/building";
import axios from "axios";
import debounce from "debounce";

export default {
  components: {
    Card,
    Building
  },
  async created() {
    this.ifExistProject();
    await this.$store.dispatch("GET_FLOORS", this.changeIdProject);
    // this.getUnits();
  },
  data() {
    return {
      loading: true,
      selected: -1,
      numFlat: 1,
      radio: "1",
      url: "",
      currentUnit: null,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        width: "350",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    nextRoute() {
      return `/dashboard/${this.$route.params.project}/quotation/finishes`;
    },
    showModal: {
      get() {
        return this.$store.state.showModal;
      },
      set(newValue) {
        this.$store.commit("CHANGE_MODAL_STATE", newValue);
      }
    },

    flatImage() {
      let flat = this.$store.state.sentFlats.find(
        flat => flat.id == this.numFlat
      );
      if (flat) {
        return flat.imagen;
      }
    },
    units: {
      get() {
        return this.$store.state.apartments;
      },
      set(newValue) {
        this.$store.commit("SET_APARTMENTS", newValue);
      }
    },
    numApartment() {
      if (this.units.length) {
        if (this.selected > -1) {
          return this.units[this.selected].numero;
        }
      }
      return " ";
    },
    currentProject() {
      return this.$store.state.currentProject;
    },
    nameProject() {
      return this.$store.state.currentProject.nombre;
    },
    changeIdProject() {
      if (this.$store.state.currentProject.id) {
        return this.$store.state.currentProject.id;
      }
    },
    flats() {
      return this.$store.state.sentFlats;
    }
  },
  methods: {
    select({ item, index }) {
      this.selected = index;
      this.currentUnit = item;
    },
    getFlat(value) {
      this.units = [];
      this.numFlat = value;
      this.getUnits();
      this.currentUnit = null;
      this.selected = -1;
    },
    getUnits: debounce(async function(e) {
      this.loading = true;
      await this.$store.dispatch("GET_UNITS", this.numFlat);
      this.loading = false;
    }, 800),
    sentNum() {
      if (this.currentUnit) {
        this.$router.push(this.nextRoute);
        this.$store.commit("SET_SENTNUM", this.units[this.selected].numero);
        this.$store.commit("SET_CURRENTUNIT", this.currentUnit);
      } else {
        this.$notify({
          type: "warning",
          title: "Alerta",
          message: "Primero debes seleccionar un numero de apartamento."
        });
      }
    },
    ifExistProject() {
      if (!this.currentProject) {
        this.$router.push("/dashboard");
      }
    }
  }
};
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
  margin-left: 20px;
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
.description ul li {
  list-style: circle;
}
</style>
