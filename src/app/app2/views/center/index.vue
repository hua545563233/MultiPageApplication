<template>
  <div class="app2-center">
    <div class='border-box'></div>
    <div class='tab'>
      <div @click='changeTab(1)' :class='[scene==1?"activeTab":""]'>分省页面</div>
      <div @click='changeTab(2)' :class='[scene==2?"activeTab":""]'>分场景页面</div>
    </div>
    <div class='content' v-if='scene===1'>
      <div class='leftTab' @click='chooseProvince()' v-show='!proChoose&&!cityChoose'></div>
      <div class='leftTab3' @click='chooseCity()' v-show='proChoose'></div>
      <div class='leftTab4' @click='backProvince()' v-show='cityChoose'></div>
      <!-- <div class='leftTab5' @click='chooseCity()' v-show='cityChoose'></div> -->
      <img class='map' src='../../../../assets/img/app2/M/map1.png' style="margin-top: -50px;" v-show='!proChoose'>
      <img class='map' src='../../../../assets/img/app2/M/map2.png' v-show='proChoose'>
      <img class='map' src='../../../../assets/img/app2/M/gy_map.png' v-show='cityChoose'>
      <div class='listBox'>
        <div class='title'>TOP10流量增幅省份</div>
        <div class='header'>
          <div>序号</div>
          <div>省份</div>
          <div>增幅</div>
          <div>同环比</div>
        </div>
        <div class='list'>
          <div v-for='(item,index) in list' :key='index'>
            <div :class='{"text-show":index==0||index==1||index==2}'>{{index+1}}</div>
            <div>{{item.name}}</div>
            <div>
              <countTo :startVal="0" :endVal="item.value1+Math.random()*20" :duration="3000"></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*5" :duration="3000" suffix='%'></countTo>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='content' v-if='scene===2'>
      <div class='leftTab2'></div>
      <img class='map' src='../../../../assets/img/app2/M/map4.png' @click='chooseMeet()' v-show='!meetChoose'>
      <img class='map' src='../../../../assets/img/app2/M/map3.png' @click='chooseMeet()' v-show='meetChoose'>
      <img class='chart' src='../../../../assets/img/app2/M/趋势图.png'>
    </div>
    <div class='business-scale'>
      <div class='box1'>
        <countTo :startVal="0" :endVal="val1" :duration="3000" separator=""></countTo>
        <countTo :startVal="0" :endVal="val2" :duration="3000" separator=""></countTo>
        <countTo :startVal="0" :endVal="val3" :duration="3000" separator=""></countTo>
      </div>
      <div class='box2'>
        <countTo :startVal="0" :endVal="val4" :duration="3000" suffix='%' :decimals="1"></countTo>
        <countTo :startVal="0" :endVal="val5" :duration="3000" suffix='%' :decimals="1"></countTo>
        <countTo :startVal="0" :endVal="100 - val4" :duration="3000" suffix='%' :decimals="1"></countTo>
        <countTo :startVal="0" :endVal="100 - val5" :duration="3000" suffix='%' :decimals="1"></countTo>
        <countTo :startVal="0" :endVal="val8" :duration="3000" suffix='%' :decimals="1"></countTo>
        <countTo :startVal="0" :endVal="val9" :duration="3000" suffix='%' :decimals="1"></countTo>
        <countTo :startVal="0" :endVal="100 - val8" :duration="3000" suffix='%' :decimals="1"></countTo>
        <countTo :startVal="0" :endVal="100 - val9" :duration="3000" suffix='%' :decimals="1"></countTo>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Center',
  props: ['region'],
  data () {
    return {
      scene: 1,
      proChoose: false,
      cityChoose: false,
      meetChoose: false,
      list: [
        { name: '贵州', value1: 767, value2: 5 },
        { name: '江苏', value1: 767, value2: 5 },
        { name: '上海', value1: 767, value2: 5 },
        { name: '北京', value1: 767, value2: 5 },
        { name: '深圳', value1: 767, value2: 5 },
        { name: '广东', value1: 767, value2: 5 },
        { name: '湖北', value1: 767, value2: 5 },
        { name: '福建', value1: 767, value2: 5 },
        { name: '四川', value1: 767, value2: 5 },
        { name: '湖南', value1: 767, value2: 5 }
      ],
      val1: 123,
      val2: 123,
      val3: 123,
      val4: 123,
      val5: 123,
      val6: 93,
      val7: 83,
      val8: 73,
      val9: 56,
      val10: 83,
      val11: 77
    }
  },
  watch: {
    region (val) {
      if (val === '贵州') {
        this.proChoose = true
      } else if (val === '中国') {
        this.cityChoose = false
      }
    }
  },
  mounted () {
    this.getValue()
  },
  methods: {
    changeTab (index) {
      this.scene = index
      this.getValue()
    },
    chooseProvince () {
      this.getValue()
      this.proChoose = !this.proChoose
    },
    chooseCity () {
      // this.getValue()
      this.proChoose = false
      this.cityChoose = true
    },
    backProvince () {
      this.cityChoose = false
      this.proChoose = true
    },
    chooseMeet () {
      this.meetChoose = !this.meetChoose
    },
    getValue () {
      this.val1 = this.getRandom(this.val1)
      this.val2 = this.getRandom(this.val2)
      this.val3 = this.getRandom(this.val3)
      this.val4 = 99 + Math.random()
      this.val5 = 99 + Math.random()
      this.val6 = Math.random()
      this.val7 = Math.random()
      this.val8 = 99 + Math.random()
      this.val9 = 99 + Math.random()
      this.val10 = Math.random()
      this.val11 = Math.random()
    },
    getRandom (value) {
      return Math.random() * 30 + 56
    }
  }
}
</script>

