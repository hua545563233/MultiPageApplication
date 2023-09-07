<template>
  <div id="app3_roam_left">
    <div class="first">
      <countTo :startVal="0" :endVal="92.6" :duration="3000" :decimals="1" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="93.7" :duration="3000" :decimals="1" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="95.3" :duration="3000" :decimals="1" suffix="%"></countTo>
    </div>
    <div class="second">
      <countTo :startVal="0" :endVal="0.54" :duration="3000" :decimals="2" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="98.7" :duration="3000" :decimals="1" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="44.63" :duration="3000" :decimals="2" suffix="ms"></countTo>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app3_roam_left {
  .first {
    position: absolute;
    left: 1rem;
    top: 1.9rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 5.2rem;
    span {
      font-size: 0.28rem;
      font-family: Agency;
      letter-spacing: 3px;
      line-height: 0.5rem;
      display: inline-block;
      color: #f4fcff;
      width: 1.6rem;
      text-align: center;
    }
  }
  .second {
    position: absolute;
    left: 1rem;
    top: 4.1rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 5.2rem;
    span {
      font-size: 0.28rem;
      font-family: Agency;
      letter-spacing: 3px;
      line-height: 0.5rem;
      display: inline-block;
      color: #f4fcff;
      width: 1.6rem;
      text-align: center;
    }
  }
}
</style>
