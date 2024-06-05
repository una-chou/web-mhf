<template>
  <div class="scroll-container">
    <div class="details-container common-box">
      <Header />
      <div class="products-center">
        <div class="detail-page-title">
          <div class="detail-page-title-left">
            <div class="pre-name">{{ productInfo.fullName }}</div>
          </div>
          <img :src="productInfo.logo" alt="" style="position:absolute;height:100%;top:0;right:-51px">
        </div>

        <div class="details-introduce">
          <div class="details-introduce-swiper">
            <swiper ref="swiperIntroduceRef" class="swiperIntroduce" :options="swiperIntroduceOption">
              <swiper-slide v-for="(item,index) in productInfo.productSwipers" :key="index">
                <div class="details-introduce-swiper-content">
                  <!-- <img :src="item" alt=""> -->
                  <el-image :src="item" :preview-src-list="productInfo.productSwipers"></el-image>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-intro-pagination" slot="pagination"></div>
          </div>
          <div class="details-introduce-form">
            <div v-for="(item,index) in productInfo.productDesc" :key="index"><label>{{item.name}}: </label><span>{{item.value}}</span></div>
            <!-- <div><label>Flavor: </label><span>Unflavored Unflavored Unflavored Unflavored Unflavored Unflavored Unflavored Unflavored Unflavored Unflavored Unflavored Unflavored</span></div> -->
          </div>
        </div>

        <div class="products-details-swiper">
          <swiper ref="swiperRef" class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item,index) in productInfo.detailsSwipers" :key="index">
              <div class="products-details-swiper-content">
                <!-- <img :src="item" alt=""> -->
                <el-image :src="item" :preview-src-list="productInfo.detailsSwipers"></el-image>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>

        <div class="products-names">
          <div class="products-names-lines">
            <div :class="{'active': productInfo.unique=='Glucosamine750'}" @click="gotoView('Glucosamine750')">Glucosamine 750 mg</div>
            <div :class="{'active': productInfo.unique=='Ashwagandha'}" @click="gotoView('Ashwagandha')">Ashwagandha</div>
            <div :class="{'active': productInfo.unique=='CoQ10'}" @click="gotoView('CoQ10')">Coenzyme Q10 (CoQ10) 300 mg</div>
            <div :class="{'active': productInfo.unique=='Omega3'}" @click="gotoView('Omega3')">Omega-3 Fish Oil</div>
            <div :class="{'active': productInfo.unique=='Lutein'}" @click="gotoView('Lutein')">Lutein 40 mg</div>
          </div>
          <div class="products-names-lines">
            <div :class="{'active': productInfo.unique=='Probiotic'}" @click="gotoView('Probiotic')">Probiotic</div>
            <div :class="{'active': productInfo.unique=='Evening'}" @click="gotoView('Evening')">Evening Primrose Oil</div>
            <div :class="{'active': productInfo.unique=='Vitamin'}" @click="gotoView('Vitamin')">Vitamin D3 5000 IU with Vitamin K2 100 mcg</div>
            <div :class="{'active': productInfo.unique=='Vision'}" @click="gotoView('Vision')">Vision Protection Complex</div>
          </div>
          <div class="products-names-lines">
            <div :class="{'active': productInfo.unique=='Ubiquinol100'}" @click="gotoView('Ubiquinol100')">Coenzyme Q10 (CoQ10) 100 mg with Bioperine<span style="font-size:10px;position:absolute;top:0">®</span></div>
            <div :class="{'active': productInfo.unique=='Active'}" @click="gotoView('Active')">Coenzyme Q10 (CoQ10) 100 mg</div>
            <div :class="{'active': productInfo.unique=='Glucosamine500'}" @click="gotoView('Glucosamine500')">Glucosamine 500 mg</div>
          </div>
        </div>

        <div class="details-view-all">
          <div class="view-all" @click="jumpTo('Products')">View All Products </div>
        </div>
        
        <div class="common-titles">POPULAR CATEGORIES</div>

        <Category :active="active" @changeTypes="changeTypes" />

      </div>

      <BestSellers />
    </div>

    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import BestSellers from '@/components/BestSellers.vue'
