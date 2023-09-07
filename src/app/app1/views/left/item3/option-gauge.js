const option = {
  grid: {
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: '0%'
  },
  series: [
    {
      name: '数值进度条',
      type: 'gauge',
      center: ['45%', '90%'],
      startAngle: 180,
      endAngle: 0,
      radius: '120%',
      splitNumber: 5,
      axisLine: {
        lineStyle: {
          color: [
            [0.4, '#fff'],
            [1, '#999']
          ],
          width: 1
        }
      },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: false,
        length: 10,
        distance: 0
      },
      itemStyle: { show: false },
      detail: { show: false },
      title: { show: false },
      data: [40],
      pointer: { show: false },
      z: 9,
      animationDuration: 4000
    },
    {
      name: '数字背景',
      type: 'gauge',
      center: ['45%', '90%'],
      startAngle: 180, //刻度起始
      endAngle: 0, //刻度结束
      radius: '210%',
      splitNumber: 5,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#557690',
        fontSize: 15,
        formatter: function (value, index) {
          return value % 20 === 0 ? value : ''
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false,
        length: 10
      },
      itemStyle: {
        show: false
      },
      detail: {
        show: false
      },
      title: {
        show: false
      },
      pointer: {
        show: false
      },
      animationDuration: 4000
    },
    {
      name: '内部扇形',
      type: 'gauge',
      center: ['45%', '90%'],
      radius: '100%',
      startAngle: 180,
      endAngle: 0,
      axisLine: {
        lineStyle: {
          color: [
            [0.4, '#31ccf6'],
            [1, 'rgba(0,0,0,0)']
          ],
          width: 16
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      },
      title: {
        show: false
      },
      data: [40],
      pointer: {
        show: false
      }
    },
    {
      name: '分割线',
      type: 'gauge',
      center: ['45%', '90%'],
      startAngle: 180,
      endAngle: 0,
      radius: '140%',
      splitNumber: 5,
      axisLine: {
        show: false
      },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
        length: 8,
        distance: 0,
        lineStyle: {
          color: '#f8f8f8',
          width: 1
        }
      },
      itemStyle: { show: false },
      detail: { show: false },
      title: { show: false },
      data: [40],
      pointer: { show: false },
      z: 9,
      animationDuration: 4000
    }
  ],
  animationDuration: 3000
}

export default option
