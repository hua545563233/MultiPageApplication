<template>
  <div class="app1-left-item2">
    <div class="subtitle">{{ title }}</div>
    <div class="list">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="item"
      >
        <div class="item-title">{{ item.name }}</div>
        <div class="item-num">
          <countTo :startVal="0" :endVal="item.value + data" :duration="3000" :decimals="item.decimals" separator=""></countTo>
          <span>{{ item.unit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item2',
  data () {
    return {
      data: 0,
      title: '家宽业务量',
      list: [
        {
          name: 'BRAS-MB流速',
          value: 21,
          unit: 'Mbit/s',
          decimals: 1
        },
        {
          name: 'IPTV流速',
          value: 75,
          unit: 'Mbit/s',
          decimals: 1
        },
        {
          name: '内容网络总容量',
          value: 39.3,
          unit: 'Tbps',
          decimals: 1
        },
        {
          name: '内容网络总流量',
          value: 14,
          unit: 'Tbps',
          decimals: 1
        },
        {
          name: '频道用户数',
          value: 2.8,
          unit: '万',
          decimals: 1
        }
      ]
    }
  },
  computed: {
    regionName () {
      return this.$root.regionName
    },
    mapLevel () {
      return this.$root.mapLevel
    },
    count () {
      return this.$root.TIME_COUNT
    }
  },
  watch: {
    regionName (val) {
      // console.log('regionName', val)
      this.switchData()
    },
    mapLevel (val) {
      this.switchData()
      // console.log('mapLevel', val)
    },
    count (v) {
      this.switchData(v)
    }
  },
  methods: {
    switchData () {
      let list = this.list
      list[0].value = 21 + Math.random() * 50
      list[1].value = 60 + Math.random() * 50
      if (this.mapLevel === '中国' && this.regionName === '中国') {
        list[2].value = 28 + Math.random() * 30
        list[3].value = 15 + Math.random() * 30
        list[4].value = 3.8 + Math.random() * 10
      } else if (!this.regionName.includes('市')) {
        list[2].value = list[2].value / 4
        list[3].value = list[3].value / 4
        list[4].value = list[4].value / 4
      } else if (this.regionName.includes('市')) {
        list[2].value = list[2].value / 8
        list[3].value = list[3].value / 8
        list[4].value = list[4].value / 8
      }
      this.list = list
    }
    // updateData (count) {
    //   this.data = count % 2
    // }
  }
}
</script>

<style lang="scss">
.app1-left-item2 {
  position: absolute;
  top: 5.8rem;
  left: 0.1rem;
  width: 3.94rem;
  height: 5.7rem;
  .subtitle {
    margin-bottom: 0.42rem;
    text-align: left!important;
    padding-left: 0.27rem;
  }
  .list {
    height: 4.83rem;
    background: url("../../../../../assets/img/app1/left-bottom/01.png") no-repeat;
    background-size: 100% 100%;
    .item {
      height: 0.75rem;
      padding-left: 0.4rem;
      margin-bottom: 0.26rem;
      .item-title {
        height: 0.15rem;
        line-height: 0.15rem;
        font-size: 0.2rem;
        color: #f0fdff;
      }
      .item-num {
        display: flex;
        height: 0.55rem;
        line-height: 0.6rem;
        span {
          display: inline-block;
          text-align: center;
        }
        span:first-child {
          flex: 1;
          font-size: 0.33rem;
          color: #31ccf6;
          letter-spacing: 0.1rem;
          text-align: right;
        }
        span:last-child {
          width: 1rem;
          line-height: 0.63rem;
          font-size: 0.16rem;
          color: #5e839f;
          font-weight: 700;
          margin-left: 0.05rem;
        }
      }
    }
  }
}
</style>
