<template>
  <div class="customer">
    <card v-if="currentCustomer">
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard/customers">Listado de Clientes</nuxt-link> -
          <span>{{currentCustomer.nombre}}</span>
        </h2>
        <nuxt-link :to="`${$route.path}/accion`">
          <el-button
            class="btn-save"
            type="success"
          >Nuevo</el-button>
        </nuxt-link>
      </template>
      <div
        slot="section"
        class="section"
      >
        <el-table
          :data="actionsData"
          style="width: 100%"
        >
          <el-table-column
            prop="fecha"
            label="Fecha"
            width="100"
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <!-- <el-table-column label="Photo" width="60">
            <template slot-scope="scope">
              <div class="circle">JD</div>
            </template>
          </el-table-column> -->
          <el-table-column
            prop="hora"
            label="Hora"
          >
          </el-table-column>
          <el-table-column
            prop="tipo_accion"
            label="Acción"
            width="100"
          >
          </el-table-column>
          <el-table-column
            prop="descripcion"
            label="Descripción"
          >
          </el-table-column>
          <!-- <el-table-column label="Etiqueta" width="80">
            <template slot-scope="scope">
              <el-tag type="success" disable-transitions>Ver</el-tag>
            </template>
          </el-table-column> -->
        </el-table>
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
    this.$store.dispatch("GET_ACTIONS_BY_CUSTOMER", this.$route.params.id);
  },
  data() {
    return {
      tableData: [
        {
          date: "2018-05-03",
          name: "Tom Coy",
          phone: "321654987",
          address: "No. 189, Grove St",
          tag: "Ver"
        },
        {
          date: "2018-05-02",
          name: "Tom Coy",
          phone: "321654987",
          address: "No. 189, Grove St",
          tag: "Ver"
        },
        {
          date: "2018-05-04",
          name: "Tom Coy",
          phone: "321654987",
          address: "No. 189, Grove St",
          tag: "Ver"
        },
        {
          date: "2018-05-01",
          name: "Tom Coy",
          phone: "321654987",
          address: "No. 189, Grove St",
          tag: "Ver"
        }
      ]
    };
  },
  computed: {
    actionsData() {
      return this.$store.state.actionsData;
    },
    currentCustomer() {
      return this.$store.state.currentCustomer;
    }
  },
  methods: {
    saveInfo() {
      this.$router.push("/dashboard/customers/new");
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
.customer {
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
  font-size: 12px;
  color: #aaa;
}
.section {
  padding: 0px 40px;
  max-width: 700px;
}
.circle {
  background-color: #98c253;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  color: #fff;
  font-size: 20px;
  line-height: 0;
  box-sizing: border-box;
  padding-bottom: 5px;
}
</style>
