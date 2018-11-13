<template>
  <div class="info">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard/5">Formulario de contrato</nuxt-link>
          <!-- <span>/ Datos</span> -->
        </h2>
      </template>
      <!-- Info proyecto -->
      <div slot="section" class="section">
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Proyecto:</h3>
          </el-col>
          <el-col :span="7" :offset="5">
            <div class="grid-content">
              <el-select v-model="value" placeholder="Buscar proyecto">
                <el-option v-for="item in projects" :key="item.value" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Nombre del Proyecto:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentProject.name}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Ciudad:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentProject.city}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- Información de Unidad Vendida  -->
      <div slot="section" class="section">
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Unidad Vendida:</h3>
          </el-col>
          <el-col :span="7" :offset="5">
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">No. Unidad Vendida:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select v-model="unitNumber" size="mini" placeholder="Unidad">
                <el-option v-for="(item, index) in units" :key="index" :label="item.unit" :value="item.unit">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Precio:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentUnit.price}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Habitaciones:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentUnit.bedrooms}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Baños:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentUnit.bathrooms}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Area:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentUnit.area}}</p>
            </div>
          </el-col>
        </el-row>
      </div>

      <!--  Info Acabados  -->
      <div slot="section" class="section">
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Acabados:</h3>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Piso:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select v-model="typeFloor" size="mini" placeholder="Tipo de piso">
                <el-option v-for="(item, index) in floors" :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Cocina:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select v-model="typeFloor" size="mini" placeholder="Tipo de cocina">
                <el-option v-for="(item, index) in floors" :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Domotica:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select v-model="typeFloor" size="mini" placeholder="Tipo de cocina">
                <el-option v-for="(item, index) in floors" :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- Info Comprador -->
      <div slot="section" class="section">
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Cliente:</h3>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Identificación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select v-model="typeIdentification" size="mini" placeholder="Identificación">
                <el-option v-for="(item, index) in identification" :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">No. Identificación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="No. Identificación" v-model="inputIdentification">
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Nombre:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Nombre" v-model="getCostumer.name" disabled>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Apellido:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Apellido" v-model="getCostumer.lastName" disabled>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Celular:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Celular" v-model="getCostumer.phone" disabled>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Dirección:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Dirección" v-model="getCostumer.address" disabled>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- Info forma de pago -->
      <div slot="section" class="section">
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Forma de pago:</h3>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Tipo de contrato:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select v-model="contract" size="mini" placeholder="Contratos">
                <el-option v-for="(item, index) in contracts" :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Valor:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Valor" v-model="inputValue">
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Nùmero de Cuotas:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Cuotas" v-model="inputFee">
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Fecha de inicio:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-date-picker v-model="inputDate" type="date" placeholder="Selecciona un día">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" :offset="20">
            <el-button class="btn-save" @click="saveInfo" type="success">Guardar</el-button>
          </el-col>
        </el-row>
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
      projects: [
        {
          name: 'Aria Condominio',
          city: 'Bogotá',
          price: 250000000,
          bedrooms: 3,
          area: '80 m2',
          id: 1
        },
        {
          name: 'Dublin',
          city: 'Bogotá',
          price: 200000000,
          bedrooms: 2,
          area: '65 m2',
          id: 2
        },
        {
          name: 'Armonia',
          city: 'Villavicencio',
          price: 180000000,
          bedrooms: 4,
          area: '60 m2',
          id: 3
        },
        {
          name: 'Messantia',
          city: 'Medellin',
          price: 195000000,
          bedrooms: 4,
          area: '78 m2',
          id: 4
        }
      ],
      customers: [
        {
          id: 1,
          document: '123456789',
          name: 'Camilo',
          lastName: 'Diaz',
          phone: '321654987',
          address: 'Calle 15 # 8-45 Villavicencio'
        },
        {
          id: 2,
          document: '1127899999',
          name: 'Diego',
          lastName: 'Coy',
          phone: '321789456',
          address: 'Carrera 85 # 2-95 Bogota'
        }
      ],
      units: [
        {
          unit: '801',
          area: '85 m2',
          price: 260000000,
          bedrooms: 4,
          bathrooms: 2
        },
        {
          unit: '802',
          area: '65 m2',
          price: 150000000,
          bedrooms: 3,
          bathrooms: 2
        },
        {
          unit: '803',
          area: '78 m2',
          price: 130000000,
          bedrooms: 3,
          bathrooms: 2
        }
      ],
      value: '',
      emptyProject: {
        name: 'Aria Condominio',
        city: 'Bogotá',
        price: 250000000,
        bedrooms: 3,
        area: '80 m2',
        id: 1
      },
      getCostumer: {
        id: '',
        document: '',
        name: '',
        lastName: '',
        phone: '',
        address: ''
      },
      emptyUnit: {
        unit: '',
        area: '',
        price: 0,
        bedrooms: 0,
        bathrooms: 0
      },
      unitNumber: '',
      typeIdentification: '',
      typeFloor: '',
      identification: [
        'Cédula',
        'Cédula de Extranjería',
        'NIT',
        'Pasaporte',
        'ID Extranjero',
        'Tarjeta  de Identidad'
      ],
      floors: [
        'Madera',
        'Laminados',
        'Cerámicas y porcelanatos',
        'Piedra',
      ],
      contracts: ['Fiduciario', 'Promesa de compraventa'],
      contract: '',
      inputValue: '',
      inputFee: '',
      inputDate: '',

      inputIdentification: '',
      inputNombre: '',
      inputApellido: '',
      inputCelular: '',
      inputDireccion: ''
    }
  },
  computed: {
    currentProject() {
      return (
        this.projects.find(project => project.id == this.value) ||
        this.emptyProject
      )
    },
    currentUnit() {
      return (
        this.units.find(unit => unit.unit == this.unitNumber) || this.emptyUnit
      )
    }
  },
  watch: {
    inputIdentification(value) {
      const result = this.customers.find(customer => customer.document == value)
      if (result) {
        this.getCostumer.id = result.id
        this.getCostumer.document = result.document
        this.getCostumer.name = result.name
        this.getCostumer.lastName = result.lastName
        this.getCostumer.phone = result.phone
        this.getCostumer.address = result.address
      } else {
        this.getCostumer.id = ''
        this.getCostumer.document = ''
        this.getCostumer.name = ''
        this.getCostumer.lastName = ''
        this.getCostumer.phone = ''
        this.getCostumer.address = ''
      }
    }
  },
  methods: {
    saveInfo() {
      this.$store.state.infoContract = {
        customer: this.getCostumer,
        project: this.currentProject
      }
      this.$router.push('/dashboard/contract/contract')
    }
  }
}
</script>

