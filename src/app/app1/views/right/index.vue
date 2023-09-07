<template>
  <div id="app1-right">
    <div class="app1_right_title">OLT退服GIS打点</div>
    <div class="country map" v-if="regionName === '中国'"></div>
    <div class="province map" v-if="regionName === '贵州'"></div>
    <div class="province2 map" v-if="regionName === '青海'"></div>
    <div class="city map" v-if="regionName === '贵阳市' && !flag" @mousewheel="mouseScroll"></div>
    <!-- <div class="city2 map" v-if="regionName === '西宁市' && !flag" @mousewheel="mouseScroll"></div> -->
    <div v-if="gzCity.includes(regionName) && !flag"
      :style="{backgroundImage: getImg(regionName)}"
      class="map map-container"
      @mousewheel="mouseScroll" >
    </div>
    <!-- <div class="district map" v-if="regionName === '贵阳市' && flag === 1" @mousewheel="mouseScroll">
      <div class="point1">
        <div class="tooltip">
          <span>新路02OLT</span>
        </div>
      </div>
      <div class="point2" @click.self="openPopup1(index)" v-for="(item, index) of points" :key="index"
        :style="{left: item.x + 'rem', top: item.y + 'rem'}">
        <span v-if="popup === index + 1"></span>
        <div class="popup" :style="{top: 1.03 - item.y + 'rem', left: item.x > 6 ? '-16.9rem' : '-13.72rem'}">
          <div class="title">宁波北仑0{{index + 1}}OLT退服详情</div>
          <div class="closeBtn" @click.stop="closePopup1(index)"></div>
          <div class="list" @click.self="openPopup2"></div>
        </div>
      </div>
      <svg width="100%" height="100%" id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path :d="path" class="svg_line" v-if="popup > 0" />
      </svg>

    </div> -->
    <div class="district2 map" :style="{backgroundImage: getDistrictImg(regionName)}" v-if="gzCity.includes(regionName) && flag === 1" @mousewheel="mouseScroll">
      <div class="point1" :class="[cityMap[regionName]]">
        <div class="tooltip">
          <span>新路02OLT</span>
        </div>
      </div>
      <div class="point2" @click.self="openPopup1(index)" v-for="(item, index) of points" :key="index"
        :style="{left: item.x + 'rem', top: item.y + 'rem'}">
        <span v-if="popup === index + 1"></span>
        <div class="popup popup2" :style="{backgroundImage: getPopupImg(regionName), top: 1.03 - item.y + 'rem', left: item.x > 6 ? '-16.9rem' : '-13.72rem'}" >
          <div class="title">{{regionName}}{{index + 1}}OLT退服详情</div>
          <div class="closeBtn" @click.stop="closePopup1(index)"></div>
          <div class="list" @click.self="openPopup2"></div>
        </div>
      </div>
      <svg width="100%" height="100%" id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path :d="path" class="svg_line" v-if="popup > 0" />
      </svg>

    </div>
    <div v-if="!mapArr.includes(regionName)" class="placeholder map">尚未配置该区域GIS服务</div>
  </div>
</template>

