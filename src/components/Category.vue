<template>
    <div class="category-tabs">
      <div class="category-tabs-item" v-for="(item,index) in PopularLists" :key="index" >
        <div :class="{'active': active==item.id+''}" @click="changeTypes(item)">{{ item.name }}</div>
      </div>
      <div class="category-tabs-item full-category-item">
        <div @click="jumpTo('Products')">View All Products</div>
      </div>
    </div>
</template>
<script>
import {PopularLists} from '@/products.js'
export default {
    components: {},
    props: {
      active: {
        type: String,
        default: '1'
      }
    },
    data() {
        return {
          PopularLists,
          list: [
            {id: 1, name: 'Heart & Cardiovascular\nHealth'},
            {id: 2, name: 'Essential Fatty Acid'},
            {id: 3, name: 'Digestive Health'},
            {id: 4, name: 'Vision Health'},
            {id: 5, name: 'Essential Vitamins'},
            {id: 6, name: 'Joint Health'},
            {id: 7, name: 'Herbal Supplements'},
            {id: 8, name: "Women's Essentials"},
            {id: 0, name: 'View All Products '},
          ],
          // active: 1
        }
    },
    created() {},
    mounted() {},
    methods: {
      changeTypes(item) {
        // this.active = item.id
        this.$emit('changeTypes', item.id)
      },
      jumpTo(name){
        this.$router.push({name:name})
      }
    }
}
</script>
<style lang='scss' scoped>
.category-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: calc( 100% + 20px );
  margin-left: -10px;
  .category-tabs-item {
    height: 100px;
    width: 20%;
    padding: 0 10px;
    margin: 10px 0;
    &>div {
      width: 100%;
      background-color: #EFEFEF;
      height: 100%;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: bold;
      color: #000;
      font-size: 16px;
      cursor: pointer;
      transition: all .3s;
    }
    .active {
      background-color: $greenText;
      color: #fff;
    }
  }
  .full-category-item {
    width: 40%;
    &>div {
      color: $green;
      &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 0 2px 5px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        border-top: 2px solid $green;
        border-right: 2px solid $green;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
      &:hover {
        color: $greenText;
        &::after {
          border-top: 2px solid $greenText;
          border-right: 2px solid $greenText;
        }
      }
    }
  }
}
</style>