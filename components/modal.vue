<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <el-button
              type="danger"
              class="modal-default-button"
              icon="el-icon-circle-close-outline"
              @click.native="$emit('close')"
              circle
            ></el-button>
            <slot name="body">

            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 2px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.modal-header {
  align-self: flex-start;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  position: relative;
  display: flex;
}
.modal-default-button {
  top: -15px;
  right: -15px;
  position: absolute;
  font-size: 40px;
  background-color: transparent;
  border: 0;
  color: #606468;
  background-color: white;
  padding: 0;
  vertical-align: middle;
  border-radius: 4px;
  box-shadow: 0 0 3px 3px hsla(237, 45%, 18%, 0.13);
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-footer {
  width: 100%;
}
</style>
