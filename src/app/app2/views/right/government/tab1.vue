<template>
  <div class="tab tab1">
    <div class="select">
      <div :class="{active: activeIndex1 === 0}" @click="activeIndex1 = 0">故障</div>
      <div :class="{active: activeIndex1 === 1}" @click="activeIndex1 = 1">重点用户</div>
    </div>
    <div class="tab-content">
      <div class="tab-container" :style="{transform: `translateX(-${activeIndex1 * 50}%)`}">
        <div class="page">
          <div class="tab1-name">动力配套告警</div>
          <div class="tab1-name">网络设备告警</div>
          <div class="tab1-name">网络质量告警</div>
          <div class="tab1-value">
            <countTo :startVal="0" :endVal="tab1Value1 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
          </div>
          <div class="tab1-value">
            <countTo :startVal="0" :endVal="tab1Value2 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
          </div>
          <div class="tab1-value">
            <countTo :startVal="0" :endVal="tab1Value3 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
          </div>
        </div>
        <div class="page">
          <div class="tab1-name">动力配套告警</div>
          <div class="tab1-name">网络设备告警</div>
          <div class="tab1-name">网络质量告警</div>
          <div class="tab1-value">
            <countTo :startVal="0" :endVal="tab2Value1 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
          </div>
          <div class="tab1-value">
            <countTo :startVal="0" :endVal="tab2Value2 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
          </div>
          <div class="tab1-value">
            <countTo :startVal="0" :endVal="tab2Value3 + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="''"></countTo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab1',
  data () {
    return {
      randomN: 0,
      activeIndex1: 0,
      tab1Value1: 26,
      tab1Value2: 21,
      tab1Value3: 18,
      tab2Value1: 22,
      tab2Value2: 21,
      tab2Value3: 16
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
  methods: {
    update () {
      this.randomN = Math.random()
    }
  }
}
</script>
