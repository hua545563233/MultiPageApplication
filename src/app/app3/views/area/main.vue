<template>
  <div id="app3_area" class="app3_page animate__animated animate__fadeIn" @click="clickHandler">
    <div :class="['appBox', {'blur': popup}]">
      <Left />
      <Center />
      <Right />
      <div class="cancelBtn" @click.self="$router.push({ name: '首页' })">
        <div class="subBtn" @click.stop="$router.push({ name: '专题' })"></div>
      </div>
    </div>
    <List @toggle="toggle" />
    <div class="listPopup" v-if="popup">
      <div class="animate__animated animate__zoomIn">
        <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
        <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
        <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000" :decimals="2" suffix="%"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000" :decimals="2" suffix="%"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000" :decimals="2" suffix="%"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000" :decimals="2"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000" :decimals="2"></countTo>
      </div>
    </div>
  </div>
</template>
<script>
import Left from './left'
import Center from './center'
import Right from './right'
import List from './list'
export default {
  name: 'keyArea',
  data () {
    return {
      popup: false
    }
  },
  methods: {
    toggle (index) {
      this.popup = index >= 0
    },
    clickHandler (e) {
      if (e.target.className === 'listPopup') {
        this.popup = false
        window.bus.$emit('clear')
      }
    }
  },
  components: {
    Left,
    Center,
    Right,
    List
  }
}
</script>

<style lang="scss">
#app3_area {
  .appBox {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url('../../../../assets/img/app3/keyArea/bg.jpg');
    background-size: 100% 100%;
    overflow: hidden;
    .cancelBtn .subBtn{
      background-image: url('../../../../assets/img/app3/cancel2.jpg');
    }
  }
  .listPopup {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .8);
    >div {
      width: 20.4rem;
      height: 10.8rem;
      position: absolute;
      animation-duration: 0.5s;
      top: 50%;
      left: 50%;
      margin-top: -5.4rem;
      margin-left: -10.2rem;
      background-image: url('../../../../assets/img/app3/keyArea/popup.png');
      span {
        font-family: Agency;
        position: absolute;
        &:nth-child(1) {
          left: 5.84rem;
          top: 5.7rem;
          color: #e6e7eb;
          font-size: 0.36rem;
        }
        &:nth-child(2) {
          left: 5.3rem;
          top: 6.3rem;
          color: #3ee4e4;
          font-size: 0.24rem;
        }
        &:nth-child(3) {
          left: 7.3rem;
          top: 6.3rem;
          color: #3ee4e4;
          font-size: 0.24rem;
        }
        &:nth-child(4) {
          left: 10.64rem;
          top: 5.7rem;
          color: #e6e7eb;
          font-size: 0.36rem;
        }
        &:nth-child(5) {
          left: 10.08rem;
          top: 6.3rem;
          color: #3ee4e4;
          font-size: 0.24rem;
        }
        &:nth-child(6) {
          left: 12.20rem;
          top: 6.3rem;
          color: #3ee4e4;
          font-size: 0.24rem;
        }
        &:nth-child(7) {
          left: 14.8rem;
          top: 5.46rem;
          color: #40bdeb;
          font-size: 0.5rem;
        }
        &:nth-child(8) {
          left: 17.94rem;
          top: 5.46rem;
          color: #41e0e6;
          font-size: 0.5rem;
        }
      }
    }
  }
}
</style>
