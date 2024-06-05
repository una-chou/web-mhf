<template>
  <div class="scroll-container">
    <div class="company-container common-box">
    <Header />
    
    <div class="company-center">
      <div class="detail-page-title">
        <div class="detail-page-title-left">
          <div>Science-Based Dietary Nutrition</div>
          <!-- <div class="detail-page-second">Dietary Nutrition</div> -->
          <div class="detail-page-subtitle">
            <div>Founded in 2014, Mission Hill Foods Group focuses </div>
            <div>on dietary supplement manufacturing and wholesale.</div>
          </div>
        </div>
        <div class="detail-page-title-right">
          <img src="@/assets/images/company-right1.png" alt="">
          <img src="@/assets/images/company-right2.png" alt="">
        </div>
      </div>
      <div class="company-video">
        <!-- <img src="@/assets/images/banner.png" alt=""> -->
        <video
          src="@/assets/video/60s.mp4"
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
      <div class="company-content">
        <!-- <div>Our goal is to conduct ongoing research and development (R&D) studies in the field of human dietary nutrition based on requests from our clients and consumers and to utilize the knowledge gained from these studies in the manufacturing of end products.</div> -->
        <div>Our company is headquartered in California, USA, with offices also located in British Columbia, Canada, and New York, USA.</div>
      </div>
      <div class="company-images">
        <div>
          <!-- <img src="@/assets/images/company1.png" alt=""> -->
          <el-image :src="require('@/assets/images/company1.png')" :preview-src-list="[
              require('@/assets/images/company1.png'),
              require('@/assets/images/company2.png'),
              require('@/assets/images/company3.png'),
              require('@/assets/images/company4.png'),
            ]"></el-image>
        </div>
        <div>
          <!-- <img src="@/assets/images/company2.png" alt=""> -->
          <el-image :src="require('@/assets/images/company2.png')" :preview-src-list="[
              require('@/assets/images/company1.png'),
              require('@/assets/images/company2.png'),
              require('@/assets/images/company3.png'),
              require('@/assets/images/company4.png'),
            ]"></el-image>
        </div>
      </div>
      <div class="company-content">
        <!-- <div>Over the past decade, we have sold more than 12 million bottles across 15 different categories of dietary products to our clients and consumers in North America, Japan, China, and SEA markets.</div> -->
        <div>By 2023, we achieved an annual sales volume of 12 million bottles across 15 different categories of dietary products, serving clients and consumers in North America, Japan, China, and Southeast Asia markets.</div>
      </div>
      <div class="company-images">
        <div>
          <!-- <img src="@/assets/images/company3.png" alt=""> -->
          <el-image :src="require('@/assets/images/company3.png')" :preview-src-list="[
              require('@/assets/images/company1.png'),
              require('@/assets/images/company2.png'),
              require('@/assets/images/company3.png'),
              require('@/assets/images/company4.png'),
            ]"></el-image>
        </div>
        <div>
          <!-- <img src="@/assets/images/company4.png" alt=""> -->
          <el-image :src="require('@/assets/images/company4.png')" :preview-src-list="[
              require('@/assets/images/company1.png'),
              require('@/assets/images/company2.png'),
              require('@/assets/images/company3.png'),
              require('@/assets/images/company4.png'),
            ]"></el-image>
        </div>
      </div>
      <div class="company-content">As a Science-Based Dietary Nutrition company, our values are Quality, Safety, Responsibility.</div>
      <div class="company-based">
        <div class="detail-page-title" style="height:100%;">
          <div class="detail-page-title-left">
            <div style="color:#fff;font-weight: 500;">Mission Hill Foods</div>
            <div style="color:#fff;font-weight: 500;margin-top:-12px">Science-Based Dietary Nutrition</div>
            <!-- <div style="color:#fff;font-weight: 500;margin-top:-12px">Dietary Nutrition</div> -->
          </div>
          <div class="detail-page-title-right">
            <img src="@/assets/images/icon-white1.png" alt="">
            <img src="@/assets/images/icon-white2.png" alt="">
            <img src="@/assets/images/icon-white3.png" alt="">
          </div>
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

export default {
  components: { Header, Footer, BestSellers },
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
.company-container {
  width: 100%;
  .company-center {
    padding: 0 $padding;
  }
  .company-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    padding-top: 60px;
    .company-title-left {
      &>div {
        &:first-of-type {
          font-size: 60px;
          color: $greenText;
        }
        &:last-of-type {
          font-size: 30px;
          color: #000;
          line-height: 2;
        }
      }
    }
    .company-title-right {
      &>img {
        height: 250px;
      }
    }
  }
  .company-based {
    height: 200px;
    width: 100%;
    background: url('./../../assets/images/company-bg.png') center no-repeat;
    background-size: 100% 100%;
    color: #fff;
    padding: 0 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .detail-page-title-right {
      img {
        width: 60px;
        height: auto;
      }
    }
  }
  .company-video {
    width: 100%;
    &>img {
      width: 100%;
    }
    video {
      width: 100%;
    }
  }
  .company-content {
    padding: 40px 0;
    color: #000;
    font-size: 22px;
    line-height: 1.6;
  }
  .company-single-content {
    padding: 60px 0 40px;
    color: #000;
    font-size: 22px;
    line-height: 1.6;
  }
  .company-images {
    display: flex;
    justify-content: space-between;
    &>div {
      width: 49%;
      overflow: hidden;
      &:first-of-type {
        // padding-right: 10px;
      }
      &:last-of-type {
        // padding-left: 10px;
      }
      &>img {
        width: 100%;
        transition: all .3s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
.company-container {
  .company-based {
    padding: 0 40px;
    .detail-page-title .detail-page-title-left {
        font-size: 38px;
    }
    .detail-page-title-right {
      img {
        width: 60px;
        height: auto;
        margin-left: 12px;
      }
    }
  }
}
}
// @media only screen and (max-width: 1100px) {
// .company-container {
//   .company-based {
//     padding: 0 40px;
//     .detail-page-title .detail-page-title-left {
//         font-size: 36px;
//     }
//     .detail-page-title-right {
//       img {
//         width: 56px;
//         height: auto;
//       }
//     }
//   }
// }
// }
@media only screen and (max-width: 1000px) {
.company-container {
  .company-based {
    padding: 0 30px;
    .detail-page-title .detail-page-title-left {
        font-size: 30px;
    }
    .detail-page-title-right {
      img {
        width: 50px;
        height: auto;
      }
    }
  }
}
}
@media only screen and (max-width: 900px) {

}
</style>