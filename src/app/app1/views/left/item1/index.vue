<template>
  <div class="app1-left-item1">
    <div class="title subtitle">{{ title }}</div>
    <div class="user-number broadband" :class="{active: userNumActive === 'broadband'}" @click="usereNumClick('broadband')">
      <div class="user-number-title">{{ userNumber1.title }}</div>
      <div
        v-for="(item, index) in userNumber1.list"
        :key="index"
        class="user-number-item"
      >
        <div class="user-number-item-name item-title">{{ item.name }}</div>
        <div class="user-number-item-value">
          <countTo :startVal="0" :endVal="item.value + data" :duration="3000" :decimals="item.decimals" separator=""></countTo>
          <span>{{ item.unit }}</span>
        </div>
      </div>
    </div>
    <div class="user-scale">
      <div class="chart" ref="chart"></div>
    </div>
    <div class="user-number television" :class="{active: userNumActive === 'television'}" @click="usereNumClick('television')">
      <div class="user-number-title item-title">{{ userNumber2.title }}</div>
      <div
        v-for="(item, index) in userNumber2.list"
        :key="index"
        class="user-number-item"
      >
        <div class="user-number-item-name item-title">{{ item.name }}</div>
        <div class="user-number-item-value">
          <countTo :startVal="0" :endVal="item.value + data" :duration="3000" :decimals="item.decimals" separator=""></countTo>
          <span>{{ item.unit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import option from './option'
// import opt2 from './option2'
export default {
  name: 'Item1',
  data () {
    return {
      data: 0,
      chart: null,
      userNumActive: 'broadband',
      title: '用户规模',
      userNumber1: {
        title: '有线宽带',
        list: [
          {
            name: '家宽用户数',
            value: 178.3,
            unit: '万',
            decimals: 1
          },
          {
            name: '家宽峰值用户数',
            value: 198.6,
            unit: '万',
            decimals: 1
          }
        ]
      },
      userNumber2: {
        title: '互联网电视',
        list: [
          {
            name: '互联网电视用户数',
            value: 166.9,
            unit: '万',
            decimals: 1
          },
          {
            name: '活跃用户数',
            value: 126.8,
            unit: '万',
            decimals: 1
          }
        ]
      }
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
      console.log('regionName', val)
      this.switchData()
    },
    mapLevel (val) {
      this.switchData()
      console.log('mapLevel', val)
    },
    count (v) {
      // console.log(v, 'vvv')
      this.switchData()
      // this.initChart()
    }
  },
  mounted () {
    // console.log('userNumber1', this.userNumber1)
    this.switchData()
  },
  methods: {
    usereNumClick (val) {
      this.userNumActive = val
      if (val === 'broadband') {
        option.legend.data = ['家宽用户数', '家宽峰值用户数']
        option.series[0].name = '家宽用户数'
        option.series[1].name = '家宽峰值用户数'
        // opt2.legend.data = ['家宽用户数', '家宽峰值用户数']
        // opt2.series[0].name = '家宽用户数'
        // opt2.series[1].name = '家宽峰值用户数'
      } else {
        option.legend.data = ['互联网电视用户数', '活跃用户数']
        option.series[0].name = '互联网电视用户数'
        option.series[1].name = '活跃用户数'
        // opt2.legend.data = ['互联网电视用户数', '活跃用户数']
        // opt2.series[0].name = '互联网电视用户数'
        // opt2.series[1].name = '活跃用户数'
      }
      this.initChart()
    },
    switchData () {
      console.log('中间地图 ++++', this.mapLevel, this.regionName)
      // console.log('item1 data', window.familyData.userBase)
      let list1 = this.userNumber1.list
      let list2 = this.userNumber2.list
      let sum1 = window.familyData.userBase.reduce((total, item) => {
        total = typeof total !== 'number' ? total.home_broadband_user_count : total
        return total + (item.home_broadband_user_count || 0)
      })
      let sum2 = window.familyData.userBase.reduce((total, item) => {
        total = typeof total !== 'number' ? total.home_broadband_peak_count : total
        return total + (item.home_broadband_peak_count || 0)
      })
      // 随机比例
      let randomRatio = Math.random() * 0.3 + 0.7
      //  图表比例，互联网电视取宽带的0.9倍
      let chartRatio = this.userNumActive === 'broadband' ? 1 : (randomRatio * 0.9)
      if (this.mapLevel === '中国' && this.regionName === '中国') {
        // 全国数据处理
        // 左侧数据处理
        list1[0].value = sum1 * randomRatio
        list1[1].value = sum2 * randomRatio
        // 图表数据处理
        option.xAxis.data = window.familyData.userBase.map(item => item.province_name)
        option.series[0].data = window.familyData.userBase.map(item => item.home_broadband_user_count * chartRatio)
        option.series[1].data = window.familyData.userBase.map(item => item.home_broadband_peak_count * chartRatio)
      } else if (!this.regionName.includes('市') && !this.regionName.includes('自治州') && !this.regionName.includes('海东地区')) {
        // 省级数据处理
        // 左侧数据处理
        let provinceData = window.familyData.userBase.filter(item => item.province_name === this.regionName)[0]
        try {
          list1[0].value = provinceData.home_broadband_user_count * randomRatio
          list1[1].value = provinceData.home_broadband_peak_count * randomRatio
        } catch (error) {
          list1[0].value = (sum1 / 31) * randomRatio
          list1[1].value = (sum2 / 31) * randomRatio
          console.log(error)
        }
        // 图表数据处理
        option.xAxis.data = provinceData.cities.map(item => item.city_name)
        option.series[0].data = provinceData.cities.map(item => item.home_broadband_user_count * chartRatio)
        option.series[1].data = provinceData.cities.map(item => item.home_broadband_peak_count * chartRatio)
      } else if (this.regionName.includes('市') || this.regionName.includes('自治州') || this.regionName.includes('海东地区')) {
        // 区市级数据处理
        // 左侧数据处理
        let provinceData = window.familyData.userBase.filter(item => item.province_name === this.mapLevel)[0]
        console.log(provinceData, this.mapLevel, 'data')
        let cityData = provinceData.cities.filter(item => item.city_name === this.regionName)[0]
        console.log(cityData, 'city')
        try {
          list1[0].value = cityData.home_broadband_user_count * randomRatio
          list1[1].value = cityData.home_broadband_peak_count * randomRatio
        } catch (error) {
          list1[0].value = (sum1 / (31 * 12)) * randomRatio
          list1[1].value = (sum2 / (31 * 12)) * randomRatio
          console.log(error)
        }
        // console.log('cityData +++', cityData)
        // 图表数据处理
        option.xAxis.data = cityData.counties.map(item => item.area_name)
        option.series[0].data = cityData.counties.map(item => item.home_broadband_user_count * chartRatio)
        option.series[1].data = cityData.counties.map(item => item.home_broadband_peak_count * chartRatio)
      }
      list2[0].value = list1[0].value * randomRatio * 0.9
      list2[1].value = list1[1].value * randomRatio * 0.9
      this.userNumber1.list = list1
      this.userNumber2.list = list2
      this.initChart()
    },
    // updateData () {
    //   // this.data = this.count % 2
    // },
    initChart () {
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.chart)
      }
      this.chart.clear()
      const len = option.series[0].data.length
      if (len < 13) {
        delete option.dataZoom
      } else {
        option.dataZoom = [{
          type: 'slider',
          bottom: '19%',
          left: 52,
          show: true,
          xAxisIndex: [0],
          start: 0,
          end: parseInt((12 / len) * 100),
          height: 4,
          moveHandleStyle: {
            opacity: 0
          },
          moveHandleSize: 0,
          backgroundColor: '#0c2753',
          fillerColor: 'rgba(23, 89, 132, 0.8)',
          showDataShadow: false,
          showDetail: false,
          borderColor: 'transparent',
          zoomLock: true,
          handleSize: 0,
          brushSelect: false,
          handleStyle: {
            opacity: 0
          }
        }]
      }
      this.chart.setOption(option)
      // if (this.regionName === '中国') {
      //   this.chart.setOption(option)
      // } else {
      //   this.chart.setOption(opt2)
      // }
    }
  }
}
</script>

