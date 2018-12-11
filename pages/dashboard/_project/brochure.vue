<template>
  <div class="brochure">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">{{nameProject}} </nuxt-link>
          <span>- Brochure</span>
        </h2>
      </template>
      <div
        slot="section"
        class="section"
      >
        <div
          class="pdf"
          v-html="brochure"
          v-if="brochure"
        >
          <!-- <iframe src="https://e.issuu.com/anonymous-embed.html?u=astegiudiziarie&d=nazionale_n7-2017" width="944" height="500" frameborder="0" allowfullscreen="true"></iframe> -->

        </div>
        <div
          class="pdf"
          v-else
        >
          <p class="text">En el proyecto {{nameProject}} no se ha subido Brochure </p>
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
  data() {
    return {};
  },
  computed: {
    nameProject() {
      return this.$store.state.currentProject.nombre;
    },
    brochure() {
      return this.$store.state.currentProject.brochure;
    }
  }
};
</script>

<style scoped>
.brochure {
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
.section {
  padding: 20px 40px;
}
iframe {
  max-width: 100%;
}
.text {
  text-align: center;
  font-size: 30px;
  width: 500px;
  margin: 0 auto;
  color: rgba(65, 71, 80, 0.356);
  line-height: 1;
}
</style>
