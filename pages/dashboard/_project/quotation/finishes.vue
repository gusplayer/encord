<template>
  <!-- <div>User {{ $route.params.id }}</div> -->
  <div class="apartment">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">Aria Condominio </nuxt-link>-
          <nuxt-link :to="`/dashboard/${$route.params.project}/quotation`"> Cotizar </nuxt-link>-
          <nuxt-link :to="$route.path"> Acabados </nuxt-link>
          <!-- <a>/{{ $route.params.id }}</a> -->
        </h2>
        <div class="wrapper">
          <div class="num-apartment">{{numApartment}}</div>
          <span class="descreme">Descreme: {{descreme.descreme}}</span>
        </div>
      </template>
      <div
        slot="section"
        class="section"
      >
        <!-- <div class="total">Total: $505.200.000</div> -->
        <template>
          <swiper
            :options="swiperOption"
            ref="mySwiper"
          >
            <swiper-slide v-if="bathrooms.length">
              <Section
                @change="selectImagen"
                title="Acabados de Baños"
                :data="bathrooms"
                @selected="saveFinish($event, 0)"
              />
            </swiper-slide>
            <swiper-slide v-if="floors.length">
              <Section
                @change="selectImagen"
                title="Acabados de Pisos"
                :data="floors"
                @selected="saveFinish($event, 1)"
              />
            </swiper-slide>
            <swiper-slide v-if="kitchens.length">
              <Section
                @change="selectImagen"
                title="Acabados de Cocina"
                :data="kitchens"
                @selected="saveFinish($event, 2)"
              />
            </swiper-slide>
            <swiper-slide v-if="domotica.length">
              <Section
                @change="selectImagen"
                title="Acabados Domotica"
                :data="domotica"
                @selected="saveFinish($event, 3)"
              />
            </swiper-slide>
          </swiper>
          <div class="container">
            <nuxt-link
              class="btn_link"
              :to="prevRoute"
            ><i class="icon-left-open-big"></i> Volver</nuxt-link>
            <div class="tag"> <span class="bold">Valor Total: </span><span class="total">{{ total | formatPrice }}</span></div>
            <nuxt-link
              @click.native="saveFinishes"
              class="btn_link"
              :to="nextRoute"
            >Siguiente <i class="icon-right-open-big"></i></nuxt-link>
          </div>
          <modal
            v-if="showModal"
            @close="showModal = false"
          >
            <img
              class="img_modal"
              slot="body"
              :src="`http://administrador.app-encord.com/imagenes_tipos_acabados/${img}`"
              alt=""
            >
          </modal>
        </template>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "~/components/card";
import Section from "~/components/finishes-section";
import Modal from "~/components/modal";
export default {
  components: {
    Card,
    Modal,
    Section
  },
  created() {
    this.ifExistProject();
  },
  mounted() {
    if (!this.currentUnit) {
      this.$router.push("/dashboard/");
    }
  },
  data() {
    return {
      img: "",
      finishes: [{ valor: 0 }, { valor: 0 }, { valor: 0 }],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        width: "600",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    descreme() {
      return this.$store.getters.percentDescreme;
    },
    nextRoute() {
      return `/dashboard/${this.$route.params.project}/quotation/result`;
    },
    prevRoute() {
      return `/dashboard/${this.$route.params.project}/quotation/apartment`;
    },
    showModal: {
      get() {
        return this.$store.state.showModal;
      },
      set(newValue) {
        this.$store.commit("CHANGE_MODAL_STATE", newValue);
      }
    },
    currentProject() {
      return this.$store.state.currentProject;
    },
    numApartment() {
      return this.$store.state.sentNum;
    },
    currentUnit() {
      return this.$store.state.currentUnit;
    },
    bathrooms() {
      return this.currentUnit.acabados.filter(
        finish => finish.tipos_acabados.grupos_acabados_id === 7
      );
    },
    floors() {
      return this.currentUnit.acabados.filter(
        finish => finish.tipos_acabados.grupos_acabados_id === 6
      );
    },
    kitchens() {
      return this.currentUnit.acabados.filter(
        finish => finish.tipos_acabados.grupos_acabados_id === 5
      );
    },
    domotica() {
      return this.currentUnit.acabados.filter(
        finish => finish.tipos_acabados.grupos_acabados_id === 8
      );
    },
    total() {
      return (
        this.finishes.reduce((total, finish) => {
          return total + parseInt(finish.valor);
        }, 0) + parseInt(this.currentUnit.valor) || 0
      );
    }
  },
  methods: {
    selectImagen(value) {
      this.img = value;
    },
    saveFinish({ item, action }, index) {
      if (action == false) {
        this.$set(this.finishes, index, { valor: 0 });
      } else {
        this.$set(this.finishes, index, item);
      }
    },
    saveFinishes() {
      this.$store.commit("SET_CURRENTFINISHES", this.finishes);
    },
    ifExistProject() {
      if (!this.currentProject) {
        this.$router.push("/dashboard");
      } else {
        if (!this.currentUnit.acabados.length) {
          this.$router.push(this.nextRoute);
        }
      }
    }
  },
  filters: {
    formatPrice(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
      } else {
        return "$0";
      }
    }
  }
};
</script>

<style scoped>
a.nuxt-link-active {
  text-decoration: none;
  color: #98c253;
}
.apartment {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
h2 {
  font-weight: 400;
}
h4 {
  text-align: center;
}
.container {
  display: flex;
  width: 100%;
  height: 60px;
  align-items: flex-end;
  justify-content: space-between;
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
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  border-radius: 10px;
  box-shadow: 0px 0px 0px 6px rgb(255, 255, 255);
}
.num-apartment {
  background-color: #98c253;
  color: #fff;
  padding: 5px 10px;
  font-weight: 600;
  border-radius: 6px;
}
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
.btn_link {
  cursor: pointer;
  display: flex;
  text-decoration: none;
  color: #98c253;
}
.btn_link i {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  font-size: 16px;
  height: 19px;
  /* margin-right: 5px; */
}
.descreme {
  font-size: 14px;
  line-height: 1;
  margin-top: 5px;
  color: #aaa;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>

