<template>
  <div class="container">
    <card>
      <div slot="header">
        <h2>title</h2>
      </div>
      <div slot="section">
        section
      </div>
    </card>
  </div>
</template>

<script>
import Card from '../components/card'

export default {
  components: {
    Card
  },
  created() {
    this.$router.push('/dashboard/')
  }
}
</script>

<style scoped>
.container {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

