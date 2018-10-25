<template>
  <div class="brochure">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard">Aria Condominio </nuxt-link>
          <span>/ Brochure</span>
        </h2>
      </template>
      <div slot="section" class="section">
        <pdf src="~/static/vue.pdf"></pdf>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
import pdf from 'vue-pdf'
export default {
  components: {
    Card,
    pdf
  }
}
</script>

<style scoped>
.brochure {
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
.section {
  padding: 20px 40px;
}
</style>
