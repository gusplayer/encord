<template>
  <div class="price-list">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">{{nameProject}} </nuxt-link>
          <span>- Lista de Precios</span>
        </h2>
      </template>
      <div slot="section" class="section">
        <el-table height="400px" :data="tableData" stripe style="width: 100%;">
          <el-table-column prop="id" label="ID" width="40">
          </el-table-column>
          <el-table-column prop="unity" label="Unidad" width="100">
          </el-table-column>
          <el-table-column prop="area" label="Area">
          </el-table-column>
          <el-table-column prop="bedrooms" label="Habitaciones">
          </el-table-column>
          <el-table-column prop="bathrooms" label="Baños">
          </el-table-column>
          <el-table-column class-name="bold" label="Precio" prop="price">

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
  computed: {
    nameProject() {
      return this.$store.state.sentInfo.nombre
    }
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          unity: '101',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '3',
          price: '$250.000.000'
        },
        {
          id: '2',
          unity: '102',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$280.000.000'
        },
        {
          id: '3',
          unity: '103',
          area: '65 m2',
          bedrooms: '3',
          bathrooms: '2',
          price: '$150.000.000'
        },
        {
          id: '4',
          unity: '104',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$250.000.000'
        },
        {
          id: '5',
          unity: '105',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$250.000.000'
        },
        {
          id: '6',
          unity: '106',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$350.000.000'
        },
        {
          id: '7',
          unity: '201',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$250.000.000'
        },
        {
          id: '8',
          unity: '202',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$250.000.000'
        },
        {
          id: '9',
          unity: '203',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$250.000.000'
        },
        {
          id: '10',
          unity: '204',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$250.000.000'
        },
        {
          id: '11',
          unity: '205',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$250.000.000'
        },
        {
          id: '12',
          unity: '206',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$250.000.000'
        },
        {
          id: '13',
          unity: '301',
          area: '65 m2',
          bedrooms: '2',
          bathrooms: '2',
          price: '$250.000.000'
        }
      ]
    }
  }
}
</script>

<style scoped>
.price-list {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
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
.container {
  display: flex;
}
.col {
  min-height: 315px;
}
.left {
  flex: 0.2;
  margin-right: 5px;
  max-height: 30 0px;
}
.right {
  flex: 1;
  max-width: 560px;
  max-height: 350px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  padding: 20px 40px;
  /* max-height: 500px; */
  /* overflow: auto; */
}
.bold {
  font-weight: 600;
}
</style>