import Category from '@/components/Category.vue';
import {SellerLists, PopularLists} from '@/products.js'
import {StudiesLists} from './../laboratory/data.js'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: { Header, Footer, BestSellers, Category, Swiper, SwiperSlide },
  props: {},
  data() {
    return {
      SellerLists,
      PopularLists,
      StudiesLists,
      productInfo: {},
      swiperIntroduceOption: {
        pagination: {
          el: '.swiper-intro-pagination',
          clickable: true
        },
        autoplay: false,
      },
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: false,
      },
      active: '',
    }
  },
  watch: {
    '$route.query.unique'(newVal) {
      if (newVal) {
        this.productInfo = SellerLists.find(v=>v.unique==newVal)
        this.active = PopularLists.find(val=>val.relatedProducts.includes(this.productInfo.unique)).id + ''
        console.log(1111);
        this.$nextTick(() => {
          this.swiper.slideTo(0, 1000, false)
          this.swiperIntroduce.slideTo(0, 1000, false)
        })
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiperRef.$swiper
    },
    swiperIntroduce() {
      return this.$refs.swiperIntroduceRef.$swiper
    },
  },
  created() {
    const {unique} = this.$route.query
    if (unique) {
      this.productInfo = SellerLists.find(v=>v.unique==unique)
      this.active = PopularLists.find(val=>val.relatedProducts.includes(this.productInfo.unique)).id + ''
    }
  },
  mounted() {
  },
  methods: {
    gotoView(value) {
      if (this.$route.query && this.$route.query.unique && this.$route.query.unique==value) {
        return window.scrollTo(0,0)
      }
      this.$router.push({name:'Details', query: {unique: value}})
    },
    changeTypes(value) {
      this.$router.push({name:'Categories', query:{type:value}})
    }
  }
}
</script>
<style lang='scss'>
.details-container {
  width: 100%;
  .products-center {
    padding: 0 $padding;
  }
  .details-introduce {
    background-color: #EFEFEF;
    min-height: 440px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    .details-introduce-swiper {
      // width: 40%;
      flex-shrink: 0;
      position: relative;
      height: 100%;
      // padding: 20px;
      height: 440px;
      width: 440px;
      .swiper-container {
        height: 100%;
      }
      .details-introduce-swiper-content {
        height: 100%;
        overflow: hidden;
        position: relative;
        &>img {
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      .swiper-intro-pagination {
        bottom: 15px;
        position: absolute;
        text-align: center;
        transition: 300ms opacity;
        transform: translate3d(0, 0, 0);
        z-index: 10;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .swiper-pagination-bullet {
          margin: 0 4px;
          width: 4px;
          height: 4px;
        }
        .swiper-pagination-bullet-active {
          background-color: $greenText;
          width: 7px;
          height: 7px;
        }
      }
    }
    .details-introduce-form {
      // width: 60%;
      flex: auto;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      padding: 20px 80px 20px 20px;
      font-size: 20px;
      &>div {
        margin-bottom: 10px;
        &:last-of-type {
          margin: 0;
        }
        &>label {
          font-weight: bold;
        }
      }
    }
  }
  .products-details-swiper {
    position: relative;
    .products-details-swiper-content {
      height: 260px;
      overflow: hidden;
      &>img {
        width: 100%;
        // height: 100%;
      }
    }
    .swiper-pagination {
      bottom: -50px;
      position: absolute;
      text-align: center;
      transition: 300ms opacity;
      transform: translate3d(0, 0, 0);
      z-index: 10;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .swiper-pagination-bullet {
        margin: 0 8px;
      }
      .swiper-pagination-bullet-active {
        background-color: $greenText;
        width: 12px;
        height: 12px;
      }
    }
  }
  .products-names {
    margin-top: 100px;
    .products-names-lines {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: #BDBEBE;
      font-weight: bold;
      font-size: 22px;
      position: relative;
      &>div {
        text-align: center;
        flex: 1 1 auto;
        margin-top: 20px;
        cursor: pointer;
        position: relative;
        &:hover {
          opacity: .8;
        }
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          width: 3px;
          height: 21px;
          background-color: #BDBEBE;
        }
        &:last-of-type {

          &::after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            width: 3px;
            height: 21px;
            background-color: #BDBEBE;
          }
        }
      }
      .active {
        color: $greenText;
      }
    }
  }
  .details-view-all {
      // height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 50px;
      // padding-bottom: 20px;
      .view-all {
        color: #BDBEBE;
        cursor: pointer;
        font-size: 35px;
        font-weight: bold;
        // transition: all .3s;
        &::after {
          content: '';
          display: inline-block;
          width: 14px;
          height: 14px;
          margin: 0 0 2px 5px;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          border-top: 4px solid #BDBEBE;
          border-right: 4px solid #BDBEBE;
          // -webkit-transition: all 0.2s ease;
          // transition: all 0.2s ease;
        }
        &:hover {
          // transform: scale(1.2);
          color: $greenText;
          &::after {
            border-top: 4px solid $greenText;
            border-right: 4px solid $greenText;
          }
        }
      }
  }
}


@media only screen and (max-width: 1200px) {
.details-container {
  .products-names {
    .products-names-lines {
      font-size: 20px;
    }
  }
}
}

@media only screen and (max-width: 1100px) {
.details-container {
  .products-names {
    .products-names-lines {
      font-size: 18px;
    }
  }
}
}

@media only screen and (max-width: 1020px) {
.details-container {
  .products-names {
    .products-names-lines {
      font-size: 16px;
    }
  }
}
}

@media only screen and (max-width: 940px) {
.details-container {
  .products-names {
    .products-names-lines {
      font-size: 14px;
    }
  }
}
}
</style>