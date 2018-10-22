<template>
  <div class="building">
    <div class="top">
      <div class="container-text">
        <h3>Piso</h3>
        <p>{{value}}</p>
      </div>
      <div class="container-arrows">
        <div class="arrow arrow_top"></div>
        <div class="arrow arrow_bottom"></div>
      </div>
      <!-- <input type="range" name="range" min="1" max="5" step="1" v-model="value" /> -->
    </div>

    <!-- <div class="content">
      <input type="text" v-model="value">
      <nuxt-link to="quotation/piso/5">
        <div class="btn">Mostrar</div>
      </nuxt-link>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 5
    }
  },
  watch: {
    value(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.building {
  font-family: 'Dosis', Helvetica, Arial, sans-serif;
  width: 100%;
}
input[type='range'] {
  transform: rotate(270deg);
  -webkit-appearance: none;
  height: 40px;
  width: 160px;
  outline: none;
  border-radius: 2px;
  overflow: hidden;
  position: absolute;
  right: -97px;
  top: 60px;
  transition: 0.3s ease-in-out;
  /* bottom: 80px; */
}
input[type='text'] {
  padding: 10px;
  max-width: 60px;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 22px;
  color: #606468;
  text-align: center;
  outline: none;
}
input[type='range']::-webkit-slider-thumb:active {
  /* background-color: #9dff00; */
}
h3 {
  font-size: 1.5em;
  line-height: 1;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #606468;
  /* margin-top: -80px; */
}
p {
  font-size: 4em;
  color: #606468;
  text-align: center;
  transition: all ease 0.3s;
  line-height: 0.8;
}

::-webkit-slider-runnable-track {
  background: #ddd;
}
::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px; /* 1 */
  height: 40px;
  background: #fff;
  box-shadow: -100vw 0 0 100vw #98c253;
  border: 2px solid #999; /* 1 */
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
::-moz-range-track {
  height: 40px;
  background: #ddd;
}

::-moz-range-thumb {
  background: #fff;
  height: 40px;
  width: 20px;
  border: 3px solid #999;
  border-radius: 0 !important;
  box-shadow: -100vw 0 0 100vw #98c253;
  box-sizing: border-box;
}
::-ms-fill-lower {
  background: #98c253;
}

::-ms-thumb {
  background: #fff;
  border: 2px solid #999;
  height: 40px;
  width: 20px;
  box-sizing: border-box;
}

::-ms-ticks-after {
  display: none;
}

::-ms-ticks-before {
  display: none;
}

::-ms-track {
  background: #ddd;
  color: transparent;
  height: 40px;
  border: none;
}

::-ms-tooltip {
  display: none;
}
.top {
  height: 160px;
  width: 80%;
  display: flex;
  align-items: flex-end;
  position: relative;
  justify-content: center;
}
.container-arrows {
  width: 40px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.arrow {
  width: 100%;
  height: 35px;
  border: 1px solid #aaa;
  background-color: #fff;
  cursor: pointer;
  border-radius: 6px;
}
</style>
