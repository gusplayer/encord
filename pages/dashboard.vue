<template>
  <div class="dashboard">
    <sidebar />
    <nuxt-child class="dashboard-view" />
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar'
export default {
  middleware: 'auth',
  components: {
    Sidebar
  },
  created() {
    this.$store.commit('SET_TOKEN')
    this.$store.dispatch('GET_PROJECTS')
  }
}
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
