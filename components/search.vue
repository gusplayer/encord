<template>
  <div id="wrap">
    <input name="search" ref="search" type="text" placeholder="Busca tu proyecto" :value="value" @input="getSearch"><input id="search_submit" value="Rechercher" type="submit" >
  </div>
</template>

<script>
export default {
  props: ['value'],
  // data() {
  //   return {
  //     search: ''
  //   }
  // }
  methods: {
    getSearch() {
      this.$emit('input', this.$refs.search.value)
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:100, 300, 400, 700);
/* @import url(https://raw.github.com/FortAwesome/Font-Awesome/master/docs/assets/css/font-awesome.min.css); */

#wrap {
  /* margin: 50px 100px; */
  display: inline-block;
  position: relative;
  height: 0px;
  right: 10px;
  float: right;
  padding: 0;
  position: relative;
}

input[type='text'] {
  height: 35px;
  font-size: 16px;
  display: inline-block;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-weight: 100;
  border: none;
  outline: none;
  color: #555;
  padding: 3px;
  padding-right: 40px;
  width: 0px;
  position: absolute;
  top: -1px;
  right: 0;
  background: none;
  z-index: 3;
  transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
  cursor: pointer;
}

input[type='text']:focus:hover {
  /* border-bottom: 1px solid #bbb; */
}

input[type='text']:focus {
  width: 200px;
  z-index: 1;
  /* border-bottom: 1px solid #bbb; */
  cursor: text;
  font-size: 14px;
}
input[type='submit'] {
  height: 35px;
  width: 33px;
  display: inline-block;
  color: red;
  float: right;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=);
  background-size: contain;
  background-repeat: no-repeat;
  text-indent: -10000px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity 0.4s ease;
}

input[type='submit']:hover {
  opacity: 0.2;
}
</style>
