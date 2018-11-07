<template>
  <div class="sales">
    <el-table height="330px" :data="tableData" style="width: 100%" stripe border>
      <el-table-column prop="mounth" label="Mes" :filters="[{text: 'Octubre', value: 'Octubre'}, {text: 'Septiembre', value: 'Septiembre'}, {text: 'Diciembre', value: 'Diciembre'}, {text: 'Agosto', value: 'Agosto'}]" :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="project" label="Proyecto">
      </el-table-column>
      <el-table-column prop="flat" label="Piso/Unid." width="90px">
      </el-table-column>
      <el-table-column prop="customer" label="Cliente">
      </el-table-column>
      <el-table-column prop="price" label="Valor">
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
  data() {
    return {
      tableData: [
        {
          mounth: 'Octubre',
          project: 'Aria Condominio',
          flat: '106',
          customer: 'Diego Coy',
          price: '250.000.000',
          tag: 'Home'
        },
        {
          mounth: 'Octubre',
          project: 'Aria Condominio',
          flat: '306',
          customer: 'Diego Coy',
          price: '250.000.000',
          tag: 'Office'
        },
        {
          mounth: 'Septiembre',
          project: 'Aria Condominio',
          flat: '108',
          customer: 'Diego Coy',
          price: '250.000.000',
          tag: 'Home'
        },
        {
          mounth: 'Octubre',
          project: 'Aria Condominio',
          flat: '205',
          customer: 'Diego Coy',
          price: '250.000.000',
          tag: 'Home'
        },
        {
          mounth: 'Octubre',
          project: 'Tom',
          flat: '106',
          customer: 'Diego Coy',
          price: '250.000.000',
          tag: 'Office'
        },
        {
          mounth: 'Septiembre',
          project: 'Tom',
          flat: '106',
          customer: 'Diego Coy',
          price: '250.000.000',
          tag: 'Home'
        },
        {
          mounth: 'Diciembre',
          project: 'Tom',
          flat: '106',
          customer: 'Diego Coy',
          price: '250.000.000',
          tag: 'Office'
        }
      ]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>

<style scoped>
</style>
