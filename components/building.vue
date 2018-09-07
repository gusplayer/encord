<template>
  <div class="building">
    <div class="container">

      <input type="range" name="range" id="range" min="0" max="300" step="5" v-model="value" />

    </div>

    <!-- <output for="range" class="output"></output> -->
    <p>{{value}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 175
    }
  }
}
</script>

<style scoped>
label[for='range'] {
  /* position: absolute;
  top: 50%;
  left: 50%; */
  /* margin-left: -175px;
  margin-top: -32px; */
  height: 49px;
  /* padding-top: 6px; */
  width: 350px;
  /* padding-left: 13px; */
  /* -webkit-transform: skew(-62deg); */
  overflow: hidden;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #eee;
  border: 1px solid #aaa;
}

input[type='range'] {
  -webkit-appearance: none;
  background-color: transparent;
  width: 300px;
  height: 38px;
  /* padding-top: 10px; */
  overflow: hidden;
  margin: 0;
  /* margin-left: -20px; */
  /* transform-style: preserve-3d; */
  /* perspective: 300; */
  /* transform-origin: 50% 50% 300px; */
  /* perspective-origin: 50% -121%; */
  /* transform: skew(62deg); */
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: transparent;
  width: 30px;
  height: 18px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    -25px 0 0 10px rgba(90, 184, 6, 0.5), -75px 0 0 10px rgba(90, 184, 6, 0.5),
    -125px 0 0 10px rgba(90, 184, 6, 0.5), -175px 0 0 10px rgba(90, 184, 6, 0.5),
    -225px 0 0 10px rgba(90, 184, 6, 0.5), -275px 0 0 10px rgba(90, 184, 6, 0.5),
    -325px 0 0 10px rgba(90, 184, 6, 0.5);
  z-index: 2;
}

input[type='range']:before {
  content: '';
  position: absolute;
  background: rgb(190, 190, 190);
  box-shadow: 0 1px 0 rgb(235, 235, 235);
  width: 283px;
  left: 0;
  height: 1px;
  top: 50%;
  z-index: 1;
}
input[type='range']:after {
  content: '';
  position: absolute;
  background: rgb(190, 190, 190);
  width: 7px;
  left: 3px;
  border-radius: 50%;
  height: 6px;
  top: 45%;
  z-index: 1;
  box-shadow: 30px 0 0 rgb(190, 190, 190), 60px 0 0 rgb(190, 190, 190),
    90px 0 0 rgb(190, 190, 190), 120px 0 0 rgb(190, 190, 190),
    150px 0 0 rgb(190, 190, 190), 180px 0 0 rgb(190, 190, 190),
    210px 0 0 rgb(190, 190, 190), 240px 0 0 rgb(190, 190, 190),
    270px 0 0 rgb(190, 190, 190), 60px 1px 0 rgb(235, 235, 235),
    90px 1px 0 rgb(235, 235, 235), 120px 1px 0 rgb(255, 255, 255),
    150px 1px 0 rgb(235, 235, 235), 180px 1px 0 rgb(235, 235, 235),
    210px 1px 0 rgb(235, 235, 235), 240px 1px 0 rgb(235, 235, 235),
    270px 1px 0 rgb(235, 235, 235);
}
.container {
  transform: rotate(270deg);
  background-color: #aaa;
}
</style>
