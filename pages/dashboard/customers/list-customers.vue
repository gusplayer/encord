<template>
  <div class="list-costumers">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard">Listado de Clientes</nuxt-link>
        </h2>
        <el-button class="btn-save" @click="saveInfo" type="success">Nuevo</el-button>
      </template>
      <div slot="section" class="section">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Fecha" sortable width="100" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]" :filter-method="filterHandler">
          </el-table-column>
          <el-table-column prop="name" label="Photo" width="100">
            <template slot-scope="scope">
              <div class="circle">JD</div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Nombre" width="180">
          </el-table-column>
          <el-table-column prop="address" label="Dirección" :formatter="formatter">
          </el-table-column>
          <el-table-column prop="tag" label="Etiqueta" width="100" :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]" :filter-method="filterTag" filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
export default {
  components: {
    Card
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }
      ]
    }
  },
  methods: {
    saveInfo() {
      this.$router.push('/dashboard/customers/new-customer')
    },
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
.list-costumers {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
