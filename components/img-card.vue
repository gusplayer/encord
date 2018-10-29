<template>
  <div class="container-img">
    <img :src="`${urlEncord}imagenes_proyectos/${imgCard}`" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlEncord: 'http://administrador.app-encord.com/',
    }
  },
  computed: {
    imgCard() {
      return this.$store.state.sentInfo.logo
    }
  }
}
</script>

<style scoped>
.container-img {
  max-width: 400px;
  height: 100%;
}
.container-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
</style>
