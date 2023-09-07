<template>
  <div class="app2-left-video">
    <div class="title text-show title1">{{ title1 }}</div>
    <div class="title text-show title2">{{ title2 }}</div>
    <div class="title title3">{{ title3 }}</div>
    <div class="title title4">{{ title4 }}</div>
    <div class="img img1"></div>
    <div class="img img2"></div>
    <div class="img img3"></div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      title1: '移动魔百盒',
      title2: '视讯系统',
      title3: '通管局视讯',
      title4: '集团视讯'
    }
  }
}
</script>

<style lang="scss">
.app2-left-video {
  position: absolute;
  right: 0;
  top: 1.35rem;
  width: 3.25rem;
  height: 10.53rem;
  .title {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
    letter-spacing: 0.08rem;
    color: #fff;
  }
  .title1 {
    font-family: 'TiHei';
  }
  .title2 {
    top: 3.78rem;
    font-family: 'TiHei';
  }
  .title3 {
    top: 4.71rem;
    height: 0.24rem;
    line-height: 0.24rem;
    font-size: 0.23rem;
    color: #aeadbb;
    font-weight: 700;
    letter-spacing: 0.03rem;
  }
  .title4 {
    top: 7.76rem;
    height: 0.24rem;
    line-height: 0.24rem;
    font-size: 0.23rem;
    color: #aeadbb;
    font-weight: 700;
    letter-spacing: 0.03rem;
  }
  .img {
    position: absolute;
    left: 0.24rem;
    width: 2.78rem;
    height: 2.08rem;
  }
  .img1 {
    top: 0.95rem;
    background: url("../../../../../assets/img/app2/right/video1.png") no-repeat;
    background-size: 100% 100%;
  }
  .img2 {
    top: 5.11rem;
    background: url("../../../../../assets/img/app2/right/video3.png") no-repeat;
    background-size: 100% 100%;
  }
  .img3 {
    top: 8.15rem;
    background: url("../../../../../assets/img/app2/right/video2.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
