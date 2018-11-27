<template>
  <div
    id="contract"
    class="contract"
  >
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard/contract/customer-info">Formulario de contrato</nuxt-link>
          <span> / Contrato</span>
        </h2>
      </template>
      <div
        slot="section"
        class="section"
      >
        <div id="pdf">
          <div
            id="infoContract"
            class="infoContract"
            v-html="contract"
          ></div>
          <p>Nombre del proyecto: {{dataContract.project.name}}</p>
          <p>Nombre del proyecto: {{dataContract.customer.name}}</p>
          <p>Valor apartamento: {{dataContract.payment.total | formatNum}}</p>
          <p>Cuota Inicial: {{dataContract.payment.costQuota | formatNum}}</p>
          <p>Numero de cuotas: {{dataContract.payment.numQuotas}}</p>
          <!-- <div class="line"></div> -->
          <VueSignaturePad
            width="300px"
            height="150px"
            id="signaturePad"
            ref="signaturePad"
          />
          <p class="firm">Firma</p>
        </div>
        <el-button-group>
          <el-button
            type="info"
            plain
            @click="undo"
            size="mini"
          >Deshacer</el-button>
          <el-button
            type="info"
            plain
            @click="clear"
            size="mini"
          >Borrar</el-button>
          <!-- <el-button type="info" plain @click="save" size="mini">Guardar</el-button> -->
        </el-button-group>
        <el-button
          @click="download"
          class="btn_download"
          type="success"
        >Guardar PDF</el-button>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
import jsPDF from 'jspdf'
import canvas from 'html2canvas'
// import SignaturePad from 'signature_pad'

export default {
  name: 'contract',
  components: {
    Card,
    jsPDF
  },
  created() {
    this.$store.state.dataContract
    this.setContract(this.dataContract.setApart.contract.contenido)
    this.infoContract.acabados = this.dataContract.finishes
    this.infoContract.clientes_id = this.dataContract.customer.id
    this.infoContract.forma_pago = this.dataContract.payment
    this.infoContract.separacion = this.dataContract.setApart
    this.infoContract.unidad_id = this.dataContract.unit.id
    this.infoContract.proyecto_id = this.dataContract.project.id
  },
  data() {
    return {
      contract: '',
      name: '',
      infoContract: {
        acabados: {},
        clientes_id: 1,
        forma_pago: {},
        proyecto_id: 1,
        separacion: {},
        unidad_id: 1
      }
    }
  },
  computed: {
    // infoContract() {
    //   return this.$store.state.infoContract
    // },
    dataContract() {
      return this.$store.state.dataContract
    }
  },
  watch: {
    dataContract(value) {
      this.setContract(this.dataContract.setApart.contract.contenido)
    }
  },
  methods: {
    setContract(text) {
      let newText = text
      if (this.dataContract) {
        newText = newText.replace(
          '%name%',
          '<i>' + this.dataContract.customer.name + '</i>'
        )
        // newText = newText.replace(
        //   '%document%',
        //   '<i>' + this.infoContract.customer.document + '</i>'
        // )
        // newText = newText.replace(
        //   '%area%',
        //   '<i>' + this.infoContract.project.area + '</i>'
        // )
        // newText = newText.replace(
        //   '%precio%',
        //   '<i>' + '$' + this.infoContract.project.price + '</i>'
        // )

        this.contract = newText
      }
    },
    async createContract() {
      await this.$store.dispatch('CREATE_CONTRACT', this.infoContract)
      this.$router.push('/dashboard/contract/list-contracts')
    },
    download() {
      canvas(document.getElementById('pdf', { width: 100, height: 300 })).then(
        result => {
          let pdfName = 'test'
          var doc = new jsPDF('p', 'pt', 'letter', true)
          // doc.addImage(result.toDataURL('image/png'), 'PNG', 55, 55)
          doc.addImage(
            result,
            'JPG',
            40,
            40,
            522,
            document.getElementById('pdf').clientHeight - 80,
            '',
            'FAST'
          )
          doc.save(pdfName + '.pdf')
        }
      )
      this.createContract()
    },
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      alert('Open DevTools see the save data.')
      console.log(isEmpty)
      console.log(data)
    },
    clear() {
      this.$refs.signaturePad.clearSignature()
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
.contract {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 40px 0px;
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
  padding: 20px 40px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.infoContract p {
  padding: 20px 0;
}
.infoContract h2 {
  font-size: 18px;
  color: #98c253;
}
.line {
  width: 160px;
  margin-top: 60px;
}
.firm {
  color: rgba(67, 71, 87, 0.796);
  margin: 40px 0px 0px;
}
#signaturePad {
  margin-top: 50px;
  border: 1px solid #eee;
  border-bottom: 2px solid #ccc;
}
.infoContract {
  margin-bottom: 10px;
}
.btn_download {
  align-self: flex-end;
}
p {
  color: rgba(67, 71, 87, 0.796);
  line-height: 1.4;
}
@media print {
  .section {
    /* display: none; */
    max-width: 100%;
  }
}
</style>
