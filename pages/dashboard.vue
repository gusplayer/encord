<template>
  <div class="dashboard">
    <sidebar/>
    <nuxt-child class="dashboard-view" />
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar'
export default {
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
