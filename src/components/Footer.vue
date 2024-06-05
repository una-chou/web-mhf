<template>
  <div class="part-footer">
    <div class="footer-tops"></div>
    <div class="footer-navs">
      <p :class="{'active': currentTab==='Company'}" @click="jumpTo('Company')">Company</p>
      <p :class="{'active': currentTab==='Products'}" @click="jumpTo('Products')">Products</p>
      <p :class="{'active': currentTab==='Laboratory'}" @click="jumpTo('Laboratory')">Laboratory</p>
      <p :class="{'active': currentTab==='Manufacturing'}" @click="jumpTo('Manufacturing')">Manufacture</p>
      <p :class="{'active': currentTab==='Contact'}">Contact us</p>
    </div>
    <div class="footer-contact footer-contact-new" style="border-top: 1px solid rgba(255,255,255,.5);">
      <div class="footer-contact-left">
        <img src="@/assets/images/logo.png" alt="">
        <p>Science-Based <br />Dietary Nutrition</p>
      </div>
      <div class="footer-sep"></div>
      <div class="footer-contact-center">
        <img src="@/assets/images/amazon.png" alt="">
        <p>Available on <br />Amazon.com</p>
      </div>
      <div class="footer-sep"></div>
      <div class="footer-contact-right">
        <a href="https://x.com" target="_blank" style="height:38px"><img src="@/assets/images/footer/twitter.svg" alt=""></a>
        <a href="https://www.tiktok.com" target="_blank"><img src="@/assets/images/footer/tiktok.svg" alt=""></a>
        <a href="https://www.facebook.com/" target="_blank"><img src="@/assets/images/footer/facebook.svg" alt=""></a>
        <a href="javascript:;" style="height:40px"><img src="@/assets/images/footer/photo.svg" alt=""></a>
      </div>
    </div>
    <div class="footer-contact footer-contact-address">
      <div class="footer-contact-address-left">
        <p>Business<br />Address:</p>
      </div>
      <!-- <div class="footer-contact-address-right"> -->
      <div class="footer-sep"></div>
      <div class="footer-address-info"><p>Headquarter<br />Mission Hill Foods Inc<br />17870 Castleton ST STE 302  <br />City of Industry CA 91748, USA</p></div>
      <div class="footer-sep"></div>
      <div class="footer-address-info"><p>Canada Office<br />Mission Hill Foods Co. Ltd.<br />202-15388 24 Ave Surrey <br />BC V4A2J2 CANADA</p></div>
      <div class="footer-sep"></div>
      <div class="footer-address-info" style="justify-content: flex-end;"><p>New York Office<br />CBD Calm Inc. <br />8321 3FL Broadway, Elmhurst, <br />NY 11373 USA</p></div>
      <!-- </div> -->
    </div>
    <div class="footer-contact footer-contact-email">
      <div class="footer-email-info">
        <div>Welcome to contact us at: sales@misisonhillfoods.com</div>
        <div>Connect with us on Instagram, X.com, and Facebook to stay updated on all our latest news and promotions!</div>
        <div>Welcome to explore our products on Amazon and TikTok!</div>
      </div>
      <div class="footer-email">
        <a href="mailto:sales@misisonhillfoods.com"><img src="@/assets/images/footer/email.svg" alt=""></a>
      </div>
    </div>

    <div class="footer-copyright">Copyright © 2024 Mission Hill Foods. All Rights Reserved</div>
  </div>
</template>
<script>
export default {
    components: {},
    props: {},
    data() {
        return {
          currentTab: '',
        }
    },
    watch: {
      '$route.name': {
        handler(newVal, oldVal) {
          console.log(newVal, oldVal);
          if (newVal) {
            this.currentTab = newVal
          }
        },
        deep: true,
        immediate: true
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
$green: #0BAB50;
$greenText: #006633;
.part-footer {
  background-color: $greenText;
  position: relative;
  padding: 0 70px;
  margin-top: 70px;
  font-weight: 500;
  .footer-tops {
    position: absolute;
    top: -17px;
    left: 0;
    width: 100%;
    height: 40px;
    background: url('./../assets/images/wave.png') repeat;
    background-size: 40px auto;
  }
  .footer-navs {
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: center;
    color: #fff;
    p {
      padding: 0 20px;
      cursor: pointer;
      &:hover {
        // font-weight: bold;
        color: $green;
      }
    }
    .active {
      font-weight: bold;
    }
  }
  .footer-contact {
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
  }
  .footer-contact-new {
    color: #fff;
    padding: 30px 0;
    font-size: 18px;
    align-items: center;
    &>div {
      display: flex;
      align-items: center;
      // width: 33%;
      flex-shrink: 0;
    }
    .footer-contact-left {
      justify-content: flex-start;
      img {
        height: 70px;
        margin-right: 20px;
        position: relative;
        top: -5px;
      }
    }
    .footer-contact-center {
      justify-content: center;
      img {
        height: 54px;
        margin-right: 20px;
        position: relative;
        top: 10px;
      }
    }
    .footer-contact-right {
      justify-content: flex-end;
      a {
        height: 42px;
        margin-left: 20px;
        img {
          height: 100%;
          margin: 0;
        }
      }
      
    }
    .footer-sep {
      height: 70px;
      width: 1px;
      background-color: rgba(255,255,255,.5);
    }
  }
  .footer-contact-address {
    display: flex;
    align-items: center;
    padding: 30px 0;
    color: #fff;
    .footer-contact-address-left {
      font-size: 18px;
      font-weight: bold;
      // padding-right: 60px;
      flex-shrink: 0;
    }
    // .footer-contact-address-right {
      // flex: auto;
      // display: flex;
      // align-self: center;
      .footer-address-info {
        // width: 33%;
        flex-shrink: 0;
        font-size: 14px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }
    // }
    .footer-sep {
      height: 70px;
      width: 1px;
      background-color: rgba(255,255,255,.5);
    }
  }
  .footer-contact-email {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    color: #fff;
    // font-weight: 300;
    font-size: 15px;
    .footer-email-info {
      flex: auto;
      line-height: 1.5;
    }
    .footer-email {
      height: 30px;
      flex-shrink: 0;
    }
  }
  .footer-copyright {
    text-align: center;
    padding: 50px 0 40px;
    color: #fff;
  }
}

@media only screen and (max-width: 1200px) {
.part-footer {
  
  .footer-contact-new {
    
    .footer-contact-left {
      img {
        height: 56px;
        margin-right: 10px;
      }
    }
    .footer-contact-center {
      img {
        height: 48px;
        margin-right: 10px;
      }
    }
    .footer-contact-right {
      a {
        height: 38px;
        margin-left: 10px;
      }
    }
  }
}
}
</style>