<template>
  <div class="app2-left">
    <div class='border-box'></div>
    <div class='top'>
      <div class='title text-show'>{{title}}</div>
      <div class='topTab'>
        <div @click='changeTab(1)' :class='["text-show",scene==1?"activeTab":""]'>CHBN四大市场业务量概览</div>
        <div @click='changeTab(2)' :class='["text-show",scene==2?"activeTab":""]'>漫游</div>
      </div>
    </div>
    <div class='content' v-show='scene==1'>
      <!-- <div class='leftTab'></div> -->
      <img class='map' style="top: -20px;left: -100px;" src='../../../../assets/img/app2/L/map1.png' @click='chooseUser()' v-show='!userChoose'>
      <img class='map map2' src='../../../../assets/img/app2/L/map2.png' @click='chooseUser()' v-show='userChoose'>
      <div class='visualBox' @mouseover='chooseUser()' @mouseout='cancelUser()'></div>
      <div class='slide1' @click='changeSlide(1)' v-if='slide'>
        <div class='indi1'>
          <div>
            <countTo :startVal="0" :endVal="val1" :duration="3000" separator=""></countTo>
            <countTo :startVal="0" :endVal="val2" :duration="3000" separator=""></countTo>
          </div>
          <div>
            <countTo :startVal="0" :endVal="val3" :duration="3000" suffix=''></countTo>
            <countTo :startVal="0" :endVal="val4" :duration="3000" suffix=''></countTo>
            <countTo :startVal="0" :endVal="val5" :duration="3000" suffix=''></countTo>
            <countTo :startVal="0" :endVal="val6" :duration="3000" suffix=''></countTo>
            <countTo :startVal="0" :endVal="val7" :duration="3000" suffix=''></countTo>
            <countTo :startVal="0" :endVal="val8" :duration="3000" suffix=''></countTo>
          </div>
        </div>
        <div class='indi2'>
          <countTo :startVal="0" :endVal="val1" :duration="3000" suffix='%'></countTo>
          <countTo :startVal="0" :endVal="val2" :duration="3000" suffix='%'></countTo>
        </div>
        <div class='indi3'>
          <div>
            <div>
              <countTo :startVal="0" :endVal="val12" :duration="3000" suffix=''></countTo>/<countTo :startVal="0"
                :endVal="val13 - 20" :duration="3000" suffix=''></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="val14" :duration="3000" suffix=''></countTo>/<countTo :startVal="0"
                :endVal="val15 - 20" :duration="3000" suffix=''></countTo>
            </div>
          </div>
          <div>
            <div>
              <countTo :startVal="0" :endVal="val16" :duration="3000" suffix=''></countTo>/<countTo :startVal="0"
                :endVal="val17 - 20" :duration="3000" suffix=''></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="val18" :duration="3000" suffix=''></countTo>/<countTo :startVal="0"
                :endVal="val19 - 20" :duration="3000" suffix=''></countTo>
            </div>
          </div>
        </div>
      </div>
      <div class='slide2' @click='changeSlide(2)' v-if='!slide'>
        <div class='indi1'>
          <countTo :startVal="0" :endVal="val3" :duration="3000" suffix=''></countTo>
          <countTo :startVal="0" :endVal="val4" :duration="3000" suffix=''></countTo>
          <countTo :startVal="0" :endVal="val5" :duration="3000" suffix=''></countTo>
          <countTo :startVal="0" :endVal="val6" :duration="3000" suffix=''></countTo>
          <countTo :startVal="0" :endVal="val7" :duration="3000" suffix=''></countTo>
          <countTo :startVal="0" :endVal="val8" :duration="3000" suffix=''></countTo>
        </div>
        <div class='indi2'>
          <div>
            <countTo :startVal="0" :endVal="val3" :duration="3000" suffix=''></countTo>
            <countTo :startVal="0" :endVal="val4" :duration="3000" suffix=''></countTo>
          </div>
          <div>
            <countTo :startVal="0" :endVal="val3" :duration="3000" suffix=''></countTo>
            <countTo :startVal="0" :endVal="val4" :duration="3000" suffix=''></countTo>
          </div>
        </div>
        <div class='indi3'>
          <div class="page2">
            <div>
              <countTo :startVal="0" :endVal="val12" :duration="3000" suffix=''></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="val14 - 20" :duration="3000" suffix=''></countTo>
            </div>
          </div>
          <div class="page2">
            <div>
              <countTo :startVal="0" :endVal="val16" :duration="3000" suffix=''></countTo>/<countTo :startVal="0"
                :endVal="val17 - 20" :duration="3000" suffix=''></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="val18" :duration="3000" suffix=''></countTo>/<countTo :startVal="0"
                :endVal="val19 - 20" :duration="3000" suffix=''></countTo>
            </div>
          </div>
        </div>
      </div>
      <img class='slide-dot' @click='changeSlide(1)' v-if='slide' src='../../../../assets/img/app2/L/1.png'>
      <img class='slide-dot' @click='changeSlide(2)' v-if='!slide' src='../../../../assets/img/app2/L/2.png'>
    </div>
    <div class='content' v-show='scene==2'>
      <div class='leftTab2'></div>
      <div class='centerTab'></div>
      <img class='map map_roam1' src='../../../../assets/img/app2/L/map3.png' v-show='!roamIn&&mapLevel==="中国"'>
      <img class='map map_roam2' src='../../../../assets/img/app2/L/map4.png' v-show='roamIn&&mapLevel==="中国"'>
      <div class='visualBox' @mouseover='chooseProvinceRoam()' @mouseout='backChinaRoam()' @click='goProvince()'
        v-show='mapLevel==="中国"'></div>
      <img class='map' src='../../../../assets/img/app2/L/gz_map.png' v-show='mapLevel==="贵州"'>
      <div class='listBox' v-show='!roamIn'>
        <div class='list'>
          <div v-for='(item,index) in list' :key='index'>
            <div :class='{"text-show":index==0||index==1||index==2}'>{{index+1}}</div>
            <div>{{item.name}}</div>
            <div>
              <countTo :startVal="0" :endVal="item.value1+Math.random()*20" :duration="3000"></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
            </div>
          </div>
        </div>
      </div>
      <div class='listBox2' v-show='roamIn'>
        <div class='list'>
          <div v-for='(item,index) in list2' :key='index'>
            <div :class='{"text-show":index==0||index==1||index==2}'>{{index+1}}</div>
            <div>{{item.name}}</div>
            <div>
              <countTo :startVal="0" :endVal="item.value1+Math.random()*20" :duration="3000"></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
            </div>
            <div>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
              <countTo :startVal="0" :endVal="item.value2+Math.random()*20" :duration="3000" suffix=''></countTo>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='filter'></div>
  </div>
