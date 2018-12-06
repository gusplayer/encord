<template>
  <div class="reports">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link :to="`/dashboard`">Reportes </nuxt-link>
          <!-- <span>- Brochure</span> -->
        </h2>
      </template>
      <div
        slot="section"
        class="section"
      >
        <h3 class="title-reports">Reportes Mensuales</h3>
        <div class="head">
          <div
            class="item"
            @click="changeSlide(0)"
          >
            <div class="num">{{salesByMonth.length}}</div>
            <div class="content">
              <p class="sales">Ventas</p>
              <p class="monthly">Mensuales</p>
            </div>
          </div>
          <div
            class="item"
            @click="changeSlide(1)"
          >
            <div class="num">{{quotationsByMonth.length}}</div>
            <div class="content">
              <p class="sales">Cotizaciones</p>
              <p class="monthly">Mensuales</p>
            </div>
          </div>
          <div
            class="item"
            @click="changeSlide(2)"
          >
            <div class="num">{{actionsByMonth.length}}</div>
            <div class="content">
              <p class="sales">Acciones</p>
              <p class="monthly">Mensuales</p>
            </div>
          </div>
        </div>
        <template class="col right">
          <swiper
            :options="swiperOption"
            ref="mySwiper"
          >
            <swiper-slide>
              <vue-frappe
                id="test"
                :labels="months"
                title="Histograma"
                type="axis-mixed"
                :height="300"
                :colors="['#6dc72a', '#00507d', '#00c7dc']"
                :dataSets="this.data"
              >
              </vue-frappe>
            </swiper-slide>
            <swiper-slide>
              <div class="info">
                <sales-table />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="info">
                <quotation-table />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="info">
                <actions-table />
              </div>
            </swiper-slide>
          </swiper>
        </template>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "~/components/card";
import salesTable from "~/components/sales-table";
import quotationTable from "~/components/quotation-table";
import actionsTable from "~/components/actions-table";
export default {
  components: {
    Card,
    salesTable,
    quotationTable,
    actionsTable
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        activeIndex: 2,
        spaceBetween: 30,
        mousewheel: true,
        width: "650",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      data: [
        {
          name: "Ventas",
          chartType: "bar",
          values: [25, 40, 30, 20]
        },
        {
          name: "Cotizaciones",
          chartType: "bar",
          values: [25, 50, 15, 40]
        },
        {
          name: "Acciones",
          chartType: "bar",
          values: [35, 40, 9, 10]
        }
      ],
      months: ["Agosto", "Octubre", "Noviembre", "Diciembre"],
      items: [
        {
          name: "Ventas",
          num: 23
        },
        {
          name: "Cotizaciones",
          num: 42
        },
        {
          name: "Acciones",
          num: 63
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    listQuotations() {
      return this.$store.state.listQuotationsData;
    },
    listSales() {
      return this.$store.state.listContractsData;
    },
    listActions() {
      return this.$store.state.listActionsData;
    },
    actionsByMonth() {
      if (this.listActions) {
        return this.listActions.filter(action => {
          return (
            new Date(action.created_at.replace(/ /g, "T")).getFullYear() ==
              new Date().getFullYear() &&
            new Date(action.created_at.replace(/ /g, "T")).getMonth() ==
              new Date().getMonth()
          );
        });
      }
    },
    quotationsByMonth() {
      if (this.listQuotations) {
        return this.listQuotations.filter(quotation => {
          return (
            new Date(
              quotation.created_at.replace(/ /g, "T").replace(/ /g, "T")
            ).getFullYear() == new Date().getFullYear() &&
            new Date(
              quotation.created_at.replace(/ /g, "T").replace(/ /g, "T")
            ).getMonth() == new Date().getMonth()
          );
        });
      }
    },
    salesByMonth() {
      if (this.listSales) {
        return this.listSales.filter(sale => {
          return (
            new Date(sale.created_at.replace(/ /g, "T")).getFullYear() ==
              new Date().getFullYear() &&
            new Date(sale.created_at.replace(/ /g, "T")).getMonth() ==
              new Date().getMonth()
          );
        });
      }
    }
  },
  methods: {
    changeSlide(index) {
      this.swiper.slideTo(index + 1, 1000, false);
    }
  }
};
</script>

<style scoped>
.reports {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
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
.left {
  flex: 0.2;
  margin-right: 5px;
  max-height: 30 0px;
}
.section {
  padding: 0 20px;
  max-width: 700px;
}
.title-reports {
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--main-title-color);
}
.head {
  display: flex;
  width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 2px 1px rgba(12, 20, 31, 0.01);
  border-bottom: 3px solid transparent;
  color: var(--main-txt-color);
  font-weight: 300;
  margin-bottom: 20px;
}
/* .right {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  border-left: 2px solid #eee;
  margin-left: 10px;
} */
.item {
  flex: 1;
  text-align: center;
  padding: 10px 10px;
  border: 1px solid rgba(103, 123, 158, 0.122);
  cursor: pointer;
  transition: all ease 0.1s;
  display: flex;
}
.item:nth-child(2) {
  /* background-color: #98c253; */
  border-left: 0;
  border-right: 0;
}
.item:nth-child(1):hover {
  border-bottom: 2px solid #6dc72a;
}
.item:nth-child(2):hover {
  border-bottom: 2px solid #00507d;
}
.item:nth-child(3):hover {
  border-bottom: 2px solid #00c7dc;
}
.item:hover {
  /* border-bottom: 2px solid #98c253; */
  box-shadow: 0 0 12px 2px rgba(18, 31, 41, 0.025);
  /* box-shadow: 0 2px 0px 0px #98c253; */
}
.num {
  font-size: 30px;
  font-weight: 300;
  margin-right: 10px;
}
.sales {
  line-height: 1;
  text-align: left;
  font-size: 17px;
  font-weight: 400;
}
.monthly {
  line-height: 1;
  text-align: left;
  font-size: 14px;
}
.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
</style>
