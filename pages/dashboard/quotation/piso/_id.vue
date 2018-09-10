<template>
  <!-- <div>User {{ $route.params.id }}</div> -->
   <div class="piso">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard">Aria Condominio </nuxt-link>
          <nuxt-link to="/dashboard/quotation">/ Cotizar </nuxt-link> 
          <a>/ {{ $route.params.id }}</a>
        </h2>
      </template>
      <div slot="section">
        <div class="container">
          <div class="col left">
              <img src="../../../../assets/plano.jpg" alt="">
          </div>
          <div class="col right">
            <ul class="list">
              <li class="item select">401</li>
              <li class="item">402</li>
              <li class="item yellow">403</li>
              <li class="item">404</li>
              <li class="item red">405</li>
              <li class="item">406</li>
            </ul>
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
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #aaa;
  font-size: 18px;
}
.piso {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
a:first-child {
  color: #98c253;
  font-size: 24px;

}
h2 {
  font-weight: 400;
}
h4 {
  text-align: center;
}
.container {
  display: flex;
  font-family: "Dosis", Helvetica, Arial, sans-serif;
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

</style>
