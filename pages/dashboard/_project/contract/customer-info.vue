<template>
  <div class="info">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard/5">Formulario</nuxt-link>
          <span>/ Datos</span>
        </h2>
      </template>
      <div slot="section" class="section">
        <el-row>
          <el-col :span="12">

            <p class="item grid-content">Nombre del Proyecto:</p>

          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-select v-model="value" filterable placeholder="Nombre del proyecto">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
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
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        },
        {
          value: 'Option6',
          label: 'Option6'
        },
        {
          value: 'Option7',
          label: 'Option7'
        },
        {
          value: 'Option8',
          label: 'Option8'
        },
        {
          value: 'Option9',
          label: 'Option9'
        },
        {
          value: 'Option10',
          label: 'Option10'
        },
        {
          value: 'Option11',
          label: 'Option11'
        },
        {
          value: 'Option12',
          label: 'Option12'
        },
        {
          value: 'Option13',
          label: 'Option13'
        }
      ],
      value: ''
    }
  }
}
</script>

<style scoped>
.info {
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
  padding: 20px 40px;
}
.item {
  color: rgb(43, 54, 73);
  font-weight: 300;
}
div.el-row {
  display: flex;
  align-items: center;
}
.el-select {
  width: 100% !important;
}
</style>
