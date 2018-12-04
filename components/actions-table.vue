<template>
  <div class="actions">
    <el-table
      height="330px"
      :data="actions"
      style="width: 100%"
      stripe
      border
    >
      <el-table-column
        label="Fecha"
        width="115"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 5px">{{new Date(scope.row.created_at).getDate()}}/{{new Date(scope.row.created_at).getMonth() + 1}}/{{new Date(scope.row.created_at).getFullYear()}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="proyectos.nombre"
        label="Proyecto"
      >
      </el-table-column>
      <el-table-column
        prop="clientes.nombre"
        label="Cliente"
      >
      </el-table-column>
      <el-table-column
        prop="tipo_accion"
        label="Acción"
        width="130"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("GET_LISTACTIONS");
  },
  data() {
    return {};
  },
  computed: {
    actions() {
      return this.$store.state.listActionsData;
    }
  }
};
</script>

<style scoped>
</style>
