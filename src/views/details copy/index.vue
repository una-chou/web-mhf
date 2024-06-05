<template>
  <div class="index-container">
    <div class="top-nav" :style="{backgroundColor: fixedMenu ? '#1E2434' : 'transparent'}">
      <a class="logo" href="/"><img :src="require('@/assets/images/logo.png')" alt=""></a>
      <ul class="nav-list">
        <li :class="{'active': currentTab==='overview'}" @click="jumpTo('overview')">Overview</li>
        <li :class="{'active': currentTab==='introduction'}" @click="jumpTo('introduction')">Introduction</li>
        <li :class="{'active': currentTab==='portfoliodata'}" @click="jumpTo('portfoliodata')">Portfolio Data</li>
        <li :class="{'active': currentTab==='chart'}" @click="jumpTo('chart')">Chart</li>
        <li :class="{'active': currentTab==='portfolio'}" @click="jumpTo('portfolio')">Portfolio</li>
        <li :class="{'active': currentTab==='ecosystem'}" @click="jumpTo('ecosystem')">Ecosystem</li>
        <li :class="{'active': currentTab==='footer'}" @click="jumpTo('footer')">Contact Us</li>
      </ul>
    </div>
    <div class="part-overview animate__animated animate__fadeIn" id="overview" ref="overview">
      <!-- <img class="bg" src="./../../assets/images/banner.png" alt=""> -->
      <div class="overview-content">
        <p class="instro animate__animated animate__fadeIn animate__delay-1s">
        A <span class="green">Professional</span> <br>
        Blockchain Investment <br>
        Institution <br>
        </p>
        <p class="sub-instro animate__animated animate__fadeIn animate__delay-2s">
          Focusing on the investment in blockchain industry, enegizing project with professional supports and related resources
        </p>
      </div>
    </div>
    <div class="part-introduction" id="introduction" ref="introduction">
      <p class="common-title" :class="{'animate__animated animate__fadeInDown': introductionShow}">Introduction</p>
      <div class="introduction-list">
        <div class="introduction-item" :class="{'animate__animated animate__fadeIn': introItemShow}">
          <p class="word">NET</p>
          <div class="hover-intro animate__animated animate__fadeIn">
            <p>NFV aspires to be the venture capital focused on cryoto of the decentralization, by the decentralization, for the decentralization. It is designed to invest the most high quality and promising digital assets. </p>
          </div>
        </div>
        <div class="introduction-item FINANCIAL" :class="{'animate__animated animate__fadeIn animate__delay-1s': introItemShow}">
          <p class="word">FINANCIAL</p>
          <div class="hover-intro animate__animated animate__fadeIn">
            <p>Financing support is not only the help provided by NFV. Co-development with the project is what NFV target at, which will be long term investment. Long term will maximize the exposure and widen users and community for projects, including but not limited to KOLs and PR. </p>
          </div>
        </div>
        <div class="introduction-item" :class="{'animate__animated animate__fadeIn animate__delay-2s': introItemShow}">
          <p class="word">VENTURES</p>
          <div class="hover-intro animate__animated animate__fadeIn">
            <p>Ventures capital investment focused on value investment. Team members are all from blockchain industry for many years including the whole blockchain ecosystem or traditional fund. </p>
          </div>
        </div>
      </div>
    </div>
    <div class="part-portfoliodata" id="portfoliodata" ref="portfoliodata">
      <p class="common-title" :class="{'animate__animated animate__fadeInDown': portfoliodataShow}">Portfolio Data</p>
      <div class="portfoliodata-list" v-show="portfoliodataShow">
        <div class="portfoliodata-item">
          <div class="left-icon"><img src="./../../assets/images/banner.png" alt=""></div>
          <div class="right-nums">
            <p><countTo :startVal='0' :endVal='portfolio1' :duration='3000'></countTo><span class=".span">+</span></p>
            <!-- <p>50<span>+</span></p> -->
            <span>Projects Investment (2019-2022)</span>
          </div>
        </div>
        <div class="portfoliodata-item">
          <div class="left-icon"><img src="./../../assets/images/banner.png" alt=""></div>
          <div class="right-nums">
            <p><countTo :startVal='0' :endVal='portfolio2' :duration='3000'></countTo><span class=".span">%</span></p>
            <!-- <p>2300<span>%</span></p> -->
            <span>Rate of return</span>
          </div>
        </div>
        <div class="portfoliodata-item">
          <div class="left-icon"><img src="./../../assets/images/banner.png" alt=""></div>
          <div class="right-nums">
            <p><countTo :startVal='0' :endVal='portfolio3' :duration='3000'></countTo><span class=".span">%</span></p>
            <!-- <p>30<span>%</span></p> -->
            <span>Top 100 on CMC value rank</span>
          </div>
        </div>
        <div class="portfoliodata-item">
          <div class="left-icon"><img src="./../../assets/images/banner.png" alt=""></div>
          <div class="right-nums">
            <p><countTo :startVal='0' :endVal='portfolio4' :duration='3000'></countTo><span class=".span">%</span></p>
            <!-- <p>28<span>%</span></p> -->
            <span>Projects Listed on Coinbase/Binance/Huobi/Bithumb</span>
          </div>
        </div>
        <div class="portfoliodata-item">
          <div class="left-icon"><img src="./../../assets/images/banner.png" alt=""></div>
          <div class="right-nums">
            <p><countTo :startVal='0' :endVal='portfolio5' :duration='3000'></countTo><span class=".span">%</span></p>
            <!-- <p>70<span>%</span></p> -->
            <span>Projects listed on Gate/Kucoin/CoinW</span>
          </div>
        </div>
      </div>
    </div>
    <div class="part-chart" id="chart" ref="chart">
      <p class="common-title" :class="{'animate__animated animate__fadeInDown': chartShow}">Chart</p>
      <div class="chart-list">
        <div class="chart-item" :class="{'animate__animated animate__fadeIn animate__delay-1s': chartShow}">
          <div class="chart-nums">
            <p><countTo :startVal='0' :endVal='chart1' :duration='3000'></countTo></p>
            <span>million USDT</span>
          </div>
          <div class="right-progress">
            <div class="progress"><div :style="{width: width1}"></div></div>
            <p class="chart-info">Primary market liquidity investment capital scale</p>
          </div>
        </div>
        <div class="chart-item" :class="{'animate__animated animate__fadeIn animate__delay-2s': chartShow}">
          <div class="chart-nums">
            <p><countTo :startVal='0' :endVal='chart2' :duration='3000'></countTo></p>
            <span>million USDT</span>
          </div>
          <div class="right-progress">
            <div class="progress"><div :style="{width: width2}"></div></div>
            <p class="chart-info">Primary market management fund scale</p>
          </div>
        </div>
        <div class="chart-item" :class="{'animate__animated animate__fadeIn animate__delay-3s': chartShow}">
          <div class="chart-nums">
            <p><countTo :startVal='0' :endVal='chart3' :duration='3000'></countTo></p>
            <span>million USDT</span>
          </div>
          <div class="right-progress">
            <div class="progress"><div :style="{width: width3}"></div></div>
            <p class="chart-info">Risk control fund pool</p>
          </div>
        </div>
      </div>
    </div>
    <div class="part-portfolio" id="portfolio" ref="portfolio">
      <p class="common-title" :class="{'animate__animated animate__fadeInDown': portfolioShow}" style="color: #282840;">Portfolio</p>
      <div class="portfolio-list">
        <!-- <a :href="item.link" target="_blank" class="portfolio-item" :class="{'shadow': item.shadow}" v-for="(item, index) in newPortfolioList" :key="index+Math.random()"><img :src="require('@/assets/images/NFV/'+(item.image)+'.png')" alt=""></a>
        <a :href="item.link" target="_blank" class="portfolio-item" :class="{'shadow': item.shadow}" v-for="(item, index) in portfolioList" :key="index+Math.random()"><img :src="require('@/assets/images/NFV/po'+(index+1)+'.png')" alt=""></a> -->
        <div class="portfolio-empty" v-for="i in 6" :key="i+Math.random()"></div>
      </div>
    </div>
    <div class="part-round" id="ecosystem" ref="ecosystem">
      <p class="common-title" :class="{'animate__animated animate__fadeInDown': ecosystemShow}">NFV Ecosystem</p>
      <div class="point-container">
        <p class="road roadright road1" :class="{'animate__animated animate__fadeInRight': ecosystemShow}"><span class="circle"><span></span></span><span>Strategic Support</span></p>
        <p class="road roadright road2" :class="{'animate__animated animate__fadeInRight': ecosystemShow}"><span class="circle"><span></span></span><span>Blockchain Industry Resources</span></p>
        <p class="road roadright road3" :class="{'animate__animated animate__fadeInRight': ecosystemShow}"><span class="circle"><span></span></span><span>Investment Consultant</span></p>
        <p class="road roadleft road4" :class="{'animate__animated animate__fadeInLeft': ecosystemShow}"><span>Technical Support</span><span class="circle"><span></span></span></p>
        <p class="road roadleft road5" :class="{'animate__animated animate__fadeInLeft': ecosystemShow}"><span>Influencers Community</span><span class="circle"><span></span></span></p>
        <p class="road roadleft road6" :class="{'animate__animated animate__fadeInLeft': ecosystemShow}"><span>Financial Support</span><span class="circle"><span></span></span></p>
      </div>
      <!-- <div class="round-infos" :class="{'animate__animated animate__zoomIn': ecosystemShow}">
        <div class="circle">
          <div class="hexagon one rounded">
            <p class="turn top"><span>Blockchain Industry Resources</span></p>
            <p class="turn bottom"><span>Influencers Community</span></p>
          </div>
          <div class="hexagon one rounded1">
            <p class="turn top topleft"><span>Investment Consultant</span></p>
            <p class="turn bottom bottomright"><span>Strategic Support</span></p>
          </div>
          <div class="hexagon one rounded2">
            <p class="turn top topright"><span>Technical Support</span></p>
            <p class="turn bottom bottomleft"><span>Financial Support</span></p>
          </div>
        </div>
        <div class="round-center">
          <img src="./../../assets/images/logo.png" alt="">
          <p>ECOSYSTEM</p>
        </div>
      </div> -->
    </div>
    <div class="part-footer" ref="footer">
      <div class="footer-left" :class="{'animate__animated animate__zoomIn': footerShow}">
        <img src="./../../assets/images/logo.png" alt="">
        <p>
        Focusing on the investment in blockchain industry, <br>
        enegizing project with professional supports and related <br>
        resources. Co-development with the project is what NFV <br>
        target at, which will be long term investment.<br>
        </p>
      </div>
      <div class="footer-right" :class="{'animate__animated animate__zoomIn': footerShow}">
        <p class="contact">Contact Us</p>
        <div class="icons">
          <a href="https://t.me/nfventure" target="_blank"><img src="./../../assets/images/banner.png" alt=""></a>
          <a href="https://twitter.com/nfventures_" target="_blank"><img src="./../../assets/images/twitter.png" alt=""></a>
          <a href="mailto:nfventures1@gmail.com"><img src="./../../assets/images/email.png" alt=""></a>
        </div>
        <div class="navs">
          <!-- <p @click="jumpTo('overview')">Overview</p> -->
          <p @click="jumpTo('introduction')">Introduction</p>
          <p @click="jumpTo('portfoliodata')">Portfolio Data</p>
          <p @click="jumpTo('chart')">Chart</p>
          <p @click="jumpTo('portfolio')">Portfolio</p>
          <p @click="jumpTo('ecosystem')">Ecosystem</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountTo from "vue-count-to"
