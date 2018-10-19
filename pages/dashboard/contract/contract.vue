<template>
  <div id="contract" class="contract">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard/5">Formulario de contrato</nuxt-link>
          <span>/ Contrato</span>
        </h2>
      </template>
      <div slot="section" class="section">
        <div id="pdf">
          <div id="infoContract" class="infoContract" v-html="contract"></div>
          <!-- <div class="line"></div> -->
          <VueSignaturePad width="300px" height="150px" id="signaturePad" ref="signaturePad" />
          <p class="firm">Firma</p>
        </div>
        <el-button-group>
          <el-button type="info" plain @click="undo" size="mini">Deshacer</el-button>
          <el-button type="info" plain @click="clear" size="mini">Borrar</el-button>
          <!-- <el-button type="info" plain @click="save" size="mini">Guardar</el-button> -->
        </el-button-group>
        <el-button @click="download" class="btn_download" type="success">Guardar PDF</el-button>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
import jsPDF from 'jsPDF'
import canvas from 'html2canvas'
// import SignaturePad from 'signature_pad'

export default {
  name: 'contract',
  components: {
    Card,
    jsPDF
  },
  created() {
    this.setContract(
      '<h2>Contrato de compra</h2><p>Lorem %name% dolor, sit amet consectetur adipisicing elit. Hic ab doloribus %document% libero, tenetur eveniet aliquam. Distinctio quae veniam consequuntur, incidunt, %area% quaerat odio reprehenderit molestias tenetur laborum atque eos.</p><p>Lorem ipsum dolor, sit amet consectetur %precio% elit. Hic ab doloribus praesentium libero, tenetur eveniet aliquam. Distinctio quae veniam consequuntur, incidunt, dolorum quaerat odio reprehenderit molestias tenetur laborum atque eos.</p>'
    )
  },
  data() {
    return {
      contract: '',
      name: ''
    }
  },
  computed: {
    infoContract() {
      return this.$store.state.infoContract
    }
  },
  watch: {
    infoContract(value) {
      this.setContract(
        '<h2>Contrato de compra</h2><p>Lorem %name% dolor, sit amet consectetur adipisicing elit. Hic ab doloribus %document% libero, tenetur eveniet aliquam. Distinctio quae veniam consequuntur, incidunt, %area% quaerat odio reprehenderit molestias tenetur laborum atque eos.</p><p>Lorem ipsum dolor, sit amet consectetur %precio% elit. Hic ab doloribus praesentium libero, tenetur eveniet aliquam. Distinctio quae veniam consequuntur, incidunt, dolorum quaerat odio reprehenderit molestias tenetur laborum atque eos.</p>'
      )
    }
  },
  methods: {
    setContract(text) {
      let newText = text
      if (this.infoContract) {
        newText = newText.replace(
          '%name%',
          '<i>' + this.infoContract.customer.name + '</i>'
        )
        newText = newText.replace(
          '%document%',
          '<i>' + this.infoContract.customer.document + '</i>'
        )
        newText = newText.replace(
          '%area%',
          '<i>' + this.infoContract.project.area + '</i>'
        )
        newText = newText.replace(
          '%precio%',
          '<i>' + '$' + this.infoContract.project.price + '</i>'
        )

        this.contract = newText
      }
    },
    download() {
      canvas(document.getElementById('pdf', { width: 100, height: 300 })).then(
        result => {
          let pdfName = 'test'
          var doc = new jsPDF('p', 'pt', 'a4', true)
          // doc.addImage(result.toDataURL('image/png'), 'PNG', 55, 55)
          doc.addImage(
            result,
            'PNG',
            40,
            40,
            520,
            document.getElementById('pdf').clientHeight - 80,
            '',
            'FAST'
          )
          doc.save(pdfName + '.pdf')
        }
      )
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
  }
}
</script>

<style scoped>
.contract {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  border: 1px solid #eee;
  border-bottom: 2px solid #ccc;
  /* border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box; */
}
.infoContract {
  margin-bottom: 50px;
}
.btn_download {
  align-self: flex-end;
}
</style>
