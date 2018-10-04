<template>
  <div class="index">
    <card>
      <div slot="header" class="header">
        <h2>Proyectos</h2>
        <search />
      </div>
      <div slot="section" class="section">
        <nuxt-link to="/dashboard/5" v-for="item in 22" :key="item">
          <div class="project">
            <h3 class="title">titulo del proyecto {{item}}</h3>
            <p class="subhead">Subtitle</p>
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem illo repudiandae.
            </p>
            <div class="container-img">
              <img src="../../assets/edificio.jpg" alt="">
          </div>
            </div>
        </nuxt-link>
      </div>
    </card>
    <!-- <nuxt-link to="/dashboard/89">Condominio 89</nuxt-link>
    <nuxt-link to="/dashboard/6">Condominio 6</nuxt-link> -->
  </div>
</template>

<script>
import Card from '../../components/card'
import ListCard from '../../components/list-card'
import ImgCard from '../../components/img-card'
import Search from '../../components/search'

export default {
  components: {
    Card,
    ListCard,
    ImgCard,
    Search
  }
}
</script>

<style scoped>
.index {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 40px 0px;
  height: 100vh;
  overflow: auto;
}
h2 {
  font-weight: 400;
  color: #98c253;
}
.section {
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
.section a {
  text-decoration: none;
}
.project {
  max-width: 200px;
  /* border: 1px solid #eee; */
  box-shadow: 0px 2px 6px 2px rgba(28, 42, 66, 0.089);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 15px 10px;
  cursor: pointer;
  text-decoration: none !important;
}
.container-img {
  width: 100%;
  height: 80px;
  margin-top: 10px;
}
.project img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
}
.title {
  font-size: 14px;
  text-transform: capitalize;
  color: #1c2a42;
  line-height: 1;
}
.subhead {
  font-size: 12px;
  font-weight: 600;
  color: rgba(28, 42, 66, 0.718);
}
.description {
  margin: 5px 0;
  font-size: 12px;
  line-height: 1.2;
  color: rgba(28, 42, 66, 0.718);
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
