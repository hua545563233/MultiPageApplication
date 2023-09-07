import mapName from './map.js'
import FlyLine from './flyLine.js'
/* eslint-disable */
class BaseMap {
  constructor(id, config, data) {
    this.id = id
    this.config = config || this.defaultOption
    this.data = data
    this.instance = document.getElementById(this.id)
    this.chartInstance = echarts.init(this.instance)
    this.init()
  }
  init () {
    this.setMap('china', 'china_geo')
    this.bindEvent()
  }
  setMap (name, mapCode) {
    // let data = require(`../../data/${mapCode}.json`)
    $.getJSON(`http://10.2.6.186:8100/platform-res/master/data/geo/${mapCode}.json`, (data) => {
      echarts.registerMap(name, data)
      this.config.option.geo.map = name
      if (this.chartInstance) {
        this.chartInstance.clear()
        console.log(this.config.option)
        console.log(this.config.option.geo.itemStyle.normal)
        let bgPatternSrc = 'http://10.2.6.186:8100/platform-res/tenant/super/projects/prj1/scene/app23/assets/img/a67da134-a709-4b25-8348-504cc0c47e6b.png'
        var bgPatternImg = new Image()
        bgPatternImg.src = bgPatternSrc
        this.config.option.geo.itemStyle.normal.color.image = bgPatternImg
        this.chartInstance.setOption(this.config.option)
        // this.getImage('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2956892752,3093905091&fm=26&gp=0.jpg').then(res => {
        //   this.config.option.geo.itemStyle.normal.color.image = res
        //   this.chartInstance.setOption(this.config.option)
        // })
      }
    })
  }
  getImage (img) {
    return new Promise(resolve => {
      const image = new Image()
      image.setAttribute("crossOrigin", 'Anonymous')
      image.src = img
      image.onload = () => {
        const canvas = document.createElement(`canvas`)
        canvas.width = image.width
        canvas.height = image.height
        const ctx = canvas.getContext(`2d`)
        const x = canvas.width / 2
        const y = canvas.height / 2
        // 将绘图原点移到画布中心
        ctx.translate(x, y)
        // 旋转角度
        ctx.rotate((Math.PI / 180) * (Math.floor(Math.random() * 6) * 10))
        // 将画布原点移动
        ctx.translate(-x, -y)
        // 绘制图片
        ctx.drawImage(image, 0, 0, image.width, image.height)
        const ext = image.src.substring(image.src.lastIndexOf(`.`) + 1).toLowerCase()
        const dataURL = canvas.toDataURL(`image/` + ext)
        console.log(dataURL)
        resolve(`image://` + dataURL)
      }
    })
  }
  bindEvent () {
    var timeFn = null;
    //单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
    this.chartInstance.on('click', (params) => {
      clearTimeout(timeFn);
      //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
      timeFn = setTimeout(() => {
        var name = params.name; //地区name
        console.log(name)
        var mapCode = mapName.provinces[name]; //地区的json数据
        console.log(mapCode)
        if (!mapCode) {
          alert('无此区域地图显示');
          return;
        }
        this.setMap(name, mapCode)
      }, 250);
    })
    // 绑定双击事件，返回全国地图
    this.chartInstance.on('dblclick', (params) => {
      //当双击事件发生时，清除单击事件，仅响应双击事件
      clearTimeout(timeFn);
      //返回全国地图
      this.setMap('china', 'china_geo')
    })
  }
  setData (name) {
  }
  update ({ config, data }) {
    if (config) this.config = config
    if (data) this.data = data
    this.init()
  }
  addFlyLineLayer () {
    let flyLine = new FlyLine()
  }
  addScatterLayer () { }
}

BaseMap.defaultConfig = {
  "exist": true,
  "layout": {
    "width": 560,
    "height": 250,
    "position": "absolute",
    "left": 218,
    "top": 117,
    "right": "auto",
    "bottom": "auto",
    "padding-left": 0,
    "padding-right": 0,
    "padding-top": 0,
    "padding-bottom": 0,
    "margin-left": 0,
    "margin-right": 0,
    "margin-top": 0,
    "margin-bottom": 0
  },
  "style": {
    "opacity": 1
  },
  "content": {
    "type": "baseMap",
    "name": "行政地图组件",
    "vendor": []
  },
  "option": {
    tooltip: {
      show: false
    },
    geo: {
      map: 'china',
      roam: false,
      label: {
        normal: {
          show: false,
          textStyle: {
            color: 'rgba(0,0,0,0.6)'
          }
        }
      },
      itemStyle: {
        normal: {
          // areaColor: '#6495ED',
          borderColor: 'rgba(255, 255, 255, 0.6)',
          color: {
            image: '', // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
            repeat: `no-repeat` // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
          }
        },
        emphasis: {
          areaColor: null,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },
    series: []
  }
}

export default BaseMap
