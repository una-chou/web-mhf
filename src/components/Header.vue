<template>
    <div>
      <div class="top-nav-common top-nav-whole">
        <div class="top-nav-notice">Mission Hill Foods <span style="display:inline-block;width:10px"></span> Science-Based Dietary Nutrition</div>
        <a class="logo" href="javascript:;" @click="jumpTo('index')"><img :src="require('@/assets/images/logo.png')" alt=""></a>
        <ul class="nav-list">
          <li :class="{'active': currentTab==='Company'}" @click="jumpTo('Company')">Company</li>
          <li :class="{'active': currentTab==='Products'}" @click="jumpTo('Products')">Products</li>
          <li :class="{'active': currentTab==='Laboratory'}" @click="jumpTo('Laboratory')">Laboratory</li>
          <li :class="{'active': currentTab==='Manufacturing'}" @click="jumpTo('Manufacturing')">Manufacturing</li>
          <li :class="{'active': currentTab==='Contact'}" @click="jumpTo('Contact')">Contact us</li>
        </ul>
      </div>
      <div class="top-nav-common top-nav-fold">
        <div class="top-nav-notice">Mission Hill Foods <span style="display:inline-block;width:10px"></span> Science-Based Dietary Nutrition</div>
        <a class="logo" href="javascript:;" @click="jumpTo('index')"><img :src="require('@/assets/images/logo.png')" alt=""></a>
        <div class="three-line" :class="{'active-line':isOpen}" @click="openNavs"><div class="line"></div> <div class="line"></div> <div class="line"></div></div>
        <div class="phone-header-menu-list" v-if="isOpen">
          <a href="javascript:;" @click="jumpTo('Company')" class="menu-list-item">Company</a> 
          <a href="javascript:;" @click="jumpTo('Products')" class="menu-list-item">Products</a> 
          <a href="javascript:;" @click="jumpTo('Laboratory')" class="menu-list-item">Laboratory</a> 
          <a href="javascript:;" @click="jumpTo('Manufacturing')" class="menu-list-item">Manufacturing</a> 
          <a href="javascript:;" @click="jumpTo('Contact')" class="menu-list-item">Contact us</a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    components: {},
    props: {},
    data() {
        return {
          currentTab: '',
          isOpen: false,
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
      openNavs() {
        this.isOpen = !this.isOpen

      },
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
        this.isOpen = false
      }
    }
}
</script>
<style lang='scss' scoped>
$green: #0BAB50;
$greenText: #006633;
.top-nav-common {
  height: $headerHeight;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: $greenText;
  padding-top: $headerNotice;
  .top-nav-notice {
    width:100%;height:46px;position:absolute;top:0;
    background: $green;
    left: 0;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height:46px;
    font-weight: 500;
  }
  .logo {
    height: 48px;
    &>img {
      height: 48px;
      width: auto;
    }
  }
  .nav-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    &>li {
      font-size: 20px;
      line-height: 13px;
      color: #FFFFFF;
      margin-right: 52px;
      font-weight: 500;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: $green;
        font-weight: bold;
      }
    }
    .active {
      font-weight: bold;
      color: $green;
    }
  }
}
.top-nav-whole {
  display: block;
}
.top-nav-fold {
  display: none;
}
@media only screen and (max-width: 1100px) {
  
  .top-nav-common {
    .nav-list {
      &>li {
        margin-right: 35px;
      }
    }
  }
}

@media only screen and (max-width: 900px) {
.top-nav-whole {
  display: none;
}
.top-nav-fold {
  display: block;
}
.top-nav-common {
  height: $headerHeightMobile;
  padding: 0 20px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .top-nav-notice {
    height:40px;
    font-size: 16px;
    line-height:40px;
  }
  .logo {
    height: 40px;
    &>img {
      height: 40px;
      width: auto;
    }
  }
  .three-line {
    display: flex;
    width: 55px;
    align-items: center;
    flex-direction: column;
    .line {
      transition: all .3s;
      margin-bottom: 5.5px;
      display: inline-block;
      width: 24px;
      height: 2px;
      background-color: #fff;
      opacity: 1;
      &:first-child {
        transform-origin: left top;
      }
      &:nth-child(3) {
        transform-origin: left bottom;
      }
    }
  }
  .three-line.active-line .line:first-child {
    transform: rotate(40deg);
  }
  .three-line.active-line .line:nth-child(2) {
    opacity: 0;
  }
  .three-line.active-line .line:nth-child(3) {
    transform: rotate(-40deg);
  }
  .phone-header-menu-list {
    opacity: 1;
    transition: all .4s ease-in-out;
    display: flex;
    width: 100vw;
    background-color: $greenText;
    height: 100vh;
    position: fixed;
    top: $headerHeightMobile;
    right: 0;
    flex-direction: column;
    z-index: 999;
    padding-bottom: 10px;
    padding-top: 67px;
    .menu-list-item {
      height: 62px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      color: $green;
      line-height: 15px;
      letter-spacing: 2px;
      border-bottom: 1px solid #222;
      text-decoration: none;
    }
  }
}
}
</style>