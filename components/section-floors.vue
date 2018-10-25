<template>
  <div class="section_two">
    <h3 class="subhead">Acabados de Pisos</h3>
    <div class="container_cards">
      <div v-for="(item, index) in 6" :key="index" class="card_bathroom" :class="{card_select: card == index}">
        <h4 class="name">Opción Uno</h4>
        <div @click="changeImagen" class="container_img">
          <img :src="img" alt="">
        </div>
        <div class="footer_card">
          <div class="price">$3.250.000</div>
        </div>
        <div @click="selectCard(index)" class="plus">+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showModal: {
      get() {
        return this.$store.state.showModal
      },
      set(newValue) {
        this.$store.commit('CHANGE_MODAL_STATE', newValue)
      }
    }
  },
  data() {
    return {
      card: 0,
      img: require('../assets/pisos/1.jpg')
    }
  },
  methods: {
    selectCard(value) {
      this.card = value
    },
    changeImagen() {
      this.showModal = true
      this.$emit('change', this.img)
    }
  }
}
</script>

<style scoped>
.section_two {
  /* margin-top: 40px; */
  width: 600px;
}
.subhead {
  font-weight: 600;
  color: rgba(10, 15, 44, 0.78);
}
.container_cards {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 15px;
  justify-items: center;
}
.card_bathroom {
  width: 180px;
  /* height: 200px; */
  border: 1px solid rgba(41, 61, 90, 0.095);
  box-shadow: 0 0 12px 1px rgba(41, 61, 90, 0.115);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 8px;
  position: relative;
  overflow: hidden;
}
.container_img {
  width: 100%;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
}
.container_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.name {
  font-weight: 600;
  color: #666;
  padding-bottom: 8px;
  font-size: 14px;
}
.footer_card {
  width: 100%;
  padding-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.price {
  font-size: 14px;
  font-weight: 600;
  color: rgba(10, 15, 44, 0.78);
}
.plus {
  width: 40px;
  height: 40px;
  background-color: #98c253;
  border-radius: 45%;
  position: absolute;
  right: -8px;
  bottom: -8px;
  color: #fff;
  font-weight: 800;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 10px;
  padding-right: 6px;
  cursor: pointer;
}
.card_select {
  border: 1px solid #98c253;
  background-color: rgba(150, 194, 81, 0.047);
}
</style>
