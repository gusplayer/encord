<template>
  <div class="info">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard/5">Formulario</nuxt-link>
          <span>/ Datos</span>
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
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Precio:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentProject.price}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Habitaciones:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentProject.bedrooms}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Area:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentProject.area}}</p>
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
            <p class="item grid-content">Cedula:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Cedula" v-model="inputCedula">
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Nombre:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Nombre" v-model="getCostumer.name">
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Apellido:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Apellido" v-model="getCostumer.lastName">
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Celular:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Celular" v-model="getCostumer.phone">
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Dirección:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Dirección" v-model="getCostumer.address">
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
              <input class="inputClinte" type="text" placeholder="Cuotas" v-model="InputFee">
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
            <el-button class="btn-save" type="success">Guardar</el-button>
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
          document: '1127877876',
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
      value: '',
      pisos: [],
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
      contracts: ['Fiduciario', 'Promesa de compraventa'],
      contract: '',
      inputValue: '',
      inputFee: '',
      inputDate: '',

      inputCedula: '',
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
    }
  },
  watch: {
    inputCedula(value) {
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
}
div.el-input__inner {
  padding-left: 0 !important;
  background-color: transparent !important;
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
