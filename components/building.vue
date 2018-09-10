<template>
  <div class="building">
    <!-- <div class="container"> -->
    <h3>Piso</h3>
    <p>{{value}}</p>
    <input type="range" name="range" min="1" max="30" step="1" v-model="value" />
    <div class="content">
      <input type="text" v-model="value">
      <nuxt-link to="quotation/piso/5">
        <div class="btn">Mostrar</div>
      </nuxt-link>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 5
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.building {
  font-family: "Dosis", Helvetica, Arial, sans-serif; 
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

}
input[type="range"] {
  transform: rotate(270deg);
  -webkit-appearance: none;
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 2px;
  overflow: hidden;
  position: absolute;
  right: -60px;
  top: 85px;
  transition: .3s ease-in-out;
  /* bottom: 80px; */
}
input[type="text"] {
  padding: 10px;
  max-width: 60px;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 22px;
  color: #606468;
  text-align: center;
  outline: none;
}
  input[type="range"]::-webkit-slider-thumb:active {
    /* background-color: #9dff00; */
  }
h3 {
  line-height: 1;
  width: 110px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #606468;
}
p {
  font-size: 6em;
  color: #606468;
  max-width: 110px;
  width: 100%;
  text-align: center;
  transition: all ease .3s;
  line-height: .8;
  /* text-shadow: white 1px 1px  */
}
.content {
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #eee;
  padding-top: 30px;
  /* left: calc(50% - 50px); */
  /* display: flex; */
  /* align-items: center; */
}
.btn {
  transition: all ease 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #73808d;
  padding: 15px;
  border-radius: 0.15rem;
  width: 110px;
  color: #eee;
  font-weight: 600;
  text-transform: uppercase;
  /* margin-top: 20px; */
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
    transition: .3s ease-in-out;
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

/* input[type='range'] {
  -webkit-appearance: none;
  background-color: transparent;
  width: 300px;
  height: 40px;
  overflow: hidden;
  margin: 0;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: #fff;
  width: 30px;
  height: 34px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    -25px 0 0 10px rgba(90, 184, 6, 0.5), -75px 0 0 10px rgba(90, 184, 6, 0.5),
    -125px 0 0 10px rgba(90, 184, 6, 0.5), -175px 0 0 10px rgba(90, 184, 6, 0.5),
    -225px 0 0 10px rgba(90, 184, 6, 0.5), -275px 0 0 10px rgba(90, 184, 6, 0.5);

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
  width: 100%;
  height: 100%;
  transform: rotate(270deg);
  background-color: #aaa;
} */
</style>
