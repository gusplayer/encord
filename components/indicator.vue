<template>
    <div class="indicator" :style="setStyle"></div>
</template>

<script>
export default {
  props: {
    size: Number,
    height: Number,
    position: Number,
    unbalance: {
        type: Number,
        default: 0
    }
  },
  computed: {
    setStyle() {
      return {
        height: `${this.height}px`,
        top: `${this.position * 40 + this.unbalance * this.position}px`
      };
    }
  }
};
</script>

<style scoped>
.indicator {
  position: absolute;
  width: 3px;
  height: 40px;
  background-color: #98c253;
  transition: 0.3s;
}
</style>


