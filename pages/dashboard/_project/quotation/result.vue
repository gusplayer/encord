<template>
  <div class="result">
    <card id="quotation">
      <template slot="header">
        <nuxt-link
          class="btn_link"
          to="/dashboard"
          v-if="urlPdf"
        ><i class="icon-left-open-big"></i><span>Salir</span></nuxt-link>
        <nuxt-link
          v-else
          class="btn_link"
          :to="nextRoute"
        ><i class="icon-left-open-big"></i><span>Volver</span></nuxt-link>
        <h2>
          <nuxt-link :to="$route.path">Datos De La Cotización</nuxt-link>
          <!-- <span>/ Datos</span> -->
        </h2>
      </template>
      <div
        class="container-pdf"
        slot="section"
        v-if="urlPdf"
      >
        <iframe
          class="pdf"
          :src="`https://docs.google.com/viewerng/viewer?url=https://administrador.app-encord.com${urlPdf}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`"
          frameborder="0"
        ></iframe>
        <span class="link">Si no puedes visualizar el pdf da click <a
            :href="`https://administrador.app-encord.com${urlPdf}`"
            target="_blank"
          >aquí</a></span>
      </div>
      <div
        slot="section"
        class="section"
        v-else
      >
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
              <el-select
                v-model="typeIdentification"
                size="mini"
                placeholder="Identificación"
              >
                <el-option
                  v-for="(item, index) in identification"
                  :key="index"
                  :label="item"
                  :value="item"
                >
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
              <input
                class="inputClinte"
                type="text"
                placeholder="No. Identificación"
                v-model="inputIdentification"
              >
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Nombre:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input
                class="inputClinte"
                type="text"
                placeholder="Nombre"
                v-model="nameCostumer"
                disabled
              >
            </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Proyecto:</h3>
          </el-col>
          <el-col
            :span="7"
            :offset="5"
          >
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
        <!-- Información de Unidad Vendida  -->
        <br>
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Unidad selecionada:</h3>
          </el-col>
          <el-col
            :span="7"
            :offset="5"
          >
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Nùmero de piso:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <!-- <el-select v-model="flat" size="mini" placeholder="Unidad">
                <el-option v-for="(item, index) in flats" :key="index" :label="item.piso" :value="item.piso">
                </el-option>
              </el-select> -->
              <p class="item-get">{{currentUnit.numero.slice(0,1)}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Nùmero de unidad:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <!-- <el-select v-model="unitNumber" size="mini" placeholder="Unidad">
                <el-option v-for="(item, index) in units" :key="index" :label="item.numero" :value="item.numero">
                </el-option>
              </el-select> -->
              <p class="item-get">{{currentUnit.numero}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Precio básico:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentUnit.valor | formatNum}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Tipo de Unidad:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentUnit.tipo_unidad}}</p>
            </div>
          </el-col>
        </el-row>

        <!-- Info Forma de Pago -->
        <br>
        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Separación:</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Porcentaje de separación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <money
                class="inputClinte"
                v-model="separationPercentage"
                v-bind="percent"
              ></money>
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
              <money
                class="inputClinte"
                v-model="inputInitialSeparation"
                v-bind="money"
              ></money>
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

        <br>

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
              <money
                class="inputClinte"
                v-model="initialFeePercentage"
                v-bind="percent"
              ></money>
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
            <p class="item grid-content">Número de Cuotas:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <input
                class="inputClinte"
                type="text"
                placeholder="Cuotas"
                v-model="inputFee"
              >
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Cuota:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <money
                class="inputClinte"
                v-model="quota"
                v-bind="money"
              ></money>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <p class="item grid-content">Financiación:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{financing | formatNum}}</p>
            </div>
          </el-col>
        </el-row>

        <br>

        <el-row>
          <el-col :span="12">
            <h3 class="grid-content">Observaciones:</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="Escribe alguna observación"
              v-model="comment"
            >
            </el-input>
          </el-col>
        </el-row>

        <!-- Info Acabados -->
        <br>
        <el-row v-if="currentFinishes.length">
          <el-col :span="12">
            <h3 class="grid-content">Acabados:</h3>
          </el-col>
          <el-col
            :span="7"
            :offset="5"
          >
          </el-col>
        </el-row>
        <el-row v-if="currentFinishes.length">
          <el-table
            :data="currentFinishes"
            style="width: 100%"
          >
            <el-table-column
              prop="tipos_acabados.nombre"
              label="Nombre"
              width="180"
            >
            </el-table-column>
            <el-table-column
              prop="valor"
              label="Precio"
              :formatter="formatNum"
            >
            </el-table-column>
            <el-table-column
              prop="tipos_acabados.imagen"
              label="Foto"
            >
              <!-- <template slot-scope="scope">
                <img
                    :src="`https://administrador.app-encord.com/imagenes_tipos_acabados/${scope.row.tipos_acabados.imagen}`"
                    class="finish_image"
                  >
              </template> -->
            </el-table-column>
          </el-table>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="tag"> <span class="bold">Valor Total: </span><span class="total">{{ totalValue | formatNum }}</span></div>
          </el-col>
          <el-col
            :span="4"
            :offset="8"
          >
            <div
              class="btn-save"
              @click="saveQuotation"
            >Guardar</div>
          </el-col>
        </el-row>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "@/components/card";
