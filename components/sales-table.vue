<template>
  <div class="sales">
    <el-table
      height="330px"
      :data="listSales"
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
          <span style="margin-left: 10px">{{new Date(scope.row.created_at).getDate()}}/{{new Date(scope.row.created_at).getMonth()}}/{{new Date(scope.row.created_at).getFullYear()}}</span>
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
        width="70px"
      >
      </el-table-column>
      <el-table-column
        prop="clientes.nombre"
        label="Cliente"
      >
      </el-table-column>
      <el-table-column
        prop="unidad.valor"
        label="Valor"
        :formatter="formatterNum"
      >
      </el-table-column>
      <!-- <el-table-column prop="tag" label="Etiqueta" :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]" :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("GET_LISTCONTRACTS");
  },
  data() {
    return {
      tableData: [
        {
          mounth: "Octubre",
          project: "Aria Condominio",
          flat: "106",
          customer: "Diego Coy",
          price: "250.000.000",
          tag: "Home"
        },
        {
          mounth: "Octubre",
          project: "Aria Condominio",
          flat: "306",
          customer: "Diego Coy",
          price: "250.000.000",
          tag: "Office"
        },
        {
          mounth: "Septiembre",
          project: "Aria Condominio",
          flat: "108",
          customer: "Diego Coy",
          price: "250.000.000",
          tag: "Home"
        },
        {
          mounth: "Octubre",
          project: "Aria Condominio",
          flat: "205",
          customer: "Diego Coy",
          price: "250.000.000",
          tag: "Home"
        },
        {
          mounth: "Octubre",
          project: "Tom",
          flat: "106",
          customer: "Diego Coy",
          price: "250.000.000",
          tag: "Office"
        },
        {
          mounth: "Septiembre",
          project: "Tom",
          flat: "106",
          customer: "Diego Coy",
          price: "250.000.000",
          tag: "Home"
        },
        {
          mounth: "Diciembre",
          project: "Tom",
          flat: "106",
          customer: "Diego Coy",
          price: "250.000.000",
          tag: "Office"
        }
      ]
    };
  },
  computed: {
    listSales() {
      return this.$store.state.listContractsData;
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    formatterNum(row, column) {
      if (row.unidad.valor) {
        return `$${row.unidad.valor
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
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
