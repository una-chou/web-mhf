<template>
    <div class="common-nutrition-lab">
      <div class="common-titles">Mission Hill Foods Nutrition Lab<br />Research Studies</div>

      <div class="products-lab-lists">
        <div v-for="(item,index) in StudiesLists" :key="index">
          <div class="laboratory-studies-left"><img :src="item.pictureWhite" alt=""></div>
          <div class="laboratory-studies-right"><p>{{ item.sepcialName }}</p></div>
        </div>
      </div>

      <div class="products-lab-desc">
        <!-- <div>Since 2014, we have invested in a series of research and development activities. </div>
        <div>Our research studies cover nutrient relationships with aging, weight control, vision protection, </div>
        <div>gut health, metabolism, heart and cardiovascular health, and more.</div>
        <div>In 2023, our nutrition lab in Vancouver joined the American National Laboratory Alliance to </div>
        <div>expand our R&D categories and scope of work.</div> -->
        <div class="products-lab-desc-pc">Since 2014, we've invested in a series of research and development activities, 
        <br />including studies covering nutrient relationships with aging, weight control, vision protection, gut health, metabolism, heart and cardiovascular health, and more.</div>

        <div class="products-lab-desc-m">Since 2014, we've invested in a series of research and development activities, 
        including studies covering nutrient relationships with aging, weight control, vision protection, gut health, metabolism, heart and cardiovascular health, and more.</div>
      

      </div>

      <div class="products-more" @click="jumpTo('Laboratory')">Learn more</div>
    </div>
</template>
<script>
import {StudiesLists} from '@/views/laboratory/data.js'
export default {
    components: {},
    props: {},
    data() {
        return {
          StudiesLists
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
.common-nutrition-lab {
  .products-lab-lists {
    height: 320px;
    width: 100%;
    background: url('./../assets/images/lab-bg.png') center no-repeat;
    background-size: 100% 100%;

    padding: 80px 0px 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: #fff;
    padding-left: 50px;
    &>div {
      width: 33.33%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all 0.5s ease;
      padding-left: 60px;
      &:nth-child(1), &:nth-child(2), &:nth-child(3) {
        // margin-bottom: 10px;
      }
      &:nth-child(3), &:nth-child(6) {
        // justify-content: flex-end;
      }
      // &:hover {
      //   // font-weight: 700;
      //   transform: scale(1.2);
      // }
    }
    .laboratory-studies-left {
      padding-right: 10px;
      img {
        width: 70px;
      }
    }
    .laboratory-studies-right {
      p {
        white-space: pre-wrap;
        line-height: 1.2;
        font-size: 20px;
        text-transform: capitalize;
      }
    }
  }
  .products-lab-desc {
    text-align: center;
    padding: 40px 0;
    font-size: 25px;
    color: #000;
    line-height: 1.6;
    .products-lab-desc-pc {
      display: block;
    }
    .products-lab-desc-m {
      display: none;
    }
  }
  .products-more {
    cursor: pointer;
    font-size: 35px;
    text-align: center;
    transition: all 0.1s ease;
    font-weight: bold;
    &::after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
      margin: 0 0 2px 5px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      border-top: 4px solid #000;
      border-right: 4px solid #000;
      -webkit-transition: all 0.1s ease;
      transition: all 0.1s ease;
    }
    &:hover {
      color: $greenText;
      transform: scale(1.1);
      &::after {
        border-top: 4px solid $greenText;
        border-right: 4px solid $greenText;
      }
    }
  }
}



@media only screen and (max-width: 1200px) {
.common-nutrition-lab {
  .products-lab-lists {
    padding-left: 0px;
    &>div {
      padding-left: 50px;
    }
  }
  .products-lab-desc {
    font-size: 25px;
    .products-lab-desc-pc {
      display: none;
    }
    .products-lab-desc-m {
      display: block;
    }
  }
}
}

@media only screen and (max-width: 1100px) {
.common-nutrition-lab {
  .products-lab-lists {
    &>div {
      padding-left: 30px;
    }
  }
}
}

@media only screen and (max-width: 1000px) {
.common-nutrition-lab {
  .products-lab-lists {
    &>div {
      padding-left: 20px;
    }
  }
}
}

@media only screen and (max-width: 950px) {
.common-nutrition-lab {
  .products-lab-lists {
    &>div {
      padding-left: 10px;
    }
  }
}
}
@media only screen and (max-width: 860px) {

}
</style>