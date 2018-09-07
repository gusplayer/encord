<template>
  <ul class="list">
    <li class="list-item">
      <i class="icon-045-brochure"></i>
      <p>Brochure</p>
    </li>
    <li class="list-item">
      <i class="icon-video-player"></i>
      <p>Video</p>
    </li>
    <li class="list-item">
      <i class="icon-023-tax-1"></i>
      <p>Cotizar</p>
    </li>
    <li class="list-item">
      <i class="icon-004-results"></i>
      <p>Lista de precios</p>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style scoped>
.list li {
  list-style: none;
  margin: 35px 0 35px 15px;
  color: #606468;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.list-item i {
  font-size: 35px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #606468;
}
</style>
