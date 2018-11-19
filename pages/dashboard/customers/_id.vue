<template>
  <nuxt-child />
</template>

<script>
export default {
  destroyed() {
    this.$store.commit('SET_CURRENTCUSTOMER', null)
  }
}
</script>

<style>
</style>
