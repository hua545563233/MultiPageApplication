<template>
  <div id="app3_specific_center" >
    <div class="left-container" @click="clickHandler">
      <countTo class="item1" :class="active === 1 ? 'active' : ''" :startVal="0" :endVal="4" :duration="3000" separator=""></countTo>
      <countTo class="item2" :class="active === 2 ? 'active' : ''" :startVal="0" :endVal="2" :duration="3000" separator=""></countTo>
      <countTo class="item3" :class="active === 3 ? 'active' : ''" :startVal="0" :endVal="26" :duration="3000" separator=""></countTo>
      <countTo class="item4" :class="active === 4 ? 'active' : ''" :startVal="0" :endVal="5" :duration="3000" separator=""></countTo>
      <countTo class="item5" :class="active === 5 ? 'active' : ''" :startVal="0" :endVal="9" :duration="3000" separator=""></countTo>
    </div>
    <div class="left-container2" :class="'legend' + active">
    </div>
    <div class="bottom-item">
      <countTo class="item1" :startVal="0" :endVal="22003" :duration="3000" separator=""></countTo>
      <countTo class="item2" :startVal="0" :endVal="2184" :duration="3000" separator=""></countTo>
      <countTo class="item3" :startVal="0" :endVal="18851" :duration="3000" separator=""></countTo>
      <countTo class="item4" :startVal="0" :endVal="968" :duration="3000" separator=""></countTo>
      <countTo class="item5" :startVal="0" :endVal="7" :duration="3000" separator=""></countTo>
      <countTo class="item6" :startVal="0" :endVal="4" :duration="3000" separator=""></countTo>
      <countTo class="item7" :startVal="0" :endVal="3" :duration="3000" separator=""></countTo>
      <countTo class="item8" :startVal="0" :endVal="0" :duration="3000" separator=""></countTo>
      <countTo class="item9" :startVal="0" :endVal="25" :duration="3000" separator="" :decimals="0"></countTo>
      <countTo class="item10" :startVal="0" :endVal="25" :duration="3000" separator="" :decimals="0"></countTo>
    </div>
    <div class="main-content" @click="$router.push({ name: '重点区域' })">
      <div class="item1 animate__bounceInDown animate__animated" v-show="active === 1"></div>
      <div class="item2 animate__bounceInDown animate__animated" v-show="active === 2"></div>
      <div class="item3 animate__bounceInDown animate__animated" v-show="active === 3"></div>
      <div class="item4 animate__bounceInDown animate__animated" v-show="active === 4"></div>
      <div class="item5 animate__bounceInDown animate__animated" v-show="active === 5"></div>
      <div class="item animate__bounceInDown animate__animated"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {
      active: 1
    }
  },
  methods: {
    clickHandler (e) {
      console.log(e.target.className)
      if (e.target.className.indexOf('item') > -1) {
        const index = e.target.className.replace('item', '')
        this.active = parseInt(index)
      }
    }
  }
}
</script>

<style lang="scss">
#app3_specific_center {
  z-index: 1;
//   background: #eee;
  width: 24rem;
  height: 9.5rem;
  position: absolute;
  left: 12.06rem;
  bottom: 0.5rem;
  cursor: pointer;
  .left-container2 {
    width: 2.79rem;
    height: 3.52rem;
    position: absolute;
    left: 0;
    top: 2.83rem;
  }
  .legend1 {
    background-image: url('../../../../assets/img/app3/specific/legend1.png');
  }
  .legend2 {
    background-image: url('../../../../assets/img/app3/specific/legend2.png');
  }
  .legend3 {
    background-image: url('../../../../assets/img/app3/specific/legend3.png');
  }
  .legend4 {
    background-image: url('../../../../assets/img/app3/specific/legend4.png');
  }
  .legend5 {
    background-image: url('../../../../assets/img/app3/specific/legend5.png');
  }
  .left-container {
    position: absolute;
    left: 0.5rem;
    z-index: 9;
    top: 3.2rem;
    span.active {
      color: #c6ac56;
    }
    span {
      padding-left: 1.5rem;
      display: block;
      font-size: 0.4rem;
      height: 0.58rem;
      line-height: 0.58rem;
      color: #3293b6;
      font-family: Agency;
    }
  }
  .bottom-item {
    position: absolute;
    left: 0;
    bottom: 0.1rem;
    width: 100%;
    height: 1rem;
    span {
      display: block;
      font-size: 0.3rem;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #3293b6;
      font-family: Agency;
      position: absolute;
    }
    .item1 {
      left: 2rem;
      bottom: 0.06rem;
      color: #e5fcff;
    }
    .item2 {
      left: 4.4rem;
      bottom: 0.28rem;
      color: #42eaea;
    }
    .item3 {
      left: 6.45rem;
      bottom: 0.28rem;
      color: #42eaea;
    }
    .item4 {
      left: 8.5rem;
      bottom: 0.28rem;
      color: #42eaea;
    }
    .item5 {
      left: 10.8rem;
      bottom: 0.06rem;
      color: #e5fcff;
    }
    .item6 {
      left: 13.1rem;
      bottom: 0.28rem;
      color: #f43346;
    }
    .item7 {
      left: 15.2rem;
      bottom: 0.28rem;
      color: #f43346;
    }
    .item8 {
      left: 17.2rem;
      bottom: 0.28rem;
      color: #42eaea;
    }
    .item9 {
      left: 19.65rem;
      bottom: 0.28rem;
      color: #42eaea;
    }
    .item10 {
      left: 21.7rem;
      bottom: 0.28rem;
      color: #42eaea;
    }
  }
  .main-content {
    position: absolute;
    left: 0;
    top: 0;
    div {
      width: 16rem;
      height: 8rem;
      background-repeat: no-repeat;
    }
    .item {
      position: absolute;
      left: 3rem;
      top: 1rem;
      background-image: url('../../../../assets/img/app3/specific/item.jpg');
    }
    .item1 {
      position: absolute;
      background-image: url('../../../../assets/img/app3/specific/icon1.png');
      top: 0.8rem;
      left: 5.6rem;
      width: 10.12rem;
      height: 6.33rem;
    }
    .item2 {
      position: absolute;
      background-image: url('../../../../assets/img/app3/specific/icon2.png');
      top: 0.98rem;
      left: 5.5rem;
      width: 10.78rem;
      height: 4.72rem;
    }
    .item3 {
      position: absolute;
      background-image: url('../../../../assets/img/app3/specific/icon3.png');
      top: 0.5rem;
      left: 4.8rem;
      width: 10.78rem;
      height: 4.72rem;
    }
    .item4 {
      position: absolute;
      background-image: url('../../../../assets/img/app3/specific/icon4.png');
      top: 75px;
      left: 531px;
      width: 8.87rem;
      height: 4.73rem;
    }
    .item5 {
      position: absolute;
      background-image: url('../../../../assets/img/app3/specific/icon5.png');
      top: 1.8rem;
      left: 4.5rem;
      width: 9.82rem;
      height: 6.74rem;
    }
  }
}
</style>
