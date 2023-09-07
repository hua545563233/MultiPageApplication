<template>
  <div class="app1-center">
    {{ pageName }}
  </div>
</template>

<script>
export default {
  name: 'Center',
  data () {
    return {
      pageName: 'page1'
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    count (v) {
      this.updateData()
    }
  },
  methods: {
    updateData () {
      this.data = this.count % 2
    },
    init () {
      this.map = echarts.init(document.getElementById('app1-map'))
      if (this.mapLevel !== '中国') {
        let name = this.userLevel
        this.setMap(name, name === '浙江' ? 'zhe_jiang_geo' : 'gui_zhou_geo')
        this.setBgMap(name, name === '浙江' ? 'zhe_jiang_geo' : 'gui_zhou_geo')
      } else {
        this.setMap('中国', 'china_geo')
        this.setBgMap('中国', 'china_geo')
      }
      this.bindEvent()
    },
    changeTab (name) {
      this.tab = name
      var mapCode = mapName.provinces[this.mapLevel]
      this.setMap(this.mapLevel, mapCode)
    },
    setBgMap (name, mapCode) {
      this.mapBg = echarts.init(document.getElementById('app1-mapbg'))
      mapbgOption.geo.map = name
      this.mapBg.setOption(mapbgOption)
    },
    setMap (name, mapCode) {
      this.mapJson = require(`../../../../lib/data/${mapCode}.json`)
      echarts.registerMap(name, this.mapJson)
      mapOption.geo.map = name
      mapbgOption.geo.map = name
      this.getList()
      this.getList1()
      this.getList2()
      this.getList3()
      console.log(this.list3)
      if (this.tab === 0) {
        mapOption.tooltip = {
          show: true,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          boxShadow: 'none',
          position: (point, params, dom, rect, size) => {
            // 固定在顶部
            // console.log(params)
            let region = this.mapJson.features.filter((item) =>
              item.properties.name === params.name
            )
            let pos = this.map.convertToPixel('geo', [region[0].properties.cp[0], region[0].properties.cp[1]])
            // console.log(pos)
            return [pos[0] - 350, pos[1] - 280]
          },
          formatter: (params) => {
            let item = this.list3.filter((e) => {
              return (e.name === params.name) || (e.name === regionMap[params.name])
            })
            return `<div class="tooltip1">
                    <div class='title'>${params.name}</div>
                    <div class='list'>
                      <div><label>退服数</label><span>${item[0].value1}</span></div>
                      <div><label>退服率</label><span>${(item[0].value2 * 100).toFixed(2)}%</span></div>
                    </div>
                    <div>
                  `
          }
        }
      } else {
        mapOption.tooltip = {
          show: true,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          boxShadow: 'none',
          position: (point, params, dom, rect, size) => {
            // 固定在顶部
            // console.log(params)
            let region = this.mapJson.features.filter((item) =>
              item.properties.name === params.name
            )
            let pos = this.map.convertToPixel('geo', [region[0].properties.cp[0], region[0].properties.cp[1]])
            // console.log(pos)
            return [pos[0] - 350, pos[1] - 280]
          },
          formatter: (params) => {
            let item = this.list3.filter((e) => {
              return e.name === params.name || (params.name.length > 3 && params.name.includes(e.name))
            })
            return `<div class="tooltip1">
                    <div class='title'>${params.name}</div>
                    <div class='list'>
                      <div><label>家宽</label><span>${item[0].value1}/${item[0].value1 + 3}</span></div>
                      <div><label>电视</label><span>${Math.floor(item[0].value2 * 100)}/${Math.floor(item[0].value2 * 100 + 2)}</span></div>
                    </div>
                    <div>
                  `
          }
        }
      }
      if (this.map) {
        this.map.clear()
        // console.log(mapOption.geo.itemStyle)
        let bgPatternSrc = ''
        if (name === '中国') {
          bgPatternSrc = require('../../../../assets/img/app1/center/mapbg1.png')
        } else {
          bgPatternSrc = require('../../../../assets/img/app1/center/mapbg2.png')
        }
        var bgPatternImg = new Image()
        bgPatternImg.src = bgPatternSrc
        bgPatternImg.onload = () => {
          mapOption.geo.itemStyle.color.image = bgPatternImg
          mapbgOption.geo.itemStyle.color.image = bgPatternImg
          // mapOption.series[0].itemStyle.color.image = bgPatternImg
          this.mapBg.setOption(mapbgOption)
          this.map.setOption(mapOption)
        }
      }
    },
    getList () {
      this.data1 = Math.random() + 1.2
      this.data2 = Math.random() + 73
      this.data3 = Math.random() + 54
    },
    getList1 () {
      let num1 = Math.random()
      let num2 = Math.random()
      let num3 = Math.random()
      let num4 = Math.random()
      let total = num1 + num2 + num3 + num4
      num1 = Math.floor((num1 / total) * 100)
      num2 = Math.floor((num2 / total) * 100)
      num3 = Math.floor((num3 / total) * 100)
      num4 = 100 - num1 - num2 - num3
      // console.log(total)
      this.list1 = []
      this.list1.push({ name: '气象灾害', value: num1 })
      this.list1.push({ name: '地质灾害', value: num2 })
      this.list1.push({ name: '社会事件', value: num3 })
      this.list1.push({ name: '其他', value: num4 })
    },
    getList2 () {
      let num1 = Math.random()
      let num2 = Math.random()
      let num3 = Math.random()
      let num4 = Math.random()
      let total = num1 + num2 + num3 + num4
      num1 = Math.floor((num1 / total) * 100)
      num2 = Math.floor((num2 / total) * 100)
      num3 = Math.floor((num3 / total) * 100)
      num4 = 100 - num1 - num2 - num3
      // console.log(total)
      this.list2 = []
      this.list2.push({ name: '传输原因', value: num1 })
      this.list2.push({ name: '停电原因', value: num2 })
      this.list2.push({ name: '设备故障', value: num3 })
      this.list2.push({ name: '其他', value: num4 })
    },
    getList3 () {
      if (this.mapLevel === '中国') {
        let arr = []
        this.list3 = this.mapJson.features.forEach((item) => {
          window.familyData.userBase.forEach((e) => {
            if (e.province_name === item.properties.name) {
              arr.push({ name: e.province_name, value1: e.out_service_count, value2: e.out_service_rate })
            }
          })
        })
        this.list3 = arr
        console.log(this.list3, 'list3')
        // this.scrollKey++
        // this.$forceUpdate()
        this.update = false
        this.$nextTick(() => {
          this.update = true
        })
      } else {
        let data = window.familyData.userBase.filter((item) => {
          return item.province_name === this.mapLevel
        })
        console.log(data)
        let arr = []
        this.list3 = this.mapJson.features.forEach((item) => {
          data[0].cities.forEach((e) => {
            if (e.city_name === item.properties.name) {
              arr.push({ name: regionMap[e.city_name] ?? e.city_name, value1: e.out_service_count, value2: e.out_service_rate })
            }
          })
        })
        this.list3 = arr
        console.log(this.list3, 'list3')
        // this.scrollKey++
        // this.$forceUpdate()
        this.update = false
        this.$nextTick(() => {
          this.update = true
        })
      }
    },
    bindEvent () {
      var timeFn = null
      //单击选中地图
      this.map.on('click', (params) => {
        clearTimeout(timeFn)
        //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
        timeFn = setTimeout(() => {
          var name = params.name //地区name
          this.$root.regionName = name
          this.selectedRegion = true
          if (mapOption.geo.regions.length === 2) {
            mapOption.geo.regions.pop()
          }
          var bgPatternImg = new Image()
          bgPatternImg.src = require('../../../../assets/img/app1/center/mapselected.png')
          bgPatternImg.onload = () => {
            mapOption.geo.regions.push({
              name: name,
              selected: true,
              itemStyle: {
                borderColor: '#fb7d4d',
                borderWidth: 2,
                color: {
                  image: bgPatternImg,
                  repeat: 'no-repeat'
                }
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
              }
            })
            this.map.clear()
            this.map.setOption(mapOption)
            // mapOption.geo.select.itemStyle.areaColor.image = bgPatternImg
            // this.map.dispatchAction({
            //   type: 'geoSelect',
            //   name: name,
            //   seriesIndex: 0
            // })
          }
        }, 250)
      })
      // 绑定双击事件，下钻到全省地图
      this.map.on('dblclick', (params) => {
        if (params.name && this.mapLevel !== '中国') {
          return
        }
        //当双击事件发生时，清除单击事件，仅响应双击事件
        clearTimeout(timeFn)
        //返回全国地图
        // this.setMap('china', 'china_geo')
        var name = params.name //地区name
        console.log(name)
        var mapCode = mapName.provinces[name] //地区的json数据
        console.log(mapCode)
        if (!mapCode) {
          alert('无此区域地图显示')
          return
        }
        this.selectedRegion = false
        this.$root.mapLevel = name
        this.$root.regionName = name
        this.setMap(name, mapCode)
      })
      // this.map.on('mouseover', (params) => {
      // if (params.name && this.mapLevel !== '中国') {
      //   return
      // }
      //当双击事件发生时，清除单击事件，仅响应双击事件
      // console.log(params)
      // console.log(echarts.version)
      // this.map.dispatchAction({
      //   type: 'showTip',
      //   // x: params.event.screenX,
      //   // y: params.event.screenY
      //   position: [50, 50]
      //   // x coordinate on screen
      // })
      // })
    },
    backChina () {
      // this.setMap('中国', 'china_geo')
      this.$root.regionName = '中国'
      this.$root.mapLevel = '中国'
      this.cancelSelect()
    },
    cancelSelect () {
      this.selectedRegion = false
      var name = this.mapLevel //地区name
      this.$root.regionName = name
      var mapCode = mapName.provinces[name] //地区的json数据
      if (!mapCode) {
        alert('无此区域地图显示')
        return
      }
      mapOption.geo.regions.pop()
      this.setMap(name, mapCode)
    }
  }
}
</script>

<style lang="scss">
.app1-center {
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  .app1-center-content {
    position: absolute;
    margin-top: 1.78rem;
    width: 100%;
    height: 9.9rem;
    .tabList {
      cursor: pointer;
      z-index: 99;
      position: absolute;
      right: 0;
      display: flex;
      .olt {
        cursor: pointer;
        width: 2.19rem;
        height: 0.52rem;
        background: url("../../../../assets/img/app1/center/OLT按钮.png");
        background-size: 100% 100%;
      }
      .oltActive {
        background: url("../../../../assets/img/app1/center/OLTActive.png");
        background-size: 100% 100%;
      }
      .user {
        cursor: pointer;
        margin-left: 0.3rem;
        width: 2.19rem;
        height: 0.52rem;
        background: url("../../../../assets/img/app1/center/user.png");
        background-size: 100% 100%;
      }
      .userActive {
        background: url("../../../../assets/img/app1/center/userActive.png");
        background-size: 100% 100%;
      }
    }
    .oltBox {
      position: absolute;
      width: 8rem;
      height: 0.44rem;
      background: url("../../../../assets/img/app1/center/olt退服.png");
      color: #fff;
      font-size: 0.2rem;
      display: flex;
      justify-content: space-around;
      label {
        font-size: 0.3rem;
        letter-spacing: 0.05rem;
      }
      span {
        color: #31ccf6;
        letter-spacing: 0.03rem;
        font-size: 0.3rem;
      }
    }
    .list1 {
      color: #fff;
      font-size: 0.2rem;
      position: absolute;
      top: 3.92rem;
      .title1 {
        line-height: 0.3rem;
        width: 1.73rem;
        height: 0.3rem;
        text-indent: 0.5rem;
        letter-spacing: 0.05rem;
        background: url("../../../../assets/img/app1/center/title1bg.png");
        margin-bottom: 0.28rem;
      }
      .li {
        height: 0.52rem;
        font-size: 0.16rem;
        > div {
          display: flex;
          justify-content: space-between;
          padding-left: 0.2rem;
          margin-bottom: 0.1rem;
          background: url("../../../../assets/img/app1/center/元素.png") left
            center no-repeat;
          label {
            width: 0.8rem;
          }
          span {
            color: #2fc5ee;
            width: 0.55rem;
            letter-spacing: 0.03rem;
            text-align: right;
          }
        }
        progress {
          appearance: none;
          position: absolute;
          width: 100%;
          height: 4px;
        }
        progress::-webkit-progress-bar {
          background: #1f69a0 !important;
        }
        progress::-webkit-progress-value {
          background: #31ccf6 !important;
          animation: animate-stripes 5s linear infinite;
        }
        @keyframes animate-stripes {
          100% {
            background-position: -100px 0px;
          }
        }
      }
    }
    .list2 {
      color: #fff;
      font-size: 0.2rem;
      position: absolute;
      top: 6.92rem;
      .title1 {
        line-height: 0.3rem;
        width: 1.73rem;
        height: 0.3rem;
        text-indent: 0.5rem;
        letter-spacing: 0.05rem;
        background: url("../../../../assets/img/app1/center/title1bg.png");
        margin-bottom: 0.28rem;
      }
      .li {
        font-size: 0.16rem;
        height: 0.52rem;
        > div {
          display: flex;
          justify-content: space-between;
          padding-left: 0.2rem;
          margin-bottom: 0.1rem;
          background: url("../../../../assets/img/app1/center/元素.png") left
            center no-repeat;
          label {
            width: 0.8rem;
          }
          span {
            text-align: right;
            color: #2fc5ee;
            width: 0.55rem;
            letter-spacing: 0.03rem;
          }
        }
        progress[value] {
          appearance: none;
          position: absolute;
          width: 100%;
          height: 4px;
        }
        progress[value]::-webkit-progress-bar {
          background: #1f69a0 !important;
        }
        progress[value]::-webkit-progress-value {
          background: #31ccf6 !important;
        }
      }
    }
    .list3 {
      position: absolute;
      right: 0;
      bottom: 0.3rem;
      width: 3.58rem;
      height: 5.24rem;
      .title {
        width: 3.49rem;
        height: 0.45rem;
        background: url("../../../../assets/img/app1/center/list3/装饰1.png")
            left center no-repeat,
          url("../../../../assets/img/app1/center/list3/装饰2.png") center
            0.2rem no-repeat;
        font-size: 0.25rem;
        color: #fff;
        padding-left: 0.36rem;
      }
      .header {
        color: #72b4c7;
        font-size: 0.2rem;
        width: 3.41rem;
        height: 0.45rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: url("../../../../assets/img/app1/center/list3/headBg.png");
        margin-bottom: 0.1rem;
        span {
          width: 30%;
          text-align: center;
        }
      }
      .seamless-warp {
        box-sizing: border-box;
        height: 4.3rem;
        color: #72b4c7;
        font-size: 0.2rem;
        overflow: hidden;
      }
      .wrapper {
        > .li {
          width: 3.41rem;
          height: 0.33rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: url("../../../../assets/img/app1/center/list3/liBg.png")
            no-repeat;
          margin-bottom: 0.1rem;
          span {
            width: 30%;
            height: 0.33rem;
            line-height: 0.33rem;
            text-align: center;
            overflow: hidden;
          }
          .name {
            width: 30%;
            height: 0.33rem;
            line-height: 0.33rem;
            text-align: center;
            text-indent: 2px;
            overflow: hidden; /*超出部分隐藏*/
            white-space: nowrap; /*不换行*/
            text-overflow: ellipsis;
          }
        }
      }
    }
    .list4 {
      position: absolute;
      right: 0;
      bottom: 0.3rem;
      width: 3.58rem;
      height: 5.24rem;
      .title {
        width: 3.49rem;
        height: 0.45rem;
        background: url("../../../../assets/img/app1/center/list3/装饰1.png")
            left center no-repeat,
          url("../../../../assets/img/app1/center/list3/装饰2.png") center
            0.2rem no-repeat;
        font-size: 0.25rem;
        color: #fff;
        padding-left: 0.36rem;
      }
      .header {
        color: #72b4c7;
        font-size: 0.18rem;
        width: 3.49rem;
        height: 0.55rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: url("../../../../assets/img/app1/center/list3/影响用户数表头.png");
        margin-bottom: 0.1rem;
        span {
          width: 30%;
          text-align: center;
        }
      }
      .seamless-warp {
        box-sizing: border-box;
        height: 4.3rem;
        color: #72b4c7;
        font-size: 0.2rem;
        overflow: hidden;
      }
      .wrapper {
        > .li {
          width: 3.41rem;
          height: 0.33rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: url("../../../../assets/img/app1/center/list3/liBg.png")
            no-repeat;
          margin-bottom: 0.1rem;
          span {
            width: 30%;
            height: 0.33rem;
            line-height: 0.33rem;
            text-align: center;
            overflow: hidden;
          }
          .name {
            width: 30%;
            height: 0.33rem;
            line-height: 0.33rem;
            text-align: left;
            text-indent: 2px;
            overflow: hidden; /*超出部分隐藏*/
            white-space: nowrap; /*不换行*/
            text-overflow: ellipsis;
          }
        }
      }
    }
    .back-btn {
      cursor: pointer;
      position: absolute;
      right: 4rem;
      bottom: 0.4rem;
      width: 1.07rem;
      height: 0.23rem;
      background: url("../../../../assets/img/app1/center/返回按钮.png");
    }
    .back-china {
      cursor: pointer;
      position: absolute;
      left: 2.3rem;
      bottom: 0.4rem;
      width: 0.65rem;
      height: 0.53rem;
      background: url("../../../../assets/img/app1/center/返回全国按钮.png");
    }

    .map-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      > div:nth-of-type(2) {
        box-shadow: none !important;
      }
    }
    .qhmap {
      left: -78px;
    }
    .tooltip1 {
      width: 3.61rem;
      height: 2.99rem;
      background: url("../../../../assets/img/app1/center/tooltip1.png");
      .title {
        position: relative;
        top: 0.06rem;
        height: 0.25rem;
        line-height: 0.25rem;
        font-size: 0.16rem;
        text-indent: 0.45rem;
        color: #000;
      }
      .list {
        position: relative;
        height: 1.1rem;
        top: 0.1rem;
        display: flex;
        flex-flow: column;
        > div {
          padding: 0 0.2rem;
          box-sizing: border-box;
          width: 2.06rem;
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          label {
            padding: 5px;
            color: #000;
            background-color: #eb8359;
          }
          span {
            color: #31ccf6;
            font-size: 0.3rem;
          }
        }
      }
    }
  }
}
</style>