import jsPDF from "jspdf";
import canvas from "html2canvas";
import domtoimage from "dom-to-image";
import { Money } from "v-money";

export default {
  components: {
    Card,
    Money
  },
  created() {
    this.$store.dispatch("GET_CUSTOMERS");
    this.$store.dispatch("GET_TYPESCONTRACTS");
  },
  mounted() {
    if (!this.currentUnit) {
      this.$router.push("/dashboard/");
    }
  },
  destroyed() {
    this.$store.commit("SET_RESETPDFQUOTATION", "");
  },
  data() {
    return {
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "$",
        suffix: "",
        precision: 0,
        masked: false
      },
      percent: {
        decimal: ",",
        thousands: ".",
        prefix: "",
        suffix: "%",
        precision: 0,
        masked: false
      },
      InfoQuotation: {
        acabados: "",
        clientes_id: 0,
        proyecto_id: 0,
        unidad_id: 0,
        total: 0,
        valor_separacion: 0,
        observaciones: "",
        financiacion: 0,
        valor_cuota: 0,
        numero_cuotas: 0,
        valor_saldo_cuota_inicial: 0,
        valor_cuota_inicial_unidad: 0
      },
      identification: [
        "Cédula",
        "Cédula de Extranjería",
        "NIT",
        "Pasaporte",
        "ID Extranjero",
        "Tarjeta  de Identidad"
      ],
      inputIdentification: "",
      nameCostumer: "",
      typeIdentification: "",
      separationPercentage: "",
      inputInitialSeparation: "",
      initialFeePercentage: "",
      inputFee: "",
      inputDate: "",
      comment: ""
    };
  },
  computed: {
    nextRoute() {
      if (this.currentUnit.acabados.length) {
        return `/dashboard/${this.$route.params.project}/quotation/finishes`;
      } else {
        return `/dashboard/${this.$route.params.project}/quotation/apartment`;
      }
    },
    customers() {
      return this.$store.state.customersData;
    },
    currentProject() {
      return this.$store.state.currentProject;
    },
    currentUnit() {
      return this.$store.state.currentUnit;
    },
    currentFinishes() {
      return this.$store.state.currentFinishes;
    },
    totalValue() {
      return (
        this.currentFinishes.reduce((total, finish) => {
          return total + parseInt(finish.valor);
        }, 0) + parseInt(this.currentUnit.valor) || 0
      );
    },
    // totalValue() {
    //   return this.total + parseInt(this.currentUnit.valor) || 0;
    // },
    typesContractsData() {
      return this.$store.state.typesContractsData;
    },
    separationValue() {
      return (
        parseInt(this.totalValue) * (parseInt(this.separationPercentage) / 100)
      );
    },
    separationBalance() {
      return this.separationValue - this.inputInitialSeparation;
    },
    initialFee() {
      return this.totalValue * (this.initialFeePercentage / 100);
    },
    quota() {
      return this.initialFee / this.inputFee || 0;
    },
    financing() {
      return this.totalValue - this.initialFee - this.separationValue;
    },
    totalValueInitial() {
      return this.separationValue + this.initialFee;
    },
    urlPdf() {
      if (this.$store.state.pdfQuotation) {
        return this.$store.state.pdfQuotation;
      }
    }
  },
  methods: {
    formatNum(row, column) {
      if (row.valor) {
        return `$${row.valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
      } else {
        return "$0";
      }
    },
    async createQuotation() {
      this.InfoQuotation.acabados = JSON.stringify(this.currentFinishes);
      this.InfoQuotation.proyecto_id = this.currentProject.id;
      this.InfoQuotation.unidad_id = this.currentUnit.id;
      this.InfoQuotation.total = parseInt(this.totalValue) || 0;
      this.InfoQuotation.valor_separacion = parseInt(this.separationValue) || 0;
      this.InfoQuotation.valor_cuota_inicial_unidad =
        parseInt(this.totalValueInitial) || 0;
      this.InfoQuotation.valor_saldo_cuota_inicial =
        parseInt(this.initialFee) || 0;
      this.InfoQuotation.numero_cuotas = parseInt(this.inputFee) || 0;
      this.InfoQuotation.valor_cuota = parseInt(this.quota) || 0;
      this.InfoQuotation.financiacion = parseInt(this.financing) || 0;
      this.InfoQuotation.observaciones = this.comment;
      await this.$store.dispatch("CREATE_QUOTATION", this.InfoQuotation);
    },
    saveQuotation() {
      this.$store.dispatch("GET_CUSTOMERS");
      this.createQuotation();
    }
  },
  watch: {
    inputIdentification(value) {
      const result = this.customers.find(customer => customer.cedula == value);
      if (result) {
        this.nameCostumer = result.nombre;
        this.InfoQuotation.clientes_id = result.id;
      } else {
        this.nameCostumer = "";
      }
    }
  },
  filters: {
    formatNum(value) {
      let num;
      if (value) {
        num = value.toFixed(2);
        return `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
      }
    }
  }
};
</script>

