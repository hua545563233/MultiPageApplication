<template>
  <div id="app3_roam_right">
    <div class="first">
      <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
    </div>
    <div class="second">
      <countTo class="item1" :startVal="0" :endVal="375.48" :decimals="2" :duration="3000"></countTo>
      <countTo class="item2" :startVal="0" :endVal="90.20" :decimals="2" :duration="3000" suffix="%"></countTo>
    </div>
    <div class="third">
      <countTo class="item2" :startVal="0" :endVal="236.75" :decimals="2"  :duration="3000"></countTo>
    </div>
    <div class="fourth">
      <countTo v-for="num of list1" :key="num" class="item2" :startVal="0" :endVal="num" separator="" :duration="3000"></countTo>
    </div>
    <div class="fifth">
      <countTo v-for="num of list1" :key="num" class="item2" :startVal="0" :endVal="num" separator="" :duration="3000"></countTo>
    </div>
    <div class="sixth">
      <div v-for="(item, index) of list2" class="row" :key="index">
        <countTo :startVal="0" :endVal="item.val1" :duration="3000" :decimals="2" ></countTo>
        <countTo :startVal="0" :endVal="item.val2" :duration="3000" :decimals="2" ></countTo>
        <countTo :startVal="0" :endVal="item.val3" :duration="3000" separator="" ></countTo>
      </div>
    </div>
    <div class="progress p1">
      <div v-for="(item, i) of list1" :key="item" :style="{width: 100 - i * 4 + '%'}"></div>
    </div>
    <div class="progress p2">
      <div v-for="(item, i) of list1" :key="item" :style="{width: 100 - i * 4 + '%'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      list1: [6817, 5232, 3019, 2891, 2318, 2243, 2192, 2093, 1983, 1768],
      list2: [{
        val1: 13.69,
        val2: 233.82,
        val3: 44575
      }, {
        val1: 24.69,
        val2: 27.82,
        val3: 4457
      }, {
        val1: 54.69,
        val2: 77.82,
        val3: 1489
      }, {
        val1: 25.69,
        val2: 58.82,
        val3: 1382
      }, {
        val1: 34.69,
        val2: 178.82,
        val3: 1254
      }]
    }
  }
}
</script>

<style lang="scss">
#app3_roam_right {
  font-family: Agency;
  z-index: 1;
  .first {
    position: absolute;
    right: 5.8rem;
    top: 1.6rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 6rem;
    span {
      font-size: 0.3rem;
      font-family: Agency;
      letter-spacing: 3px;
      line-height: 0.5rem;
      display: inline-block;
      color: #39cecf;
      width: 1.6rem;
      text-align: center;
    }
  }
  .second {
    position: absolute;
    right: 1rem;
    top: 1.1rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 3.5rem;
    span {
      font-size: 0.25rem;
      font-family: Agency;
      letter-spacing: 3px;
      line-height: 0.5rem;
      display: inline-block;
      color: #39a4cb;
      width: 1.6rem;
      text-align: center;
    }
  }
  .third {
    position: absolute;
    right: 1.65rem;
    top: 2.8rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 2rem;
    span {
      font-size: 0.5rem;
      font-family: Agency;
      letter-spacing: 3px;
      line-height: 0.65rem;
      display: inline-block;
      color: #39cecf;
      width: 1.6rem;
      text-align: center;
    }
  }
  .fourth {
    position: absolute;
    right: 9.2rem;
    bottom: 0.85rem;
    span {
      display: block;
      line-height: 0.45rem;
      margin-top: 0.13rem;
      font-size: 0.25rem;
      color: #39a4cb;
    }
    & :nth-child(1) {
      color: #3acdce;
    }
    & :nth-child(2) {
      color: #d8d449;
    }
  }
  .fifth {
    position: absolute;
    right: 5.6rem;
    bottom: 0.85rem;
    span {
      display: block;
      line-height: 0.45rem;
      margin-top: 0.13rem;
      font-size: 0.25rem;
      color: #39a4cb;
    }
    & :nth-child(1) {
      color: #3acdce;
    }
    & :nth-child(2) {
      color: #d8d449;
    }
  }
  .sixth {
    position: absolute;
    right: 1rem;
    bottom: 0.95rem;
    .row {
      height: 0.8rem;
      width: 2.7rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.18rem;
      span {
        font-size: 0.34rem;
        color: #39a4cb;
      }
      span:nth-child(3) {
        color: #39cecf;
      }
    }
  }
  .progress {
    position: absolute;
    width: 0.9rem;
    right: 10rem;
    bottom: 0rem;
    height: 6.34rem;
    div {
      height: 0.12rem;
      background: #39a4cb;
      margin-bottom: 0.45rem;
    }
    & :nth-child(1) {
      background: #ec5a5a;
    }
    & :nth-child(2) {
      background: #d8d449;
      margin-bottom: 0.46rem;
    }
    & :nth-child(4) {
      margin-bottom: 0.46rem;
    }
    & :nth-child(5) {
      margin-bottom: 0.46rem;
    }
    & :nth-child(6) {
      margin-bottom: 0.46rem;
    }
    & :nth-child(8) {
      margin-bottom: 0.47rem;
    }
  }
  .p2 {
    right: 6.4rem;
  }
}
</style>
