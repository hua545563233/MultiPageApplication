<template>
  <div id="app2-right">
    <Personal />
    <Family />
    <Government />
    <Network />
    <Malfunction />
    <Complaint />
    <Video />
  </div>
</template>

<script>
import Personal from './personal'
import Family from './family'
import Government from './government'
import Network from './network'
import Malfunction from './malfunction'
import Complaint from './complaint'
import Video from './video'

export default {
  name: 'Right',
  components: {
    Personal,
    Family,
    Government,
    Network,
    Malfunction,
    Complaint,
    Video
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app2-right {
  font-weight: 700;
  .subject {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 1.8rem;
    height: 0.30rem;
    line-height: 0.30rem;
    font-size: 0.30rem;
    letter-spacing: 0.08rem;
    color: #fff;
    text-align: left;
    font-family: "TiHei";
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .app2R-pagination {
    top: 0.3rem;
    right: 0rem;
    bottom: auto;
    left: auto;
    width: 1.4rem;
    height: 0.2rem;
    line-height: 0.2rem;
    font-size: 0.2rem;
    span {
      width: 0.1rem;
      height: 0.1rem;
      border-radius: 0;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transform: rotateZ(45deg);
    }
    .swiper-pagination-bullet {
      background: #009eff;
    }
    .swiper-pagination-bullet-active {
      background: #009eff;
    }
  }
  .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 0.08rem;
  }
}
</style>