<style scoped>
h2 {
  font-weight: 400;
  color: #98c253;
}
.container {
  display: flex;
}
.left {
  flex: 0.5;
}
.right {
  flex: 1;
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  border-left: 2px solid #eee;
  margin-left: 10px;
}
.section {
  padding: 20px 40px;
}

.result {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  overflow: auto;
  padding: 20px 0;
}
a.nuxt-link-active {
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
}
.section > div.el-row {
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(168, 187, 219, 0.301);
}
.section > div.el-row:first-child {
  border: 0;
}
.section > div.el-row:last-child {
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
.finish_image {
  width: 125px;
  height: 125px;
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
div.el-input__inner {
  padding-left: 0 !important;
  background-color: transparent !important;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}
div.el-row :first-child {
  border: 0;
}
div.el-row:last-child {
  border: 0;
}
.pdf {
  width: 100%;
  height: 900px;
}
.container-pdf {
  width: 100%;
  /* height: 400px; */
}
.btn_link {
  cursor: pointer;
  display: flex;
  text-decoration: none;
  color: #98c253;
  font-size: 16px;
}
.btn_link i {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  font-size: 16px;
  height: 19px;
  margin-right: 5px;
}
.link {
  color: #aaa;
  width: 100%;
  text-align: center;
  display: inline-block;
}
</style>