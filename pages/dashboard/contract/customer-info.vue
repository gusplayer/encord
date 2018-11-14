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
      <div slot="section" class="section" v-if="currentProject">
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Proyecto:</h3>
          </el-col>
          <el-col :span="7" :offset="5">
            <div class="grid-content" v-if="projects.length">
              <el-select v-model="value" placeholder="Buscar proyecto">
                <el-option v-for="(item, index) in projects" :key="index" :label="item.nombre" :value="item.id">
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
              <p class="item-get">{{currentProject.nombre}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Ciudad:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentProject.ubicacion}}</p>
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
              <p class="item-get">{{currentUnit.price | formatNum}}</p>
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
                <el-option v-for="(item, index) in acabados.floor" :key="index" :label="item.name" :value="item.price">
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
              <el-select v-model="typeKitchen" size="mini" placeholder="Tipo de cocina">
                <el-option v-for="(item, index) in acabados.kitchen" :key="index" :label="item.name" :value="item.price">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Domótica:</p>
          </el-col>
          <el-col :span="12">
            <div>
              <el-radio v-model="checkDomotica" :label="1" size="mini">Si</el-radio>
              <el-radio v-model="checkDomotica" :label="0" size="mini">No</el-radio>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Total Acabados:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="inputClinte">{{total | formatNum}}</p>
              <!-- <input class="inputClinte" type="text" placeholder="Nombre" v-model="total" disabled> -->
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
            <p class="item grid-content">Celular:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Celular" v-model="getCostumer.phone" disabled>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
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
      <!-- Info Separacion -->
      <div slot="section" class="section">
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Separación:</h3>
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
            <p class="item grid-content">Porcentaje de separación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <money class="inputClinte" v-model="separationPercentage" v-bind="percent"></money>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Costo de separación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{separationValue | formatNum}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Separación inicial:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <money class="inputClinte" v-model="inputInitialSeparation" v-bind="money"></money>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Saldo separación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{separationBalance | formatNum}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Fecha limite de separación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-date-picker v-model="paydayLimit" type="date" placeholder="Selecciona un día">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- Info Forma de Pago -->
      <div slot="section" class="section">
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Forma de pago:</h3>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Porcentaje de cuota inicial:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <money class="inputClinte" v-model="initialFeePercentage" v-bind="percent"></money>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Valor cuota inicial:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{initialFee | formatNum}}</p>
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
            <p class="item grid-content">Fecha de inicio primera cuota:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-date-picker v-model="inputDate" type="date" placeholder="Selecciona un día">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Financiación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{financing | formatNum}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="tag"> <span class="bold">Valor Total: </span><span class="total"> {{totalValue | formatNum}}</span></div>
          </el-col>
          <el-col :span="4" :offset="8">
            <div class="btn-save" @click="saveInfo">Guardar</div>
          </el-col>
        </el-row>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
import { Money } from 'v-money'
export default {
  components: {
    Card,
    Money
  },
  data() {
    return {
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '$',
        suffix: '',
        precision: 0,
        masked: false
      },
      percent: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '%',
        precision: 0,
        masked: false
      },
      customers: [
        {
          id: 1,
          document: '123456789',
          name: 'Camilo Diaz',
          phone: '321654987',
          address: 'Calle 15 # 8-45 Villavicencio'
        },
        {
          id: 2,
          document: '1127899999',
          name: 'Diego Coy',
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
        nombre: 'Aria Condominio',
        ubicacion: 'Bogotá',
        price: 250000000,
        id: 1,
        descripcion: '',
        user_id: 0,
        logo: null,
        estado: 0
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
      typeFloor: 0,
      typeKitchen: 0,
      checkDomotica: 0,
      identification: [
        'Cédula',
        'Cédula de Extranjería',
        'NIT',
        'Pasaporte',
        'ID Extranjero',
        'Tarjeta  de Identidad'
      ],
      acabados: {
        floor: [
          {
            name: 'Ninguno',
            price: 0
          },
          {
            name: 'Madera',
            price: 2000000
          },
          {
            name: 'Laminados',
            price: 3000000
          },
          {
            name: 'Porcelanato',
            price: 4000000
          }
        ],
        kitchen: [
          {
            name: 'Ninguno',
            price: 0
          },
          {
            name: 'Opcion 1',
            price: 2000000
          },
          {
            name: 'Opcion 2',
            price: 3000000
          },
          {
            name: 'Opcion 3',
            price: 4000000
          }
        ],
        domotica: 8000000
      },
      // total: 0,
      contracts: [
        'Fiduciario',
        'Promesa de compraventa',
        'En separación (10%)'
      ],
      contract: '',
      inputValue: '',
      inputInitialSeparation: '',
      inputFee: '',
      initialFeePercentage: '',
      separationPercentage: '',
      paydayLimit: '',
      inputDate: '',

      inputIdentification: '',
      inputNombre: '',
      inputCelular: '',
      inputDireccion: ''
    }
  },
  computed: {
    projects() {
      return this.$store.state.projectsData
    },
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
    },
    domoticaPrice() {
      return this.checkDomotica ? this.acabados.domotica : 0
    },
    total() {
      return this.typeFloor + this.typeKitchen + this.domoticaPrice
    },
    totalValue() {
      return this.total + this.currentUnit.price || 0
    },
    separationValue() {
      return this.totalValue * (this.separationPercentage / 100)
    },
    separationBalance() {
      return this.separationValue - this.inputInitialSeparation
    },
    initialFee() {
      return this.totalValue * (this.initialFeePercentage / 100)
    },
    financing() {
      return this.totalValue - this.initialFee
    }
  },
  watch: {
    inputIdentification(value) {
      const result = this.customers.find(customer => customer.document == value)
      if (result) {
        this.getCostumer.id = result.id
        this.getCostumer.document = result.document
        this.getCostumer.name = result.name
        this.getCostumer.phone = result.phone
        this.getCostumer.address = result.address
      } else {
        this.getCostumer.id = ''
        this.getCostumer.document = ''
        this.getCostumer.name = ''
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
  },
  filters: {
    formatNum(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
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
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #b0d871;
  line-height: 1;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
div.el-row .btn-save:hover {
  background-color: #caee90;
}
.el-col.el-col-4.el-col-offset-20 {
  display: flex;
  justify-content: flex-end;
}
div.el-row .tag {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: rgba(103, 123, 158, 0.075);
  border: 1px solid rgba(103, 123, 158, 0.822);
  line-height: 1;
  border-radius: 4px;
  color: rgba(38, 52, 75, 0.6);
}
.total {
  font-size: 20px;
  font-weight: 400;
}
.bold {
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
}
</style>
