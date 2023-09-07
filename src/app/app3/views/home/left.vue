<template>
  <div id="app3_home_left">
    <div class="mobile">
      <countTo :startVal="0" :endVal="264.95" :duration="3000" :decimals="2"></countTo>
      <countTo :startVal="0" :endVal="168.74" :duration="3000" :decimals="2"></countTo>
      <countTo :startVal="0" :endVal="86.32" :duration="3000" :decimals="2"></countTo>
    </div>
    <div class="user">
      <countTo :startVal="0" :endVal="243.5" :duration="3000" :decimals="1"></countTo>
      <countTo :startVal="0" :endVal="14.8" :duration="3000" :decimals="1"></countTo>
    </div>
    <div class="fiveG">
      <countTo :startVal="0" :endVal="32.8" :duration="3000" :decimals="1" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="27.6" :duration="3000" :decimals="1" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="24.2" :duration="3000" :decimals="1" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="15.4" :duration="3000" :decimals="1" suffix="%"></countTo>
    </div>
    <div class="top5">
      <div class="top-item">
        <div class="bar" style="width: 32%"></div>
        <countTo :startVal="0" :endVal="32" :duration="3000" :decimals="2" suffix="%"></countTo>
      </div>
      <div class="top-item">
        <div class="bar" style="width: 26%"></div>
        <countTo :startVal="0" :endVal="26" :duration="3000" :decimals="2" suffix="%"></countTo>
      </div>
      <div class="top-item">
        <div class="bar" style="width: 19%"></div>
        <countTo :startVal="0" :endVal="19" :duration="3000" :decimals="2" suffix="%"></countTo>
      </div>
      <div class="top-item">
        <div class="bar" style="width: 14%"></div>
        <countTo :startVal="0" :endVal="14" :duration="3000" :decimals="2" suffix="%"></countTo>
      </div>
      <div class="top-item">
        <div class="bar" style="width: 9%"></div>
        <countTo :startVal="0" :endVal="9" :duration="3000" :decimals="2" suffix="%"></countTo>
      </div>
    </div>
    <div class="jk">
      <countTo :startVal="0" :endVal="674" :duration="3000"></countTo>
      <countTo :startVal="0" :endVal="13" :duration="3000"></countTo>
      <countTo :startVal="0" :endVal="82" :duration="3000"></countTo>
      <countTo :startVal="0" :endVal="4" :duration="3000"></countTo>
    </div>
    <div class="new">
      <swiper ref="swiper1" :options="swiperOption" class="new_swiper">
        <swiper-slide>
          <countTo :startVal="0" :endVal="3249" :duration="3000" separator="" class="user" ></countTo>
          <countTo :startVal="0" :endVal="15487" :duration="3000" separator="" class="request"></countTo>
          <div class="top5">
            <div class="top-item">
              <div class="bar" style="width: 32%"></div>
              <countTo :startVal="0" :endVal="32" :duration="3000" :decimals="2" suffix="%"></countTo>
            </div>
            <div class="top-item">
              <div class="bar" style="width: 26%"></div>
              <countTo :startVal="0" :endVal="26" :duration="3000" :decimals="2" suffix="%"></countTo>
            </div>
            <div class="top-item">
              <div class="bar" style="width: 19%"></div>
              <countTo :startVal="0" :endVal="19" :duration="3000" :decimals="2" suffix="%"></countTo>
            </div>
            <div class="top-item">
              <div class="bar" style="width: 14%"></div>
              <countTo :startVal="0" :endVal="14" :duration="3000" :decimals="2" suffix="%"></countTo>
            </div>
            <div class="top-item">
              <div class="bar" style="width: 9%"></div>
              <countTo :startVal="0" :endVal="9" :duration="3000" :decimals="2" suffix="%"></countTo>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="self">
            <div>
              <span>
                <countTo :startVal="0" :endVal="214" :duration="3000"></countTo>人
              </span>
              <span>
                <countTo :startVal="0" :endVal="782" :duration="3000"></countTo>人
              </span>
              <span>
                <countTo :startVal="0" :endVal="946" :duration="3000"></countTo>人
              </span>
              <span>
                <countTo :startVal="0" :endVal="527" :duration="3000"></countTo>人
              </span>
            </div>
            <div>
              <span>
                <countTo :startVal="0" :endVal="3.84" :decimals="2" :duration="3000"></countTo>TB
              </span>
              <span>
                <countTo :startVal="0" :endVal="1.89" :decimals="2" :duration="3000"></countTo>TB
              </span>
              <span>
                <countTo :startVal="0" :endVal="2.85" :decimals="2" :duration="3000"></countTo>TB
              </span>
              <span>
                <countTo :startVal="0" :endVal="4.06" :decimals="2" :duration="3000"></countTo>TB
              </span>
            </div>
            <div>
              <span>
                <countTo :startVal="0" :endVal="96" :duration="3000"></countTo>次
              </span>
              <span>
                <countTo :startVal="0" :endVal="65" :duration="3000"></countTo>次
              </span>
              <span>
                <countTo :startVal="0" :endVal="58" :duration="3000"></countTo>次
              </span>
              <span>
                <countTo :startVal="0" :endVal="82" :duration="3000"></countTo>次
              </span>
            </div>
            <div></div>
            <div></div>
          </div>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss">
