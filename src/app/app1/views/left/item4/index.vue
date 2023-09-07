<template>
  <div class="app1-left-item4">
    <div class="subtitle">{{ title }}</div>
    <div class="chart-list">
      <div class="item">
        <div class="chart" ref="chart1Elem"></div>
        <div class="chart-title">{{ chart1.title }}</div>
        <div class="item-num">
          <countTo :startVal="0" :endVal="chart1.value + data" :duration="3000" :decimals="chart1.decimals" separator=""></countTo>
          <span>{{ chart1.unit }}</span>
        </div>
      </div>
      <div class="item">
        <div class="chart" ref="chart2Elem"></div>
        <div class="chart-title">{{ chart2.title }}</div>
        <div class="item-num">
          <countTo :startVal="0" :endVal="chart2.value + data" :duration="3000" :decimals="chart2.decimals" separator=""></countTo>
          <span>{{ chart2.unit }}</span>
        </div>
      </div>
    </div>
    <div class="list">
      <div
        v-for="(item, index) in list"
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
  </div>
</template>

<script>
import 'echarts/lib/chart/gauge'

const chartOption = {
  grid: {
    left: '0',
    top: '0',
    right: '0',
    bottom: '0'
  },
  series: [
    {
      type: 'gauge',
      radius: '115%',
      clockwise: false,
      startAngle: 90,
      endAngle: 0,
      splitNumber: 25,
      detail: {
        offsetCenter: [0, -20],
        formatter: ' '
      },
      pointer: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [
            [1, 'rgba(62, 73, 90, 0.6)']
          ],
          width: 9
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        length: 9,
        lineStyle: {
          color: '#31ccf6',
          width: 2
        }
      },
      axisLabel: {
        show: false
      }
    }
  ]
}

export default {
  name: 'Item4',
  data () {
    return {
      data: 0,
      title: '探针质量监测',
      list: [
        {
          name: '网页打开时长',
          value: 0.3,
          unit: 'ms',
          decimals: 1
        },
        {
          name: '文件下载速率',
          value: 99,
          unit: 'Mbps',
          decimals: 1
        },
        {
          name: '游戏ping时延',
          value: 0.5,
          unit: 'ms',
          decimals: 1
        },
        {
          name: 'epg请求时延',
          value: 0.5,
          unit: 'ms',
          decimals: 1
        },
        {
          name: '卡顿时长占比',
          value: 0.1,
          unit: '%',
          decimals: 1
        },
        {
          name: '首缓冲时延',
          value: 0.4,
          unit: 'ms',
          decimals: 1
        }
      ],
      chart1: {
        title: '播放成功率',
        value: 96,
        unit: '%'
      },
      chart2: {
        title: 'epg请求成功率',
        value: 98,
        unit: '%'
      },
      chart1Option: JSON.parse(JSON.stringify(chartOption)),
      chart2Option: JSON.parse(JSON.stringify(chartOption))
    }
  },
  mounted () {
    this.load()
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
      this.load()
    }
  },
  methods: {
    // updateData (count) {
    //   // this.data = count % 2
    //   this.switchData()
    // },
    switchData () {
      this.list = this.list.map(item => {
        if (item.name === '文件下载速率') {
          item.value = Math.random() * 200 + 100
        } else {
          item.value = Math.random()
        }
        return item
      })
      this.chart1.value = Math.random() * 10 + 90
      this.chart2.value = Math.random() * 10 + 90
      this.load()
    },
    load () {
      let splitNumber1 = this.chart1.value < 1 && this.chart1.value > 0 ? 1 : Math.floor(this.chart1.value)
      let endAngle1 = 90 - (this.chart1.value / 100) * 360
      this.chart1Option.series[0].endAngle = endAngle1 === -270 ? -269.99 : endAngle1
      this.chart1Option.series[0].splitNumber = splitNumber1
      this.initChat1()
      let splitNumber2 = this.chart2.value < 1 && this.chart2.value > 0 ? 1 : Math.floor(this.chart2.value)
      let endAngle2 = 90 - (this.chart2.value / 100) * 360
      this.chart2Option.series[0].endAngle = endAngle2 === -270 ? -269.99 : endAngle2
      this.chart2Option.series[0].splitNumber = splitNumber2
      this.initChat2()
    },
    initChat1 () {
      if (!this.$refs.chart1Elem) return
      if (!this.chart1Instance) {
        this.chart1Instance = echarts.init(this.$refs.chart1Elem)
      }
      this.chart1Instance.clear()
      this.chart1Instance.setOption(this.chart1Option)
    },
    initChat2 () {
      if (!this.$refs.chart2Elem) return
      if (!this.chart2Instance) {
        this.chart2Instance = echarts.init(this.$refs.chart2Elem)
      }
      this.chart2Instance.clear()
      this.chart2Instance.setOption(this.chart2Option)
    }
  }
}
</script>

<style lang="scss">
.app1-left-item4 {
  position: absolute;
  top: 5.8rem;
  right: 0.07rem;
  width: 4.5rem;
  height: 5.7rem;
  .subtitle {
    width: 3.95rem!important;
    margin-bottom: 0.42rem;
    text-align: left!important;
    padding-left: 0.27rem;
  }
  .chart-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 2.13rem;
    .item {
      position: relative;
      width: 2.04rem;
      .chart {
        height: 1.42rem;
        background: url("../../../../../assets/img/app1/left-bottom/03-2.png") no-repeat;
        background-position: center center;
      }
      .chart-title {
        padding-top: 0.1rem;
        text-align: center;
        font-size: 0.22rem;
        line-height: 0.22rem;
        color: #f0fdff;
      }
      .item-num {
        position: absolute;
        top: 0.53rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        height: 0.45rem;
        line-height: 0.45rem;
        span {
          display: inline-block;
          text-align: center;
        }
        span:first-child {
          font-size: 0.30rem;
          color: #31ccf6;
          letter-spacing: 0.07rem;
          text-align: right;
        }
        span:last-child {
          line-height: 0.55rem;
          font-size: 0.16rem;
          color: #5e839f;
          letter-spacing: 0.01rem;
          font-weight: 700;
        }
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 2.7rem;
    background: url("../../../../../assets/img/app1/left-bottom/03-1.png") no-repeat;
    background-size: 100% 100%;
    .item {
      width: 2.04rem;
      height: 0.76rem;
      margin-bottom: 0.22rem;
      .item-title {
        height: 0.18rem;
        padding-left: 0.33rem;
        line-height: 0.18rem;
        font-size: 0.2rem;
        color: #dde9eb;
        margin-bottom: 0.1rem;
      }
      .item-num {
        display: flex;
        justify-content: center;
        height: 0.45rem;
        line-height: 0.45rem;
        span {
          display: inline-block;
          text-align: center;
        }
        span:first-child {
          font-size: 0.30rem;
          color: #31ccf6;
          letter-spacing: 0.07rem;
          text-align: right;
        }
        span:last-child {
          line-height: 0.6rem;
          font-size: 0.16rem;
          color: #5e839f;
          letter-spacing: 0.01rem;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
