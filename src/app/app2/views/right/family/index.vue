<template>
  <div class="app2-left-family">
    <div class="subject text-show">家庭市场</div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1">
          <tab1 />
          <tab2 />
        </div>
        <div class="swiper-slide slide2">
          <div class="title">链路负荷</div>
          <div class="table">
            <div class="header tr">
              <div
                v-for="(item, index) in slide2Header"
                :key="index"
                v-html="item.name"
              ></div>
            </div>
            <div class="body">
              <div
                v-for="(item, index) in slide2Body"
                :key="index"
                class="tr"
              >
                <div class="td" :class="{top3: index < 3}">{{ index + 1 }}</div>
                <div class="td">{{ item.col1 }}</div>
                <div class="td">
                  <countTo :startVal="0" :endVal="item.col2 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
                  <span class="unit">kbps</span>
                </div>
                <div class="td">
                  <countTo :startVal="0" :endVal="item.col3 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="'%'"></countTo>
                </div>
                <div class="td">
                  <countTo :startVal="0" :endVal="item.col4 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
                  <span class="unit">kbps</span>
                </div>
                <div class="td">
                  <countTo :startVal="0" :endVal="item.col5 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="'%'"></countTo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination app2R-pagination app2R-family-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import tab1 from './tab1'
import tab2 from './tab2'

export default {
  name: 'Family',
  components: {
    tab1,
    tab2
  },
  data () {
    return {
      randomN: 0,
      option: {
        pagination: {
          el: '.app2R-family-pagination',
          clickable: true
        },
        autoplay: {
          delay: 15000
        },
        observer: true,
        observeParents: true
      },
      slide2Header: [
        {
          name: '序号'
        },
        {
          name: '频道名称'
        },
        {
          name: 'AR-AR链路<br />峰值流速'
        },
        {
          name: 'AR-AR链路<br />峰值利用率'
        },
        {
          name: 'AR-BR链路<br />峰值流速'
        },
        {
          name: 'AR-BR链路<br />峰值利用率'
        }
      ],
      slide2Body: [
        {
          col1: 'CCTV1',
          col2: 561,
          col3: 97,
          col4: 561,
          col5: 97.8
        },
        {
          col1: 'CCTV2',
          col2: 561,
          col3: 96,
          col4: 561,
          col5: 96.8
        },
        {
          col1: 'CCTV3',
          col2: 561,
          col3: 94,
          col4: 561,
          col5: 97.8
        },
        {
          col1: 'CCTV4',
          col2: 561,
          col3: 92,
          col4: 561,
          col5: 95.8
        },
        {
          col1: 'CCTV5',
          col2: 561,
          col3: 90,
          col4: 561,
          col5: 92.8
        },
        {
          col1: 'CCTV7',
          col2: 561,
          col3: 88,
          col4: 561,
          col5: 90.8
        },
        {
          col1: 'CCTV6',
          col2: 561,
          col3: 86,
          col4: 561,
          col5: 88.8
        },
        {
          col1: 'CCTV8',
          col2: 561,
          col3: 84,
          col4: 561,
          col5: 86.8
        },
        {
          col1: 'CCTV9',
          col2: 561,
          col3: 82,
          col4: 561,
          col5: 84.8
        },
        {
          col1: 'CCTV11',
          col2: 561,
          col3: 80,
          col4: 561,
          col5: 82.8
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
.app2-left-family {
  position: absolute;
  top: 5.3rem;
  width: 6rem;
  height: 4.08rem;
  .top3 {
    color: #fff!important;
    text-shadow: 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6, 0 0 5px #615cf6;
  }
  .subject {
    text-indent: 0.1rem
  }
  .family-tab {
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
  }
  .slide2 {
    .title {
      position: absolute;
      top: 0.7rem;
      left: 0;
      width: 2.95rem;
      height: 0.3rem;
      background: url("../../../../../assets/img/app2/right/title-bg.png") no-repeat;
      background-size: 2.95rem 0.15rem;
      background-position: left bottom;
      text-indent: 0.15rem;
      font-size: 0.2rem;
      line-height: 0.2rem;
      color: #fff;
      letter-spacing: 0.02rem;
      text-shadow: 0 0 10px #615cf6, 0 0 10px #615cf6, 0 0 10px #615cf6, 0 0 10px #615cf6, 0 0 10px #615cf6, 0 0 10px #615cf6, 0 0 10px #615cf6, 0 0 10px #615cf6;
    }
    .table {
      position: absolute;
      top: 1rem;
      left: 0;
      width: 5.68rem;
      height: 3.04rem;
      .header {
        height: 0.47rem;
        line-height: 0.2rem;
        border-bottom: 1px solid #7d87ba;
        font-size: 0.18rem;
        color: #d5d4dc;
        box-sizing: border-box;
        >div {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
      .body {
        border-bottom: 1px solid #7d87ba;
        box-sizing: border-box;
        font-size: 0.14rem;
        color: #d3d2fc;
        text-align: center;
        .tr {
          height: 0.25rem;
          >div:nth-child(1),
          >div:nth-child(2) {
            color: #a7a4af;
            font-family: "TiHei";
          }
        }
      }
      .tr {
        display: flex;
        line-height: 0.25rem;
        >div:nth-child(1) {
          width: 0.47rem;
        }
        >div:nth-child(2) {
          flex: 1;
        }
        >div:nth-child(3) {
          width: 1.1rem;
        }
        >div:nth-child(4) {
          width: 1.1rem;
        }
        >div:nth-child(5) {
          width: 1.1rem;
        }
        >div:nth-child(6) {
          width: 1.1rem;
        }
      }
    }
  }
}
</style>
