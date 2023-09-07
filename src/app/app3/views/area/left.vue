<template>
  <div id="app3_area_left">
    <countTo :startVal="0" :endVal="1104" separator="" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="412" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
    <countTo :startVal="0" :endVal="412" :duration="3000"></countTo>
    <div class="perception">
      <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
    </div>
    <div class="userNum">
      <countTo :startVal="0" :endVal="318" :duration="3000"></countTo>
      <countTo :startVal="0" :endVal="99.8" :duration="3000" :decimals="1" suffix="%"></countTo>
    </div>
    <div class="net">
      <div class="net-item">
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="385" :duration="3000"></countTo>
      </div>
      <div class="net-item">
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="2180.2" :duration="3000" :decimals="1" separator=""></countTo>
      </div>
      <div class="net-item">
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="27.98" :duration="3000" :decimals="2"></countTo>
      </div>
    </div>
    <div class="APP">
      <countTo :startVal="0" :endVal="993" :duration="3000"></countTo>
      <countTo :startVal="0" :endVal="862" :duration="3000"></countTo>
    </div>
    <div class="list list1">
      <countTo :startVal="0" :endVal="209.1" :duration="3000" :decimals="1"></countTo>
      <countTo :startVal="0" :endVal="192" :duration="3000" :decimals="0"></countTo>
      <countTo :startVal="0" :endVal="89.2" :duration="3000" :decimals="1"></countTo>
      <countTo :startVal="0" :endVal="87.2" :duration="3000" :decimals="1"></countTo>
      <countTo :startVal="0" :endVal="65.2" :duration="3000" :decimals="1"></countTo>
    </div>
    <div class="list list2">
      <countTo :startVal="0" :endVal="209.1" :duration="3000" :decimals="1"></countTo>
      <countTo :startVal="0" :endVal="192" :duration="3000" :decimals="0"></countTo>
      <countTo :startVal="0" :endVal="89.2" :duration="3000" :decimals="1"></countTo>
      <countTo :startVal="0" :endVal="87.2" :duration="3000" :decimals="1"></countTo>
      <countTo :startVal="0" :endVal="65.2" :duration="3000" :decimals="1"></countTo>
    </div>
    <div class="router" @click="route"></div>
    <swiper ref="area_swiper1" class="area_swiper1" :options="swiperOption">
      <swiper-slide>
        <countTo :startVal="0" :endVal="36.8" :duration="3000" :decimals="1" class="vlote"></countTo>
        <countTo :startVal="0" :endVal="89.2" :duration="3000" :decimals="1" class="total"></countTo>
      </swiper-slide>
      <swiper-slide>
        <countTo :startVal="0" :endVal="36.8" :duration="3000" :decimals="1" class="vlote"></countTo>
        <countTo :startVal="0" :endVal="89.2" :duration="3000" :decimals="1" class="total"></countTo>
      </swiper-slide>
      <div class="area_swiper1-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      swiperOption: {
        autoplay: false,
        pagination: {
          el: '.area_swiper1-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    route () {
      this.$router.push('/roam')
    }
  }
}
</script>

