<template>
  <div class="accion">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard/customers/${currentCustomer.id}`">{{currentCustomer.nombre}}</nuxt-link> -
          <span>Nueva Accion</span>
        </h2>
      </template>
      <div slot="section" class="section">
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Tipo de acción:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select v-model="action.tipo_accion" size="mini" placeholder="Tipo de acción">
                <el-option v-for="(item, index) in actionTypes" :key="`actionType${index}`" :label="item.nombre" :value="item.nombre">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Descripción:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input class="inputClinte" type="text" placeholder="Descripción" v-model="action.descripcion">
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Fecha:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-date-picker
                v-model="action.fecha"
                type="date"
                placeholder="Selecciona un día"
                format="yyyy/MM/dd"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Hora:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
                <el-time-picker
                    v-model="action.hora"
                    :picker-options="{
                        selectableRange: '06:30:00 - 22:30:00'
                    }"
                    value-format="hh:mm:ss"
                    placeholder="Escoge la hora">
                </el-time-picker>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

          </el-col>
          <el-col :span="4" :offset="8">
            <div class="btn-save" @click="createAction">Crear</div>
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
  created() {
  },
  data() {
    return {
        action: {
            cliente: "1",
            tipo_accion: "",
            descripcion: "",
            fecha: "",
            hora: ""
        },
        actionTypes: [
            {
                nombre: 'Llamada'
            },
            {
                nombre: 'Visita'
            },
            {
                nombre: 'Mensaje de texto'
            }
        ]
    }
  },
  computed: {
      currentCustomer() {
          return this.$store.state.currentCustomer
      }
  },
  methods: {
      async createAction() {
          this.action.cliente = this.currentCustomer.id
          await this.$store.dispatch('CREATE_ACTION', this.action)
          this.$router.push(`/dashboard/customers/${this.currentCustomer.id}`)
      }
  }
}
</script>

<style scoped>
.accion {
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
