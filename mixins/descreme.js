export const descreme = {
  created() {
    console.log('hola desde el mixin')
  },
  computed: {
    units() {
      return this.$store.state.apartments
    }
  },
  methods: {}
}
