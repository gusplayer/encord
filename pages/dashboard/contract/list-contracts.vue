<template>
  <div class="list-contracts">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard">Lista de Contratos</nuxt-link>
        </h2>
        <el-button
          class="btn-save"
          @click="saveInfo"
          type="success"
        >Nuevo</el-button>
      </template>
      <div
        slot="section"
        class="section"
      >

        <div
          v-for="(item, index) in listContracts"
          :key="index"
          class="item"
        >
          <div class="left">
            <p class="price">$ <span>{{item.forma_pago.total | formatNum}}</span> COP</p>
            <p class="type">Tipo de unidad:<br><span>{{item.unidad.tipo_unidad}}</span></p>
          </div>
          <div class="right">
            <h4 class="name">{{item.separacion.contract.titulo}}</h4>
            <p class="id">ID: {{item.separacion.contract.id}}</p>
            <p class="description">Descripción: <span v-html="`${item.unidad.descripcion.substr(3,70)}...`"></span></p>

          </div>
          <div class="bottom">
            <div class="content">
              <p class="customer text">Comprador:</p>
              <p class="name-customer bold">{{item.clientes.nombre}}</p>
            </div>
            <div class="content">
              <p class="seller text">Vendedor:</p>
              <p class="name-seller bold">{{sellerName}}</p>
            </div>
            <div class="content">
              <p class="name-date text">Fecha:</p>
              <p class="date">{{new Date(item.created_at.replace(/ /g, 'T')).getDate()}}/{{new Date(item.created_at.replace(/ /g, 'T')).getMonth() + 1}}/{{new Date(item.created_at.replace(/ /g, 'T')).getFullYear()}}</p>
            </div>
            <div class="content">
            </div>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "~/components/card";
export default {
  components: {
    Card
  },
  created() {
    this.$store.dispatch("GET_LISTCONTRACTS");
  },
  computed: {
    listContracts() {
      return this.$store.state.listContractsData;
    },
    sellerName() {
      return this.$store.state.profileInfo.nombre;
    }
  },
  methods: {
    saveInfo() {
      this.$router.push("/dashboard/contract/customer-info");
    }
  },
  filters: {
    formatNum(value) {
      if (value) {
        return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
      }
    }
  }
};
</script>

<style scoped>
.list-contracts {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  height: 100vh;
  overflow: auto;
  font-size: 12px;
}
a {
  text-decoration: none;
  color: #98c253;
}
h2 {
  font-weight: 400;
  color: #98c253;
}
h2 span {
  font-size: 18px;
  color: #aaa;
}
.section {
  padding: 0px 40px;
  max-width: 700px;
  height: 600px;
  overflow: auto;
}
.item {
  border: 1px solid rgba(68, 87, 119, 0.233);
  /* border-radius: 8px; */
  /* overflow: hidden; */
  display: grid;
  grid-template-areas:
    "left right"
    "bottom bottom";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px auto;
  margin: 20px 0;
  /* box-shadow: 0 6px 12px 4px rgba(68, 87, 119, 0.103); */
}
.left {
  box-sizing: border-box;
  padding: 15px 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background-color: rgba(64, 77, 101, 0.824);
  grid-area: left;
}
.left p {
  color: #fff;
  font-size: 12px;
}
.price span {
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
}
.right {
  box-sizing: border-box;
  padding: 15px 15px;
  background-color: rgba(255, 255, 255, 0.384);
  grid-area: right;
}
.bottom {
  background-color: rgba(235, 238, 240, 0.459);
  grid-area: bottom;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  box-sizing: border-box;
  padding: 10px;
}
.type {
  font-weight: 300;
  align-self: flex-end;
  text-align: right;
}
.type span {
  font-weight: 600;
}
.name {
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  color: rgb(37, 40, 61);
}
.id {
  font-size: 12px;
  line-height: 1;
  color: #aaa;
}
.description {
  color: rgb(170, 170, 170);
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  padding-top: 10px;
  display: flex;
}
.description span {
  color: rgba(37, 40, 61, 0.719);
  font-weight: 600;
  margin-left: 5px;
}
.bold {
  text-transform: uppercase;
  font-weight: 600;
  color: rgb(37, 40, 61);
  line-height: 1;
}
.text {
  color: rgba(73, 75, 100, 0.747);
  line-height: 1;
  margin-bottom: 3px;
}
.btn-save {
  /* margin-top: 20px; */
  font-size: 14px;
  border: 0;
  /* font-weight: 600; */
}
</style>