<style lang="scss">
.app1-left-item1 {
  position: absolute;
  left: 0;
  top: 1.16rem;
  width: 100%;
  height: 4.1rem;
  .title {
    position: absolute;
    left: 5.22rem;
    top: 0;
  }
  .user-scale {
    position: absolute;
    bottom: 0;
    left: 3.4rem;
    width: 7.6rem;
    height: 3.4rem;
    .chart {
      width: 100%;
      height: 100%;
    }
  }
  .user-number {
    position: absolute;
    bottom: 0;
    width: 3.15rem;
    height: 3.36rem;
    background: url("../../../../../assets/img/app1/left-top/user-number-bg.png") no-repeat;
    background-size: 100% 100%;
    transition: all 0.3s;
    .user-number-title {
      padding-left: 0.68rem;
      font-size: 0.24rem;
      color: #f0fdff;
      margin-bottom: 0.4rem;
    }
    .user-number-item {
      margin-bottom: 0.28rem;
      height: 1.18rem;
      .user-number-item-name {
        padding-left: 1rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.2rem;
        color: #f0fdff;
      }
      .user-number-item-value {
        height: 0.78rem;
        padding-left: 0.76rem;
        line-height: 0.55rem;
        span {
          display: inline-block;
          text-align: center;
        }
        span:first-child {
          width: 2.06rem;
          font-size: 0.4rem;
          color: #31ccf6;
          letter-spacing: 0.05rem;
        }
        span:last-child {
          width: 0.32rem;
          font-size: 0.2rem;
          color: #5e839f;
          font-weight: 700;
        }
      }
    }
  }
  .user-number.active {
    background-image: url("../../../../../assets/img/app1/left-top/user-number-bg-active.png");
  }
  .broadband {
    left: 0;
    .user-number-item-name {
      background: url("../../../../../assets/img/app1/gongxiangkuandai.png") no-repeat;
      background-size: 0.24rem 0.22rem;
      background-position: 0.26rem 0.09rem;
    }
  }
  .television {
    right: 0;
    .user-number-item-name {
      background: url("../../../../../assets/img/app1/dianshi.png") no-repeat;
      background-size: 0.24rem 0.22rem;
      background-position: 0.26rem 0.09rem;
    }
  }
}
</style>
