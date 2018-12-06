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
  name: "card"
};
</script>

<style scoped>
@media print {
  .card {
    display: none;
  }
}
.card {
  min-width: 690px;
  min-height: 350px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.line {
  width: 90%;
  height: 1px;
  border-top: 1px solid rgba(13, 30, 53, 0.199);
}
header {
  width: 100%;
  min-height: 73px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  padding: 10px 40px;
  font-size: 12px;
}
section {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
}
</style>