#app3_home_left {
  .mobile {
    position: absolute;
    left: 2.04rem;
    top: 1.32rem;
    span {
      display: block;
      height: 0.8rem;
      font-size: 0.4rem;
      font-family: Agency;
      letter-spacing: 3px;
      &:nth-child(1) {
        color: #f4fcff;
      }
      &:nth-child(2) {
        color: #44bfeb;
      }
      &:nth-child(3) {
        color: #43ebec;
      }
    }
  }
  .user {
    position: absolute;
    left: 7.04rem;
    top: 1.52rem;
    height: 0.5rem;
    display: flex;
    span {
      font-size: 0.4rem;
      font-family: Agency;
      letter-spacing: 3px;
      line-height: 0.5rem;
      display: inline-block;
      &:nth-child(1) {
        width: 2.28rem;
        color: #42eaea;
      }
      &:nth-child(2) {
        color: #5ae087;
      }
    }
  }
  .fiveG {
    position: absolute;
    left: 4.26rem;
    top: 4.45rem;
    span {
      display: block;
      height: 0.44rem;
      font-size: 0.2rem;
      font-family: Agency;
      color: #ddecf3;
      &:nth-child(1) {
        color: #42eaea;
      }
    }
  }
  .top5 {
    position: absolute;
    left: 5.74rem;
    top: 3.65rem;
    width: 4.65rem;
    .top-item {
      width: 100%;
      height: 0.51rem;
      position: relative;
      text-align: right;
      div {
        position: absolute;
        height: 0.06rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #3799be;
      }
      span {
        font-size: 0.2rem;
        color: #42eceb;
        line-height: 0.51rem;
        font-family: Agency;
        display: block;
      }
    }
  }
  .jk {
    position: absolute;
    left: 1.2rem;
    top: 8rem;
    width: 3.35rem;
    height: 2.73rem;
    span {
      position: absolute;
      width: 0.9rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.4rem;
      font-family: Agency;
      &:nth-child(1) {
        left: 0;
        top: 0;
        color: #f4fcff
      }
      &:nth-child(2) {
        right: -4px;
        top: 0;
        color: #ff465b
      }
      &:nth-child(3) {
        left: 0;
        bottom: 0;
        color: #f4fcff
      }
      &:nth-child(4) {
        right: -4px;
        bottom: 0;
        color: #ff465b
      }
    }
  }
  .new {
    position: absolute;
    left: 5.4rem;
    top: 7.01rem;
    width: 5.4rem;
    height: 4.5rem;
    .new_swiper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        background-position: 0 0.59rem;
        background-repeat: no-repeat;
        &:nth-child(1) {
          background-image: url('../../../../assets/img/app3/home/slide1.png');
        }
        &:nth-child(2) {
          background-image: url('../../../../assets/img/app3/home/slide2.png');
        }
        .top5 {
          left: 0.4rem;
          top: 1.46rem;
        }
        .user {
          position: absolute;
          left: 1.68rem;
          top: 1.06rem;
          height: 0.3rem;
          color: #f4fcff;
          font-size: 0.18rem;
          font-family: Agency;
          line-height: 0.3rem;
        }
        .request {
          position: absolute;
          left: 3.8rem;
          top: 1.06rem;
          height: 0.3rem;
          color: #f4fcff;
          font-size: 0.18rem;
          font-family: Agency;
          line-height: 0.3rem;
        }
        .self {
          position: absolute;
          top: 1.8rem;
          left: 0;
          width: 100%;
          >div {
            width: 100%;
            height: 0.7rem;
            padding: 0 0.4rem;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            &:nth-of-type(1) {
              color: #35bcbd;
            }
            &:nth-of-type(2) {
              color: #42beeb;
            }
            &:nth-of-type(3) {
              color: #5ae087;
              >span {
                width: 0.6rem;
                text-align: center;
              }
            }
            >span {
              font-size: 0.12rem;
              padding-left: 0.15rem;
              >span {
                font-size: 0.32rem;
                font-family: Agency;
              }
            }
          }
        }
      }
      .swiper-pagination-bullets {
        top: 0.18rem;
        height: 0.08rem;
        display: flex;
        padding-left: 1.3rem;
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
}
</style>
