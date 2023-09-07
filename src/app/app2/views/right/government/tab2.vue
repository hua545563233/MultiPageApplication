<template>
  <div class="tab tab2">
    <div class="select">
      <div :class="{active: activeIndex2 === 0}" @click="activeIndex2 = 0">性能指标</div>
      <div :class="{active: activeIndex2 === 1}" @click="activeIndex2 = 1">出口宽带</div>
    </div>
    <div class="tab-content">
      <div class="tab-container" :style="{transform: `translateX(-${activeIndex2 * 50}%)`}">
        <div class="page"></div>
        <div class="page"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab2',
  data () {
    return {
      randomN: 0,
      activeIndex2: 0
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