</template>

<script>
/* eslint-disable */
import Swiper from 'swiper'

export default {
  name: 'Left',
  props: ['region'],
  data () {
    return {
      mapLevel: '中国',
      title: 'CHBN四大市场业务量概览',
      slide: true,
      scene: 1,
      userChoose: false,
      roamIn: false,
      val1: 0,
      val2: 0,
      val3: 0,
      val4: 0,
      val5: 0,
      val6: 0,
      val7: 0,
      val8: 0,
      val9: 0,
      val10: 0,
      val11: 0,
      val12: 0,
      val13: 0,
      val14: 0,
      val15: 0,
      val16: 0,
      val17: 0,
      val18: 0,
      val19: 0,
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
      list2: [{ name: '贵州-贵州', value1: 767, value2: 5 },
      { name: '江苏-贵州', value1: 767, value2: 5 },
      { name: '上海-贵州', value1: 767, value2: 5 },
      { name: '北京-贵州', value1: 767, value2: 5 },
      { name: '深圳-贵州', value1: 767, value2: 5 },
      { name: '广东-贵州', value1: 767, value2: 5 },
      { name: '湖北-贵州', value1: 767, value2: 5 },
      { name: '福建-贵州', value1: 767, value2: 5 },
      { name: '四川-贵州', value1: 767, value2: 5 },
      { name: '湖南-贵州', value1: 767, value2: 5 }
      ],
      option: {
        pagination: {
          el: '.app2L-pagination',
          clickable: true
        },
        autoplay: {
          delay: 15000
        },
        observer: true,
        observeParents: true
      }
    }
  },
  watch: {
    region (val) {
      this.mapLevel = val
    }
  },
  mounted () {
    console.log('slid1Item1', this.slid1Item1)
    this.initSwiper()
    this.getValue()
  },
  methods: {
    getValue () {
      this.val1 = this.getRandom(this.val1)
      this.val2 = this.getRandom(this.val2)
      this.val3 = this.getRandom(this.val3)
      this.val4 = this.getRandom(this.val4)
      this.val5 = this.getRandom(this.val5)
      this.val6 = this.getRandom(this.val6)
      this.val7 = this.getRandom(this.val7)
      this.val8 = this.getRandom(this.val8)
      this.val9 = this.getRandom(this.val9)
      this.val10 = this.getRandom(this.val10)
      this.val11 = this.getRandom(this.val11)
      this.val12 = this.getRandom(this.val12)
      this.val13 = this.getRandom(this.val13)
      this.val14 = this.getRandom(this.val14)
      this.val15 = this.getRandom(this.val15)
      this.val16 = this.getRandom(this.val16)
      this.val17 = this.getRandom(this.val17)
      this.val18 = this.getRandom(this.val18)
      this.val19 = this.getRandom(this.val19)
    },
    getRandom (value, diff) {
      return Math.random() * 20 + 54 + (diff || 0)
    },
    changeSlide (index) {
      console.log(index)
      this.slide = !this.slide
      this.getValue()
    },
    initSwiper () {
      this.swiper = new Swiper(this.$refs.swiper1, this.option)
    },
    changeTab (index) {
      this.scene = index
      this.getValue()
      if (index === 1) {
        this.title = 'CHBN四大市场业务量概览'
      } else {
        this.title = '漫游场景'
      }
    },
    chooseUser () {
      this.userChoose = true
    },
    cancelUser () {
      this.userChoose = false
    },
    chooseRoam () {
      this.roamIn = !this.roamIn
    },
    chooseProvinceRoam () {
      this.roamIn = true
    },
    backChinaRoam () {
      this.roamIn = false
    },
    goProvince () {
      this.mapLevel = '贵州'
      this.$emit('changeRegion', '贵州')
      this.list = [
        { name: '贵阳', value1: 76, value2: 5 },
        { name: '六盘水', value1: 76, value2: 5 },
        { name: '黔东南', value1: 76, value2: 5 },
        { name: '黔南', value1: 76, value2: 5 },
        { name: '黔西南', value1: 76, value2: 5 },
        { name: '遵义', value1: 76, value2: 5 },
        { name: '毕节', value1: 76, value2: 5 },
        { name: '安顺', value1: 76, value2: 5 },
        { name: '铜仁', value1: 76, value2: 5 }
        // { name: '嘉兴', value1: 76, value2: 5 }
      ]
    }
  }
}
</script>

