/* eslint-disable*/
export default {
  tooltip: {
    show: false,
    // triggerOn: "mousemove",
    formatter: function (params) {
      console.log(params)
      return `<div class="tooltip1">
      <div></div>
      <div>
      `
    }
  },
  geo: {
    map: '中国',
    roam: false,
    aspectScale: 0.75,
    label: {
      normal: {
        show: false,
        textStyle: {
          color: 'rgba(255,255,255,0.7)'
        }
      }
    },
    itemStyle: {
      color: {
        image: '', // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
        repeat: `repeat` // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
      },
      borderColor: 'rgba(24,133,164,0.6)',
      borderWidth: 0,
      shadowColor: '#0c344f',
      shadowOffsetY: 15,
      shadowBlur: 2
    },
    regions: [
      {
        name: '南海诸岛',
        itemStyle: {
          normal: {
            opacity: 0,
          }
        },
        label: {
          show: false
        }
      }
    ],
  },
  series: [
  ]
}