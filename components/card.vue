<template>
  <div class="card">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="line"></div>
    <section>
      <slot name="section"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style scoped>
.card {
  min-width: 650px;
  min-height: 350px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 40px;
}
.line {
  width: 100%;
  height: 1px;
  border-top: 2px solid #ddd;
}
header {
  width: 100%;
  min-height: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
section {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
}
</style>
