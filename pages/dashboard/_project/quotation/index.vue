<template>
  <div class="quotation">
    <card>
      <template slot="header">
        <h2>
          <nuxt-link to="/dashboard">Aria Condominio </nuxt-link>
          <span>/ Cotizar</span>
        </h2>
      </template>
      <div slot="section" class="section">
        <div class="section_one">
          <div class="col left">
            <building @change="getFlat" />
            <div>
              <div class="group">
                <div class="btn_flat" :class="{btn_select: selected == index, btn_disabled: flats[numFlat-1][index].state == 'disabled' }" @click="select(index)" v-for="(item, index) in flats[numFlat - 1]" :key="index">{{item.num}}</div>
              </div>
            </div>
          </div>
          <div class="col right">
            <img class="plano" src="../../../../assets/plano.jpg" alt="">
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/card'
import Building from '~/components/building'

export default {
  components: {
    Card,
    Building
  },
  computed: {
    showModal: {
      get() {
        return this.$store.state.showModal
      },
      set(newValue) {
        this.$store.commit('CHANGE_MODAL_STATE', newValue)
      }
    }
  },
  data() {
    return {
      selected: 0,
      numFlat: 5,
      radio: '1',
      flats: [
        [
          {
            num: 101,
            state: 'available'
          },
          {
            num: 102,
            state: 'available'
          },
          {
            num: 103,
            state: 'available'
          },
          {
            num: 104,
            state: 'available'
          },
          {
            num: 105,
            state: 'available'
          },
          {
            num: 106,
            state: 'disabled'
          }
        ],
        [
          {
            num: 201,
            state: 'available'
          },
          {
            num: 202,
            state: 'disabled'
          },
          {
            num: 203,
            state: 'available'
          },
          {
            num: 204,
            state: 'available'
          },
          {
            num: 205,
            state: 'disabled'
          },
          {
            num: 206,
            state: 'available'
          }
        ],
        [
          {
            num: 301,
            state: 'available'
          },
          {
            num: 302,
            state: 'available'
          },
          {
            num: 303,
            state: 'available'
          },
          {
            num: 304,
            state: 'available'
          },
          {
            num: 305,
            state: 'disabled'
          },
          {
            num: 306,
            state: 'available'
          }
        ],
        [
          {
            num: 401,
            state: 'available'
          },
          {
            num: 402,
            state: 'available'
          },
          {
            num: 403,
            state: 'available'
          },
          {
            num: 404,
            state: 'disabled'
          },
          {
            num: 405,
            state: 'disabled'
          },
          {
            num: 406,
            state: 'available'
          }
        ],
        [
          {
            num: 501,
            state: 'disabled'
          },
          {
            num: 502,
            state: 'disabled'
          },
          {
            num: 503,
            state: 'available'
          },
          {
            num: 504,
            state: 'available'
          },
          {
            num: 505,
            state: 'disabled'
          },
          {
            num: 506,
            state: 'available'
          }
        ]
      ]
    }
  },
  methods: {
    select(value) {
      this.selected = value
    },
    getFlat(value) {
      this.numFlat = value
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #98c253;
}
.quotation {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  overflow: auto;
  padding: 20px 0;
}
h2 {
  font-weight: 400;
  color: #98c253;
}
h2 span {
  font-size: 18px;
  color: #aaa;
}
h4 {
  text-align: center;
}
.section_one {
  display: flex;
}
.col {
  /* min-height: 315px; */
}
.left {
  flex: 0.5;
}
.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  /* border-left: 2px solid #eee; */
  margin-left: 20px;
}
.circle-icon > i {
  font-size: 40px;
  color: #98c253;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  padding: 20px 40px;
}
.group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 10px;
  margin-top: 20px;
}
.btn_flat {
  background-color: #eee;
  padding: 5px 0;
  border-radius: 6px;
  color: #666;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.btn_select {
  background-color: #98c253;
  color: #fff;
}
.btn_disabled {
  background-color: rgb(255, 215, 128);
  color: #666;
  cursor: initial;
}
.plano {
  max-width: 350px;
  width: 100%;
  border-radius: 20px;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
