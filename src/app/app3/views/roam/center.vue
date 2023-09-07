<template>
  <div id="earth">
    <div :class="['earth-btn', {'active-btn': tabIndex === 0}]" @click="tabIndex=0"></div>
    <div :class="['earth-btn', {'active-btn': tabIndex === 1}]" @click="tabIndex=1"></div>
    <div class="numBg bg1"></div>
    <div class="numBg bg2"></div>
    <countTo :startVal="0" :endVal="318824" :duration="3000" separator="" class="num"></countTo>
    <countTo :startVal="0" :endVal="38462" :duration="3000" separator="" class="num"></countTo>
    <div v-if="!tabIndex">
      <div class="light1"></div>
      <div class="light2"></div>
      <div class="light3"></div>
    </div>
    <div v-if="tabIndex">
      <div class="light1-2"></div>
      <div class="light2-2"></div>
      <div class="light3-2"></div>
    </div>
    <video src="../../../../assets/img/app3/roam/gj.mp4" v-if="!tabIndex" id="video1" autoplay loop></video>
    <video src="../../../../assets/img/app3/roam/gn.mp4" v-else id="video2" autoplay loop></video>
    <div class="title"></div>
  </div>
</template>

<script>
export default {
  name: 'earth',
  data () {
    return {
      tabIndex: 0
    }
  }
}
</script>

<style lang="scss">
  #earth {
    position: absolute;
    left: 13.21rem;
    top: 0;
    width: 22.44rem;
    height: 100%;
    overflow: hidden;
    .earth-btn {
      width: 1.49rem;
      height: 1.31rem;
      position: absolute;
      left: 0.4rem;
      cursor: pointer;
      z-index: 9;
      &:nth-of-type(1) {
        top: 7.47rem;
        background-image: url('../../../../assets/img/app3/roam/gj.jpg');
      }
      &:nth-of-type(2) {
        top: 9.47rem;
        background-image: url('../../../../assets/img/app3/roam/gn.jpg');
      }
    }
    .active-btn {
      &:nth-of-type(1) {
        background-image: url('../../../../assets/img/app3/roam/gj_active.jpg');
      }
      &:nth-of-type(2) {
        background-image: url('../../../../assets/img/app3/roam/gn_active.jpg');
      }
    }
    .num {
      position: absolute;
      right: 0.82rem;
      font-family: Agency;
      font-size: 0.44rem;
      color: #43ebec;
      letter-spacing: 0.31rem;
      margin-right: -0.24rem;
      display: inline-block;
      z-index: 9;
      text-align: right;
      &:nth-of-type(1) {
        top: 3.02rem;
        margin-right: -0.2rem;
      }
      &:nth-of-type(2) {
        top: 5.11rem;
      }
    }
    .numBg {
      width: 3.62rem;
      height: 1.2rem;
      position: absolute;
      right: 0.62rem;
      z-index: 8;
    }
    .bg1 {
      top: 2.53rem;
      background-image: url('../../../../assets/img/app3/roam/4.png');
    }
    .bg2 {
      top: 4.62rem;
      background-image: url('../../../../assets/img/app3/roam/4-2.png');
    }
    .light1 {
      width: 15.92rem;
      height: 15.92rem;
      position: absolute;
      left: 2.91rem;
      top: -0.97rem;
      background-image: url('../../../../assets/img/app3/roam/l1.jpg');
      opacity: 0.4;
      animation: opa 30s linear infinite;
    }
    .light2 {
      width: 12.76rem;
      height: 12.34rem;
      position: absolute;
      left: 4.49rem;
      top: 0.72rem;
      background-image: url('../../../../assets/img/app3/roam/l2.jpg');
      animation: light 30s linear infinite;
    }
    .light3 {
      width: 12.2rem;
      height: 12.2rem;
      position: absolute;
      left: 4.77rem;
      top: 0.77rem;
      background-image: url('../../../../assets/img/app3/roam/l3.jpg');
      animation: light 30s reverse linear infinite;
    }
    .light1-2 {
      width: 28.98rem;
      height: 28.98rem;
      position: absolute;
      left: -3.69rem;
      top: -8.22rem;
      background-image: url('../../../../assets/img/app3/roam/l1_2.jpg');
      opacity: 0.4;
      animation: opa 30s linear infinite;
    }
    .light2-2 {
      width: 28.98rem;
      height: 28.98rem;
      position: absolute;
      left: -3.69rem;
      top: -8.22rem;
      background-image: url('../../../../assets/img/app3/roam/l2_2.jpg');
      animation: light 30s linear infinite;
    }
    .light3-2 {
      width: 28.98rem;
      height: 28.98rem;
      position: absolute;
      left: -3.69rem;
      top: -8.22rem;
      background-image: url('../../../../assets/img/app3/roam/l3_2.jpg');
      animation: light 30s reverse linear infinite;
    }
    #video1 {
      width: 24.07rem;
      height: 17.99rem;
      position: absolute;
      top: -1.95rem;
      left: -0.96rem;
      z-index: -1;
      mix-blend-mode: screen;
    }
    #video2 {
      width: 21.7rem;
      height: 19.13rem;
      position: absolute;
      top: -3.5rem;
      left: -01.69rem;
      z-index: -1;
      mix-blend-mode: screen;
    }
    .title {
      width: 23.2rem;
      height: 12rem;
      position: absolute;
      top: 0;
      left: -0.81rem;
      background-image: url('../../../../assets/img/app3/roam/3.png');
    }
  }
  @keyframes opa {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.4;
    }
  }
  @keyframes light {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
