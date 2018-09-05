<template>
  <div class="dashboard">
    <div class="side-panel">
      <div class="head">
        <div class="icons">
          <i class="icon-057-settings-1"></i>
          <i class="icon-alarm"></i>
        </div>
        <div class="info-user">
          <div class="avatar">
            <img src="../../assets/avatar.jpg" alt="">
          </div>
          <h3>Nombre Usuario</h3>
          <p>Cargo en Encord</p>
        </div>
        <div class="line"></div>
      </div>
      <div class="content">

      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.side-panel {
  max-width: 320px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-right: 1px solid #eee;
  height: 100vh;
  background-color: #fff;
}
.head {
  width: 100%;
}
.icons {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.icons i {
  font-size: 20px;
  color: #98c253;
}
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: -10px;
  margin-bottom: 5px;
}
.avatar > img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
}
.info-user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info-user h3 {
  font-weight: 600;
  line-height: 1;
  color: #98c253;
  font-size: 16px;
}
.info-user p {
  font-size: 14px;
  color: #606468;
  /* line-height: 1; */
}
.line {
  height: 1px;
  width: 80%;
  border-top: 2px solid #eee;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
