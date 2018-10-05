<template>
  <ul class="list">
    <nuxt-link :to="`${$route.params.project}/${item.link}`" v-for="(item, index) in list" :key="index">
      <li class="list-item">
        <i :class="item.icon"></i>
        <p>{{item.name}}</p>
      </li>
    </nuxt-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'Brochure',
          icon: 'icon-045-brochure',
          link: '#'
        },
        {
          name: 'Multimedia',
          icon: 'icon-video-player',
          link: 'multimedia'
        },
        {
          name: 'Cotizar',
          icon: 'icon-023-tax-1',
          link: 'quotation'
        },
        {
          name: 'Lista de precios',
          icon: 'icon-004-results',
          link: '#'
        }
      ]
    }
  },
  methods: {
    getUrl() {
      location.href = `${window.location.origin}/dashboard`
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.list li {
  list-style: none;
  margin: 35px 0 35px 15px;
  color: #606468;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.list-item i {
  font-size: 35px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #606468;
}
</style>
