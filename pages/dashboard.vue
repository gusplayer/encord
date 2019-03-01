<template>
  <div class="dashboard">
    <sidebar />
    <nuxt-child class="dashboard-view" />
  </div>
</template>

<script>
import Sidebar from "~/components/sidebar";
import axios from "axios";

export default {
  middleware: "auth",
  components: {
    Sidebar
  },
  created() {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      err => {
        if (err.response.status === 401) {
          this.$auth.logout();
        }
        return err.response;
      }
    );

    this.$store.commit("SET_TOKEN");
    this.$store.dispatch("GET_PROJECTS");
    this.$store.dispatch("GET_PROFILEINFO");
  }
};
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
