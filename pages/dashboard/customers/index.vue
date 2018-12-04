<template>
  <div class="list-costumers">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard">Listado de Clientes</nuxt-link>
        </h2>
        <nuxt-link to="/dashboard/customers/new">
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
          :data="customersData"
          style="width: 100%"
        >
          <el-table-column
            prop="created_at"
            label="Fecha"
            width="100"
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column
            prop="nivel_interes"
            label="N_I"
            width="45"
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
            width="80"
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
    customersData() {
      return this.$store.state.customersData;
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
}
.circle {
  /* background-color: #98c253; */
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border: 1px solid #98c253;
  font-size: 18px;
  line-height: 0;
  box-sizing: border-box;
  padding-bottom: 2px;
}
</style>
