<template>
  <div class="app2-left-network">
    <div class="subject text-show">网络安全</div>
    <div class="swiper-box">
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide network-slide">
            <div class="list">
              <div
                v-for="(item, index) in list1"
                :key="index"
                class="item"
              >
                <div class="item-title">{{ item.name }}</div>
                <div class="item-value">
                  <countTo :startVal="0" :endVal="item.value + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
                  <div class="chart"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide network-slide">
            <div class="list">
              <div
                v-for="(item, index) in list2"
                :key="index"
                class="item"
              >
                <div class="item-title">{{ item.name }}</div>
                <div class="item-value">
                  <countTo :startVal="0" :endVal="item.value + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
                  <div class="chart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination app2R-pagination app2R-network-pagination"></div>
      </div>
    </div>
    <div class="table">
      <div class="table-title">重点保护站清单</div>
      <div class="table-header item">
        <div>名称</div>
        <div>网址</div>
      </div>
      <div class="table-body">
        <div
          v-for="(item, index) in list3"
          :key="index"
          class="item"
        >
          <div class="item-title">{{ item.name }}</div>
          <div class="item-value">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Network',
  data () {
    return {
      randomN: 0,
      option: {
        pagination: {
          el: '.app2R-network-pagination',
          clickable: true
        },
        autoplay: {
          delay: 15000
        },
        observer: true,
        observeParents: true
      },
      list1: [
        {
          name: '重大网络安全',
          value: 17
        },
        {
          name: '流量攻击',
          value: 34
        },
        {
          name: '网页篡改',
          value: 22
        }
      ],
      list2: [
        {
          name: '网络入侵',
          value: 11
        },
        {
          name: '域名劫持',
          value: 26
        }
      ],
      list3: [
        {
          name: '淘宝',
          value: 'https://www.taobao.com/'
        },
        {
          name: '百度',
          value: 'https://www.baidu.com/'
        },
        {
          name: '腾讯',
          value: 'https://www.qq.com'
        }
      ]
    }
  },
  computed: {
    count () {
      return this.$root.TIME_COUNT
    }
  },
  watch: {
    count () {
      this.update()
    }
  },
  mounted () {
    this.initSwiper()
    this.update()
  },
  methods: {
    initSwiper () {
      this.swiper = new Swiper(this.$refs.swiper, this.option)
    },
    update () {
      this.randomN = Math.random()
    }
  }
}
</script>

<style lang="scss">
.app2-left-network {
  position: absolute;
  top: 9.7rem;
  width: 6rem;
  height: 2.18rem;
  background: url("../../../../../assets/img/app2/right/network-bg.png") no-repeat;
  background-size: 3.15rem 1.45rem;
  background-position: right bottom;
  .subject {
    top: 0.1rem!important;
  }
  .swiper-box {
    position: absolute;
    width: 3rem;
    height: 100%;
    .app2R-network-pagination {
      top: 0.5rem!important;
      width: 0.7rem!important;
    }
  }
  .network-slide {
    .list {
      display: flex;
      position: absolute;
      top: 0.85rem;
      width: 100%;
    }
    .item {
      width: 33.3%;
      text-align: center;
      .item-title {
        height: 0.24rem;
        line-height: 0.24rem;
        font-size: 0.16rem;
        color: #a4a1a8;
        margin-bottom: 0.16rem;
      }
      .item-value {
        position: relative;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.3rem;
        color: #e6cffb;
      }
      .chart {
        position: absolute;
        top: 0;
        left: 50%;
        width: 0.6rem;
        height: 0.6rem;
        margin-left: -0.3rem;
        border: 3px solid #5365ef;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-radius: 0.6rem;
        transform: rotateZ(135deg);
      }
    }
  }
  .table {
    position: absolute;
    top: 0.5rem;
    left: 3.1rem;
    width: 2.84rem;
    height: 1.67rem;
    font-size: 0.16rem;
    color: #8b8795;
    .table-title {
      text-align: center;
      margin-bottom: 0.1rem;
    }
    .item {
      display: flex;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: left;
      >div:first-child {
        width: 0.7rem;
      }
      >div:last-child {
        flex: 1;
      }
    }
    .table-body {
      .item:nth-child(2) {
        color: #edebf0;
      }
    }
    // .table-header {
    // }
    // .table-body {
    //   .item {
    //     display: flex;
    //   }
    // }
  }
}
</style>
