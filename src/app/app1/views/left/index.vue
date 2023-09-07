<template>
  <div class="app1-left">
    <sys-time class="left-time"></sys-time>
    <div v-if="mapLevel !== '中国'&&regionName!=='中国'&&userLevel==='中国'" class="province-name">{{ mapLevel }}</div>
    <Item1 :count="count" />
    <Item2 :count="count" />
    <Item3 :count="count" />
    <Item4 :count="count" />
  </div>
</template>

<script>
import Item1 from './item1'
import Item2 from './item2'
import Item3 from './item3'
import Item4 from './item4'
import sysTime from '../../../../common/vue/sysTime'

export default {
  name: 'Left',
  computed: {
    regionName () {
      return this.$root.regionName
    },
    count () {
      return this.$root.TIME_COUNT
    },
    mapLevel () {
      return this.$root.mapLevel
    },
    userLevel () {
      return this.$root.userLevel
    }
  },
  watch: {
    regionName (v) {
      // console.log(v, 'regionName')
    },
    mapLevel (v) {
      // console.log(v, 'mapLevel')
    }
  },
  components: {
    Item1,
    Item2,
    Item3,
    Item4,
    sysTime
  },
  mounted () {
    // console.log('regionName', this.regionName, this.mapLevel)
  }
}
</script>

<style lang="scss">
.app1-left {
  position: absolute;
  top: 0;
  left: 0;
  .left-time {
    position: absolute;
    top: 0.38rem;
    left: 0.38rem;
  }
  .province-name {
    position: absolute;
    top: 0;
    left: 3.25rem;
    // width: 1.8rem;
    height: 0.8rem;
    padding-top: 0.23rem;
    padding-left: 0.8rem;
    background: url("../../../../assets/img/app1/adress.png") no-repeat;
    background-position: 0.5rem 0.27rem;
    border-bottom: 0.02rem solid #485862;
    box-sizing: border-box;
    text-align: right;
    font-size: 0.3rem;
    color: #31ccf6;
    letter-spacing: 0.03rem;
  }
  .item-title,
  .chart-title {
    letter-spacing: 0.03rem;
  }
}
</style>
