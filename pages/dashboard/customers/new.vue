<template>
  <div class="list-costumers">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard/customers">Listado de Clientes</nuxt-link> -
          <span>Nuevo</span>
        </h2>
      </template>
      <div
        slot="section"
        class="section"
      >
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Cedula:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input
                class="inputClinte"
                type="text"
                placeholder="Numero de identificacion"
                v-model="customer.cedula"
              >
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Ciudad de expedición:</p>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-select
                v-model="departamentoExpedicion"
                size="mini"
                placeholder="Departamento"
              >
                <el-option
                  v-for="(item, index) in deparmentsData"
                  :key="`department${index}`"
                  :label="item.nombre"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <el-select
                v-model="customer.ciudad_expedicion"
                size="mini"
                placeholder="Ciudad"
              >
                <el-option
                  v-for="(item, index) in expeditionsCities"
                  :key="`city${index}`"
                  :label="item.nombre"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Nombre completo:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input
                class="inputClinte"
                type="text"
                placeholder="Nombre y apellido"
                v-model="customer.nombre"
              >
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Correo Electronico:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input
                name="email"
                class="inputClinte"
                type="email"
                placeholder="Correo electronico"
                v-model="customer.email"
              >
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Celular:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input
                class="inputClinte"
                type="text"
                placeholder="Celular"
                v-model="customer.telefono"
              >
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Ocupación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input
                name="email"
                class="inputClinte"
                type="email"
                placeholder="Ocupación"
                v-model="customer.ocupacion"
              >
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Edad:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input
                class="inputClinte"
                type="text"
                placeholder="Edad"
                v-model="customer.edad"
              >
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Dirección:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input
                class="inputClinte"
                type="text"
                placeholder="Dirección"
                v-model="customer.direccion"
              >
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Departamento:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select
                v-model="currentDeparment"
                size="mini"
                placeholder="Departamento"
              >
                <el-option
                  v-for="(item, index) in deparmentsData"
                  :key="`department${index}`"
                  :label="item.nombre"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Ciudad:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select
                v-model="customer.ciudad"
                size="mini"
                placeholder="Ciudad"
              >
                <el-option
                  v-for="(item, index) in cities"
                  :key="`city${index}`"
                  :label="item.nombre"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">N_I:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-radio-group v-model="customer.nivel_interes">
                <el-radio-button label="1"></el-radio-button>
                <el-radio-button label="2"></el-radio-button>
                <el-radio-button label="3"></el-radio-button>
              </el-radio-group>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

          </el-col>
          <el-col
            :span="4"
            :offset="8"
          >
            <div
              class="btn-save"
              @click="createCustomer"
            >Guardar</div>
          </el-col>
        </el-row>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "~/components/card";
export default {
  components: {
    Card
  },
  created() {
    this.$store.dispatch("GET_DEPARMENTSWITHCITIES");
  },
  data() {
    return {
      customer: {
        cedula: "",
        // departamentoExpedicion: "",
        ciudad_expedicion: "",
        nombre: "",
        ocupacion: "",
        edad: "",
        email: "",
        telefono: "",
        direccion: "",
        ciudad: "",
        nivel_interes: "",
        estado: 1
      },
      currentDeparment: "",
      departamentoExpedicion: ""
    };
  },
  computed: {
    deparmentsData() {
      return this.$store.state.deparmentsData;
    },
    cities() {
      if (this.deparmentsData && this.currentDeparment) {
        return this.deparmentsData.find(
          deparment => deparment.id == this.currentDeparment
        ).ciudades;
      }
    },
    expeditionsCities() {
      if (this.deparmentsData && this.departamentoExpedicion) {
        return this.deparmentsData.find(
          deparment => deparment.id == this.departamentoExpedicion
        ).ciudades;
      }
    }
  },
  watch: {
    currentDeparment() {
      this.customer.ciudad = "";
    },
    departamentoExpedicion() {
      this.customer.ciudad_expedicion = "";
    }
  },
  methods: {
    async createCustomer() {
      await this.$store.dispatch("CREATE_CUSTOMER", this.customer);
      this.$router.push("/dashboard/customers");
    }
  }
};
</script>

<style scoped>
.list-costumers {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}
div.el-row .btn-save:hover {
  background-color: #caee90;
}
.el-col.el-col-4.el-col-offset-20 {
  display: flex;
  justify-content: flex-end;
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
</style>