import {portfolioList, newPortfolioList} from '@/portfolio.js'
export default {
  components: { CountTo },
  props: {},
  data() {
    return {
      fixedMenu: false,
      currentTab: '',
      timer: '',
      scrollT: '',
      stopscroll: '',
      currentScroll: 0,
      overviewShow: true,
      introductionShow: false,
      portfoliodataShow: false,
      chartShow: false,
      portfolioShow: false,
      ecosystemShow: false,
      introItemShow: false,
      footerShow: false,
      portfolio1: 0,
      portfolio2: 0,
      portfolio3: 0,
      portfolio4: 0,
      portfolio5: 0,
      chart1: 0,
      chart2: 0,
      chart3: 0,
      width1: 0,
      width2: 0,
      width3: 0,
      portfolioList, 
      newPortfolioList,
    }
  },
  created() {
    console.log(portfolioList, newPortfolioList);
  },
  mounted() {
    this.jumpTo('overview')
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.fixedMenu = scrollTop > 10
      this.handleScroll()
    })
  },
  methods: {
    jumpTo(child) {
      this.currentTab=child
      const scrollBox = document.documentElement
      let distance = scrollBox.scrollTop
      const curTag = this.$refs[child]
      const offsetTop = curTag.offsetTop -80 // 滚动距离
      let step = offsetTop / 50
      if (offsetTop > distance) {
        smoothDown()
      } else {
        const newTotal = distance - offsetTop
        step = newTotal / 50
        smoothUp()
      }
      scrollBox.scrollTop = offsetTop
      function smoothDown() {
        if (distance < offsetTop) {
          distance += step
          scrollBox.scrollTop = distance
          setTimeout(smoothDown, 5)
        } else {
          scrollBox.scrollTop = offsetTop
        }
      }
      function smoothUp() {
        if (distance > offsetTop) {
          distance -= step
          scrollBox.scrollTop = distance
          setTimeout(smoothUp, 5)
        } else {
          scrollBox.scrollTop = offsetTop
        }
      }
    },

    handleScroll() {
      this.currentScroll = window.pageYOffset
      let height = document.documentElement.clientHeight - 100
      if (this.currentScroll >= this.$refs.footer.offsetTop - height) {
        this.footerShow = true;
        this.currentTab='footer'
      }
      else if (this.currentScroll >= this.$refs.ecosystem.offsetTop - height) {
        this.ecosystemShow = true;
        this.currentTab='ecosystem'
      }
      else if (this.currentScroll >= this.$refs.portfolio.offsetTop - height) {
        this.portfolioShow = true;
        this.currentTab='portfolio'

      }
      else if (this.currentScroll >= this.$refs.chart.offsetTop - height) {
        this.chartShow = true;
        this.currentTab='chart'
        setTimeout(() => {
          this.chart1 = 20
          this.width1 = '338px'
        }, 500)
        setTimeout(() => {
          this.chart2 = 100
          this.width2 = '100%'
        }, 2000)
        setTimeout(() => {
          this.chart3 = 8
          this.width3 = '187px'
        }, 3000)
      }
      else if (this.currentScroll >= this.$refs.portfoliodata.offsetTop - height + 100) {
        this.portfoliodataShow = true;
        this.currentTab='portfoliodata'
        this.portfolio1 = 50
        this.portfolio2 = 2300
        this.portfolio3 = 30
        this.portfolio4 = 28
        this.portfolio5 = 70
      } 
      else if (this.currentScroll >= this.$refs.introduction.offsetTop - 600) {
        this.currentTab='introduction'
        this.introItemShow = true;
      }
      else if (this.currentScroll >= this.$refs.introduction.offsetTop - height) {
        this.introductionShow = true;
        this.currentTab='introduction'
      }
      else if (this.currentScroll >= this.$refs.overview.offsetTop - height) {
        this.currentTab='overview'
      }
    },
    ScrollEnd() {
      this.stopscroll = document.documentElement.scrollTop || document.body.scrollTop; //停止后的scrolltop
      if (this.stopscroll == this.scrollT) {
        const el = document.getElementById('fixbox');
        el.classList.remove('fadeOutRight'); //停止滑动时，删除向右淡出
      }
    },
  }
}
</script>
<style lang='scss' scoped>
$green: #0BAB50;
.index-container {
  width: 100%;
  .green {
    color: $green !important;
  }
  .common-title {
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    color: #FFFFFF;
    text-align: center;
  }
  // .top-nav {
  //   height: 60px;
  //   width: 100%;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 0 60px;
  //   box-sizing: border-box;
  //   position: fixed;
  //   top: 0;
  //   z-index: 999;
  //   .logo {
  //     height: 32px;
  //     &>img {
  //       height: 32px;
  //       width: auto;
  //     }
  //   }
  //   .nav-list {
  //     display: flex;
  //     flex-direction: row;
  //     justify-content: flex-start;
  //     align-items: center;
  //     &>li {
  //       font-size: 14px;
  //       line-height: 13px;
  //       color: #FFFFFF;
  //       margin-right: 52px;
  //       cursor: pointer;
  //       &:last-child {
  //         margin-right: 0;
  //       }
  //       &:hover {
  //         color: $green;
  //       }
  //     }
  //     .active {
  //       font-weight: bold;
  //       color: $green;
  //     }
  //   }
  // }
  .part-overview {
    width: 100%;
    position: relative;
    // width: 100%;
    // height: 100%;
    background: url(./../../assets/images/banner.png) no-repeat center;
    background-size: 100% 100%;
    --animate-duration: 2s;
    .bg {
      width: 100%;
      object-fit: cover;
      position: absolute;
    }
    .overview-content {
      position: relative;
      padding: 260px 0 176px 160px;
      box-sizing: border-box;
      .instro {
        font-weight: bold;
        font-size: 80px;
        line-height: 82px;
        color: #fff;
      }
      .sub-instro {
        margin-top: 48px;
        font-size: 26px;
        line-height: 40px;
        color: #DADADA;
        max-width: 926px;
      }
    }

  }
  .part-introduction {
    background: #07080D;
    padding: 60px 160px 66px;
    box-sizing: border-box;
    .introduction-list {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 52px;
      color: #FFFFFF;
      flex-wrap: wrap;
      .introduction-item {
        width: 360px;
        height: 360px;
        background: rgba(30, 30, 30, 0.8);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        .word {
          font-weight: bold;
          font-size: 52px;
          line-height: 150px;
          &::first-letter {
            color: $green;
          }
        }
        .hover-intro {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          font-size: 14px;
          line-height: 26px;
          padding: 32px;
          background-color: $green;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          display: none;
          &>p {
            &::first-letter {
              font-weight: bold;
              font-size: 64px;
            }
          }
        }
        &:hover {
          .hover-intro {
            display: flex;
          }
        }
      }
      .FINANCIAL {
        margin: 0 20px;
      }
    }
  }
  .part-portfoliodata {
    background: #1E2434;
    padding: 80px 160px 106px;
    box-sizing: border-box;
    .portfoliodata-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      .portfoliodata-item {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 83px;
        .left-icon {
          width: 64px;
          height: 64px;
          background: rgba(234, 250, 247, 0.1);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-right: 28px;
          box-sizing: border-box;
          border-radius: 50%;
          &>img {
            width: 32px;
            height: 32px;
          }
        }
        .right-nums {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          color: #FFFFFF;
          &>p {
            font-weight: bold;
            font-size: 80px;
            line-height: 80px;
            .span {
              font-weight: normal;
              font-size: 40px;
              line-height: 80px;
            }
          }
          &>span {
            font-size: 16px;
            line-height: 24px;
            max-width: 230px;
            display: inline-block;
          }
        }
      }
    }
  }
  .part-chart {
    padding: 80px 0 90px;
    box-sizing: border-box;
    background: url('./../../assets/images/banner.png') no-repeat center;
    background-size: 100% 100%;
    .chart-list {
      width: 930px;
      margin: auto;
      background: rgba(255, 255, 255, 0.07);
      mix-blend-mode: normal;
      backdrop-filter: blur(60px);
      padding: 60px 80px;
      box-sizing: border-box;
      margin-top: 45px;
      .chart-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 40px;
        &:first-child {
          padding-top: 0;
        }
        .chart-nums {
          color: $green;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 22px;
          line-height: 32px;
          &>p {
            font-size: 70px;
            line-height: 80px;
          }
        }
        .right-progress {
          width: 543px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          .progress {
            width: 100%;
            height: 96px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            &>div {
              width: 0px;
              height: 9px;
              background: #0BAB50;
              border-radius: 40px;
              transition: all 3s;

            }
          }
          .chart-info {
            font-size: 20px;
            line-height: 26px;
            color: #F2F2F2;
          }
        }
      }
    }
  }
  .part-portfolio {
    padding: 80px 0;
    box-sizing: border-box;
    background: #EBF0ED;
    .portfolio-list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 40px;
      width: 1120px;
      margin: auto;
      .portfolio-item {
        width: 170px;
        height: 170px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-top: 20px;
        transition: all .3s;
        &:hover {
          background: #EBF0ED;
          box-shadow: 0px 0px 74px rgba(139, 153, 145, 0.24);
          transform: translateY(-8px);
        }
        &>img {
          width: 130px;
          height: 64px;
        }
      }
      .shadow {
        background: #EBF0ED;
        box-shadow: 0px 0px 74px rgba(139, 153, 145, 0.24);
      }
      .portfolio-empty {
        width: 170px;
      }
    }
  }
  .part-round {
    background: url('./../../assets/images/banner.png') no-repeat center;
    background-size: 1065px 100%;
    background-color: #000;
    padding: 80px 0;
    height: 753px;
    box-sizing: border-box;
    min-width: 1065px;
    .point-container {
      width: 1065px;
      height: 100%;
      margin: auto;
      position: relative;
    }
    .road {
      font-size: 20px;
      line-height: 32px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      color: #F2F2F2;
      cursor: pointer;
      transition: all .5s;
      position: absolute;
      &:hover {
        color: #0BAB50;
        .circle {
          background: rgba(11, 171, 80, .4);
        }
      }
      .circle {
        width: 40px;
        height: 40px;
        background: transparent;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        margin-right: 10px;
        transition: all .5s;
        &>span {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 20px;
          height: 20px;
          background: #0BAB50;
          border-radius: 50%;
          display: inline-block;
        }
      }
    }
    .roadleft {
      .circle {
        margin: 0 0 0 10px;
      }
    }
    .road1 {
      top: 91px;
      right: 240px;
    }
    .road2 {
      top: 265px;
      right: 55px;
    }
    .road3 {
      top: 450px;
      right: 165px;
    }
    .road4 {
      top: 217px;
      left: 190px;
    }
    .road5 {
      top: 351px;
      left: 297px;
    }
    .road6 {
      top: 402px;
      left: 97px;
    }
//     .round-infos {
//       position: relative;
//       .circle {
//         width: 398px;
//         height: 398px;
//         border-radius: 50%;
//         border: 1px dashed #F2F2F2;
//         box-sizing: border-box;
//         margin: auto;
//         position: relative;
//         .circle-item {
//           width: 24px;
//           height: 24px;
//           background: #0BAB50;
//           border-radius: 50%;
//           position: absolute;
//         }
//         .circle1 {
//           top: -12px;
//           left: 50%;
//           transform: translateX(-50%);
//         }
//         .circle2 {
//           top: -12px;
//           right: 12px;
//           transform: translateX(-50%);
//         }
// .hexagon {
//     position: relative;
//     display: inline-block;
//     width: 228px;
//     height: 396px;
//     background-color: #df2020;
//     margin-left: 84px;
//     position: absolute;
//     top: 0;
//     // position: absolute;
//     // top: 0;
//     // left: 50%;
//     // transform: translateX(-50%);
// }
// .turn {
//   font-weight: bold;
//   font-size: 30px;
//   line-height: 52px;
//   color: #F2F2F2;
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   cursor: pointer;
  
//   &::before {
//     width: 24px;
//     height: 24px;
//     background: #0BAB50;
//     position: absolute;
    
//     left: 50%;
//     margin-left: -12px;
//     content: '';
//     display: inline-block;
//     border-radius: 50%;
//   }
//   &:after {
//     content: '';
//     display: inline-block;
//     border-radius: 50%;
//     position: absolute;
//     width: 46px;
//     height: 46px;
//     background-color: rgba(11, 171, 80, .4);
//     left: 50%;
//     margin-left: -23px;
//     // cursor: pointer;
//     background: transparent;
//   }
//   &:hover {
//     &:after {
//       background-color: rgba(11, 171, 80, .4);
//     }
//     color: $green;
//   }
// }
// .top {
//   top: -80px;
//   padding-bottom: 28px;
//   width: 500px;
//   text-align: center;
//   &::before {
//     bottom: -12px;
//   }
//   &:after {
//     bottom: -23px;
//   }
//   &>span {
//     display: inline-block;
//   }
// }
// .bottom {
//   bottom: -80px;
//   padding-top: 28px;
//   width: 500px;
//   text-align: center;
//   &::before {
//     top: -12px;
//   }
//   &:after {
//     top: -23px;
//   }
//   &>span {
//     display: inline-block;
//   }
// }
// .topleft {
//   &>span {
//     transform: rotate(60deg);
//     position: relative;
//     top: -134px;
//     left: -106px;
//   }
// }
// .topright {
//   &>span {
//     transform: rotate(-60deg);
//     position: relative;
//     top: -99px;
//     right: -88px;
//   }
// }
// .bottomleft {
//   &>span {
//     transform: rotate(-60deg);
//     position: relative;
//     bottom: -97px;
//     left: -82px;
//   }
// }
// .bottomright {
//   &>span {
//     transform: rotate(60deg);
//     position: relative;
//     bottom: -97px;
//     right: -82px;
//   }
// }
// // .hexagon::before {
// //     width: inherit;
// //     height: inherit;
// //     background-color: inherit;
// //     content: "";
// //     position: absolute;
// //     left: 0;
// //     transform: rotate(-60deg);
// // }
// // .hexagon::after {
// //     width: inherit;
// //     height: inherit;
// //     background-color: inherit;
// //     content: "";
// //     position: absolute;
// //     left: 0;
// //     transform: rotate(60deg);
// // }
// .rounded1 {
//   transform: rotate(-60deg);
// }
// .rounded2 {
//   transform: rotate(60deg);
// }
// .one {
//     background-color: transparent;
//     width: 228px;
//     height: 396px;
// }
// .rot30 {
//     transform: rotate(30deg);
// }
//       }
//       .round-center {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         text-align: center;
//         &>img {
//           height: 52px;
//         }
//         &>p {
//           font-weight: 500;
//           font-size: 22px;
//           line-height: 42px;
//           color: #FFFFFF;
//           margin-top: 12px;
//         }
//       }
//     }
  }
  .part-footer {
    background: #1E2434;
    padding: 148px 160px 60px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    .footer-left {
      &>img {
        height: 42px;
        margin-bottom: 26px;
      }
      &>p {
        font-size: 14px;
        line-height: 18px;
        color: #F2F2F2;
        max-width: 360px;
      }
    }
    .footer-right {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      .contact {
        font-weight: bold;
        font-size: 40px;
        line-height: 42px;
        color: #FFFFFF;
      }
      .icons {
        margin-top: 30px;
        img {
          width: 28px;
          height: 28px;
          margin-left: 48px;
          cursor: pointer;
        }
      }
      .navs {
        font-size: 14px;
        line-height: 13px;
        color: #FFFFFF;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 25px;
        &>p {
          padding: 0 32px;
          border-left: 1px solid #fff;
          cursor: pointer;
          &:last-child {
            padding-right: 0;
          }
          &:first-child {
            border-left: none;
          }
          
        }
      }
    }
  }
}
</style>