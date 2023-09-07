<template>
  <div class="app2-left-complaint">
    <div class="subject text-show">投诉</div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide complaint-slide">
          <div class="item">
            <div class="item-title text-show">{{ item1.name }}</div>
            <div class="item-img">
              <div></div>
            </div>
            <div class="item-value">
              <countTo :startVal="0" :endVal="item1.value1 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
              <countTo :startVal="0" :endVal="item1.value2 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
              <countTo :startVal="0" :endVal="item1.value3 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
            </div>
          </div>
          <Tab />
        </div>
        <div class="swiper-slide complaint-slide">
          <div class="item">
            <div class="item-title text-show">{{ item3.name }}</div>
            <div class="item-img">
              <div></div>
            </div>
            <div class="item-value">
              <countTo :startVal="0" :endVal="item3.value1 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
              <countTo :startVal="0" :endVal="item3.value2 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
              <countTo :startVal="0" :endVal="item3.value3 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
            </div>
          </div>
          <div class="item">
            <div class="item-title text-show">{{ item4.name }}</div>
            <div class="item-img">
              <div></div>
            </div>
            <div class="item-value">
              <countTo :startVal="0" :endVal="item4.value1 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
              <countTo :startVal="0" :endVal="item4.value2 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
              <countTo :startVal="0" :endVal="item4.value3 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination app2R-pagination app2R-complaint-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Tab from './tab'

export default {
  name: 'Complaint',
  components: {
    Tab
  },
  data () {
    return {
      randomN: 0,
      option: {
        pagination: {
          el: '.app2R-complaint-pagination',
          clickable: true
        },
        autoplay: {
          delay: 15000
        },
        observer: true,
        observeParents: true
      },
      tabIndex: 0,
      item1: {
        name: '投诉预警',
        value1: 1,
        value2: 2,
        value3: 1
      },
      item2: {
        name: '手机上网',
        tab1value1: 1,
        tab1value2: 2,
        tab1value3: 1,
        tab2value1: 1,
        tab2value2: 2,
        tab2value3: 1,
        tab3value1: 1,
        tab3value2: 2,
        tab3value3: 1
      },
      item3: {
        name: '家庭宽带',
        value1: 1,
        value2: 2,
        value3: 1
      },
      item4: {
        name: '互联网电视',
        value1: 1,
        value2: 2,
        value3: 1
      }
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
.app2-left-complaint {
  position: absolute;
  top: 9.7rem;
  left: 8.71rem;
  width: 2.9rem;
  height: 2.18rem;
  .subject {
    top: 0.1rem!important;
    text-indent: 0.26rem;
  }
  .complaint-slide {
    .item {
      position: absolute;
      bottom: 0;
      width: 50%;
      height: 1.23rem;
    }
    .item:nth-child(2) {
      left: 50%;
    }
    .item-title {
      font-size: 0.24rem;
      color: #fff;
      text-align: center;
    }
    .item-img {
      position: relative;
      height: 0.5rem;
      >div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 0.68rem;
        background: url("../../../../../assets/img/app2/right/5.png") no-repeat;
        background-size: 2.88rem 0.68rem;
      }
    }
    .item-value {
      display: flex;
      justify-content: center;
      color: #fbdddf;
      font-size: 0.2rem;
      text-align: center;
      >span {
        width: 0.41rem;
      }
    }
    .tab-item {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50%;
      height: 1.23rem;
      .item-title {
        position: absolute;
        top: -0.3rem;
        width: 100%;
        padding-right: 0.15rem;
        text-align: right;
        box-sizing: border-box;
      }
      .tab-select {
        display: flex;
        padding-left: 0.2rem;
        box-sizing: border-box;
        div {
          width: 0.3rem;
          height: 0.36rem;
          line-height: 0.36rem;
          font-size: 0.14rem;
          color: #fff;
          border-right: 2px solid transparent;
          border-bottom: 2px solid rgba($color: #059bf2, $alpha: 0.6);
          box-sizing: border-box;
          cursor: pointer;
        }
        div:hover {
          text-shadow: 0 0 10px #615cf6, 0 0 20px #615cf6, 0 0 20px #615cf6, 0 0 20px #615cf6, 0 0 20px #615cf6, 0 0 20px #615cf6, 0 0 20px #615cf6, 0 0 20px #615cf6;
        }
        .active {
          border-bottom: 2px solid rgba($color: #059bf2, $alpha: 1);
        }
      }
      .tab-content {
        width: 100%;
        overflow: hidden;
        .tab-container {
          display: flex;
          width: 300%;
          transition: all 0.3s;
          >div {
            width: 33.333333%;
          }
        }
      }
    }
  }
}
</style>
