<template>
  <div class="tab-item">
    <div class="item-title text-show">{{ item2.name }}</div>
    <div class="tab-select">
      <div :class="{'text-show': tabIndex === 0, active: tabIndex === 0}" @click="tabIndex = 0">2G</div>
      <div :class="{'text-show': tabIndex === 1, active: tabIndex === 1}" @click="tabIndex = 1">4G</div>
      <div :class="{'text-show': tabIndex === 2, active: tabIndex === 2}" @click="tabIndex = 2">5G</div>
    </div>
    <div class="tab-content">
      <div class="tab-container" :style="{transform: `translateX(-${tabIndex * 33.3333}%)`}">
        <div class="tab-img-value">
          <div class="item-img">
            <div></div>
          </div>
          <div class="item-value">
            <countTo :startVal="0" :endVal="item2.tab1value1 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
            <countTo :startVal="0" :endVal="item2.tab1value2 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
            <countTo :startVal="0" :endVal="item2.tab1value3 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
          </div>
        </div>
        <div class="tab-img-value">
          <div class="item-img">
            <div></div>
          </div>
          <div class="item-value">
            <countTo :startVal="0" :endVal="item2.tab2value1 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
            <countTo :startVal="0" :endVal="item2.tab2value2 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
            <countTo :startVal="0" :endVal="item2.tab2value3 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
          </div>
        </div>
        <div class="tab-img-value">
          <div class="item-img">
            <div></div>
          </div>
          <div class="item-value">
            <countTo :startVal="0" :endVal="item2.tab3value1 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
            <countTo :startVal="0" :endVal="item2.tab3value2 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
            <countTo :startVal="0" :endVal="item2.tab3value3 + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      randomN: 0,
      tabIndex: 0,
      item2: {
        name: '手机上网',
        tab1value1: 1,
        tab1value2: 2,
        tab1value3: 1,
        tab2value1: 1,
        tab2value2: 2,
        tab2value3: 1,
        tab3value1: 1,
        tab3value2: 2,
        tab3value3: 1
      }
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
