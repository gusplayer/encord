<template>
  <div class="apartments">
    <el-table
      height="330px"
      :data="units"
      style="width: 100%"
      stripe
    >
      <el-table-column
        type="expand"
        prop=""
      >
        <template slot-scope="scope">
          <span v-html="scope.row.descripcion"></span>
        </template>
      </el-table-column>
      <el-table-column
        label="Unidad"
        prop="numero"
        width="70"
      >
        <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{new Date(scope.row.created_at.replace(/ /g, 'T')).getDate()}}/{{new Date(scope.row.created_at.replace(/ /g, 'T')).getMonth() + 1}}/{{new Date(scope.row.created_at.replace(/ /g, 'T')).getFullYear()}}</span>
        </template> -->
      </el-table-column>
      <el-table-column
        label="Estado"
        width="110px"
      >
        <template slot-scope="scope">
          <span
            class="available"
            v-if="scope.row.estado == 1"
          >Disponible</span>
          <span
            class="not-available"
            v-else
          >No disponible</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="tipo_unidad"
        label="Tipo"
      >
      </el-table-column>
      <el-table-column label="Imagen">
        <template slot-scope="scope">
          <span
            class="imagen"
            @click="changeImagen(scope.row.imagenes[0].imagen)"
          >Ver foto</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="valor"
        label="Valor"
        width="120px"
        :formatter="formatterNum"
      >
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  destroyed() {
    this.$store.commit("SET_APARTMENTS", []);
  },
  data() {
    return {};
  },
  computed: {
    units() {
      return this.$store.state.apartments;
    }
  },
  methods: {
    // formatter(row, column) {
    //   return row.address;
    // },
    formatterNum(row, column) {
      if (row.valor) {
        return `$${row.valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
      }
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    changeImagen(img) {
      this.showModal = true;
      if (img) {
        this.$store.commit("SET_IMGMODAL", img);
      }
    }
  }
};
</script>

<style scoped>
.available {
  color: rgba(41, 133, 105, 0.692);
}
.not-available {
  color: rgba(133, 41, 41, 0.692);
}
.img_modal {
  width: 100%;
}
.imagen {
  cursor: pointer;
  color: rgba(47, 132, 201, 0.699);
}
</style>
