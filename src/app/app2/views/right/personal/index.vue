<template>
  <div class="app2-right-personal">
    <div class="subject text-show">个人市场</div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1">
          <div class="slide1-item1">
            <div class="item-title text-show">{{ slid1Item1.name }}</div>
            <div class="list">
              <div
                v-for="(item, index) in slid1Item1.list"
                :key="index"
                class="item"
              >
                <div class="item-name">{{ item.name }}</div>
                <div class="item-value">
                  <countTo :startVal="0" :endVal="item.value + randomN + Math.random()" :duration="3000" :decimals="item.decimals" separator=""></countTo>
                  <span class="unit">{{ item.unit }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="slide1-item2">
            <div class="item-title text-show">{{ slid1Item2.name }}</div>
            <div class="slide1-item2-table">
              <div class="header item">
                <div
                  v-for="(item, index) in tableHeader"
                  :key="index"
                >{{ item.name }}</div>
              </div>
              <div class='body list'>
                <div v-for='(item, index) in tableBody' class='item' :key='index'>
                  <div :class="{'text-show': index <= 2}">{{ index + 1 }}</div>
                  <div>{{ item.column1 }}</div>
                  <div>
                    <countTo :startVal="0" :endVal="parseFloat(item.column2) + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="'%'"></countTo>
                  </div>
                  <div>
                    <countTo :startVal="0" :endVal="parseFloat(item.column3) + randomN + Math.random()" :duration="3000" :decimals="1" separator=""></countTo>
                  </div>
                </div>
              </div>
              <!-- <vue-seamless-scroll :data="tableBody" class="seamless-warp" :class-option="classOption">
                <div class='body list'>
                  <div v-for='(item, index) in tableBody' class='item' :key='index'>
                    <div :class="{'text-show': index <= 2}">{{ index + 1 }}</div>
                    <div>{{ item.column1 }}</div>
                    <div>
                      <countTo :startVal="0" :endVal="parseFloat(item.column2)" :duration="3000" :decimals="1" separator="" :suffix="'%'"></countTo>
                    </div>
                    <div>
                      <countTo :startVal="0" :endVal="parseFloat(item.column3)" :duration="3000" :decimals="1" separator=""></countTo>
                    </div>
                  </div>
                </div>
              </vue-seamless-scroll> -->
            </div>
            <div class="slide1-item2-progress">
              <div
                v-for="(item, index) in progressList"
                :key="'title-' + index"
                class="item-title"
              >
                {{ `${item.name}（${item.unit}）` }}
              </div>
              <div
                v-for="(item, index) in progressList"
                :key="'value-' + index"
                class="item-value"
              >
                <countTo :startVal="0" :endVal="item.value + randomN + Math.random()" :duration="3000" :decimals="item.decimals" separator=""></countTo>
              </div>
            </div>
            <div class="slide1-item2-chart">
              <div
                v-for="(item,index) in chartList"
                :key="index"
                class="item"
              >
                <div class="item-title">{{ item.name }}</div>
                <div class="item-value">
                  <countTo :startVal="0" :endVal="item.value + randomN + Math.random()" :duration="3000" :decimals="item.decimals" separator=""></countTo>
                  <span class="unit">{{ item.unit }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slide2">
          <div class="slide2-title">业务质量</div>
          <div class="slide2-title slide2-title2">春晚红包赞助商</div>
          <div class="slid2-left">
            <div class="header header1">无线接通率</div>
            <div class="header header2">无线掉线率</div>
            <div
              v-for="(item, index) in slide2List1"
              :key="index"
              class="row"
              :class="[`row${index + 1}`]"
            >
              <div class="col">{{ item.col1 }}</div>
              <div class="col">
                <countTo :startVal="0" :endVal="item.col2" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
                <span class="unit">%</span>
              </div>
              <div class="col">
                <countTo :startVal="0" :endVal="item.col3" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
                <span class="unit">%</span>
              </div>
            </div>
          </div>
          <div class="LTE">LTE</div>
          <div class="PRB PRB1">
            <div class="item-title">{{ slide2Prb1.name }}</div>
            <div class="item-value">
              <countTo :startVal="0" :endVal="slide2Prb2.value + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
              <span class="unit">%</span>
            </div>
          </div>
          <div class="PRB PRB2">
            <div class="item-title">{{ slide2Prb1.name }}</div>
            <div class="item-value">
              <countTo :startVal="0" :endVal="slide2Prb2.value + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
              <span class="unit">%</span>
            </div>
          </div>
          <div class="chart chart1">
            <div class="item-title">{{ slide2Chart1.name }}</div>
            <div class="item-value">
              <countTo :startVal="0" :endVal="slide2Chart1.value + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
              <span class="unit">%</span>
            </div>
          </div>
          <div class="chart chart2">
            <div class="item-title">{{ slide2Chart2.name }}</div>
            <div class="item-value">
              <countTo :startVal="0" :endVal="slide2Chart2.value + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
            </div>
          </div>
          <div class="line"></div>
          <Tab />
        </div>
      </div>
      <div class="swiper-pagination app2R-pagination app2R-personal-pagination">
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Tab from './tab'

export default {
  name: 'Personal',
  components: {
    Tab
  },
  data () {
    return {
      randomN: 0,
      option: {
        pagination: {
          el: '.app2R-personal-pagination',
          clickable: true
        },
        autoplay: {
          delay: 15000
        },
        observer: true,
        observeParents: true
      },
      classOption: {
        autoPlay: true,
        // step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 11, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 25, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      },
      slid1Item1: {
        name: '业务规模',
        list: [
          {
            name: 'VLR用户数',
            value: 571,
            unit: '万',
            decimals: 1
          },
          {
            name: '5G用户数',
            value: 541,
            unit: '万',
            decimals: 1
          },
          {
            name: 'Volte注册用户数',
            value: 846,
            unit: '万',
            decimals: 1
          },
          {
            name: 'SA用户数',
            value: 551,
            unit: '万',
            decimals: 1
          },
          {
            name: 'MME附着用户数',
            value: 571,
            unit: '万',
            decimals: 1
          },
          {
            name: 'NSA用户数',
            value: 495,
            unit: '万',
            decimals: 1
          }
        ]
      },
      slid1Item2: {
        name: '热点业务'
      },
      tableHeader: [
        {
          name: '序号'
        },
        {
          name: '业务'
        },
        {
          name: 'http成功率(%)'
        },
        {
          name: '速率(kbps)'
        }
      ],
      tableBody: [
        {
          column1: '微信',
          column2: '97',
          column3: '671'
        },
        {
          column1: 'QQ',
          column2: '95',
          column3: '671'
        },
        {
          column1: '爱奇艺',
          column2: '93',
          column3: '715'
        },
        {
          column1: '京东',
          column2: '91',
          column3: '684'
        },
        {
          column1: '淘宝',
          column2: '89',
          column3: '681'
        },
        {
          column1: '抖音',
          column2: '87',
          column3: '675'
        },
        {
          column1: '头条',
          column2: '85',
          column3: '673'
        },
        {
          column1: '百度贴吧',
          column2: '83',
          column3: '666'
        },
        {
          column1: '优酷',
          column2: '81',
          column3: '662'
        },
        {
          column1: '口碑',
          column2: '79',
          column3: '618'
        }
      ],
      progressList: [
        {
          name: '页面浏览',
          value: 158.1,
          unit: 'GB',
          decimals: 1
        },
        {
          name: '页面响应时延',
          value: 15,
          unit: 'ms',
          decimals: 0
        },
        {
          name: '页面显示时延',
          value: 15,
          unit: 'ms',
          decimals: 0
        }
      ],
      chartList: [
        {
          name: '页面响应成功率',
          value: 90.2,
          unit: '%',
          decimals: 1
        },
        {
          name: '页面显示成功率',
          value: 97,
          unit: '%',
          decimals: 1
        }
      ],
      slide2List1: [
        {
          col1: '2G',
          col2: 99,
          col3: 1
        },
        {
          col1: '4G',
          col2: 99,
          col3: 1
        },
        {
          col1: 'VOLTE',
          col2: 99,
          col3: 1
        },
        {
          col1: '5G',
          col2: 99,
          col3: 1
        }
      ],
      slide2List2: [
        {
          col1: '业务本网内容满足率',
          col2: 96.2,
          unit: '%'
        },
        {
          col1: '业务本身内容满足率',
          col2: 97.2,
          unit: '%'
        },
        {
          col1: '业务总流量',
          col2: 278,
          unit: 'GB'
        },
        {
          col1: '业务首包时延',
          col2: 12,
          unit: 'ms'
        },
        {
          col1: '业务HTTP成功率',
          col2: 97.2,
          unit: '%'
        }
      ],
      slide2Prb1: {
        name: '上行PRB利用率',
        value: 97.9,
        unit: '%'
      },
      slide2Prb2: {
        name: '下行PRB利用率',
        value: 97.7,
        unit: '%'
      },
      slide2Chart1: {
        name: '4G附着成功率',
        value: 97.9,
        unit: '%'
      },
      slide2Chart2: {
        name: '高负荷小区数',
        value: 16,
        unit: ''
      },
      slide2tabActive: 0
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
    next () {
      this.slide2tabActive += 1
      this.slide2tabActive = this.slide2tabActive >= 2 ? 2 : this.slide2tabActive
    },
    pre () {
      this.slide2tabActive -= 1
      this.slide2tabActive = this.slide2tabActive < 0 ? 0 : this.slide2tabActive
    },
    update () {
      this.randomN = Math.random()
      this.updateSlide2List1()
    },
    updateSlide2List1 () {
      let slide2List1 = [
        {
          col1: '2G',
          col2: 99,
          col3: 1
        },
        {
          col1: '4G',
          col2: 99,
          col3: 1
        },
        {
          col1: 'VOLTE',
          col2: 99,
          col3: 1
        },
        {
          col1: '5G',
          col2: 99,
          col3: 1
        }
      ]
      slide2List1 = slide2List1.map(item => {
        item.col2 = 99 + Math.random()
        item.col3 = 100 - item.col2
        return item
      })
      this.slide2List1 = slide2List1
    }
  }
}
</script>

<style lang="scss">
.app2-right-personal {
  position: absolute;
  top: 0.98rem;
  width: 11.6rem;
  height: 4.14rem;
  .subject {
    text-indent: 0.1rem
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    >div {
      position: absolute;
      .item-title {
        height: 0.3rem;
        font-size: 0.24rem;
        line-height: 0.24rem;
        color: #fff;
        font-weight: 700;
        text-indent: 0.2rem;
        letter-spacing: 0.02rem;
      }
    }
  }
  .slide1 {
    background: url("../../../../../assets/img/app2/right/personal-slide1.png") no-repeat;
    background-size: 10.87rem 3.35rem;
    background-position: left bottom;
  }
  .slide1-item1 {
    top: 0.68rem;
    width: 3.4rem;
    height: 3.24rem;
    .item-title {
      margin-bottom: 0.24rem;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      height: 2.73rem;
      .item {
        width: 1.5rem;
        height: 0.6rem;
        margin-bottom: 0.46rem;
        letter-spacing: 0.02rem;
        >div {
          padding-left: 0.2rem;
        }
        .item-name {
          font-size: 0.14rem;
          height: 0.14rem;
          line-height: 0.14rem;
          color: #a7a5a8;
          margin-bottom: 0.07rem;
        }
        .item-value {
          height: 0.35rem;
          line-height: 0.35rem;
          font-size: 0.26rem;
          color: #e8cefe;
        }
        .unit {
          margin-left: -0.05rem;
          font-size: 0.12rem;
          color: #e8cefe;
        }
      }
    }
  }
  .slide1-item2 {
    right: 0;
    bottom: 0;
    width: 7.3rem;
    height: 3.5rem;
    .item-title {
      margin-bottom: 0.14rem;
    }
    .slide1-item2-table {
      position: absolute;
      top: 0.45rem;
      left: 0;
      width: 3.68rem;
      height: 2.9rem;
      .header {
        height: 0.38rem;
        line-height: 0.4rem;
        font-size: 0.16rem;
        color: #a7a5a8;
        text-align: center;
      }
      .item {
        display: flex;
        >div:nth-child(1) {
          width: 0.45rem;
        }
        >div:nth-child(2) {
          flex: 1;
        }
        >div:nth-child(3) {
          width: 1.3rem;
        }
        >div:nth-child(4) {
          width: 1.1rem;
        }
      }
      .body {
        .item {
          height: 0.25rem;
          line-height: 0.25rem;
          font-size: 0.14rem;
          >div {
            text-align: center;
            letter-spacing: 0.02rem;
          }
          >div:nth-child(1) {
            color: #a7a6ac;
            font-family: 'TiHei';
          }
          >div:nth-child(2) {
            color: #a7a6ac;
          }
          >div:nth-child(3) {
            color: #e0caf8;
          }
          >div:nth-child(4) {
            color: #e0caf8;
          }
        }
        .text-show {
          font-weight: 700;
        }
      }
    }
    .seamless-warp {
      box-sizing: border-box;
      height: 2.5rem;
      overflow: hidden;
    }
    .slide1-item2-progress {
      position: absolute;
      top: 0.45rem;
      right: 0;
      width: 3.35rem;
      height: 1.13rem;
      letter-spacing: 0.02rem;
      .item-title {
        position: absolute;
        left: 0;
        font-size: 0.16rem;
        line-height: 0.16rem;
        height: 0.16rem;
        color: #a7a5a8;
        text-indent: 0;
      }
      .item-title:nth-child(2) {
        top: 0.4rem;
      }
      .item-title:nth-child(3) {
        top: 0.8rem;
      }
      .item-value {
        position: absolute;
        right: 0;
        color: #e0caf8;
        text-align: left;
        font-size: 0.2rem;
        line-height: 0.2rem;
        height: 0.2rem;
      }
      .item-value:nth-child(4) {
        top: 0.1rem;
        width: 0.9rem;
      }
      .item-value:nth-child(5) {
        top: 0.5rem;
        width: 0.9rem;
      }
      .item-value:nth-child(6) {
        top: 0.9rem;
        width: 0.45rem;
      }
    }
    .slide1-item2-chart {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0.15rem;
      right: 0.63rem;
      width: 2.8rem;
      height: 0.6rem;
      >div {
        width: 1.1rem;
        height: 100%;
        text-align: center;
      }
      .item-title {
        height: 0.16rem;
        line-height: 0.16rem;
        color: #a7a5a8;
        font-size: 0.14rem;
        text-indent: 0;
        letter-spacing: 0;
      }
      .item-value {
        display: flex;
        justify-content: center;
        align-items: baseline;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.3rem;
        color: #e5cffd;
        .unit {
          font-size: 0.16rem;
        }
      }
    }
  }
  .slide2 {
    .slide2-title {
      position: absolute;
      top: 0.7rem;
      left: 0;
      width: 3.21rem;
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
    .slide2-title2 {
      left: auto;
      right: 0.15rem;
    }
    .slid2-left {
      position: absolute;
      left: 0;
      top: 1.1rem;
      width: 6.82rem;
      height: 2.8rem;
      background-image: url("../../../../../assets/img/app2/right/personal-slid2-bg1.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .header {
        position: absolute;
        font-size: 0.16rem;
        color: #b1b0b6;
        height: 0.45rem;
        line-height: 0.45rem;
      }
      .header1 {
        left: 1.15rem;
      }
      .header2 {
        left: 2.33rem;
      }
      .row {
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0.25rem;
        width: 2.96rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        >.col:nth-child(1) {
          width: 0.6rem;
          font-size: 0.16rem;
          color: #d6d5da;
        }
        >.col:nth-child(2) {
          width: 0.8rem;
          color: #d6d5ff;
          font-size: 0.2rem;
          .unit {
            font-size: 0.12rem;
          }
        }
        >.col:nth-child(3) {
          width: 0.8rem;
          color: #d6d5ff;
          font-size: 0.2rem;
          .unit {
            font-size: 0.12rem;
          }
        }
      }
      .row1 {
        top: 0.42rem;
      }
      .row2 {
        top: 1rem;
      }
      .row3 {
        top: 1.6rem;
      }
      .row4 {
        top: 2.18rem;
      }
    }
    .line {
      position: absolute;
      bottom: 0.27rem;
      right: 3.88rem;
      height: 2.65rem;
      width: 0.01rem;
      background: #8088af;
    }
    .tab {
      position: absolute;
      right: 0.15rem;
      bottom: 0.27rem;
      width: 3.21rem;
      height: 2.74rem;
      background: url("../../../../../assets/img/app2/right/personal-slid2-bg2.png") no-repeat;
      background-size: 3.21rem 2.38rem;
      background-position: left 0.47rem;
      overflow: hidden;
      .next,
      .pre {
        position: absolute;
        width: 0.24rem;
        height: 0.36rem;
        z-index: 999;
        background: url("../../../../../assets/img/app2/right/pre.png") no-repeat;
        background-size: 100% 100%;
        background-position: left bottom;
        cursor: pointer;
      }
      .next {
        right: 0;
        transform: rotate(180deg);
      }
      .pre {
        left: 0;
      }
      .container {
        display: flex;
        width: 300%;
        height: 100%;
        transition: all 0.3s;
        .page {
          width: 33.33333%;
          height: 100%;
          .title {
            height: 0.47rem;
            line-height: 0.36rem;
            text-align: center;
            color: #a9a7ac;
            font-size: 0.2rem;
          }
          .list {
            margin-top: 0.15rem;
            .li {
              display: flex;
              height: 0.4rem;
              line-height: 0.4rem;
              text-align: center;
              >div:nth-child(1) {
                width: 1.98rem;
                font-size: 0.18rem;
                color: #878590;
              }
              >div:nth-child(2) {
                flex: 1;
                font-size: 0.27rem;
                color: #c3c3df;
                .unit {
                  font-size: 0.12rem;
                }
              }
            }
          }
        }
      }
    }
    .LTE {
      position: absolute;
      top: 1.55rem;
      left: 3.75rem;
      width: 0.7rem;
      height: 0.3rem;
      line-height: 0.3rem;
      letter-spacing: 0.03rem;
      font-size: 0.15rem;
      text-align: center;
      color: #f2f1f9;
    }
    .PRB {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      position: absolute;
      width: 2.1rem;
      height: 0.34rem;
      line-height: 0.34rem;
      left: 5rem;
      .item-title {
        width: 1.15rem;
        text-indent: 0;
        font-size: 0.16rem;
        color: #a8a8aa;
        letter-spacing: 0;
      }
      .item-value {
        font-size: 0.27rem;
        color: #d3d2fa;
        .unit {
          font-size: 0.12rem;
        }
      }
    }
    .PRB1 {
      top: 1.1rem;
    }
    .PRB2 {
      top: 1.7rem;
    }
    .chart {
      position: absolute;
      top: 3.2rem;
      width: 1.33rem;
      text-align: center;
      .item-title {
        text-indent: 0;
        font-size: 0.16rem;
        color: #a8a8aa;
        letter-spacing: 0;
      }
      .item-value {
        font-size: 0.27rem;
        color: #d3d2fa;
        .unit {
          font-size: 0.12rem;
        }
      }
    }
    .chart1 {
      left: 3.95rem;
    }
    .chart2 {
      left: 5.7rem;
    }
  }
}
</style>