<style lang="scss">
  #app3_area_left {
    .router {
      position: absolute;
      width: 5.8rem;
      height: 3rem;
      left: 1rem;
      top: 0.8rem;
      cursor: pointer;
    }
    >span {
      &:nth-child(1) {
        position: absolute;
        left: 3.84rem;
        top: 1.2rem;
        font-size: 0.24rem;
        color: #47e7e7;
        font-family: Agency;
        letter-spacing: 0.02rem;
      }
      &:nth-child(2) {
        position: absolute;
        left: 2.47rem;
        top: 2.14rem;
        font-size: 0.4rem;
        color: #f7ffff;
        font-family: Agency;
        letter-spacing: 0.02rem;
      }
      &:nth-child(3) {
        position: absolute;
        left: 5.78rem;
        top: 2.06rem;
        font-size: 0.32rem;
        color: #58e185;
        font-family: Agency;
        letter-spacing: 0.02rem;
      }
      &:nth-child(4) {
        position: absolute;
        left: 5.78rem;
        top: 2.78rem;
        font-size: 0.32rem;
        color: #40c0e3;
        font-family: Agency;
        letter-spacing: 0.02rem;
      }
    }
    .perception {
      span {
        font-size: 0.32rem;
        font-family: Agency;
        position: absolute;
        top: 2.2rem;
        letter-spacing: 0.06rem;
        &:nth-of-type(1) {
          left: 7.6rem;
          color: #40c0e3;
        }
        &:nth-of-type(2) {
          left: 9.2rem;
          color: #58e185;
        }
        &:nth-of-type(3) {
          left: 10.8rem;
          color: #47e7e7;
        }
      }
    }
    .userNum {
      span {
        font-family: Agency;
        position: absolute;
        &:nth-of-type(1) {
          left: 5.14rem;
          top: 5.04rem;
          font-size: 0.4rem;
          letter-spacing: 0.3rem;
          color: #47e7e7;
        }
        &:nth-of-type(2) {
          left: 5.02rem;
          top: 6.57rem;
          font-size: 0.32rem;
          letter-spacing: 0.05rem;
          color: #f7ffff;
        }
      }
    }
    .net {
      position: absolute;
      left: 7.32rem;
      top: 4.92rem;
      .net-item {
        width: 4.5rem;
        height: 0.88rem;
        line-height: 0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          text-align: center;
          font-size: 0.3rem;
          font-family: Agency;
          width: 1.36rem;
          &:nth-of-type(1) {
            color: #40c0e3;
          }
          &:nth-of-type(2) {
            color: #47e7e7;
          }
        }
      }
    }
    .APP {
      span {
        position: absolute;
        top: 7.95rem;
        font-family: Agency;
        font-size: 0.32rem;
        color: #f7ffff;
        letter-spacing: 0.03rem;
        &:nth-of-type(1) {
          left: 8.6rem;
        }
        &:nth-of-type(2) {
          left: 11.1rem;
        }
      }
    }
    .list {
      position: absolute;
      top: 8.5rem;
      span {
        display: block;
        height: 0.48rem;
        line-height: 0.48rem;
        font-size: 0.24rem;
        font-family: Agency;
      }
    }
    .list1 {
      left: 8.63rem;
      color: #40c0e3;
    }
    .list2 {
      left: 11.08rem;
      color: #47e7e7;
    }
    .area_swiper1 {
      width: 5.7rem;
      height: 3.31rem;
      position: absolute;
      left: 0.9rem;
      bottom: 0.8rem;
      .swiper-slide {
        position: relative;
        >span {
          font-size: 0.24rem;
          font-family: Agency;
          position: absolute;
          color: #47e7e7;
          top: 0;
        }
        &:nth-child(1) {
          background-image: url('../../../../assets/img/app3/keyArea/slide1.jpg');
          >span {
            &:nth-child(1) {
              left: 2.96rem;
            }
            &:nth-child(2) {
              left: 4.72rem;
            }
          }
        }
        &:nth-child(2) {
          background-image: url('../../../../assets/img/app3/keyArea/slide2.jpg');
          >span {
            &:nth-child(1) {
              left: 2.76rem;
            }
            &:nth-child(2) {
              left: 4.32rem;
            }
          }
        }
      }
      .swiper-pagination-bullets {
        position: absolute;
        top: 0.06rem;
        height: 0.08rem;
        display: flex;
        padding-left: 1.25rem;
        z-index: 2;
        .swiper-pagination-bullet-active {
          background-color: #3fd7d8;
          height: 0.08rem;
        }
        .swiper-pagination-bullet {
          background-color: #205563;
          height: 0.08rem;
        }
      }
    }
  }
</style>
