<template>
  <div class="laboratory-container common-box">
    <Header />
    


    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  components: { Header, Footer },
  props: {},
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    
  }
}
</script>
<style lang='scss'>
.laboratory-container {
  width: 100%;
}
</style>