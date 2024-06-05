<template>
  <div class="SELLERSLIS">
    <div class="sellers-items" @click="gotoView(item.unique)">
      <div class="sellers-pics">
        <img :src="item.picture" alt="">
        <!-- <el-image :src="item.picture" :preview-src-list="[item.picture]"></el-image> -->
      </div>
      <p class="sellers-titles">{{ item.name }}</p>
      <div class="sellers-descs">{{ item.desc }}</div>
      <div class="sellers-btns">LEARN MORE</div>
    </div>
  </div>
</template>
<script>
export default {
    components: {},
    props: {
      item: {
        type: Object,
      }
    },
    data() {
        return {
            
        }
    },
    created() {},
    mounted() {},
    methods: {
      gotoView(value) {
        console.log(this.$route.query.unique, value, this.$route.query.unique==value);
        if (this.$route.query && this.$route.query.unique && this.$route.query.unique==value) {
          return window.scrollTo(0,0)
        }
        this.$router.push({name:'Details', query: {unique: value}})
      }
    }
}
</script>
<style lang='scss' scoped>
$green: #0BAB50;
$greenText: #006633;
.SELLERSLIS {
  padding: 0 10px;
  width: 100%;
  .sellers-items {
    // width: 310px;
    width: 100%;
    margin-right: 20px;
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      .sellers-pics {
        &>img {
        transform: scale(1.1);
          
        }
      }
      .sellers-titles {
        color: $greenText;
      }
      .sellers-descs {
        color: $greenText;
      }
      .sellers-btns {
        background: $greenText;
      }
    }
    &:last-child {
      margin-right: 0;
    }
    .sellers-pics {
      width: 100%;
      // height: 310px;
      overflow: hidden;
      position: relative;
      padding-top: 10px;
      &>img {
        width: 100%;
        // height: 100%;
        height: auto;
        transition: all 0.3s ease;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
      }
    }
    .sellers-titles {
      display: block;
      text-decoration: none;
      font-size: 20px;
      line-height: 24px;
      font-weight: 1000;
      margin: 12px 0 8px 0;
      text-align: center;
      transition: all 0.3s ease;
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sellers-descs {
      font-size: 14px;
      line-height: 20px;
      margin: 0 0 18px 0;
      transition: all 0.3s ease;
      // padding: 0 20px;
      text-align: center;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 3; /* 显示的行数 */
      color: #000;
      font-weight: 500;
      height: 60px;
    }
    .sellers-btns {
      height: 40px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      cursor: pointer;
      background: $green;
      transition: all 0.3s ease;
      color: #FFFFFF;
    }
  }
}
</style>