<template>
  <div
    class="info"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    element-loading-text="Generando pdf..."
  >
    <card>
      <template slot="header">
        <h2 v-if="urlPdf">
          <nuxt-link to="/dashboard/contract/list-contracts"><i class="icon-left-open-big"></i><span>Salir</span></nuxt-link>
        </h2>
        <h2 v-else>
          <nuxt-link to="/dashboard/contract/customer-info">Formulario de contrato</nuxt-link>
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
      <!-- Info proyecto -->
      <template v-else>
        <div
          slot="section"
          class="section"
          v-if="currentProject"
        >
          <el-row>
            <el-col :span="12">
              <h3 class="grid-content">Proyecto:</h3>
            </el-col>
            <el-col :span="12">
              <div
                class="grid-content text-right"
                v-if="projects.length"
              >
                <el-select
                  v-model="value"
                  placeholder="Buscar proyecto"
                  v-validate="'required'"
                  data-vv-name="value"
                  data-vv-as="Proyecto"
                >
                  <el-option
                    v-for="(item, index) in projects"
                    :key="index"
                    :label="item.nombre"
                    :value="item.nombre"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <p class="error">{{ errors.first('value') }}</p>
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
        <div
          slot="section"
          class="section"
        >
          <el-row>
            <el-col :span="12">
              <h3 class="grid-content">Unidad Vendida:</h3>
            </el-col>
            <el-col
              :span="7"
              :offset="5"
            >
            </el-col>
          </el-row>
          <el-row class="background">
            <el-col :span="12">
              <p class="item grid-content">Número de piso:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <el-select
                  v-model="flat"
                  size="mini"
                  placeholder="Unidad"
                  v-validate="'required'"
                  data-vv-name="flat"
                  data-vv-as="Piso"
                >
                  <el-option
                    v-for="(item, index) in sentFlats"
                    :key="index"
                    :label="item.piso"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <p class="error">{{ errors.first('flat') }}</p>
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Nùmero de unidad:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <el-select
                  v-model="unitNumber"
                  size="mini"
                  placeholder="Unidad"
                >
                  <el-option
                    v-for="(item, index) in sentUnits"
                    :key="index"
                    :label="item.numero"
                    :value="item.numero"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row class="background">
            <el-col :span="12">
              <p class="item grid-content">Precio básico:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <p class="item-get">{{currentUnit.valor - inputDescuento | formatNum}}</p>
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
          <el-row class="background">
            <el-col :span="12">
              <p class="item grid-content">Area Total:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <input
                  class="inputClinte"
                  type="text"
                  placeholder="Area Total"
                  v-model="descripcion.areaTotal"
                >
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Area Habitable:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <input
                  class="inputClinte"
                  type="text"
                  placeholder="Area Habitable"
                  v-model="descripcion.areaHabitable"
                >
              </div>
            </el-col>
          </el-row>
          <el-row class="background">
            <el-col :span="12">
              <p class="item grid-content">Area Balcón:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <input
                  class="inputClinte"
                  type="text"
                  placeholder="Area Balcon"
                  v-model="descripcion.areaBalcon"
                >
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Tipo de Apartamento:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <input
                  class="inputClinte"
                  type="text"
                  placeholder="Tipo de Apartamento"
                  v-model="descripcion.tipoApartamento"
                >
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Descuento:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <money
                  class="inputClinte"
                  v-model="inputDescuento"
                  v-bind="money"
                ></money>
              </div>
            </el-col>
          </el-row>
        </div>

        <!--  Info Acabados  -->
        <div
          slot="section"
          class="section"
        >
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
                <el-select
                  v-model="idFloor"
                  size="mini"
                  clearable
                  placeholder="Tipo de piso"
                >
                  <el-option
                    v-for="(item, index) in floors"
                    :key="index"
                    :label="item.tipos_acabados.nombre"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Baño:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <el-select
                  v-model="idBathroom"
                  size="mini"
                  clearable
                  placeholder="Tipo de baño"
                >
                  <el-option
                    v-for="(item, index) in bathrooms"
                    :key="index"
                    :label="item.tipos_acabados.nombre"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row class="background">
            <el-col :span="12">
              <p class="item grid-content">Cocina:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <el-select
                  v-model="idKitchen"
                  size="mini"
                  clearable
                  placeholder="Tipo de cocina"
                >
                  <el-option
                    v-for="(item, index) in kitchens"
                    :key="index"
                    :label="item.tipos_acabados.nombre"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Domótica:</p>
            </el-col>
            <el-col :span="12">
              <div v-if="domotica.length">
                <el-radio
                  v-model="checkDomotica"
                  :label="1"
                  size="mini"
                >Si</el-radio>
                <el-radio
                  v-model="checkDomotica"
                  :label="0"
                  size="mini"
                >No</el-radio>
              </div>
              <div v-else>
                <el-radio
                  disabled
                  v-model="checkDomotica"
                  :label="1"
                  size="mini"
                >Si</el-radio>
                <el-radio
                  disabled
                  v-model="checkDomotica"
                  :label="0"
                  size="mini"
                >No</el-radio>
              </div>
            </el-col>
          </el-row>
          <el-row class="background">
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
                  v-validate="'required'"
                  data-vv-name="Identificacion"
                  data-vv-as="Identificación"
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
          <p class="error">{{ errors.first('Identificacion') }}</p>
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">No. Identificación:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <input
                  class="inputClinte"
                  type="tel"
                  placeholder="No. Identificación"
                  v-model="inputIdentification"
                  v-validate="'required|numeric'"
                  data-vv-name="num_identificacion"
                  data-vv-as="Número Identificación"
                >
              </div>
            </el-col>
          </el-row>
          <p class="error">{{ errors.first("num_identificacion") }}</p>
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
                  v-model="getCostumer.name"
                  disabled
                >
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Celular:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <input
                  class="inputClinte"
                  type="text"
                  placeholder="Celular"
                  v-model="getCostumer.phone"
                  disabled
                >
              </div>
            </el-col>
          </el-row>
          <el-row class="background">
            <el-col :span="12">
              <p class="item grid-content">Dirección:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <input
                  class="inputClinte"
                  type="text"
                  placeholder="Dirección"
                  v-model="getCostumer.address"
                  disabled
                >
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- Info Separacion -->
        <div
          slot="section"
          class="section"
        >
          <el-row>
            <el-col :span="12">
              <h3 class="grid-content">Separación:</h3>
            </el-col>
          </el-row>
          <el-row class="background">
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
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Costo de separación:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <p class="item-get">{{separationValue | formatNum}}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="background">
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
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Saldo separación:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <p class="item-get">{{separationBalance | formatNum}}</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="background">
            <el-col :span="12">
              <p class="item grid-content">Fecha limite de separación:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <el-date-picker
                  v-model="paydayLimit"
                  type="date"
                  placeholder="Selecciona un día"
                >
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- Info Forma de Pago -->
        <div
          slot="section"
          class="section"
        >
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
                  type="tel"
                  placeholder="Cuotas"
                  v-model="inputFee"
                  v-validate="'required|numeric'"
                  data-vv-name="inputFee"
                  data-vv-as="Cuotas"
                >
              </div>
            </el-col>
          </el-row>
          <p class="error">{{ errors.first("inputFee") }}</p>
          <el-row>
            <el-col :span="12">
              <p class="item grid-content">Cuota:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <money
                  class="inputClinte"
                  disabled
                  :value="quota"
                  v-bind="money"
                ></money>
              </div>
            </el-col>
          </el-row>
          <el-row class="background">
            <el-col :span="12">
              <p class="item grid-content">Fecha de inicio primera cuota:</p>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <el-date-picker
                  v-model="inputDate"
                  type="date"
                  placeholder="Selecciona un día"
                >
                </el-date-picker>
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
          <el-row>
            <el-col :span="12">
              <div class="tag"> <span class="bold">Valor Total: </span><span class="total"> {{totalValue | formatNum}}</span></div>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <div
                class="btn-save"
                @click="saveInfo(true)"
              >Guardar</div>
            </el-col>
          </el-row>
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from "~/components/card";
import { Money } from "v-money";
import axios from "axios";
export default {
  components: {
    Card,
    Money
  },
  created() {
    this.$store.dispatch("GET_CUSTOMERS");
    this.$store.dispatch("GET_TYPESCONTRACTS");
  },
  destroyed() {
    this.$store.commit("SET_RESETPDF", "");
  },
  data() {
    return {
      loading: false,
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
      value: null,
      emptyProject: {
        nombre: "",
        ubicacion: "",
        price: 250000000,
        id: 1,
        descripcion: "",
        user_id: 0,
        logo: null,
        estado: 0
      },
      getCostumer: {
        id: "",
        document: "",
        name: "",
        lastName: "",
        phone: "",
        address: ""
      },
      emptyUnit: {
        numero: "",
        valor: 0,
        tipo_unidad: ""
      },
      unitNumber: "",
      flat: "",
      typeIdentification: "",
      idFloor: "",
      idBathroom: "",
      idKitchen: "",
      checkDomotica: 0,
      identification: [
        "Cédula",
        "Cédula de Extranjería",
        "NIT",
        "Pasaporte",
        "ID Extranjero",
        "Tarjeta  de Identidad"
      ],
      contract: "",
      inputValue: "",
      inputInitialSeparation: "",
      inputFee: "",
      initialFeePercentage: "",
      separationPercentage: "",
      paydayLimit: "",
      inputDate: "",
      inputDescuento: "",
      inputIdentification: "",
      inputNombre: "",
      inputCelular: "",
      inputDireccion: "",
      domoticaPrice: 0,
      typesContractsData: null,
      descripcion: {
        areaTotal: "",
        areaHabitable: "",
        areaBalcon: "",
        tipoApartamento: ""
      },
      formContract: {
        project: {
          name: "",
          city: "",
          id: 0
        },
        unit: {
          id: 0,
          flat: "",
          numUnit: "",
          price: "",
          typeUnit: ""
        },
        finishes: {
          floor: "",
          floorPrice: 0,
          bathroom: "",
          bathroomPrice: 0,
          kitchen: "",
          kitchenPrice: 0,
          domotica: "",
          domoticaPrice: 0,
          total: 0
        },
        customer: {},
        setApart: {
          // typeContract: '',
          percent: 0,
          cost: 0,
          initial: 0,
          residue: 0,
          date: "",
          contract: {}
        },
        payment: {
          percentQuota: 0,
          costQuota: 0,
          numQuotas: 0,
          startDate: "",
          financing: 0,
          valor_cuota_inicial_unidad: 0,
          total: 0
        }
      },
      infoContract: {
        descripcion: {},
        acabados: {},
        clientes_id: 1,
        forma_pago: {},
        proyecto_id: 1,
        separacion: {},
        total: 100,
        unidad_id: 1,
        pagos: []
      }
    };
  },
  computed: {
    descreme() {
      return this.$store.state.descreme.descreme_actual;
    },
    projects() {
      return this.$store.state.projectsData;
    },
    sentFlats() {
      return this.$store.state.sentFlats;
    },
    sentUnits() {
      return this.$store.state.apartments;
    },
    customers() {
      return this.$store.state.customersData;
    },
    currentProject() {
      return (
        this.projects.find(project => project.nombre == this.value) ||
        this.emptyProject
      );
    },
    currentUnit() {
      return (
        this.sentUnits.find(unit => unit.numero == this.unitNumber) ||
        this.emptyUnit
      );
    },
    bathrooms() {
      if (this.currentUnit.acabados) {
        return this.currentUnit.acabados.filter(
          finish => finish.tipos_acabados.grupos_acabados_id === 7
        );
      }
    },
    floors() {
      if (this.currentUnit.acabados) {
        return this.currentUnit.acabados.filter(
          finish => finish.tipos_acabados.grupos_acabados_id === 6
        );
      }
    },
    kitchens() {
      if (this.currentUnit.acabados) {
        return this.currentUnit.acabados.filter(
          finish => finish.tipos_acabados.grupos_acabados_id === 5
        );
      }
    },
    domotica() {
      if (this.currentUnit.acabados) {
        return this.currentUnit.acabados.filter(
          finish => finish.tipos_acabados.grupos_acabados_id === 8
        );
      } else {
        return [];
      }
    },
    currentFloor() {
      if (this.floors) {
        return (
          this.floors.find(floor => floor.id == this.idFloor) || { valor: 0 }
        );
      } else {
        return { valor: 0 };
      }
    },
    currentKitchen() {
      if (this.kitchens) {
        return (
          this.kitchens.find(kitchen => kitchen.id == this.idKitchen) || {
            valor: 0
          }
        );
      } else {
        return { valor: 0 };
      }
    },
    currentBathroom() {
      if (this.bathrooms) {
        return (
          this.bathrooms.find(bathroom => bathroom.id == this.idBathroom) || {
            valor: 0
          }
        );
      } else {
        return { valor: 0 };
      }
    },
    total: {
      get() {
        return (
          parseInt(this.currentFloor.valor) +
          parseInt(this.currentKitchen.valor) +
          parseInt(this.currentBathroom.valor) +
          this.domoticaPrice
        );
      },
      set(newValue) {
        this.currentFloor.valor = newValue;
        this.currentKitchen.valor = newValue;
        this.currentBathroom.valor = newValue;
        this.domoticaPrice = newValue;
      }
    },
    totalValue() {
      return (
        this.total + parseInt(this.currentUnit.valor - this.inputDescuento) || 0
      );
    },
    separationValue() {
      return this.totalValue * (this.separationPercentage / 100);
    },
    separationBalance() {
      return this.separationValue - this.inputInitialSeparation;
    },
    initialFee() {
      return this.totalValue * (this.initialFeePercentage / 100);
    },
    changeIdProject() {
      return this.$store.state.sentInfo.id;
    },
    financing() {
      return (
        parseInt(this.totalValue) -
        parseInt(this.initialFee) -
        parseInt(this.separationValue)
      );
    },
    totalValueInitial() {
      return this.separationValue + this.initialFee;
    },
    quota() {
      return this.initialFee / this.inputFee || 0;
    },
    currentContract() {
      return this.typesContractsData.find(contract => {
        return contract.id == this.contract;
      });
    },
    urlPdf() {
      if (this.$store.state.pdfContract) {
        return this.$store.state.pdfContract;
      }
    }
  },
  watch: {
    inputIdentification(value) {
      const result = this.customers.find(customer => customer.cedula == value);
      if (result) {
        this.getCostumer.id = result.id;
        this.getCostumer.document = result.cedula;
        this.getCostumer.name = result.nombre;
        this.getCostumer.phone = result.telefono;
        this.getCostumer.address = result.direccion;
      } else {
        this.getCostumer.id = "";
        this.getCostumer.document = "";
        this.getCostumer.name = "";
        this.getCostumer.phone = "";
        this.getCostumer.address = "";
      }
    },
    value(value) {
      const result = this.projects.find(project => project.nombre == value);
      if (result) {
        this.getDataProject(result.id);
      }
      this.domoticaPrice = 0;
      this.flat = "";
      this.total = 0;
    },
    flat(value) {
      this.getUnits(value);
      this.unitNumber = "";
    },
    checkDomotica(value) {
      if (value == 1) {
        this.domoticaPrice = this.domotica[0].valor;
      } else {
        this.domoticaPrice = 0;
      }
    }
  },
  methods: {
    saveInfo(value) {
      console.log(value);
      this.loading = value;
      document.querySelector(".info.dashboard-view").scrollTop = 0;
      this.$validator.validate().then(result => {
        if (result) {
          this.dataContract();
          this.monthlyFees();
        }
      });
    },
    dataContract() {
      this.formContract.project.name = this.currentProject.nombre;
      this.formContract.project.city = this.currentProject.ubicacion;
      this.formContract.project.id = this.currentProject.id;
      this.formContract.unit.id = this.currentUnit.id;
      this.formContract.unit.flat = this.flat;
      this.formContract.unit.numUnit = this.unitNumber;
      this.formContract.unit.price = parseInt(this.currentUnit.valor);
      this.formContract.unit.typeUnit = this.currentUnit.tipo_unidad;
      this.formContract.finishes = this.currentUnit.acabados;
      this.formContract.finishes.total = parseInt(this.total);
      // this.formContract.setApart.contract = this.currentContract;
      this.formContract.customer = this.getCostumer;
      this.formContract.customer.typeIdentification = this.typeIdentification;
      this.formContract.payment.numQuotas = this.inputFee;
      this.formContract.payment.costQuota = parseInt(this.quota);
      this.formContract.payment.financing = this.financing;
      this.formContract.payment.percentQuota = this.initialFeePercentage;
      this.formContract.payment.startDate = this.inputDate;
      this.formContract.setApart.date = this.paydayLimit;
      this.formContract.setApart.residue = this.inputInitialSeparation;
      this.formContract.setApart.percent = this.separationPercentage;
      this.formContract.setApart.cost = this.separationValue;
      this.formContract.setApart.initial = this.initialFee;
      this.formContract.payment.valor_cuota_inicial_unidad =
        parseInt(this.initialFee) + parseInt(this.separationValue) || 0;
      this.formContract.payment.total = parseInt(this.totalValue);
      this.createContract();
    },
    getDataProject(id) {
      this.$store.dispatch("GET_FLOORS", id);
    },
    getUnits(flat) {
      this.$store.dispatch("GET_UNITS", flat);
      this.$store.dispatch("GET_DESCREME", this.currentProject.id);
    },
    async createContract() {
      this.loading = true;
      this.infoContract.acabados = JSON.stringify(this.formContract.finishes);
      this.infoContract.clientes_id = this.formContract.customer.id;
      this.infoContract.forma_pago = JSON.stringify(this.formContract.payment);
      this.infoContract.separacion = JSON.stringify(this.formContract.setApart);
      this.infoContract.unidad_id = this.formContract.unit.id;
      this.infoContract.proyecto_id = this.formContract.project.id;
      this.infoContract.descreme = JSON.stringify(this.descreme);
      this.infoContract.descuento = this.inputDescuento;
      this.infoContract.descripcion = JSON.stringify(this.descripcion);

      const response = await this.$store.dispatch(
        "CREATE_CONTRACT",
        this.infoContract
      );
      this.loading = false;
      this.$notify.error({
        title: "Error",
        message: Object.values(response.data.errores)[0][0]
      });
    },
    monthlyFees() {
      let d;
      let today = this.inputDate;
      let cuota = this.quota;
      let total = this.initialFee;
      let totalRestante = this.initialFee;
      for (var i = 0; i < this.inputFee; i += 1) {
        totalRestante = totalRestante - cuota;
        d = new Date(
          today.getFullYear(),
          today.getMonth() + i,
          this.inputDate.getDate()
        );
        this.infoContract.pagos.push({
          fecha: d.getDate() + " - " + d.getMonth() + "-" + d.getFullYear(),
          valorCuota: Math.trunc(cuota),
          total: Math.trunc(total),
          totalRestante: Math.trunc(totalRestante)
        });
      }
      this.infoContract.pagos = JSON.stringify(this.infoContract.pagos);
    }
  },
  filters: {
    formatNum(value) {
      let num;
      if (value) {
        num = Math.trunc(value);
        return `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
      }
    }
  }
};
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
}
div.el-row {
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(168, 187, 219, 0.301);
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
.container-pdf {
  width: 100%;
}
.pdf {
  width: 100%;
  height: 900px;
}
.link {
  color: #aaa;
  width: 100%;
  text-align: center;
  display: inline-block;
}
.error {
  text-align: center;
  font-size: 11px;
  color: #e64c4c;
}
</style>
