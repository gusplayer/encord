<template>
  <div class="sales">
    <el-table
      height="330px"
      :data="listQuotations"
      style="width: 100%"
      stripe
      border
    >
      <el-table-column
        label="Fecha"
        width="140"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{new Date(scope.row.created_at.replace(/ /g, 'T')).getDate()}}/{{new Date(scope.row.created_at.replace(/ /g, 'T')).getMonth() + 1}}/{{new Date(scope.row.created_at.replace(/ /g, 'T')).getFullYear()}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="proyecto.nombre"
        label="Proyecto"
      >
      </el-table-column>
      <el-table-column
        prop="unidad.numero"
        label="Unid."
        width="60px"
      >
      </el-table-column>
      <el-table-column
        prop="clientes.nombre"
        label="Cliente"
      >
      </el-table-column>
      <el-table-column
        prop="total"
        label="Valor"
        :formatter="formatterNum"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("GET_LISTQUOTATIONS");
  },
  data() {
    return {};
  },
  computed: {
    listQuotations() {
      return this.$store.state.listQuotationsData;
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    formatterNum(row, column) {
      if (row.total) {
        return `$${row.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
      }
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
</style>
