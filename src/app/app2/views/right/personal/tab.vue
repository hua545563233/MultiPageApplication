<template>
  <div class="tab">
    <div class="next" @click="next"></div>
    <div class="pre" @click="pre"></div>
    <div class="container" :style="{transform: `translateX(-${slide2tabActive * 33.3333}%)`}">
      <div class="page">
        <div class="title">微信</div>
        <div class="list">
          <div
            v-for="(item, index) in slide2List2"
            :key="`page1-${index}`"
            class="li"
          >
            <div class="cell">{{ item.col1 }}</div>
            <div class="cell">
              <countTo :startVal="0" :endVal="item.col2 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <div class="title">QQ</div>
        <div class="list">
          <div
            v-for="(item, index) in slide2List2"
            :key="`page2-${index}`"
            class="li"
          >
            <div class="cell">{{ item.col1 }}</div>
            <div class="cell">
              <countTo :startVal="0" :endVal="item.col2 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <div class="title">爱奇艺</div>
        <div class="list">
          <div
            v-for="(item, index) in slide2List2"
            :key="`page3-${index}`"
            class="li"
          >
            <div class="cell">{{ item.col1 }}</div>
            <div class="cell">
              <countTo :startVal="0" :endVal="item.col2 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="''"></countTo>
              <span class="unit">{{ item.unit }}</span>
            </div>
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
      slide2tabActive: 0,
      slide2List2: [
        {
          col1: '业务本网内容满足率',
          col2: 96.2,
          unit: '%'
        },
        {
          col1: '业务本身内容满足率',
          col2: 97.2,
          unit: '%'
        },
        {
          col1: '业务总流量',
          col2: 278,
          unit: 'GB'
        },
        {
          col1: '业务首包时延',
          col2: 12,
          unit: 'ms'
        },
        {
          col1: '业务HTTP成功率',
          col2: 97.2,
          unit: '%'
        }
      ]
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
    next () {
      this.slide2tabActive += 1
      this.slide2tabActive = this.slide2tabActive >= 2 ? 2 : this.slide2tabActive
    },
    pre () {
      this.slide2tabActive -= 1
      this.slide2tabActive = this.slide2tabActive < 0 ? 0 : this.slide2tabActive
    },
    update () {
      this.randomN = Math.random()
    }
  }
}
</script>
