<template>
  <div class="quotation">
    <card>
      <template slot="header">
        <h2>Aria Condominio
          <span>/ Cotizar</span>
        </h2>
        <!-- <div class="circle-icon">
          <i class="icon-023-tax-1"></i>
        </div> -->
      </template>
      <div slot="section">
        <div class="container">
          <div class="col left">
            <h4>Pisos</h4>
            <building/>
          </div>
          <div class="col right">
            <img-card/>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '../../components/card'
import ImgCard from '../../components/img-card'
import Building from '../../components/building'
export default {
  components: {
    Card,
    ImgCard,
    Building
  }
}
</script>

<style scoped>
.quotation {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-left: 10px;
}
.circle-icon > i {
  font-size: 40px;
  color: #98c253;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
