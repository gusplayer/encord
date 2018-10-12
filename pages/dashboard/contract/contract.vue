<template>
  <div class="contract">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard/5">Formulario de contrato</nuxt-link>
          <span>/ Contrato</span>
        </h2>
      </template>
      <div slot="section" class="section">

        <div class="infoContract" v-html="contract"></div>

        <div class="line"></div>
        <p class="firm">Firma</p>

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
    this.setContract(
      '<h2>Contrato de compra</h2><p>Lorem %name% dolor, sit amet consectetur adipisicing elit. Hic ab doloribus %document% libero, tenetur eveniet aliquam. Distinctio quae veniam consequuntur, incidunt, %area% quaerat odio reprehenderit molestias tenetur laborum atque eos.</p><p>Lorem ipsum dolor, sit amet consectetur %precio% elit. Hic ab doloribus praesentium libero, tenetur eveniet aliquam. Distinctio quae veniam consequuntur, incidunt, dolorum quaerat odio reprehenderit molestias tenetur laborum atque eos.</p>'
    )
  },
  data() {
    return {
      contract: ''
    }
  },
  computed: {
    infoContract() {
      console.log(this.contract)
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
}
</style>
