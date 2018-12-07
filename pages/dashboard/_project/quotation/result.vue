<template>
  <div class="result">
    <card id="quotation">
      <template slot="header">
        <h2>
          <nuxt-link :to="$route.path">Datos De La Cotización</nuxt-link>
          <!-- <span>/ Datos</span> -->
        </h2>
      </template>
      <div
        slot="section"
        class="section"
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
            <p class="item grid-content">Precio:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <p class="item-get">{{currentUnit.valor | formatPrice}}</p>
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
        <el-row class="background">
          <el-col :span="12">
            <p class="item grid-content">Tipo de contrato:</p>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select
                v-model="contract"
                size="mini"
                placeholder="Contratos"
              >
                <el-option
                  v-for="(item, index) in typesContractsData"
                  :key="index"
                  :label="item.titulo"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
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
            <!-- <el-table-column
                prop="date"
                label="Date"
                width="180">
            </el-table-column> -->
            <el-table-column
              prop="tipos_acabados.nombre"
              label="Nombre"
              width="180"
            >
            </el-table-column>
            <el-table-column
              prop="valor"
              label="Precio"
              :formatter="formatPrice"
            >
            </el-table-column>
            <el-table-column
              prop="tipos_acabados.imagen"
              label="Foto"
            >
              <template slot-scope="scope">
                <!-- <img
                    :src="`https://administrador.app-encord.com/imagenes_tipos_acabados/${scope.row.tipos_acabados.imagen}`"
                    class="finish_image"
                  > -->
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="tag"> <span class="bold">Valor Total: </span><span class="total">{{ total | formatPrice }}</span></div>
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

export default {
  components: {
    Card
  },
  created() {
    this.$store.dispatch("GET_CUSTOMERS");
    this.$store.dispatch("GET_TYPESCONTRACTS");
  },
  data() {
    return {
      InfoQuotation: {
        acabados: "",
        clientes_id: 0,
        proyecto_id: 0,
        unidad_id: 0,
        total: 0
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
      typeIdentification: ""
    };
  },
  computed: {
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
    total() {
      return (
        this.currentFinishes.reduce((total, finish) => {
          return total + parseInt(finish.valor);
        }, 0) + parseInt(this.currentUnit.valor) || 0
      );
    },
    typesContractsData() {
      return this.$store.state.typesContractsData;
    }
  },
  methods: {
    formatPrice(row, column) {
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
      this.InfoQuotation.total = this.total;
      await this.$store.dispatch("CREATE_QUOTATION", this.InfoQuotation);
    },
    saveQuotation() {
      const canva = document.getElementById("quotation");
      domtoimage.toPng(canva).then(result => {
        let img = new Image();
        img.src = result;

        let pdfName = "test";
        var doc = new jsPDF("p", "pt", "a4", true);
        doc.addImage(
          img,
          "PNG",
          0,
          0,
          600,
          canva.clientHeight - 80,
          "",
          "FAST"
        );
        doc.save(pdfName + ".pdf");
        this.$router.push(`/dashboard`);
      });
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
    formatPrice(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
      } else {
        return "$0";
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
</style>