<template>
  <div class="scroll-container">
    <div class="categories-container common-box">
      <Header />
      <div class="products-center">
        <div class="detail-page-title">
          <div class="detail-page-title-left">
            <div>15 Categories </div>
            <div class="detail-page-second">For People's Wellness</div>
          </div>
          <div class="detail-page-title-right">
            <img src="@/assets/images/cata-right.png" alt="" style="width:auto;height:100px">
          </div>
        </div>

        <div class="whole-popular-lis">
          <div class="whole-popular-items">
            <div class="whole-popular-items-left">
              <p>{{typeInfo.name}}</p>
              <span>{{ typeInfo.desc }}</span>
            </div>
            <div class="whole-popular-items-right">
              <img :src="typeInfo.picture" alt="">
            </div>
          </div>
        </div>

        <div class="products-box-lists">
          <div  v-for="(item, index) in productList" :key="index">
            <div style="padding:20px 0;"><ProductItem :item="item" /></div>
          </div>
        </div>

        <Category :active="active" @changeTypes="changeTypes" />

        <NutritionLab />
      </div>


    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import NutritionLab from '@/components/NutritionLab.vue'
import ProductItem from '@/components/ProductItem.vue';
import Category from '@/components/Category.vue';
import {SellerLists, PopularLists} from '@/products.js'

export default {
  components: { Header, Footer, ProductItem, NutritionLab, Category },
  props: {},
  data() {
    return {
      SellerLists,
      PopularLists,
      active: '',
      typeInfo: {},
      productList: [],
    }
  },
  created() {
    this.active = this.$route.query.type || '1'
    this.getType()
  },
  mounted() {
  },
  methods: {
    getType() {
      this.typeInfo = PopularLists.find(v=>v.id==this.active)
      this.productList = this.typeInfo.relatedProducts.map(product=>{
        return SellerLists.find(v=>v.unique==product)
      })
    },
    changeTypes(value) {
      this.active = value+ ''
      this.getType()
      // window.scrollTo(0,0)
    }
  }
}
</script>
<style lang='scss'>
.categories-container {
  width: 100%;
  .products-center {
    padding: 0 $padding;
  }
  .whole-popular-lis {
    padding: 0;
    width: 100%;
    height: 260px;
    color: #fff;
    position: relative;
    overflow: hidden;
    transition: all 0.6s ease;
    cursor: pointer;
    margin-bottom: 40px;
    .whole-popular-items, .whole-popular-wrap {
      width: 100%;
      height: 100%;
      background: url('./../../assets/images/pop9.png') no-repeat center;
      background-size: auto 100%;
      // transition: all 0.6s ease;
      // overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // &>img {
      //   width: 100%;
      //   height: 100%
      // }
    }
    .whole-popular-items-left {
      padding: 20px 60px;
      font-size: 20px;
      &>p {
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 10px;
      }
      &>span {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 6; /* 显示的行数 */
      }
    }
    .whole-popular-items-right {
      height: 264px;
      img {
        height: 100%;

      }
    }
    .whole-popular-centers {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-align: center;
      font-size: 26px;
      line-height: 1.6;
      width: 100%;
      z-index: 2;
      -webkit-transition: all 0.4s ease;
      transition: all 0.4s ease;
    }
    // &:hover {
    //   .whole-popular-wrap {
    //     transform: scale(1.2);
    //   }
    // }
  }
  .products-box-lists {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    // padding-top: 50px;
    padding-bottom: 35px;
    &>div {
      width: 25%;
    }
  }
}

@media only screen and (max-width: 1050px) {
.categories-container {
  .whole-popular-lis {
    height: 260px;
    .whole-popular-items-left {
      padding: 0px 0 0 20px;
      font-size: 18px;
      &>p {
        font-size: 24px;
        margin-bottom: 6px;
      }
    }
  }
}
}
</style>