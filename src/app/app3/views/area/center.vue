<template>
  <div id="app3_area_center">
    <countTo :startVal="0" :endVal="2184" separator="" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="18851" separator="" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="968" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="4" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="3" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="25" :decimals="0" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="25" :decimals="0" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="25" :decimals="0" :duration="3000"></countTo>
  </div>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  #app3_area_center {
    position: absolute;
    left: 13.84rem;
    top: 2.32rem;
    cursor: pointer;
    width: 20.34rem;
    height: 8.1rem;
    >span {
      position: absolute;
      top: calc(100% + 0.22rem);
      font-size: 0.3rem;
      font-family: Agency;
      color: #47e7e7;
      &:nth-child(1) {
        left: 1.66rem;
      }
      &:nth-child(2) {
        left: 3.76rem;
      }
      &:nth-child(3) {
        left: 5.86rem;
      }
      &:nth-child(4) {
        left: 8.04rem;
        color: #fd3e43;
      }
      &:nth-child(5) {
        left: 10.22rem;
        color: #fd3e43;
      }
      &:nth-child(6) {
        left: 12.4rem;
      }
      &:nth-child(7) {
        left: 14.52rem;
      }
      &:nth-child(8) {
        left: 16.76rem;
      }
      &:nth-child(9) {
        left: 18.80rem;
        color: #ffd45d;
      }
    }
  }
</style>
