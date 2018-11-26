<template>
  <div class="price-list">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/${$route.params.project}`">{{currentProject.nombre}} </nuxt-link>
          <span>- Lista de Precios</span>
        </h2>
      </template>
      <div slot="section" class="section">
        <el-table height="400px" :data="sentFlats" stripe style="width: 100%;">
          <el-table-column prop="id" label="ID" width="60">
            <template slot-scope="scope">
              <p>#{{scope.row.id}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="piso" label="Piso" width="100">
            <template slot-scope="scope">
              <p><strong>Piso {{ scope.row.piso }}</strong></p>
            </template>
          </el-table-column>
          <el-table-column prop="imagen" label="Foto" width="200">
            <template slot-scope="scope">
              <img :src="`https://administrador.app-encord.com/imagenes_pisos/${scope.row.imagen}`" class="piso__imagen">
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <div class="piso_action">
                <el-button>Ver apartamentos</el-button>
              </div>
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
  created() {
    this.ifExistProject()
    if(!this.sentFlats.length) {
      this.$store.dispatch('GET_FLOORS', this.currentProject.id)
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
  },
  computed: {
    currentProject() {
      return this.$store.state.currentProject
    },
    sentFlats() {
      return this.$store.state.sentFlats
    }
  },
  methods: {
    ifExistProject() {
      if(!this.currentProject) {
        this.$router.push('/dashboard')
      }
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
.piso__imagen {
  width: 200px;
}
.piso_action {
  width: 100%;
  display: grid;
  justify-content: center;
}
</style>