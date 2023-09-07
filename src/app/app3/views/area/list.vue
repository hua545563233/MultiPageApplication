<template>
  <div class="app3_area_list">
    <div class="list_title">
      <div class="list_tabs">
        <div :class="['tab-item', {activeTab: tabIndex === 0}]" @click="tabIndex=0">2G</div>
        <div :class="['tab-item', {activeTab: tabIndex === 1}]" @click="tabIndex=1">4G</div>
        <div :class="['tab-item', {activeTab: tabIndex === 2}]" @click="tabIndex=2">5G</div>
      </div>
    </div>
    <div class="area_list">
      <div class="list_header">
        <span class="col1">小区<br/>名称</span>
        <span class="col2">告警<br/>标识</span>
        <span class="col3">PCI</span>
        <span class="col4">RRC连接<br/>建立成功率</span>
        <span class="col5">RRC<br/>连接数</span>
        <span class="col6">VOLTE<br/>接通率</span>
        <span class="col7">VLOTE<br/>用户数</span>
        <span class="col8">干扰值</span>
        <span class="col9">上下行<br/>PRB利用率</span>
        <span class="col10">上下行<br/>PUSCH利用率</span>
        <span class="col11">上下行<br/>PDCCH利用率</span>
        <span class="col12">总<br/>流量</span>
        <span class="col13">总<br/>用户数</span>
      </div>
      <div class="list_content" v-if="animationEnd">
        <div class="listBox">
          <div :class="['list-item', 'animate__animated', 'animate__fadeIn', `list-item-${index}`, {'active': popupIndex === index}]" v-for="(item, index) of listData" :key="index" :style="{'animation-delay': loaded ? '0s' : index * 0.1 + 0.5 + 's'}" @click="open(index)">
            <span class="col1">{{item[0]}}</span>
            <span class="col2">{{item[1]}}</span>
            <span class="col3">{{item[2]}}</span>
            <countTo class="col4" :startVal="0" :endVal="item[3]" :decimals="1" :duration="2000" suffix="%"></countTo>
            <countTo class="col5" :startVal="0" :endVal="item[4]" :duration="2000"></countTo>
            <countTo class="col6" :startVal="0" :endVal="item[5]" :decimals="1" :duration="2000" suffix="%"></countTo>
            <countTo class="col7" :startVal="0" :endVal="item[6]" separator="" :duration="2000"></countTo>
            <countTo class="col8" :startVal="0" :endVal="item[7]" :decimals="1" :duration="2000" suffix="%"></countTo>
            <countTo class="col9" :startVal="0" :endVal="item[8]" :decimals="1" :duration="2000" suffix="%"></countTo>
            <countTo class="col10" :startVal="0" :endVal="item[9]" :decimals="1" :duration="2000" suffix="%"></countTo>
            <countTo class="col11" :startVal="0" :endVal="item[10]" :decimals="1" :duration="2000" suffix="%"></countTo>
            <countTo class="col12" :startVal="0" :endVal="item[11]" :decimals="1" :duration="2000"></countTo>
            <countTo class="col13" :startVal="0" :endVal="item[12]" separator="" :duration="2000"></countTo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import animateCss from '../../../../lib/animate'
export default {
  name: 'areaList',
  data () {
    return {
      tabIndex: 0,
      animationEnd: true,
      loaded: false,
      activeIndex: 0,
      popupIndex: -1,
      timer: null,
      listData: [
        ['ITE_ID', '正常', 'CIP', 92.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489],
        ['ITE_ID', '正常', 'CIP', 96.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489],
        ['ITE_ID', '正常', 'CIP', 96.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489],
        ['ITE_ID', '正常', 'CIP', 96.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489],
        ['ITE_ID', '正常', 'CIP', 96.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489],
        ['ITE_ID', '正常', 'CIP', 92.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489],
        ['ITE_ID', '正常', 'CIP', 96.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489],
        ['ITE_ID', '正常', 'CIP', 96.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489],
        ['ITE_ID', '正常', 'CIP', 96.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489],
        ['ITE_ID', '正常', 'CIP', 96.8, 4, 99.5, 2657, 2.6, 97.6, 96.3, 98.9, 238.8, 8489]
      ]
    }
  },
  watch: {
    tabIndex (v) {
      this.activeIndex = 0
      this.animationEnd = false
      this.loaded = false
      setTimeout(() => {
        this.animationEnd = true
        this.animate()
      }, 100)
    }
  },
  methods: {
    loop () {
      if (this.popupIndex >= 0) return
      let dom = this.$el.getElementsByClassName('listBox')[0]
      if (this.activeIndex === this.listData.length / 2) {
        dom.style.transition = '0s'
        dom.style.transform = 'translateY(0)'
        this.activeIndex = 0
      }
      animateCss(`.list-item-${this.activeIndex}`, 'fadeOut').then((node) => {
        node.style.visibility = 'hidden'
        dom.style.transition = '0.5s'
        dom.style.transform = `translateY(${(this.activeIndex + 1) * -0.7}rem)`
        dom.addEventListener('animationend', () => {
          node.style.visibility = 'visible'
          this.activeIndex++
          this.loop()
        }, { once: true })
      })
    },
    open (index) {
      clearTimeout(this.timer)
      this.popupIndex = this.popupIndex === index ? -1 : index
      this.$emit('toggle', this.popupIndex)
    },
    animate () {
      this.$nextTick(() => {
        let item = this.$el.getElementsByClassName('list-item')[this.listData.length - 1]
        item.addEventListener('animationend', () => {
          this.loaded = true
          this.loop()
        }, { once: true })
      })
    }
  },
  mounted () {
    this.animate()
    window.bus.$on('clear', res => {
      this.popupIndex = -1
      this.loop()
    })
  }
}
</script>

