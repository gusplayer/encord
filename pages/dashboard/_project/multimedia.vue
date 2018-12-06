<template>
  <div class="multimedia">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">{{nameProject}} </nuxt-link>
          <span>/ Multimedia</span>
        </h2>
      </template>
      <div
        slot="section"
        class="section"
      >
        <div
          class="container"
          v-if="projectImages.length || videoProject"
        >
          <div class="col left">
            <div
              v-for="(item, index) in projectImages"
              :key="index"
              class="thumb"
              @click="selected(item)"
            >
              <img
                :src="`${urlImages}/${item.imagen}`"
                alt=""
              >
            </div>
            <img
              class="thumb"
              :src="`https://img.youtube.com/vi/${videoProject}/0.jpg`"
              @click="selected({ imagen: null })"
              v-if="videoProject"
            >
          </div>
          <div class="col right">
            <div
              class="video"
              v-if="videoProject && !imagen"
            >
              <iframe
                width="560"
                height="315"
                :src="`https://www.youtube.com/embed/${videoProject}?showinfo=0&rel=0&color=white`"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
            <img
              :src="`${urlImages}/${imagen}`"
              alt=""
              v-else
            >
          </div>
        </div>
        <div
          class="warning"
          v-else
        >
          <img
            src="../../../assets/image.png"
            alt=""
          >
          <p class="no-images">No se han cargado imagenes del proyecto {{nameProject}}</p>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "~/components/card";

export default {
  components: {
    Card
  },
  mounted() {
    if (this.projectImages.length) {
      this.imagen = this.projectImages[0].imagen;
    } else {
      this.imagen = "";
    }
  },
  computed: {
    nameProject() {
      return this.$store.state.currentProject.nombre;
    },
    videoProject() {
      if (this.$store.state.currentProject.video) {
        let index = this.$store.state.currentProject.video.indexOf("=");
        let imagenVideo = this.$store.state.currentProject.video.slice(
          index + 1
        );
        return imagenVideo;
      }
    },
    projectImages() {
      if (this.$store.state.currentProject.imagenes) {
        return this.$store.state.currentProject.imagenes;
      }
    }
  },
  data() {
    return {
      multimedia: [
        {
          id: 0,
          img: require("~/assets/build.jpg")
        },
        {
          id: 1,
          img: require("~/assets/edificio.jpg")
        },
        {
          id: 2,
          img: require("~/assets/build.jpg")
        },
        {
          id: 3,
          video: true,
          img: "BASOKQquMRM"
        }
      ],
      imagen: "",
      urlImages:
        "http://administrador.app-encord.com/imagenes_adicionales_proyecto/"
    };
  },
  methods: {
    selected(item, showSelected) {
      this.imagen = item.imagen;
    }
  }
};
</script>

<style scoped>
/* ********** Estilos bases de la card ************ */
.multimedia {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  height: 350px;
}
.col {
  min-height: 315px;
}
.left {
  flex: 0.2;
  margin-right: 5px;
  display: grid;
  grid-template-columns: 100px;
  grid-template-rows: repeat(4, 80px);
  align-content: space-between;
  grid-gap: 5px;
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
  margin-left: 20px;
}
.section {
  padding: 20px 40px;
}
/* ********** End ************ */

.thumb {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.thumb > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
}
.right > img {
  max-width: 500px;
  max-height: 350px;
  border-radius: 8px;
}
.video {
  /* position: relative; */
  padding-bottom: 56.25%;
  /* padding-top: 30px; IE6 workaround */
  height: 0;
  overflow: hidden;
  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px; */
  /* box-shadow: 0px 0px 68px -12px rgba(130, 149, 166, 1); */
  border-radius: 8px;
  margin: 0 auto;
}
.video iframe,
.video object,
.video embed {
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  border-radius: 10px;
  overflow: hidden;
}
.no-images {
  text-align: center;
  font-size: 30px;
  width: 500px;
  margin: 0 auto;
  color: rgba(65, 71, 80, 0.356);
  line-height: 1;
}
.warning img {
  max-width: 150px;
  opacity: 0.4;
}
.warning {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
}
</style>
