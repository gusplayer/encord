<template>
  <div class="price-list">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">{{currentProject.nombre}} </nuxt-link>
          <span>- Lista de Precios</span>
        </h2>
      </template>
      <div
        slot="section"
        class="section"
      >
        <swiper
          :options="swiperOption"
          ref="mySwiper"
        >
          <swiper-slide>
            <el-table
              height="330px"
              :data="sentFlats"
              stripe
              style="width: 100%;"
            >
              <el-table-column
                prop="id"
                label="ID"
                width="60"
              >
                <template slot-scope="scope">
                  <p>#{{scope.row.id}}</p>
                </template>
              </el-table-column>
              <el-table-column
                prop="piso"
                label="Piso"
              >
                <template slot-scope="scope">
                  <p><strong>Piso {{ scope.row.piso }}</strong></p>
                </template>
              </el-table-column>
              <el-table-column
                prop="imagen"
                label="Foto"
                width="200"
              >
                <template slot-scope="scope">
                  <img
                    :src="`https://administrador.app-encord.com/imagenes_pisos/${scope.row.imagen}`"
                    class="piso__imagen"
                  >
                </template>
              </el-table-column>
              <el-table-column width="200">
                <template slot-scope="scope">
                  <div
                    class="piso_action"
                    @click="changeSlide(1 , scope.row.id)"
                  >
                    <el-button>Ver apartamentos</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </swiper-slide>
          <swiper-slide>
            <apartments-table />
          </swiper-slide>
        </swiper>
        <p
          class="btn_link"
          :class="{show:showBack}"
          @click="changeSlide(0)"
        >
          <i class="icon-left-open-big"></i>
          Atras
        </p>
      </div>
    </card>
    <modal
      v-if="imagenModal"
      @close="$store.commit('SET_IMGMODAL', '')"
    >
      <img
        class="img_modal"
        slot="body"
        :src="`http://administrador.app-encord.com/imagenes_unidades/${imagenModal}`"
        alt=""
      >
    </modal>
  </div>
</template>

<script>
import Card from "~/components/card";
import apartmentsTable from "~/components/apartments-table";
import Modal from "~/components/modal";
// import { descreme } from "~/mixins/descreme";
export default {
  // mixins: [descreme],
  components: {
    Card,
    apartmentsTable,
    Modal
  },
  created() {
    this.ifExistProject();
    this.$store.dispatch("GET_FLOORS", this.currentProject.id);
  },
  destroyed() {
    this.$store.commit("SET_SENTFLATS", []);
  },
  data() {
    return {
      img: "",
      swiperOption: {
        slidesPerView: 1,
        activeIndex: 2,
        spaceBetween: 30,
        mousewheel: true,
        allowTouchMove: false,
        // width: "650",
        // height: "300",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      showBack: true
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    currentProject() {
      return this.$store.state.currentProject;
    },
    sentFlats() {
      return this.$store.state.sentFlats;
    },
    imagenModal() {
      return this.$store.state.imagenModal;
    }
  },
  methods: {
    ifExistProject() {
      if (!this.currentProject) {
        this.$router.push("/dashboard");
      }
    },
    changeSlide(index, id = 0) {
      if (id) {
        this.getUnits(id);
      }
      this.showBack = !this.showBack;
      this.swiper.slideTo(index, 1000, false);
    },
    getUnits(id) {
      this.$store.dispatch("GET_UNITS", id);
    }
  }
};
</script>

<style scoped>
.price-list {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
}
a {
  text-decoration: none;
  color: #98c253;
}
h2 {
  font-weight: 400;
  color: #98c253;
}
h2 span {
  font-size: 18px;
  color: #aaa;
}
.container {
  display: flex;
}
.col {
  min-height: 315px;
}
.left {
  flex: 0.2;
  margin-right: 5px;
  max-height: 30 0px;
}
.right {
  flex: 1;
  max-width: 560px;
  max-height: 350px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .section {
  padding: 20px 40px;
} */
.section {
  padding: 0 20px;
  max-width: 700px;
  /* height: 400px; */
  /* overflow: auto; */
}
.bold {
  font-weight: 600;
}
.piso__imagen {
  width: 200px;
}
.piso_action {
  width: 100%;
  display: grid;
  justify-content: center;
}
.btn_link {
  cursor: pointer;
  color: #98c253;
  line-height: 1;
  display: flex;
  margin: 15px 0 0 15px;
}
.btn_link i {
  margin-right: 5px;
  transition: all ease 0.2s;
}
.show {
  color: #fff;
  pointer-events: none;
}
.img_modal {
  max-height: 400px;
  max-width: 100%;
}
.title {
  text-align: left;
}
</style>