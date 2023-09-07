/* eslint-disable */
const option = {
color: ['#1f69a0', '#e88e6c'],
legend: {
    data: ['家宽用户数', '家宽峰值用户数'],
    right: 20,
    itemGap: 20,
    textStyle: {
    color: '#6186a2',
    fontSize: 15
    }
},
//   dataZoom: [{
//     showDetail: false
//   }],
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
    data: ['象山县', '宁海县', '奉化区', '北仓区', '海曙区', '江北区', '慈溪市', '余姚市', '镇海区'],
    splitLine: { show: false },
    axisLabel: {
    formatter: function (value, index) {
        return value.split('').join('\n')
    },
    margin: 18,
    color: '#6186a2',
    fontSize: 18
    },
    axisTick: { show: false },
    axisLine: { show: false }
},
series: [{
    name: '家宽用户数',
    type: 'pictorialBar',
    symbol: 'rect',
    symbolRepeat: true,
    symbolSize: ['65%', '15%'],
    symbolMargin: 3,
    data: [145, 168, 100, 60, 74, 66, 50, 120, 135]
}, {
    name: '家宽峰值用户数',
    type: 'pictorialBar',
    barGap: 0,
    symbol: 'rect',
    symbolRepeat: true,
    symbolMargin: 3,
    symbolSize: ['65%', '15%'],
    data: [120, 120, 98, 65, 48, 75, 95, 125, 85]
}]
}
  
  export default option
  