<style lang="scss">
.app3_area_list {
  width: 11.1rem;
  height: 4.2rem;
  position: absolute;
  right: 0.9rem;
  bottom: 0.8rem;
  box-sizing: border-box;
  padding: 0.2rem 0.2rem 0;
  border-bottom: 1px solid rgba(19, 39, 46, 0.5);
  z-index: 99;
  .list_title {
    width: 5.9rem;
    height: 0.32rem;
    background-image: url('../../../../assets/img/app3/keyArea/title.png');
    position: relative;
    .list_tabs {
      position: absolute;
      left: 3.3rem;
      top: 0.08rem;
      display: flex;
      .tab-item {
        width: 0.63rem;
        height: 0.18rem;
        background-image: url('../../../../assets/img/app3/keyArea/btn.png');
        text-align: center;
        line-height: 0.18rem;
        font-size: 0.12rem;
        color: #3f90bd;
        margin-right: 0.2rem;
        cursor: pointer;
      }
      .activeTab {
        background-image: url('../../../../assets/img/app3/keyArea/btn_active.png');
        color: #fafbff;
      }
    }
  }
  .area_list {
    width: 10.7rem;
    overflow: hidden;
    span {
      display: block;
      opacity: inherit;
    }
    .col1, .col2 {
      width: 0.52rem;
    }
    .col3 {
      width: 0.46rem;
    }
    .col4 {
      width: 1rem;
    }
    .col5 {
      width: 0.68rem;
    }
    .col6 {
      width: 0.72rem;
    }
    .col7 {
      width: 0.72rem;
    }
    .col8 {
      width: 0.68rem;
    }
    .col9 {
      width: 1rem;
    }
    .col10 {
      width: 1.23rem;
    }
    .col11 {
      width: 1.24rem;
    }
    .col12 {
      width: 0.52rem;
    }
    .col13 {
      width: 0.68rem;
    }
    .list_header {
      width: 100%;
      height: 0.7rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
      border-bottom: 2px solid rgba(13, 26, 34, 0.5);
      span {
        font-size: 0.16rem;
        color: #899096;
        line-height: 0.2rem;
        height: 0.7rem;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
    }
    .list_content {
      height: 2.98rem;
      overflow: hidden;
      .listBox {
        transition: 0.5s;
        transform: translateY(0);
        .active {
          background-color: rgba(33, 34, 36, 0.5);
          span {
            color: #fafbff !important;
          }
        }
      }
    }
    .list-item {
      height: 0.7rem;
      cursor: pointer;
      width: 100%;
      display: flex;
      animation-duration: 1s;
      align-items: center;
      opacity: 1;
      justify-content: space-around;
      box-sizing: border-box;
      border-bottom: 2px solid rgba(13, 26, 34, 0.5);
      span {
        font-family: Agency;
        font-size: 0.24rem;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: inherit;
      }
      .col2 {
        font-size: 0.2rem;
        font-family: SSZH;
      }
      .col1, .col2, .col3, .col5, .col7, .col12, .col13 {
        color: #34b7b2;
      }
      .col4, .col6, .col9, .col10, .col11 {
        color: #4ab66a;
      }
      .col8 {
        color: #caae4d;
      }
    }
  }
}
</style>
