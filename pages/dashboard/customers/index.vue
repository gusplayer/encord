<template>
  <div class="list-costumers">
    <card v-loading="loading">
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard">Listado de Clientes</nuxt-link>
        </h2>
        <nuxt-link to="/dashboard/customers/new">
          <el-button
            class="btn-save"
            type="success"
          >Crear Cliente</el-button>
        </nuxt-link>
      </template>
      <div
        v-if="customersData"
        slot="section"
        class="section"
      >
        <el-table
          v-if="customersData.length"
          :data="customersData"
          style="width: 100%"
          height="350px"
        >
          <el-table-column
            label="Fecha"
            width="110"
          >
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{new Date(scope.row.created_at.replace(/ /g, 'T')).getDate()}}/{{new Date(scope.row.created_at.replace(/ /g, 'T')).getMonth() + 1}}/{{new Date(scope.row.created_at.replace(/ /g, 'T')).getFullYear()}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="nivel_interes"
            label="N.I"
            width="40"
          >
            <template slot-scope="scope">
              <div class="circle">{{scope.row.nivel_interes}}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="nombre"
            label="Nombre"
          >
          </el-table-column>
          <el-table-column
            prop="telefono"
            label="Telefono"
            width="100"
          >
          </el-table-column>
          <el-table-column
            prop="direccion"
            label="Dirección"
            :formatter="formatter"
          >
          </el-table-column>
          <el-table-column
            prop="id"
            label="Etiqueta"
            width="78"
          >
            <template slot-scope="scope">
              <nuxt-link :to="`/dashboard/customers/${scope.row.id}`">
                <el-tag
                  type="success"
                  disable-transitions
                >Ver</el-tag>
              </nuxt-link>
            </template>
          </el-table-column>
        </el-table>
        <div
          v-else
          class="no-data"
        >
          <img
            class="img-data"
            src="../../../assets/no data.png"
            alt=""
          >
          <p class="text">{{profileInfo.nombre}} aun no tienes clientes registrados</p>
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
    this.$store.dispatch("GET_CUSTOMERS");
    if (!this.customersData) {
      this.loading = true;
    }
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    customersData() {
      return this.$store.state.customersData;
    },
    profileInfo() {
      return this.$store.state.profileInfo;
    }
  },
  watch: {
    customersData: function() {
      this.loading = false;
    }
  },
  methods: {
    saveInfo() {
      this.$router.push("/dashboard/customers/new");
    },
    formatter(row, column) {
      return row.direccion || "Sin dirección";
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>

<style scoped>
.list-costumers {
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
  /* height: 400px;
  overflow: auto; */
}
.circle {
  /* background-color: #98c253; */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border: 1px solid #98c253;
  font-size: 12px;
  line-height: 0;
  box-sizing: border-box;
  padding-bottom: 2px;
}
.no-data {
  width: 400px;
  margin: 0 auto;
  display: grid;
  place-items: center;
}
.img-data {
  width: 50%;
}
.text {
  font-weight: 600;
  color: #606468;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 40px;
}
</style>
