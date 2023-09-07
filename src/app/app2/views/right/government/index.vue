<template>
  <div class="app2-left-government">
    <div class="subject text-show">政企市场</div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Slide1 />
        </div>
        <div class="swiper-slide">
          <Slide2 />
        </div>
        <div class="swiper-slide">
          <Slide3 />
        </div>
      </div>
      <div class="swiper-pagination app2R-pagination app2R-government-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Slide1 from './slide1'
import Slide2 from './slide2'
import Slide3 from './slide3'

export default {
  name: 'Government',
  components: {
    Slide1,
    Slide2,
    Slide3
  },
  data () {
    return {
      option: {
        pagination: {
          el: '.app2R-government-pagination',
          clickable: true
        },
        autoplay: {
          delay: 15000
        },
        observer: true,
        observeParents: true
      }
    }
  },
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      this.swiper = new Swiper(this.$refs.swiper, this.option)
    }
  }
}
</script>

<style lang="scss">
.app2-left-government {
  position: absolute;
  top: 5.3rem;
  left: 6rem;
  width: 5.6rem;
  height: 4.08rem;
  .subject {
    width: 2rem!important;
    text-indent: 0.38rem;
  }
}
</style>
