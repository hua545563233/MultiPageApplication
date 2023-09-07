<template>
  <div class="app2-left-malfunction">
    <div class="subject text-show">故障</div>
    <div class="list">
      <div
        v-for="(item, index) in list"
        :key="index"
        :class="[`item${ index + 1 }`]"
        class="item"
      >
        <div>
          <div></div>
        </div>
        <div>{{ item.name }}</div>
        <div>
          <countTo :startVal="0" :endVal="item.value + randomN + Math.random()" :duration="3000" :decimals="0" separator=""></countTo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Malfunction',
  data () {
    return {
      randomN: 0,
      list: [
        {
          name: '网络设备告警',
          value: 4
        },
        {
          name: '重大网络故障',
          value: 0
        },
        {
          name: '其他类型重大故障',
          value: 1
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
.app2-left-malfunction {
  position: absolute;
  top: 9.7rem;
  left: 6rem;
  width: 2.71rem;
  height: 2.18rem;
  .subject {
    top: 0.1rem!important;
    text-indent: 0.36rem;
  }
  .list {
    position: absolute;
    top: 0.74rem;
    left: 0.3rem;
    width: 2.1rem;
    height: 1.27rem;
    .item {
      display: flex;
      align-items: center;
      height: 0.42rem;
      >div:nth-child(1) {
        position: relative;
        width: 0.42rem;
        height: 0.42rem;
        div {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 0.68rem;
          height: 0.68rem;
          background-size: 0.68rem 0.68rem;
          background-position: -0.1rem -0.1rem;
        }
      }
      >div:nth-child(2) {
        width: 1.27rem;
        height: 0.15rem;
        line-height: 0.15rem;
        font-size: 0.15rem;
        color: #f1ced4;
      }
      >div:nth-child(3) {
        width: 0.37rem;
        height: 0.24rem;
        line-height: 0.20rem;
        background: rgba($color: #d85158, $alpha: 0.6);
        text-align: center;
        font-size: 0.18rem;
        color: #fddae0;
        box-sizing: border-box;
        border: 1px solid #d85158;
      }
    }
    .item1 {
      >div:nth-child(1) {
        div {
          background: url("../../../../../assets/img/app2/right/Light2.png") no-repeat;
        }
      }
    }
    .item2 {
      >div:nth-child(1) {
        div {
          background: url("../../../../../assets/img/app2/right/Light1.png") no-repeat;
        }
      }
      >div:nth-child(2) {
        color: #abcaf9;
      }
      >div:nth-child(3) {
        background: rgba($color: #7c84a8, $alpha: 0.6);
        border: 1px solid #7c84a8;
      }
    }
    .item3 {
      >div:nth-child(1) {
        div {
          background: url("../../../../../assets/img/app2/right/Light2.png") no-repeat;
        }
      }
    }
  }
}
</style>