<style lang="scss">
.app2-center {
  position: absolute;
  left: 15.8rem;
  width: 100%;
  // transform: translateX(-50%);
  .border-box {
    position: absolute;
    top: 1.62rem;
    width: 16.4rem;
    height: 10.16rem;
    border: 1px solid #32316a;
    border-radius: 0.2rem;
  }
  .tab {
    z-index: 2;
    position: absolute;
    font-size: 0.2rem;
    width: 4.5rem;
    height: 0.75rem;
    font-family: "TiHei";
    display: flex;
    justify-content: space-around;
    left: 6rem;
    top: 2rem;
    color: #98929e;
    cursor: pointer;
    > div {
      width: 1.49rem;
      height: 0.47rem;
      line-height: 0.47rem;
      text-align: center;
    }
    .activeTab {
      text-shadow: 0 0 10px #615cf6, 0 0 20px #615cf6, 0 0 20px #615cf6,
        0 0 20px #615cf6, 0 0 20px #615cf6, 0 0 20px #615cf6, 0 0 20px #615cf6,
        0 0 20px #615cf6;
      color: #fff;
      background: url("../../../../assets/img/app2/M/切换.png") no-repeat;
    }
  }
  .content {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 10.18rem;
    margin-top: 1.62rem;
    .map {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      // left: -2.8rem;
    }
    .chart {
      position: absolute;
      right: 0;
    }
    .listBox {
      position: absolute;
      right: 0.4rem;
      top: 0.7rem;
      width: 2.8rem;
      height: 4.06rem;
      .title {
        text-align: center;
        height: 0.64rem;
        line-height: 0.64rem;
        font-size: 0.18rem;
        color: #fff;
        font-family: "TiHei";
      }
      .header {
        line-height: 0.7rem;
        height: 0.7rem;
        display: flex;
        justify-content: space-around;
        font-size: 0.16rem;
        color: #959499;
        border-top: 1px solid #808aae;
        > div {
          width: 25%;
          text-align: center;
        }
      }
      .list {
        height: 2.94rem;
        font-size: 0.16rem;
        color: #959499;
        border-top: 1px solid #808aae;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        border-bottom: 1px solid #808aae;
        > div {
          display: flex;
          justify-content: space-around;
          > div {
            width: 25%;
            text-align: center;
          }
          > div:nth-of-type(1) {
            color: #a7a6ac;
            font-family: "TiHei";
          }
          > div:nth-of-type(2) {
            color: #a7a6ac;
          }
          > div:nth-of-type(3),
          > div:nth-of-type(4) {
            color: #e0caf8;
          }
        }
      }
    }
    .leftTab {
      z-index: 2;
      cursor: pointer;
      position: absolute;
      left: 0.3rem;
      top: 0.5rem;
      width: 1.39rem;
      height: 6.31rem;
      background: url("../../../../assets/img/app2/M/切换-全国.png");
    }
    .leftTab2 {
      z-index: 2;
      cursor: pointer;
      position: absolute;
      left: 0.1rem;
      top: 0.2rem;
      width: 1.39rem;
      height: 8.22rem;
      background: url("../../../../assets/img/app2/M/TAB切换-春节保障.png");
    }
    .leftTab3 {
      z-index: 2;
      cursor: pointer;
      position: absolute;
      left: 0.3rem;
      top: 0.5rem;
      width: 1.39rem;
      height: 6.31rem;
      background: url("../../../../assets/img/app2/M/贵州下拉框.png");
      background-repeat: no-repeat;
    }
    .leftTab4 {
      z-index: 2;
      cursor: pointer;
      position: absolute;
      left: 0.3rem;
      top: 0.5rem;
      width: 1.39rem;
      height: 6.31rem;
      background: url("../../../../assets/img/app2/M/下拉框-贵阳.png");
      background-repeat: no-repeat;
    }
  }
  .business-scale {
    z-index: 99;
    position: absolute;
    left: 0.45rem;
    bottom: 0.6rem;
    width: 13.75rem;
    height: 1.45rem;
    background: url("../../../../assets/img/app2/M/业务规模.png");
    .box1 {
      position: absolute;
      top: 0.91rem;
      left: 1.93rem;
      display: flex;
      justify-content: space-between;
      width: 3.4rem;
      height: 0.64rem;
      color: #e2cbf7;
      font-size: 0.3rem;
    }
    .box2 {
      width: 7.54rem;
      height: 1.42rem;
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      color: #e2cbf7;
      font-size: 0.2rem;
      left: 704px;
      top: 38px;
      > span {
        width: 25%;
      }
    }
  }
}
</style>
