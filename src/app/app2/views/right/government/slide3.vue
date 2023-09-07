<template>
  <div class="government-slide3">
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value1" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value2 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value3 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value4 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value5 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value6 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value7 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value8 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value9 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value10 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value11 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
    <div class="slide3-value">
      <countTo :startVal="0" :endVal="value12 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide3',
  data () {
    return {
      randomN: 0,
      value1: 157.1,
      value2: 97.6,
      value3: 182.3,
      value4: 92.2,
      value5: 781,
      value6: 97,
      value7: 128,
      value8: 91,
      value9: 167,
      value10: 18,
      value11: 178.2,
      value12: 97.2
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
  .government-slide3 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../../../../../assets/img/app2/right/government-slide3-bg.png");
    background-repeat: no-repeat;
    background-size: 4.7rem 3.24rem;
    background-position: 0.38rem 0.78rem;
    .slide3-value {
      position: absolute;
      width: 1rem;
      height: 0.22rem;
      line-height: 0.22rem;
      font-size: 0.22rem;
      letter-spacing: 0.03rem;
      color: #d2d5fe;
    }
    .slide3-value:nth-child(1),
    .slide3-value:nth-child(5),
    .slide3-value:nth-child(9) {
      left: 0.42rem;
    }
    .slide3-value:nth-child(2),
    .slide3-value:nth-child(6),
    .slide3-value:nth-child(10) {
      left: 1.6rem;
    }
    .slide3-value:nth-child(3),
    .slide3-value:nth-child(7),
    .slide3-value:nth-child(11) {
      left: 2.75rem;
    }
    .slide3-value:nth-child(4),
    .slide3-value:nth-child(8),
    .slide3-value:nth-child(12) {
      left: 3.9rem;
    }

    .slide3-value:nth-child(1),
    .slide3-value:nth-child(2),
    .slide3-value:nth-child(3),
    .slide3-value:nth-child(4) {
      top: 1.25rem;
    }
    .slide3-value:nth-child(5),
    .slide3-value:nth-child(6),
    .slide3-value:nth-child(7),
    .slide3-value:nth-child(8) {
      top: 2.44rem;
    }
    .slide3-value:nth-child(9),
    .slide3-value:nth-child(10),
    .slide3-value:nth-child(11),
    .slide3-value:nth-child(12) {
      top: 3.53rem;
    }
  }
}
</style>
