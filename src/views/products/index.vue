<template>
  <div class="scroll-container">
    <div class="products-container common-box">
      <Header />
      <div class="products-center">
        <div class="detail-page-title">
          <div class="detail-page-title-left">
            <div>Over 12 Million Bottles </div>
            <div class="detail-page-second">Sold Globally Every Year</div>
          </div>
          <div class="detail-page-title-right">
            <img src="@/assets/images/icons1.png" alt="">
            <img src="@/assets/images/icons2.png" alt="">
            <img src="@/assets/images/icons3.png" alt="">
          </div>
        </div>

        <div class="whole-popular-lis" @click="jumpTo('Categories')">
          <div class="whole-popular-items">
            <div class="whole-popular-wrap">
              <img class="whole-popular-pics" src="@/assets/images/pop9.png" alt="">
            </div>
            <div class="whole-popular-centers">
              <div>We offer 15 different categories of products, </div>
              <div>including our house brand and brands manufactured for our clients.</div>
            </div>
          </div>
        </div>

        <div class="products-box-lists">
          <div  v-for="(item, index) in SellerLists" :key="index">
            <div style="padding:20px 0;"><ProductItem :item="item" /></div>
          </div>
        </div>
        <div style="margin-top: -30px"><NutritionLab  /></div>
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
import {SellerLists} from '@/products.js'
import {StudiesLists} from './../laboratory/data.js'

export default {
  components: { Header, Footer, ProductItem, NutritionLab },
  props: {},
  data() {
    return {
      SellerLists,
      StudiesLists
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    jumpTo(name){
      if (name == 'Contact') {
        this.$nextTick(() => {
          let scrollEl = document.querySelector('.scroll-container');
          console.log('scrollEl', scrollEl);
          if (scrollEl) window.scrollTo({ top: scrollEl.clientHeight, behavior: 'smooth' });
        });
      } else {
        this.$router.push({name:name})
      }
    },
  }
}
</script>
<style lang='scss'>
.products-container {
  width: 100%;
  .products-center {
    padding: 0 $padding;
  }
  .detail-page-title-right {
    img {
      width: 70px;
      height: 70px;
    }
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
    .whole-popular-items, .whole-popular-wrap {
      width: 100%;
      height: 100%;
      transition: all 0.6s ease;
      overflow: hidden;
      &>img {
        width: 100%;
        height: 100%
      }
    }
    .whole-popular-centers {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-align: center;
      font-size: 30px;
      line-height: 1.6;
      width: 100%;
      z-index: 2;
      -webkit-transition: all 0.4s ease;
      transition: all 0.4s ease;
      font-weight: 500;
    }
    &:hover {
      .whole-popular-wrap {
        transform: scale(1.2);
      }
    }
  }
  .products-box-lists {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 50px;
    &>div {
      width: 25%;
    }
  }
}

@media only screen and (max-width: 1200px) {
.products-container {
  .whole-popular-lis {
    .whole-popular-centers {
      padding: 0 20px;
      font-size: 28px;
    }
  }
}
}
@media only screen and (max-width: 900px) {

}
</style>