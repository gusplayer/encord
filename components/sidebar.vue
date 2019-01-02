<template>
  <div class="sidebar">
    <div
      :class="classPanel"
      class="side-panel"
    >
      <div class="head">
        <div class="content-user">
          <div
            class="avatar"
            v-if="profileData.foto"
          >
            <img
              src="../assets/avatar.jpg"
              alt
            >
          </div>
          <div
            class="avatar"
            v-else
          >
            <img
              src="../assets/avatar-vector.jpg"
              alt
            >
          </div>
          <div class="info-user">
            <h3 :class="classActive">{{profileData.nombre}}</h3>
            <p :class="classActive">{{profileData.email}}</p>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="content">
        <ul class="list">
          <indicator
            :height="40"
            :position="indicatorPosition"
            :unbalance="35"
          />
          <nuxt-link
            to="/dashboard"
            @click.native="selectItemByList(0)"
          >
            <li class="list-item">
              <icon-base
                widthIcon="40px"
                heightIcon="40px"
                color="#606468"
              >
                <icon-projects />
              </icon-base>
              <p :class="classActive">Cotizar Proyectos</p>
            </li>
          </nuxt-link>
          <nuxt-link
            to="/dashboard/report/reports"
            @click.native="selectItemByList(1)"
          >
            <li class="list-item">
              <icon-base
                widthIcon="40px"
                heightIcon="40px"
                color="#606468"
              >
                <icon-reports />
              </icon-base>
              <p :class="classActive">Crear Informe</p>
            </li>
          </nuxt-link>
          <nuxt-link
            to="/dashboard/customers"
            @click.native="selectItemByList(2)"
          >
            <li class="list-item">
              <icon-base
                widthIcon="40px"
                heightIcon="40px"
                color="#606468"
              >
                <icon-customers />
              </icon-base>
              <p :class="classActive">Clientes</p>
            </li>
          </nuxt-link>
          <nuxt-link
            to="/dashboard/contract/list-contracts"
            @click.native="selectItemByList(3)"
          >
            <li class="list-item">
              <icon-base
                widthIcon="40px"
                heightIcon="40px"
                color="#606468"
              >
                <icon-contracts />
              </icon-base>
              <p :class="classActive">Contratos</p>
            </li>
          </nuxt-link>
          <li class="list-item">
            <icon-base
              widthIcon="40px"
              heightIcon="40px"
              color="#606468"
            >
              <icon-pay />
            </icon-base>
            <p :class="classActive">Pagar</p>
          </li>
        </ul>

        <div class="line"></div>
      </div>
      <div
        @click="logout"
        :class="classBtn"
        class="btn-logout"
      >
        <p :class="classActive">Salir</p>
        <i class="icon-sign-out"></i>
      </div>
      <div
        :class="classDeploy"
        @click="change"
        class="btn-deploy"
      >
        <i
          class="icon-right-open-big"
          v-if="alter"
        ></i>
        <i
          class="icon-left-open-big"
          v-else
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import indicator from "@/components/indicator";
import iconProjects from "@/assets/icons/icon-projects";
import iconContracts from "@/assets/icons/icon-contracts";
import iconReports from "@/assets/icons/icon-reports";
import iconPay from "@/assets/icons/icon-pay";
import iconCustomers from "@/assets/icons/icon-customers";
export default {
  components: {
    indicator,
    iconProjects,
    iconContracts,
    iconReports,
    iconPay,
    iconCustomers
  },
  data() {
    return {
      alter: true,
      indicatorPosition: 0,
      classActive: {
        alterClass: true
      },
      classBtn: {
        "btn-collapse": true
      },
      classPanel: {
        "panel-collapse": true
      },
      classDeploy: {
        "btn-deploy-collapse": true
      }
    };
  },
  computed: {
    profileData() {
      return this.$store.state.profileInfo;
    }
  },
  methods: {
    change() {
      this.alter = !this.alter;
      this.classActive.alterClass = !this.classActive.alterClass;
      this.classBtn["btn-collapse"] = !this.classBtn["btn-collapse"];
      this.classPanel["panel-collapse"] = !this.classPanel["panel-collapse"];
      this.classDeploy["btn-deploy-collapse"] = !this.classDeploy[
        "btn-deploy-collapse"
      ];
    },
    setInitialIndicatorPosition() {
      this.indicatorPosition = parseInt(
        document.querySelector(".router-link-active").dataset.index
      );
    },
    selectItemByList(index) {
      this.indicatorPosition = index;
    },
    async logout() {
      await this.$auth.logout();
      console.log(this.$auth.loggedIn);
    }
  }
};
</script>

<style scoped>
@media print {
  .sidebar {
    display: none;
  }
}
a {
  text-decoration: none;
}
.side-panel {
  max-width: 300px;
  width: 300px;
  box-sizing: border-box;
  padding: 10px;
  border-right: 1px solid #eee;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  transition: all ease 0.5s;
  height: 100vh;
  overflow-y: auto;
}
.panel-collapse {
  width: 90px;
}
.head {
  width: 100%;
}
.icons {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}
.icons i {
  font-size: 20px;
  color: #98c253;
  transition: all ease 0.5s;
}
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  /* border: 1px solid #555; */
  /* margin-top: -10px;
  margin-bottom: 5px; */
}
.avatar > img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
}
.content-user {
  /* height: 150px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
}
.content-user h3 {
  font-weight: 600;
  line-height: 1;
  color: #98c253;
  font-size: 16px;
  height: 16px;
  transition: all ease 0.5s;
}
.content-user p {
  font-size: 14px;
  color: #606468;
  height: 16px;
  transition: all ease 0.5s;
}
.info-user {
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.line {
  height: 1px;
  width: 80%;
  border-top: 2px solid #eee;
  margin: 0 auto;
  /* margin-top: 20px; */
  transition: all ease 0.5s;
}
.list {
  margin-top: 20px;
  position: relative;
}
.list li {
  list-style: none;
  margin: 15px 0 35px 15px;
  color: #606468;
  cursor: pointer;
}
.list li:hover,
li:hover i {
  opacity: 0.7;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.list-item p {
  transition: all ease 0.5s;
}
li svg {
  margin-right: 20px;
}

.list-item:first-child,
.list-item:first-child i {
  /* color: #98c253; */
  font-weight: 400;
}
.btn-logout {
  transition: all ease 0.5s;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #73808d;
  padding: 15px;
  border-radius: 0.15rem;
  width: 200px;
  color: #eee;
  font-weight: 600;
  text-transform: uppercase;
  margin: 20px 0;
}
.btn-logout i {
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.btn-logout:focus,
.btn-logout:hover {
  background-color: #606468;
}
.btn-deploy {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #98c253;
  position: absolute;
  top: 45%;
  left: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.5s;
  cursor: pointer;
}
.btn-deploy i {
  color: #fff;
  font-size: 22px;
  z-index: 100;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.5s;
}
.alterClass {
  font-size: 0px;
  opacity: 0;
  height: 0px;
}
.btn-collapse {
  width: 50px;
  height: 50px;
  /* border-radius: 50%; */
}
.btn-collapse > i {
  margin-left: 0;
}
.btn-deploy-collapse {
  left: 70px;
}
</style>
