<template>
  <div class="index">
    <!-- <nuxt-child /> -->
    <card>
      <div slot="header">
        <h2>Aria Condominio</h2>
      </div>
      <div slot="section" class="section">
        <div class="container">
          <div class="col left">
            <list-card />
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
import Card from '@/components/card'
import ListCard from '@/components/list-card'
import ImgCard from '@/components/img-card'

export default {
  components: {
    Card,
    ListCard,
    ImgCard
  }
}
</script>

<style scoped>
.index {
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
.container {
  display: flex;
}
.left {
  flex: 0.5;
}
.right {
  flex: 1;
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  border-left: 2px solid #eee;
  margin-left: 10px;
}
.section {
  padding: 20px 40px;
}
</style>