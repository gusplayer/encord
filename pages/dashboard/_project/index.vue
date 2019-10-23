<template>
  <div
    class="index"
    v-loading="loading"
  >
    <card>
      <div slot="header">
        <h2>{{currentProject.nombre}}</h2>
      </div>
      <div
        slot="section"
        class="section"
      >
        <div class="container">
          <div class="col left">
            <list-card />
          </div>
          <div class="col right">
            <template class="container-img">
              <swiper
                :options="swiperOption"
                ref="mySwiper"
              >
                <swiper-slide>
                  <img-card />
                </swiper-slide>
                <swiper-slide>
                  <div class="info">
                    <h3 class="title">{{currentProject.nombre}}</h3>
                    <p class="location">{{currentProject.ubicacion}}</p>
                    <p
                      v-html="currentProject.descripcion"
                      class="description"
                    ></p>
                  </div>
                </swiper-slide>
              </swiper>
            </template>

          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "@/components/card";
import ListCard from "@/components/list-card";
import ImgCard from "@/components/img-card";

export default {
  components: {
    Card,
    ListCard,
    ImgCard
  },
  created() {
    this.ifExistProject();
    this.$store.dispatch("GET_LISTCONTRACTS");
    if (!this.descreme) {
      this.loading = true;
    }
  },
  data() {
    return {
      loading: false,
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
    currentProject() {
      return this.$store.state.currentProject;
    },
    descreme() {
      return this.$store.state.descreme.descreme_actual;
    }
  },
  watch: {
    descreme: function() {
      this.loading = false;
    }
  },
  methods: {
    ifExistProject() {
      if (!this.currentProject) {
        this.$router.push("/dashboard");
      }
    }
  }
};
</script>

<style scoped>
.index {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
h2 {
  font-weight: 400;
  color: #98c253;
}
.container {
  display: flex;
}
.left {
  flex: 0.5;
}
.right {
  flex: 1;
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  border-left: 2px solid #eee;
  margin-left: 10px;
}
.section {
  padding: 20px 40px;
}
.swiper-wrapper {
  max-width: 350px;
}
.location {
  line-height: 1;
  margin-bottom: 10px;
  font-size: 14px;
  color: rgb(77, 91, 119);
}
</style>