<script>
export default {
  name: 'APP1_Right',
  data () {
    return {
      cityMap: {
        贵阳市: 'guiyang',
        遵义市: 'zunyi',
        铜仁市: 'tongren',
        毕节市: 'bijie',
        安顺市: 'anshun',
        六盘水市: 'liupanshui',
        黔东南苗族侗族自治州: 'qiandongnan',
        黔南布依族苗族自治州: 'qiannan',
        黔西南布依族苗族自治州: 'qianxinan'
      },
      gzCity: ['贵阳市', '遵义市', '铜仁市', '毕节市', '安顺市', '六盘水市', '黔东南苗族侗族自治州', '黔南布依族苗族自治州', '黔西南布依族苗族自治州'],
      mapArr: ['中国', '贵州', '贵阳市', '遵义市', '铜仁市', '毕节市', '安顺市', '六盘水市', '黔东南苗族侗族自治州', '黔南布依族苗族自治州', '黔西南布依族苗族自治州'],
      flag: 0,
      scroll: true,
      popup: -1,
      path: null,
      point: [{
        x: 7.1,
        y: 3.4
      }, {
        x: 7.57,
        y: 2.41
      }, {
        x: 10.25,
        y: 3.98
      }, {
        x: 11.49,
        y: 4.65
      }, {
        x: 8.73,
        y: 5.37
      }, {
        x: 1.52,
        y: 5.68
      }, {
        x: 3.72,
        y: 6.24
      }, {
        x: 7.99,
        y: 7.41
      }, {
        x: 11.11,
        y: 7.08
      }]
    }
  },
  computed: {
    regionName () {
      return this.$root.regionName
    },
    points () {
      const name = this.cityMap[this.regionName]
      if (name === 'guiyang') {
        return [
          {
            x: 7.1,
            y: 3.4
          },
          {
            x: 11.7,
            y: 1.6
          },
          {
            x: 3.35,
            y: 6.1
          }
        ]
      } else if (name === 'zunyi') {
        return [
          {
            x: 5.71,
            y: 3
          },
          {
            x: 9.86,
            y: 3.2
          },
          {
            x: 5.35,
            y: 7.1
          }
        ]
      } else if (name === 'tongren') {
        return [
          {
            x: 3.14,
            y: 3.7
          },
          {
            x: 13.02,
            y: 3.26
          },
          {
            x: 5.35,
            y: 7.1
          }
        ]
      } else if (name === 'bijie') {
        return [
          {
            x: 6.64,
            y: 2.5
          },
          {
            x: 7.96,
            y: 1.3
          },
          {
            x: 5.15,
            y: 6.66
          }
        ]
      } else if (name === 'anshun') {
        return [
          {
            x: 5.94,
            y: 4.95
          },
          {
            x: 7.82,
            y: 0.6
          },
          {
            x: 3.72,
            y: 7.62
          }
        ]
      } else if (name === 'liupanshui') {
        return [
          {
            x: 5.34,
            y: 4.15
          },
          {
            x: 10.3,
            y: 2.18
          }
        ]
      } else if (name === 'qiandongnan') {
        return [
          {
            x: 6.06,
            y: 5.4
          },
          {
            x: 12.4,
            y: 0.7
          }
        ]
      } else if (name === 'qiannan') {
        return [
          {
            x: 6.8,
            y: 3.4
          },
          {
            x: 7.48,
            y: 1.34
          }
        ]
      } else if (name === 'qianxinan') {
        return [
          {
            x: 6.52,
            y: 3
          },
          {
            x: 10.4,
            y: 1.96
          },
          {
            x: 3.74,
            y: 7.45
          }
        ]
      }
      return thhis.point
    }
  },
  watch: {
    regionName (v) {
      console.log(v, 'regionname')
      this.flag = 0
      this.popup = false
    }
  },
  methods: {
    getImg (name) {
      const img = this.cityMap[name]
      let url = img ? require(`../../../../assets/img/app1/right/map/${img}.png`) : null
      return `url(${url})`
    },
    getDistrictImg (name) {
      const img = this.cityMap[name]
      console.log(`../../../../assets/img/app1/right/map/${img}-district.png`)
      let url = img ? require(`../../../../assets/img/app1/right/map/${img}-district.png`) : null
      return `url(${url})`
    },
    getPopupImg (name) {
      const img = this.cityMap[name]
      console.log(`../../../../assets/img/app1/right/map/${img}-district.png`)
      let url = img ? require(`../../../../assets/img/app1/right/map/${img}-popup.png`) : null
      return `url(${url})`
    },
    mouseScroll (e) {
      if (!this.scroll || this.popup) return
      this.scroll = false
      if (e.deltaY && !this.flag) {
        this.flag = 1
      } else if (!e.deltaY && this.flag === 1) {
        this.flag = 0
      }
      setTimeout(() => {
        this.scroll = true
      }, 1000)
    },
    drawLine (index) {
      let path = document.querySelector('#svg path')
      let length = path.getTotalLength()
      // 清除之前的动作
      path.style.transition = path.style.WebkitTransition = 'none'
      // 设置起始点
      path.style.strokeDasharray = length + ' ' + length
      path.style.strokeDashoffset = length
      // 获取一个区域，获取相关的样式，让浏览器寻找一个起始点。
      path.getBoundingClientRect()
      // 定义动作
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 0.5s'
      path.style.strokeDashoffset = '0'
    },
    openPopup1 (index) {
      if (this.popup === index + 1) return
      if (this.popup > 0) {
        this.closePopup1(this.popup - 1)
      }
      let pos = this.points[index]
      let x = pos.x > 6 ? pos.x * 100 - 500 : pos.x * 100 - 184
      this.path = `M${pos.x * 100 + 16} ${pos.y * 100 + 16}L${x} 105`
      this.popup = index + 1
      this.$nextTick(() => {
        this.drawLine(index)
        let popup = this.$el.getElementsByClassName('popup')[index]
        popup.style.transform = 'scale(1)'
      })
    },
    closePopup1 (index) {
      this.popup = -1
      console.log(this.popup)
      let popup = this.$el.getElementsByClassName('popup')[index]
      popup.style.transform = 'scale(0)'
    },
    openPopup2 () {
      bus.$emit('openPopup')
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
#app1-right {
  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: rgba(114, 180, 199, 0.2);
  }
  .popup {
    width: 11.92rem;
    height: 7.41rem;
    position: absolute;
    background-size: 100% 100%;
    background-image: url("../../../../assets/img/app1/right/popup1.jpg");
    transition: 0.5s;
    transform-origin: right top;
    transform: scale(0);
    z-index: 2;
    .title {
      position: absolute;
      left: 0.7rem;
      top: 0.55rem;
      line-height: 0.28rem;
      font-size: 0.2rem;
      color: #0c2753;
      letter-spacing: 0.04rem;
      width: 3.16rem;
      height: 0.28rem;
      padding-left: 0.2rem;
      box-sizing: border-box;
      background-color: #fb7d4d;
    }
    .closeBtn {
      width: 0.28rem;
      height: 0.28rem;
      position: absolute;
      top: 0.24rem;
      right: 0.27rem;
      cursor: pointer;
    }
    .list {
      width: 10.79rem;
      height: 0.51rem;
      position: absolute;
      left: 0.73rem;
      top: 4.01rem;
      cursor: pointer;
    }
  }
  // .popup2 {
  //   // background-image: url("../../../../assets/img/app1/right/popup3.png");
  // }
  .app1_right_title {
    width: 3.4rem;
    height: 0.45rem;
    position: absolute;
    top: 1.16rem;
    left: 5.42rem;
    font-size: 0.27rem;
    letter-spacing: 0.07rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0c2753;
  }
  .map {
    position: absolute;
    width: 100%;
    height: 9.51rem;
    background-size: 100% 100%;
    left: 0;
    top: 2.03rem;
  }
  .country {
    background-image: url("../../../../assets/img/app1/right/country.png");
  }
  .province {
    background-image: url("../../../../assets/img/app1/right/guizhou.png");
  }
  .city {
    background-image: url("../../../../assets/img/app1/right/map/guiyang.png");
  }
  .province2 {
    background-image: url("../../../../assets/img/app1/right/qinghai.png");
  }
  // .city2 {
  //   background-image: url("../../../../assets/img/app1/right/xining.png");
  // }
  .district {
    background-image: url("../../../../assets/img/app1/right/district.png");
    .svg_line {
      stroke: #fb7d4d;
      stroke-width: 2;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
    }
    #svg {
      overflow: initial;
    }
    .point1 {
      width: 0.32rem;
      height: 0.32rem;
      position: absolute;
      left: 6.02rem;
      top: 6.44rem;
      cursor: pointer;
      opacity: 0.4;
      &:hover {
        .tooltip {
          transform: scale(1);
        }
      }
      .tooltip {
        width: 2.51rem;
        height: 0.89rem;
        background-size: 100% 100%;
        background-image: url("../../../../assets/img/app1/right/tooltip.png");
        position: absolute;
        left: 0.28rem;
        bottom: 0.28rem;
        transition: 0.5s;
        transform-origin: left bottom;
        transform: scale(0);
        > span {
          width: 1.76rem;
          height: 0.28rem;
          position: absolute;
          top: 0.08rem;
          right: 0.08rem;
          font-size: 0.2rem;
          letter-spacing: 0.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0c2753;
        }
      }
    }
    .point2 {
      width: 0.32rem;
      height: 0.32rem;
      position: absolute;
      cursor: pointer;
      > span {
        width: 0.96rem;
        height: 0.98rem;
        position: absolute;
        left: -0.32rem;
        top: -0.33rem;
        background-size: 100% 100%;
        pointer-events: none;
        background-image: url("../../../../assets/img/app1/right/activePoint.png");
      }
    }
  }
  .district2 {
    // background-image: url("../../../../assets/img/app1/right/dongcheng.png");
    .svg_line {
      stroke: #fb7d4d;
      stroke-width: 2;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
    }
    #svg {
      overflow: initial;
    }
    .point1 {
      width: 0.32rem;
      height: 0.32rem;
      position: absolute;
      left: 2.22rem;
      top: 1.44rem;
      cursor: pointer;
      // background-color: red;
      &.zunyi {
        transform: translateY(1.3rem);
      }
      &.tongren {
        transform: translateX(5.75rem) translateY(-0.1rem);
      }
      &.bijie {
        transform: translateX(-0.43rem) translateY(1.55rem);
      }
      &.anshun {
        transform: translateX(6.9rem) translateY(1.66rem);
      }
      &.liupanshui {
        transform: translate(0.25rem, 2.3rem);
      }
      &.qiandongnan {
        transform: translate(2.78rem, 2.88rem);
      }
      &.qiannan {
        transform: translate(3.2rem, 2.8rem);
      }
      &.qianxinan {
        transform: translate(1.85rem, 1.08rem);
      }
      &:hover {
        .tooltip {
          transform: scale(1);
        }
      }
      .tooltip {
        width: 2.51rem;
        height: 0.89rem;
        background-size: 100% 100%;
        background-image: url("../../../../assets/img/app1/right/tooltip.png");
        position: absolute;
        left: 0.28rem;
        bottom: 0.28rem;
        transition: 0.5s;
        transform-origin: left bottom;
        transform: scale(0);
        > span {
          width: 1.76rem;
          height: 0.28rem;
          position: absolute;
          top: 0.08rem;
          right: 0.08rem;
          font-size: 0.2rem;
          letter-spacing: 0.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0c2753;
        }
      }
    }
    .point2 {
      width: 0.32rem;
      height: 0.32rem;
      position: absolute;
      cursor: pointer;
      > span {
        width: 0.96rem;
        height: 0.98rem;
        position: absolute;
        left: -0.32rem;
        top: -0.33rem;
        background-size: 100% 100%;
        pointer-events: none;
        background-image: url("../../../../assets/img/app1/right/activePoint.png");
      }
    }
  }
}
</style>
