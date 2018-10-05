<template>
  <div class="quotation">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard/5">Aria Condominio </nuxt-link>
          <span>/ Cotizar</span>
        </h2>
      </template>
      <div slot="section" class="section">
        <div class="container">
          <div class="col left">
            <building />
          </div>
          <div class="col right">
            <img-card />
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
import ImgCard from '~/components/img-card'
import Building from '~/components/building'
export default {
  components: {
    Card,
    ImgCard,
    Building
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
.container {
  display: flex;
}
.col {
  min-height: 315px;
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
  border-left: 2px solid #eee;
  margin-left: 20px;
}
.circle-icon > i {
  font-size: 40px;
  color: #98c253;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  padding: 20px 40px;
}
</style>