<style lang="scss">
.app2-left {
  position: absolute;
  .border-box {
    position: absolute;
    top: 1.62rem;
    width: 15.15rem;
    height: 10.16rem;
    border: 1px solid #32316a;
    border-radius: 0.2rem;
  }
  .top {
    width: 100%;
    height: 0.72rem;
    margin-top: 0.92rem;
    display: flex;
    justify-content: space-between;
    .title {
      text-indent: 0.44rem;
      width: 6.74rem;
      height: 0.48rem;
      line-height: 0.48rem;
      font-size: 0.24rem;
      font-weight: bold;
      color: #fff;
      letter-spacing: 0.1rem;
      font-family: "TiHei";
      background: url("../../../../assets/img/app2/L/标题背景.png");
    }
    .topTab {
      cursor: pointer;
      height: 0.44rem;
      width: 4.3rem;
      color: #fff;
      font-size: 0.2rem;
      font-weight: bold;
      display: flex;
      justify-content: space-around;
      font-family: "TiHei";
      > div {
        opacity: 0.6;
        border-bottom: 2px solid #019cf9;
      }
      .activeTab {
        opacity: 1;
      }
    }
  }
  .content {
    width: 14.82rem;
    height: 10.18rem;
    position: relative;
    .map {
      position: absolute;
      left: 2px;
      top: 160px
      // cursor: pointer;
    }
    .map_roam1 {
      left: -100px;
      top: -1px;
    }
    .map2 {
      left: 0.07rem;
      top: 1.14rem;
    }
    .visualBox {
      cursor: pointer;
      z-index: 100;
      position: absolute;
      right: 745px;
      top: 700px;
      width: 100px;
      height: 100px;
      // border: 1px solid red;
    }
    .listBox {
      position: absolute;
      right: 0;
      top: 0.6rem;
      width: 4.27rem;
      height: 4.02rem;
      background: url("../../../../assets/img/app2/L/表.png");
      .list {
        margin-top: 1.08rem;
        height: 2.94rem;
        font-size: 0.16rem;
        color: #959499;
        border-top: 1px solid #808aae;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        > div {
          display: flex;
          justify-content: space-around;
          color: #c5c4ee;
          > div {
            width: 18%;
            text-align: center;
            display: flex;
            justify-content: space-around;
          }
          > div:nth-of-type(1) {
            width: 10%;
            color: #a7a6ac;
            font-family: "TiHei";
          }
          > div:nth-of-type(2) {
            width: 20%;
            color: #a7a6ac;
          }
        }
      }
    }
    .listBox2 {
      position: absolute;
      right: 0;
      top: 0.6rem;
      width: 4.27rem;
      height: 4.02rem;
      background: url("../../../../assets/img/app2/L/表.png");
      .list {
        margin-top: 1.08rem;
        height: 2.94rem;
        font-size: 0.16rem;
        color: #959499;
        border-top: 1px solid #808aae;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        > div {
          display: flex;
          justify-content: space-around;
          color: #cccdfb;
          > div {
            width: 18%;
            text-align: center;
            display: flex;
            justify-content: space-around;
          }
          > div:nth-of-type(1) {
            width: 10%;
            color: #a7a6ac;
            font-family: "TiHei";
          }
          > div:nth-of-type(2) {
            font-size: 0.14rem;
            width: 16%;
          }
        }
      }
    }
    .box {
      width: 3.2rem;
      height: 3.2rem;
      position: absolute;
      right: 0.1rem;
    }
    .box1 {
      top: 0.4rem;
    }
    .box2 {
      top: 0.4rem;
    }
    .box3 {
      top: 0.4rem;
    }
    .leftTab {
      cursor: pointer;
      position: absolute;
      top: 0.4rem;
      width: 3.1rem;
      height: 3.54rem;
      background: url("../../../../assets/img/app2/L/leftTab.png");
    }
    .leftTab2 {
      z-index: 3;
      cursor: pointer;
      position: absolute;
      top: 0.4rem;
      width: 1.4rem;
      height: 2.43rem;
      background: url("../../../../assets/img/app2/L/切换-省际.png");
    }
    .centerTab {
      z-index: 3;
      cursor: pointer;
      position: absolute;
      left: 6rem;
      top: 0.6rem;
      width: 1.98rem;
      height: 1.25rem;
      background: url("../../../../assets/img/app2/L/省际漫游统计.png");
    }
    .slide1 {
      z-index: 2;
      position: absolute;
      right: 0;
      top: 0.2rem;
      width: 3.18rem;
      height: 9.79rem;
      background: url("../../../../assets/img/app2/L/轮播1.png");
      .indi1 {
        position: absolute;
        top: 0.9rem;
        width: 2.76rem;
        height: 2.2rem;
        color: #e2cbf7;
        font-size: 0.3rem;
        display: flex;
        > div:nth-of-type(1) {
          width: 1rem;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: space-around;
        }
        > div:nth-of-type(2) {
          left: 39px;
          top: 26px;
          position: relative;
          font-size: 0.2rem;
          width: 2rem;
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;
          justify-content: space-around;
          span {
            width: 33%;
          }
        }
      }
      .indi2 {
        padding: 0 20px;
        position: absolute;
        left: 0.1rem;
        top: 4.2rem;
        width: 2.76rem;
        height: 1.9rem;
        color: #e2cbf7;
        font-size: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        box-sizing: border-box;
      }
      .indi3 {
        width: 2.94rem;
        height: 1.4rem;
        position: absolute;
        top: 8rem;
        color: #e5cffd;
        font-size: 0.3rem;
        > div {
          display: flex;
          justify-content: space-around;
          margin-bottom: 0.65rem;
          span:nth-of-type(2) {
            color: #be1c4b;
          }
        }
      }
    }
    .slide2 {
      z-index: 2;
      position: absolute;
      right: 0;
      top: 0.2rem;
      width: 3.18rem;
      height: 9.79rem;
      background: url("../../../../assets/img/app2/L/轮播2.png");
      .indi1 {
        position: absolute;
        left: 30px;
        top: 0.6rem;
        width: 3.26rem;
        height: 2.4rem;
        color: #e2cbf7;
        font-size: 0.3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        > span {
          width: 50%;
        }
      }
      .indi2 {
        position: absolute;
        left: 0.3rem;
        top: 4.2rem;
        width: 2.56rem;
        height: 1.9rem;
        color: #e2cbf7;
        font-size: 0.3rem;
        > div:nth-of-type(1) {
          display: flex;
          justify-content: space-between;
        }
        > div:nth-of-type(2) {
          position: relative;
          top: 0.68rem;
          left: 2.58rem;
          display: flex;
          flex-flow: column;
          justify-content: space-around;
        }
      }
      .indi3 {
        width: 3.34rem;
        height: 1.4rem;
        position: absolute;
        top: 7.4rem;
        color: #e5cffd;
        font-size: 0.3rem;
        > div {
          display: flex;
          justify-content: space-around;
          margin-bottom: 0.65rem;
          span:nth-of-type(2) {
            color: #be1c4b;
          }
        }
        > div:nth-of-type(1) {
          width: 3.91rem;
        }
      }
    }
    .slide-dot {
      z-index: 99;
      position: absolute;
      right: 0;
      top: 38px;
      cursor: pointer;
    }
  }
  .filter {
    width: 11.03rem;
    height: 6.35rem;
    background: url("../../../../assets/img/app2/L/filter.png");
    mix-blend-mode: overlay;
  }
}
</style>
