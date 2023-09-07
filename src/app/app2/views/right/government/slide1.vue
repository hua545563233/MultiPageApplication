<template>
  <div class="government-slide1">
    <div class="slide1-value">
      <countTo :startVal="0" :endVal="value1 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value special">
      <countTo :startVal="0" :endVal="value2 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value">
      <countTo :startVal="0" :endVal="value3 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value special">
      <countTo :startVal="0" :endVal="value4 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value">
      <countTo :startVal="0" :endVal="value5 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value special">
      <countTo :startVal="0" :endVal="value6 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value">
      <countTo :startVal="0" :endVal="value7 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value special">
      <countTo :startVal="0" :endVal="value8 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value">
      <countTo :startVal="0" :endVal="value9 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value special">
      <countTo :startVal="0" :endVal="value10 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value">
      <countTo :startVal="0" :endVal="value11 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value special">
      <countTo :startVal="0" :endVal="value12 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value special">
      <countTo :startVal="0" :endVal="value13 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value">
      <countTo :startVal="0" :endVal="value14 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value">
      <countTo :startVal="0" :endVal="value15 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value">
      <countTo :startVal="0" :endVal="value16 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-value special">
      <countTo :startVal="0" :endVal="value17 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide1-line line1"></div>
    <div class="slide1-line line2"></div>
    <div class="slide1-line line3"></div>
    <div class="slide1-line line4"></div>
    <div class="slide1-line line5"></div>
    <div class="slide1-line line6"></div>
  </div>
</template>

<script>
export default {
  name: 'Slide1',
  data () {
    return {
      randomN: 0,
      value1: 96,
      value2: 24,
      value3: 81,
      value4: 22,
      value5: 89,
      value6: 20,
      value7: 84,
      value8: 4,
      value9: 88,
      value10: 24,
      value11: 78,
      value12: 2,
      value13: 89,
      value14: 12,
      value15: 16,
      value16: 96,
      value17: 26
    }
  },
  computed: {
    count () {
      return this.$root.TIME_COUNT
    }
  },
  watch: {
    count () {
      this.update()
    }
  },
  mounted () {
    this.update()
  },
  methods: {
    update () {
      this.randomN = Math.random()
    }
  }
}
</script>

<style lang="scss">
.app2-left-government {
  .government-slide1 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../../../../../assets/img/app2/right/government-slide1-bg.png");
    background-repeat: no-repeat;
    background-size: 5.19rem 3.59rem;
    background-position: 0.2rem 0.5rem;
    .slide1-value {
      position: absolute;
      height: 0.25rem;
      line-height: 0.25rem;
      font-size: 0.25rem;
      color: #beeffe;
      letter-spacing: 0.02rem;
    }
    .slide1-value:nth-child(14),
    .slide1-value:nth-child(15),
    .slide1-value:nth-child(16),
    .slide1-value:nth-child(17) {
      font-size: 0.2rem;
    }
    .special {
      color: #a81e52;
    }
    .slide1-value:nth-child(1),
    .slide1-value:nth-child(2),
    .slide1-value:nth-child(3),
    .slide1-value:nth-child(4),
    .slide1-value:nth-child(5),
    .slide1-value:nth-child(6),
    .slide1-value:nth-child(7),
    .slide1-value:nth-child(8) {
      top: 2rem;
    }
    .slide1-value:nth-child(9),
    .slide1-value:nth-child(10),
    .slide1-value:nth-child(11),
    .slide1-value:nth-child(12) {
      top: 3.3rem;
    }
    .slide1-value:nth-child(13) {
      top: 3.45rem;
    }
    .slide1-value:nth-child(14),
    .slide1-value:nth-child(15) {
      top: 2.92rem;
    }
    .slide1-value:nth-child(16),
    .slide1-value:nth-child(17) {
      top: 3.56rem;
    }

    .slide1-value:nth-child(1) {
      left: 0.72rem;
    }
    .slide1-value:nth-child(2) {
      left: 1.35rem;
    }
    .slide1-value:nth-child(3) {
      left: 2.04rem;
    }
    .slide1-value:nth-child(4) {
      left: 2.7rem;
    }
    .slide1-value:nth-child(5),
    .slide1-value:nth-child(9) {
      left: 3.37rem;
    }
    .slide1-value:nth-child(6),
    .slide1-value:nth-child(10) {
      left: 4rem;
    }
    .slide1-value:nth-child(7),
    .slide1-value:nth-child(11) {
      left: 4.68rem;
    }
    .slide1-value:nth-child(8),
    .slide1-value:nth-child(12) {
      left: 5.33rem;
    }
    .slide1-value:nth-child(13) {
      left: 0.45rem;
    }
    .slide1-value:nth-child(14),
    .slide1-value:nth-child(16) {
      left: 1.48rem;
    }
    .slide1-value:nth-child(15),
    .slide1-value:nth-child(17) {
      left: 2.43rem;
    }
    .slide1-line {
      position: absolute;
      width: 0.02rem;
      height: 0.25rem;
      background: #bdf0ff;
      transform: rotate(15deg);
    }
    .line1,
    .line2,
    .line3,
    .line4 {
      top: 2rem;
    }
    .line5,
    .line6 {
      top: 3.3rem;
    }
    .line1 {
      left: 1.2rem;
    }
    .line2 {
      left: 2.56rem;
    }
    .line3,
    .line5 {
      left: 3.85rem;
    }
    .line4,
    .line6 {
      left: 5.2rem;
    }
  }
}
</style>
