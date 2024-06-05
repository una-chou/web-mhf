<template>
  <div class="scroll-container">
    <div class="laboratory-container common-box">
      <Header />
      <div class="laboratory-center">
        <div class="detail-page-title">
          <div class="detail-page-title-left">
            <div>Our Fully Functional</div>
            <div class="detail-page-second">Nutrition Laboratory</div>
          </div>
          <div class="detail-page-title-right">
            <img src="@/assets/images/lab-right.png" style="width:auto;height:80px" alt="">
            
          </div>
        </div>
        <div class="laboratory-video">
          <!-- <img src="@/assets/images/banner.png" alt=""> -->
          <video
            src="@/assets/video/30s.mp4"
            ref="video"
            style="width:100%;"
            controls
            muted
            autoplay
            preload="metadata"
            webkit-playsinline="true"
            playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="false"
            x5-video-orientation="landscape"
            >
            抱歉，您的浏览器不支持内嵌视频!
          </video>
        </div>
        <div class="laboratory-descs">
          Since 2014, we've invested in a series of research and development activities, including studies covering nutrient 
          relationships with aging, weight control, vision protection, gut health, metabolism, heart and cardiovascular health, and 
          more. Our fully functional nutrition lab has been equipped with cutting-edge technology for nearly a decade to support 
          these efforts for our clients and consumers.
        </div>
        <div class="laboratory-images">
          <div v-for="(item,index) in 4" :key="item">
            <!-- <img :src="require('@/assets/images/labs'+(index+1)+'.png')" alt=""> -->
            <el-image :src="require('@/assets/images/labs'+(index+1)+'.png')" :preview-src-list="[
              require('@/assets/images/labs1.png'),
              require('@/assets/images/labs2.png'),
              require('@/assets/images/labs3.png'),
              require('@/assets/images/labs4.png'),
            ]"></el-image>
          </div>
        </div>
        <!-- <div class="laboratory-descs" style="padding-bottom: 0;">In 2023, our lab joined the American National Laboratory Alliance to expand our R&D categories and scope of work.</div> -->

        <div class="laboratory-persons">
          <div class="common-titles">RESEARCH SCIENTIST TEAM</div>
          <div class="laboratory-persons-list">
            <div class="laboratory-persons-item" v-for="(item,index) in PersonLists" :key="index">
              <img class="laboratory-persons-infoimg" :src="item.image" alt="">
            </div>
          </div>
        </div>

        <div class="laboratory-major">
          <div>MAJOR RESEARCH & DEVELOPMENT STUDIES</div>
          <div>By our fully functional dietary nutrition laboratory</div>
        </div>

        <div class="laboratory-studies">
          <div :class="`laboratory-studies-item${index+1}`" v-for="(item,index) in StudiesLists" :key="index">
            <div class="laboratory-studies-left"><img :src="item.picture" alt=""></div>
            <div class="laboratory-studies-right"><p>{{ item.sepcialName }}</p></div>
          </div>
        </div>

        <div class="major-lists">
          <div class="major-items" v-for="(item,index) in StudiesLists" :key="index">
            <div class="major-items-left">
              <p>{{ item.name }}</p>
              <p>{{ item.desc }}</p>
            </div>
            <div class="major-items-right"><img :src="item.picture" alt=""></div>
          </div>
        </div>

        
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
import {PersonLists, StudiesLists} from './data.js'

export default {
  components: { Header, Footer, BestSellers },
  props: {},
  data() {
    return {
      PersonLists,
      StudiesLists,
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
  .laboratory-center {
    padding: 0 $padding;
  }
  .laboratory-video {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .laboratory-descs {
    width: 100%;
    font-size: 24px;
    color: #000;
    padding: 50px 0 40px;
    line-height: 1.6;
    margin-top: -8px;
  }
  .laboratory-images {
    // height: 310px;
    display: flex;
    &>div {
      margin-right: 20px;
      width: calc( 25% - 20px );
      height: max-content;
      position: relative;
      overflow: hidden;
      &:last-child {
        margin-right: 0;
      }
      &>img {
        width: 100%;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        transition: all .5s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .laboratory-major {
    height: 280px;
    width: 100%;
    background: url('./../../assets/images/major-bg.png') center no-repeat;
    background-size: contain;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    padding: 0 40px;
    &>div {
      &:first-child {
        text-align: center;
        font-size: 42px;
      }
      &:last-child {
        font-size: 35px;

      }
    }
  }
  .laboratory-studies {
    padding: 60px 80px 10px 60px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    &>div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 30px;
    }
    .laboratory-studies-item1,.laboratory-studies-item4 {
      width: 255px;
    }
    .laboratory-studies-item2,.laboratory-studies-item5 {
      width: 212px;
    }
    .laboratory-studies-item3,.laboratory-studies-item6 {
      width: 238px;
    }
    .laboratory-studies-left {
      padding-right: 20px;
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
  .major-lists {
    padding: 0 80px;
    .major-items {
      display: flex;
      padding: 40px 0 30px;
      border-bottom: 1px solid $green;
      align-items: center;
      &:first-child {
        border-top: 1px solid $green;
      }
      .major-items-left {
        flex: auto;
        padding-right: 80px;
        line-height: 1.6;
        &>p {
          font-size: 20px;
          color: #000;
          &:first-child {
            margin-bottom: 4px;
            font-weight: 600;
          }
        }
      }
      .major-items-right {
        flex-shrink: 0;
        width: 70px;
        &>img {
          width: 100%;
        }
      }
    }
  }
  .laboratory-persons {
    padding-bottom: 60px;
    .laboratory-persons-list {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .laboratory-persons-item {
        // margin-right: 20px;
        width: 24%;
        .laboratory-persons-image {
          // height: 350px;
          width: 100%;
          position: relative;
          &>img {
            width: 100%;
            // position: absolute;
            // top: 50%;
            // left: 50%;
            // transform: translate(-50%, -50%);
          }
        }
        .laboratory-persons-infoimg {
          width: 100%;
        }
        .laboratory-persons-info {
          background-color: $greenText;
          padding: 24px 16px 16px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          color: #fff;
          font-size: 19px;
          p {
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1200px) {

.laboratory-container {
  
  .laboratory-major {
    &>div {
      &:first-child {
        text-align: center;
        font-size: 40px;
      }
      &:last-child {
        font-size: 32px;

      }
    }
  }
}
}
@media only screen and (max-width: 1100px) {

.laboratory-container {
  
  .laboratory-major {
    &>div {
      &:first-child {
        text-align: center;
        font-size: 35px;
      }
      &:last-child {
        font-size: 30px;

      }
    }
  }
}
}

@media only screen and (max-width: 1000px) {

.laboratory-container {
  
  .laboratory-major {

    padding: 0 10px;
    &>div {
      &:first-child {
        text-align: center;
        font-size: 33px;
      }
      &:last-child {
        font-size: 28px;

      }
    }
  }
  .laboratory-studies {
    padding-top: 0;
    .laboratory-studies-item1,.laboratory-studies-item4 {
      width: 220px;
    }
    .laboratory-studies-item2,.laboratory-studies-item5 {
      width: 200px;
    }
    .laboratory-studies-item3,.laboratory-studies-item6 {
      width: 200px;
    }
    .laboratory-studies-left {
      padding-right: 12px;
      img {
        width: 55px;
      }
    }
    .laboratory-studies-right {
      p {
        white-space: pre-wrap;
        line-height: 1.2;
        font-size: 18px;
        text-transform: capitalize;
      }
    }
  }
}
}
</style>