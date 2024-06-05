<template>
  <div class="SELLERS">
    <div class="common-titles" style="padding-top: 85px;padding-bottom: 45px;">BEST SELLERS</div>
    <div class="sellers-lists">
      <div class="sellers-li-wrap" v-for="(item, index) in SellerLists.slice(0,4)" :key="index">
        <ProductItem :item="item" />
      </div>
    </div>
    <div class="view-all-wrap" style="padding:50px 0 20px;">
      <div class="view-all" @click="jumpTo('Products')">View All Products </div>
    </div>
  </div>
</template>
<script>
import {SellerLists} from '@/products.js'
import ProductItem from '@/components/ProductItem.vue';
export default {
    components: {ProductItem},
    props: {},
    data() {
        return {
          SellerLists
        }
    },
    created() {},
    mounted() {},
    methods: {
      jumpTo(name){
        this.$router.push({name:name})
      }
    }
}
</script>
<style lang='scss' scoped>
.SELLERS {
  .sellers-lists {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    width: 100%;
    .sellers-li-wrap {
      width: 25%;
    }
  }
}
</style>