/* eslint-disable*/
export default {
  tooltip: {
    show: true,
    // triggerOn: "mousemove",
    // position: function (point, params, dom, rect, size) {
    //   // 固定在顶部
    //   console.log(params)
    //   return [point[0] - 200, '10%']
    // },
    // formatter: function (params) {
    //   // console.log(params)
    //   return `<div class="tooltip1">
    //   <div></div>
    //   <div>
    //   `
    // }
  },
  geo: {
    map: '中国',
    roam: false,
    aspectScale: 0.75,
    label: {
      normal: {
        show: true,
        textStyle: {
          color: 'rgba(255,255,255,0.7)'
        }
      }
    },
    itemStyle: {
      // areaColor: 'rgba(0,0,0,1)',
      color: {
        image: '', // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
        repeat: `repeat` // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
      },
      borderColor: 'rgba(24,133,164,0.6)',
      borderWidth: 2
    },
    emphasis: {
      label: {
        show: true,
        color: 'rgba(255,255,255,0.7)'
      },
      itemStyle: {
        areaColor: 'rgba(251,125,70,0.2)',
        borderColor: '#fb7d4d',
        borderWidth: 2
      }
    },
    // select: {
    //   label: {
    //     show: true,
    //     color: 'rgba(255,255,255,0.7)'
    //   },
    //   itemStyle: {
    //     areaColor: {
    //       image: '', // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
    //       repeat: `repeat` // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
    //     },
    //     borderColor: '#fb7d4d',
    //     borderWidth: 2
    //   }
    // },
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
    {
      type: 'map',
      map: '中国',
      geoIndex: 0,
      roam: false,
      aspectScale: 0.75,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: 'rgba(255,255,255,0.7)'
          }
        }
      },
      itemStyle: {
        // areaColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(24,133,164,0.6)',
        borderWidth: 2,
        color: {
          image: '', // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
          repeat: `repeat` // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
        }
      },
      data: [{
        name: '南海诸岛',
        itemStyle: {
          normal: {
            opacity: 0,
          }
        },
        label: {
          show: false
        }
      }]
      // emphasis: {
      //   label: {
      //     show: true,
      //     textStyle: {
      //       color: 'rgba(0,0,0,0.7)'
      //     }
      //   },
      //   itemStyle: {
      //     areaColor: 'rgba(251,125,70,0.2)',
      //     borderColor: '#fb7d4d',
      //     borderWidth: 2
      //   }
      // }
    },
  ]
}