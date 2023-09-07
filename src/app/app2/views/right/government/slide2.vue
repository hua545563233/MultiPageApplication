<template>
  <div class="government-slide2">
    <div class="government-slide2-img1">
      <countTo :startVal="0" :endVal="56 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
      <countTo :startVal="0" :endVal="24 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <Tab1 />
    <Tab2 />
  </div>
</template>

<script>
import Tab1 from './tab1'
import Tab2 from './tab2'

export default {
  name: 'Slide2',
  components: {
    Tab1,
    Tab2
  },
  data () {
    return {
      randomN: 0,
      activeIndex1: 0,
      activeIndex2: 0,
      tab1Value1: 26,
      tab1Value2: 21,
      tab1Value3: 18,
      tab2Value1: 22,
      tab2Value2: 21,
      tab2Value3: 16
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
    this.update()
  },
  methods: {
    update () {
      this.randomN = Math.random()
    }
  }
}
</script>

<style lang="scss">
.app2-left-government {
  .government-slide2 {
    position: absolute;
    width: 100%;
    height: 100%;
    .government-slide2-img1 {
      position: absolute;
      left: 0.42rem;
      top: 0.75rem;
      width: 2.96rem;
      height: 1.84rem;
      background-image: url("../../../../../assets/img/app2/right/government-slide2-bg1.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      >span {
        position: absolute;
        top: 1.2rem;
        transform: translateX(-50%);
        width: 0.6rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.28rem;
        color: #e4ccfc;
        text-align: center;
      }
      >span:nth-child(1) {
        left: 0.58rem;
      }
      >span:nth-child(2) {
        left: 2.03rem;
      }
    }
    .tab {
      position: absolute;
      >.select {
        display: flex;
        height: 0.3rem;
        box-sizing: border-box;
        font-size: 0.17rem;
        color: #8888a0;
        >div {
          margin-right: 0.1rem;
          cursor: pointer;
          transition: all 0.3s;
          border-bottom: 2px solid rgba($color: #019cf9, $alpha: 0.4);
          text-shadow: 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6;
        }
        >div:hover {
          color: #fff;
          border-bottom: 2px solid rgba($color: #019cf9, $alpha: 1);
        }
        .active {
          color: #ffffff;
          border-bottom: 2px solid rgba($color: #019cf9, $alpha: 1);
        }
      }
      .tab-content {
        width: 100%;
        overflow: hidden;
      }
      .tab-container {
        display: flex;
        transition: all 0.3s;
      }
      .page {
        .tab1-name {
          color: #a8a4b2;
        }
        .tab1-value {
          color: #fcdadb;
        }
      }
    }
    .tab1 {
      top: 2.8rem;
      left: 0.48rem;
      width: 2.65rem;
      height: 1.25rem;
      color: #a4a1ac;
      .tab-content {
        height: calc(100% - 0.3rem);
      }
      .tab-container {
        width: 200%;
        height: 100%;
      }
      .page {
        position: relative;
        width: 50%;
        height: 100%;
        background-image: url("../../../../../assets/img/app2/right/government-slide2-bg2.png");
        background-repeat: no-repeat;
        background-size: 2.43rem 0.57rem;
        background-position: 0.13rem bottom;
        >div {
          position: absolute;
          transform: translateX(-50%);
          text-align: center;
        }
        .tab1-name {
          width: 1rem;
          height: 0.14rem;
          line-height: 0.14rem;
          font-size: 0.13rem;
          color: #a8a4b2;
        }
        .tab1-value {
          width: 0.8rem;
          height: 0.25rem;
          line-height: 0.25rem;
          color: #fcdadb;
          font-size: 0.25rem;
        }
        >div:nth-child(1),
        >div:nth-child(2),
        >div:nth-child(3) {
          top: 0.17rem;
        }
        >div:nth-child(4),
        >div:nth-child(5),
        >div:nth-child(6) {
          top: 0.56rem;
        }
        >div:nth-child(1),
        >div:nth-child(4) {
          left: 0.4rem;
        }
        >div:nth-child(2),
        >div:nth-child(5) {
          left: 1.36rem;
        }
        >div:nth-child(3),
        >div:nth-child(6) {
          left: 2.25rem;
        }
      }
    }
    .tab2 {
      right: 0.05rem;
      top: 1.05rem;
      width: 2.41rem;
      height: 2.94rem;
      .tab-content {
        height: calc(100% - 0.3rem);
      }
      .tab-container {
        width: 200%;
        height: 100%;
      }
      .page {
        position: relative;
        width: 50%;
        height: 100%;
      }
      .page:nth-child(1) {
        background-image: url("../../../../../assets/img/app2/right/government-slide2-chart.png");
        background-repeat: no-repeat;
        background-size: 2.41rem 2.44rem;
        background-position: center bottom;
      }
      .page:nth-child(2) {
        background-image: url("../../../../../assets/img/app2/right/government-slide2-chart2.png");
        background-repeat: no-repeat;
        background-size: 2.41rem 2.44rem;
        background-position: center bottom;
      }
    }
  }
}
</style>
