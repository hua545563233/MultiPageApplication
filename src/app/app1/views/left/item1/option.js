const option = {
  color: ['#1f69a0', '#e88e6c'],
  legend: {
    data: ['家宽用户数', '家宽峰值用户数'],
    right: 20,
    itemGap: 20,
    itemWidth: 17,
    itemHeight: 17,
    textStyle: {
      color: '#6186a2',
      fontSize: 16
    }
  },
  dataZoom: [{
    type: 'slider',
    bottom: '19%',
    left: 52,
    show: true,
    xAxisIndex: [0],
    start: 0,
    end: 40,
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
  }],
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    containLabel: true,
    left: 20,
    right: '2%',
    bottom: '2%'
  },
  yAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    axisLabel: {
      margin: 10,
      color: '#6186a2',
      fontSize: 16
    }
  },
  xAxis: {
    data: ['黑龙江', '浙江', '北京', '江苏', '广东', '河南', '湖北', '安徽', '河北', '山西', '江西', '海南', '甘肃', '吉林', '上海', '重庆', '广西', '陕西', '湖南', '福建', '新疆', '云南'],
    splitLine: { show: false },
    axisLabel: {
      formatter: function (value, index) {
        let arr = value.split('')
        if (arr.length < 3) {
          arr.splice(1, 0, '')
        } else if (arr.length > 3) {
          let column = Math.ceil(arr.length / 3)
          let data = []
          for (let i = 0; i < arr.length / column; i++) {
            let list = []
            for (let j = 0; j < column; j++) {
              list.push(arr[i * column + j])
            }
            data.push(list.join(''))
          }
          arr = data
        }
        return arr.join('\n')
      },
      margin: 18,
      color: '#6186a2',
      fontSize: 16,
      lineHeight: 18
      // rotate: 30
    },
    axisTick: { show: false },
    axisLine: {
      lineStyle: {
        color: '#0c2753',
        width: 2
      }
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ['rgba(12, 39, 83, 0.4)', 'transparent']
      }
    }
  },
  series: [{
    name: '家宽用户数',
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    symbolSize: ['65%', '15%'],
    symbolMargin: 3,
    data: [145, 168, 100, 60, 74, 66, 50, 120, 135, 60, 74, 66, 98, 55, 48, 66, 95, 125, 85, 32, 55, 48]
  }, {
    name: '家宽峰值用户数',
    type: 'pictorialBar',
    barGap: 0,
    symbol: 'rect',
    symbolRepeat: true,
    symbolMargin: 3,
    symbolSize: ['65%', '15%'],
    data: [155, 120, 98, 55, 48, 66, 95, 125, 32, 55, 48, 66, 100, 60, 74, 66, 50, 120, 60, 74, 66, 98]
  }]
}

export default option
