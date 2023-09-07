<template>
  <div class="app1-left-item3">
    <div class="subtitle title">{{ title }}</div>
    <div class="container">
      <div class="list">
        <div
          v-for="(item, index) in list1"
          :key="index"
          class="item"
        >
          <div class="item-title">{{ item.name }}</div>
          <div class="item-num">
            <countTo :startVal="0" :endVal="item.value + data" :duration="3000" :decimals="item.decimals" separator=""></countTo>
            <span>{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="chart-list">
        <div class="item">
          <div class="chart" ref="chart1"></div>
          <div class="gauge">
            <countTo :startVal="0" :endVal="chart1.value + data" :duration="3000" :decimals="chart1.decimals" separator=""></countTo>
            <span class="unit">%</span>
          </div>
          <div class="chart-title gauge-title">{{ chart1.title }}</div>
        </div>
        <div class="item">
          <div class="chart">
            <div class="text">
              <countTo :startVal="0" :endVal="chart2.value + data" :duration="3000" :decimals="chart2.decimals" separator=""></countTo>
            </div>
            <div class="progress">
              <div class="bg bg1">
                <div class="inner" :style="{width: chart2.value + '%'}"></div>
              </div>
              <div class="bg bg2">
                <div class="inner" :style="{width: ((chart2.value - 40) > 0 ? 100 : (chart2.value -20) < 0 ? 0 : (chart2.value -20) * 5) + '%'}"></div>
              </div>
              <div class="bg bg3">
                <div class="inner" :style="{width: ((chart2.value - 60) > 0 ? 100 : (chart2.value -40) < 0 ? 0 : (chart2.value -40) * 5) + '%'}"></div>
              </div>
              <div class="bg bg4">
                <div class="inner" :style="{width: ((chart2.value - 80) > 0 ? 100 : (chart2.value -60) < 0 ? 0 : (chart2.value -60) * 5) + '%'}"></div>
              </div>
              <div class="bg bg5">
                <div class="inner" :style="{width: ((chart2.value - 100) > 0 ? 100 : (chart2.value -80) < 0 ? 0 : (chart2.value -80) * 5) + '%'}"></div>
              </div>
            </div>
          </div>
          <div class="chart-title">{{ chart2.title }}</div>
        </div>
      </div>
      <div class="list">
        <div
          v-for="(item, index) in list2"
          :key="index"
          class="item"
        >
          <div class="item-title">{{ item.name }}</div>
          <div class="item-num">
            <countTo :startVal="0" :endVal="item.value + data" :duration="3000" :decimals="item.decimals" separator=""></countTo>
            <span>{{ item.unit }}</span>
          </div>
        </div>
      </div>
      <div class="chart-item">
        <div class="chart-item-title chart-title">{{ chart3.title }}</div>
        <div class="chart">
          <div class="outside"></div>
          <div class="inside" :style="{width: `${ 2.31 * chart3.value / 100}rem`}">
           <i></i>
          </div>
        </div>
        <div class="item-num">
          <countTo :startVal="0" :endVal="chart3.value + data" :duration="3000" :decimals="chart3.decimals" separator=""></countTo>
          <span>{{ chart3.unit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import option1 from './option-gauge'
export default {
  name: 'Item3',
  mounted () {
    setTimeout(() => {
      this.initChart()
    }, 2000)
  },
  data () {
    return {
      title: '家宽服务质量',
      list1: [
        {
          name: '装机工单数',
          value: 1125,
          unit: '单',
          decimals: 0
        },
        {
          name: '装机时长',
          value: 9.6,
          unit: '小时',
          decimals: 1
        }
      ],
      list2: [
        {
          name: '投诉工单数',
          value: 568,
          unit: '单',
          decimals: 0
        },
        {
          name: '投诉处理时长',
          value: 5.8,
          unit: '小时',
          decimals: 1
        }
      ],
      chart1: {
        title: '装机及时率',
        value: 98.9,
        unit: '%',
        decimals: 1
      },
      chart2: {
        title: '装机满意度',
        value: 98.9,
        unit: '%',
        decimals: 1
      },
      chart3: {
        title: '投诉处理及时率',
        value: 98.9,
        unit: '%',
        decimals: 1
      },
      chartRef1: null,
      data: 0
    }
  },
  computed: {
    regionName () {
      return this.$root.regionName
    },
    mapLevel () {
      return this.$root.mapLevel
    },
    count () {
      return this.$root.TIME_COUNT
    }
  },
  watch: {
    regionName (val) {
      this.switchData()
    },
    mapLevel (val) {
      this.switchData()
    },
    count (v) {
      this.switchData()
      // this.initChart()
    }
  },
  methods: {
    // updateData () {
    //   this.switchData()
    //   // this.data = this.count % 2
    // },
    switchData () {
      let list1 = this.list1
      let list2 = this.list2
      list1[1].value = Math.random() * 5 + 5
      list2[1].value = Math.random() * 5 + 5
      // console.log('switchData ++++', this.mapLevel, this.regionName)
      if (this.mapLevel === '中国' && this.regionName === '中国') {
        list1[0].value = Math.ceil(Math.random() * 500) + 1125
        list2[0].value = Math.ceil(Math.random() * 500) + 569
      } else if (!this.regionName.includes('市')) {
        list1[0].value = Math.ceil(list1[0].value / 4)
        list2[0].value = Math.ceil(list2[0].value / 4)
      } else if (this.regionName.includes('市')) {
        list1[0].value = Math.ceil(list1[0].value / 8)
        list2[0].value = Math.ceil(list2[0].value / 8)
      }
      this.chart1.value = Math.random() * 10 + 90
      this.chart2.value = Math.random() * 10 + 90
      this.chart3.value = Math.random() * 10 + 90
      this.list1 = list1
      this.list2 = list2
      this.initChart()
    },
    initChart () {
      if (!this.chartRef1) {
        this.chartRef1 = echarts.init(this.$refs.chart1)
      }
      const value = this.chart1.value
      option1.series[0].axisLine = {
        lineStyle: {
          color: [
            [value / 100, '#fff'],
            [1, '#999']
          ],
          width: 1
        }
      }
      option1.series[2].axisLine = {
        lineStyle: {
          color: [
            [value / 100, '#31ccf6'],
            [1, 'rgba(0,0,0,0)']
          ],
          width: 16
        }
      }
      this.chartRef1.clear()
      this.chartRef1.setOption(option1)
    }
  }
}
</script>

<style lang="scss">
.app1-left-item3 {
  position: absolute;
  top: 5.8rem;
  left: 5rem;
  width: 3.94rem;
  height: 5.7rem;
  .subtitle {
    margin-bottom: 0.42rem;
    text-align: left!important;
    padding-left: 0.27rem;
  }
  .container {
    height: 4.83rem;
    background: url("../../../../../assets/img/app1/left-bottom/02.png") no-repeat;
    background-size: 100% 100%;
  }
  .list {
    height: 1.05rem;
    .item {
      display: flex;
      justify-content: space-between;
      height: 0.43rem;
      line-height: 0.3rem;
      margin-bottom: 0.2rem;
      .item-title {
        padding-left: 0.17rem;
        font-size: 0.2rem;
        color: #f0fdff;
      }
      .item-num {
        display: flex;
        height: 0.3rem;
        line-height: 0.3rem;
        span {
          display: inline-block;
          text-align: center;
        }
        span:first-child {
          flex: 1;
          line-height: 0.25rem;
          font-size: 0.33rem;
          color: #31ccf6;
          letter-spacing: 0.05rem;
          text-align: right;
        }
        span:last-child {
          width: 0.53rem;
          line-height: 0.34rem;
          font-size: 0.16rem;
          color: #5e839f;
          font-weight: 700;
          margin-left: 0.1rem;
        }
      }
    }
  }
  .chart-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 1.75rem;
    .item {
      width: 1.62rem;
      position: relative;
      .chart {
        height: 1.32rem;
        overflow: hidden;
      }
      .chart-title {
        text-align: center;
        font-size: 0.22rem;
        line-height: 0.22rem;
        color: #f0fdff;
      }
      .gauge {
        position: absolute;
        left: 48%;
        bottom: 0.5rem;
        transform: translateX(-50%);
        font-size: 0.3rem;
        color: #31ccf6;
        .unit {
          font-size: 0.16rem;
          color: #fff;
        }
      }
      .gauge-title {
        padding-right: 0.2rem;
      }
      .text {
        font-size: 0.36rem;
        color: #31ccf6;
        margin-top: 0.4rem;
        margin-bottom: 0.1rem;
        text-align: right;
      }
      .progress {
        display: flex;
        justify-content: space-between;
        .bg {
          width: 0.3rem;
          height: 0.15rem;
          border-radius: 0.02rem;
          background: #264b66;
          overflow: hidden;
          .inner {
            background: #31ccf6;
            height: 100%;
            width: 0;
            transition: width 0.5s;
          }
        }
        // .bg2 .inner {
        //   transition-delay: 0.1s;
        // }
        // .bg3 .inner {
        //   transition-delay: 0.2s;
        // }
        // .bg4 .inner {
        //   transition-delay: 0.3s;
        // }
        // .bg5 .inner {
        //   transition-delay: 0.4s;
        // }
      }
    }
    .item:first-child {
      width: 2.3rem;
    }
  }
  .chart-item {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    height: 1rem;
    padding-left: 0.1rem;
    .chart-item-title {
      width: 100%;
      height: 0.22rem;
      line-height: 0.22rem;
      padding: 0.23rem 0 0.08rem 0rem;
      text-align: left;
      font-size: 0.22rem;
      color: #f0fdff;
    }
    .chart {
      position: relative;
      width: 2.35rem;
      height: 0.3rem;
      line-height: 0.3rem;
      >div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .outside {
        width: 100%;
        height: 0.17rem;
        background-color: #1f69a0;
      }
      .inside {
        left: 0.02rem;
        z-index: 100;
        width: 0;
        max-width: 2.31rem;
        height: 0.11rem;
        background-color: #31ccf6;
        transition: all 0.3s;
        i {
          position: absolute;
          right: -0.02rem;
          top: 50%;
          transform: translateY(-50%);
          width: 0.02rem;
          height: 0.27rem;
          background-color: #ffffff;
        }
      }
    }
    .item-num {
      display: flex;
      width: 1.42rem;
      height: 0.3rem;
      line-height: 0.3rem;
      font-size: 0.33rem;
      span {
        display: inline-block;
        text-align: center;
      }
      span:first-child {
        flex: 1;
        line-height: 0.25rem;
        font-size: 0.33rem;
        color: #31ccf6;
        letter-spacing: 0.05rem;
        text-align: right;
      }
      span:last-child {
        width: 0.2rem;
        line-height: 0.3rem;
        font-size: 0.16rem;
        color: #5e839f;
        font-weight: 700;
        margin-left: 0.1rem;
      }
    }
  }
}
</style>
