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
        <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
          <el-table-column label="Date" prop="date">
          </el-table-column>
          <el-table-column label="Name" prop="name">
          </el-table-column>
          <el-table-column label="Direccion" prop="address">
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="slot">
              <el-input v-model="search" size="mini" placeholder="Type to search" />
            </template>
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button> -->
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
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-03',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      search: ''
    }
  },
  methods: {
    saveInfo() {
      this.$router.push('/dashboard/customers/new-customer')
    },
    handleEdit() {},
    handleDelete() {}
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
</style>