<style scoped>
.info {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  overflow: auto;
  padding: 20px 0;
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
  padding: 0 40px 20px 40px;
}
.section:last-child {
  padding-bottom: 0;
}
.item {
  color: rgba(43, 54, 73, 0.781);
  font-weight: 400;
  font-size: 18px;
  padding-left: 15px;
  /* padding-bottom: 10px; */
}
div.el-row {
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(168, 187, 219, 0.301);
  /* padding-left: 0;
  background-color: transparent; */
}
div.el-row :first-child {
  border: 0;
}
div.el-row:last-child {
  border: 0;
}
.el-select {
  width: 100% !important;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
.el-input__inner {
  padding-left: 0;
  background-color: transparent;
}
h3 {
  color: #98c253;
  font-weight: 400;
}
.item-get {
  color: rgba(103, 123, 158, 0.822);
  font-weight: 300;
  font-size: 18px;
}
.background {
  background-color: rgba(214, 229, 255, 0.178);
}
.inputClinte {
  background-color: transparent;
  font-size: 18px;
  font-weight: 300;
  color: rgba(103, 123, 158, 0.822);
}
.inputClinte:focus {
  border: 0;
  outline: 0;
}
.inputClinte::placeholder {
  color: rgba(103, 123, 158, 0.822);
  opacity: 0.5;
  font-weight: 300;
}
div.el-input__inner {
  padding-left: 0 !important;
  background-color: transparent !important;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
.btn-save {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
}
.el-col.el-col-4.el-col-offset-20 {
  display: flex;
  justify-content: flex-end;
}
</style>
