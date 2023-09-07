<template>
  <div id="app3_home_right">
    <div class="tabs">
      <div :class="['tabItem', {'active': tabIndex === 0}]" @click="tabIndex=0"></div>
      <div :class="['tabItem', {'active': tabIndex === 1}]" @click="tabIndex=1"></div>
      <div :class="['tabItem', {'active': tabIndex === 2}]" @click="tabIndex=2"></div>
    </div>
    <div class="venue">
      <img :src="formatImg(currentPath)" alt="" class="current">
      <swiper ref="swiper2" :options="swiperOption" class="right_swiper">
        <swiper-slide v-for="(path, index) of venues" :key="index">
          <img :src="formatImg(path)" alt="">
        </swiper-slide>
      </swiper>
      <div class="home_swiper-button-prev"></div>
      <div class="home_swiper-button-next"></div>
    </div>
    <div :class="['videoBtn', {'videoBtnActive': flag}]" @click="toggle"></div>
  </div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {
      tabIndex: 0,
      flag: false,
      currentPath: 'at_big.png',
      swiperOption: {
        navigation: {
          nextEl: '.home_swiper-button-next',
          prevEl: '.home_swiper-button-prev'
        },
        loop: true,
        slidesPerView: 'auto',
        loopedSlides: 6
      },
      venues: ['hl.png', 'fy.png', 'pht.png', 'at.png']
    }
  },
  methods: {
    formatImg (path) {
      return require(`../../../../assets/img/app3/home/${path}`)
    },
    toggle () {
      this.flag = !this.flag
      this.$emit('toggle', this.flag)
    }
  },
  computed: {
    swiper () {
      return this.$refs.swiper2.$swiper
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.swiper) {
        this.swiper.on('slideChangeTransitionEnd', () => {
          this.currentPath = this.venues[this.swiper.activeIndex < 5 ? this.swiper.activeIndex - 1 : this.swiper.activeIndex - 5]
        })
      }
    })
  }
}
</script>

<style lang="scss">
#app3_home_right {
  width: 10.2rem;
  height: 11.2rem;
  background-image: url('../../../../assets/img/app3/home/right_bg.png');
  position: absolute;
  top: 0.4rem;
  right: 0.7rem;
  .tabs {
    height: 0.34rem;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: flex-end;
    .tabItem {
      width: 1.8rem;
      height: 0.34rem;
      margin-left: 0.1rem;
      cursor: pointer;
      &:nth-of-type(1) {
        background-image: url('../../../../assets/img/app3/home/tab1.png');
      }
      &:nth-of-type(2) {
        background-image: url('../../../../assets/img/app3/home/tab2.png');
      }
      &:nth-of-type(3) {
        background-image: url('../../../../assets/img/app3/home/tab3.png');
      }
    }
    .active {
      &:nth-of-type(1) {
        background-image: url('../../../../assets/img/app3/home/tab1_active.png');
      }
      &:nth-of-type(2) {
        background-image: url('../../../../assets/img/app3/home/tab2_active.png');
      }
      &:nth-of-type(3) {
        background-image: url('../../../../assets/img/app3/home/tab3_active.png');
      }
    }
  }
  .venue {
    width: 100%;
    position: absolute;
    left: 0;
    top: 1.19rem;
    .current {
      width: 8.83rem;
      height: 5.05rem;
      position: absolute;
      left: 0.69rem;
      top: 0;
    }
    .home_swiper-button-prev, .home_swiper-button-next {
      position: absolute;
      width: 0.3rem;
      height: 0.4rem;
      top: 6.07rem;
      outline: none;
      cursor: pointer;
    }
    .home_swiper-button-prev {
      background-image: url('../../../../assets/img/app3/home/prev.png');
      left: 0.5rem;
    }
    .home_swiper-button-next {
      background-image: url('../../../../assets/img/app3/home/next.png');
      right: 0.5rem;
    }
    .right_swiper {
      position: absolute;
      width: 8.25rem;
      height: 1.5rem;
      left: 0.98rem;
      top: 5.5rem;
      .swiper-slide {
        width: 2.53rem;
        height: 1.5rem;
        margin-right: 0.33rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .videoBtn {
    width: 1.87rem;
    height: 0.43rem;
    position: absolute;
    left: 4.14rem;
    top: 10.13rem;
    cursor: pointer;
    background: url('../../../../assets/img/app3/home/videoBtn.png') no-repeat left bottom;
  }
  .videoBtnActive {
    background: url('../../../../assets/img/app3/home/videoBtn_active.png') no-repeat center;
  }
}
</style>
