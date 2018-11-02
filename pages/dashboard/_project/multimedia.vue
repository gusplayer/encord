<template>
  <div class="multimedia">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">{{nameProject}} </nuxt-link>
          <span>/ Multimedia</span>
        </h2>
      </template>
      <div slot="section" class="section">
        <div class="container">
          <div class="col left">
            <div v-for="(item, index) in multimedia" :key="index" class="thumb" @click="selected(item)">
              <img :src="`https://img.youtube.com/vi/${item.img}/0.jpg`" v-if="item.video">
              <img :src="item.img" alt="" v-else>
            </div>
          </div>
          <div class="col right">
            <div class="video" v-if="video">
              <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${image}?showinfo=0&rel=0&color=white`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <img :src="image" alt="" v-else>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'

export default {
  components: {
    Card
  },
  mounted() {
    this.image = this.multimedia[0].img
  },
  computed: {
    nameProject() {
      return this.$store.state.sentInfo.nombre
    }
  },
  data() {
    return {
      multimedia: [
        {
          id: 0,
          img: require('~/assets/build.jpg')
        },
        {
          id: 1,
          img: require('~/assets/edificio.jpg')
        },
        {
          id: 2,
          img: require('~/assets/build.jpg')
        },
        {
          id: 3,
          video: true,
          img: 'BASOKQquMRM'
        }
      ],
      image: '',
      video: false
    }
  },
  methods: {
    selected(item) {
      this.image = item.img
      if (item.video) {
        this.video = true
      } else {
        this.video = false
      }
    }
  }
}
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
</style>
