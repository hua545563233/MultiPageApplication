<template>
  <div id="app3_roam" class="app3_page animate__animated animate__fadeIn">
    <Left />
    <Center />
    <Right />
    <div class="cancelBtn" @click.self="$router.push({ name: '首页' })">
      <div class="subBtn" @click.stop="$router.push({ name: '重点区域' })"></div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import Left from './left'
import Right from './right'
import Center from './center'
export default {
  name: 'home',
  data () {
    return {
      popup: false,
      swiperOption: {
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    toggle (flag) {
      this.popup = flag
    }
  },
  components: {
    Left,
    Right,
    Center
  }
}
</script>

<style lang="scss">
  #app3_roam {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url('../../../../assets/img/app3/roam/roam_bg.jpg');
    background-size: 100% 100%;
    overflow: hidden;
    .cancelBtn .subBtn{
      background-image: url('../../../../assets/img/app3/cancel3.jpg');
    }
    .line {
      width: 47.64rem;
      height: 0.16rem;
      position: absolute;
      bottom: 0;
      left: 0.18rem;
      background-image: url('../../../../assets/img/app3/roam/line.png');
      z-index: 999;
    }
  }
</style>
