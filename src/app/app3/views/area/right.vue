<template>
  <div id="app3_area_right">
    <div class="warning">
      <div class="warn-item">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="blue"></div>
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
      </div>
      <div class="warn-item">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="blue"></div>
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
      </div>
      <div class="warn-item">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="blue"></div>
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="0" :duration="3000"></countTo>
      </div>
    </div>
    <div class="rate">
      <div class="rate-item">
        <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
        <div class="ring"></div>
      </div>
      <div class="rate-item">
        <countTo :startVal="0" :endVal="0" :duration="3000" suffix="%"></countTo>
        <div class="ring"></div>
      </div>
      <div class="rate-item">
        <countTo :startVal="0" :endVal="0.24" :duration="3000" :decimals="2" suffix="%"></countTo>
        <div class="ring"></div>
      </div>
      <div class="rate-item">
        <countTo :startVal="0" :endVal="99.2" :duration="3000" :decimals="1" suffix="%"></countTo>
        <div class="ring"></div>
      </div>
      <div class="rate-item">
        <countTo :startVal="0" :endVal="99.4" :duration="3000" :decimals="1" suffix="%"></countTo>
        <div class="ring"></div>
      </div>
      <div class="rate-item">
        <countTo :startVal="0" :endVal="0" :duration="3000" suffix="%"></countTo>
        <div class="ring"></div>
      </div>
      <div class="rate-item">
        <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
        <div class="ring"></div>
      </div>
      <div class="rate-item">
        <countTo :startVal="0" :endVal="100" :duration="3000" suffix="%"></countTo>
        <div class="ring"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
#app3_area_right {
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  width: 11.5rem;
  height: 6.3rem;
  .warning {
    position: absolute;
    top: 1.33rem;
    left: 0.2rem;
    display: flex;
    .warn-item {
      width: 3.5rem;
      box-sizing: border-box;
      padding: 0 0.27rem;
      margin-right: 0.3rem;
      display: flex;
      justify-content: space-between;
      position: relative;
      >div {
        width: 0.8rem;
        height: 0.8rem;
        position: relative;
        &:nth-child(1) {
          background: url('../../../../assets/img/app3/keyArea/red.png') no-repeat center;
          &::after {
            background-image: url('../../../../assets/img/app3/keyArea/red_light.png');
          }
        }
        &:nth-child(2) {
          background: url('../../../../assets/img/app3/keyArea/yellow.png') no-repeat center;
          &::after {
            background-image: url('../../../../assets/img/app3/keyArea/yellow_light.png');
          }
        }
        &:nth-child(3) {
          background: url('../../../../assets/img/app3/keyArea/blue.png') no-repeat center;
          &::after {
            background-image: url('../../../../assets/img/app3/keyArea/blue_light.png');
          }
        }
        &::after {
          content: '';
          position: absolute;
          width: 0.8rem;
          height: 0.8rem;
          left: 0;
          top: 0;
          animation: light 3s linear infinite;
        }
      }
      >span {
        position: absolute;
        font-size: 0.4rem;
        font-family: Agency;
        top: 1rem;
        &:nth-of-type(1) {
          color: #ff3345;
          left: 0.84rem;
        }
        &:nth-of-type(2) {
          color: #ffd960;
          left: 1.92rem;
        }
        &:nth-of-type(3) {
          color: #3cc0f1;
          left: 2.98rem;
        }
      }
    }
  }
  .rate {
    width: 11.1rem;
    position: absolute;
    left: 0.2rem;
    top: 4.26rem;
    display: flex;
    justify-content: space-between;
    .rate-item {
      width: 1.2rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      color: #46e4e5;
      position: relative;
      &:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5) {
        color: #5ae081;
      }
      &:nth-of-type(6), &:nth-of-type(7), &:nth-of-type(8) {
        color: #39c1e9;
      }
      &:nth-of-type(1) .ring {
        background-image: url('../../../../assets/img/app3/keyArea/c1.png');
      }
      &:nth-of-type(2) .ring {
        background-image: url('../../../../assets/img/app3/keyArea/c11.png');
      }
      &:nth-of-type(3) .ring {
        background-image: url('../../../../assets/img/app3/keyArea/c2.png');
      }
      &:nth-of-type(5) .ring, &:nth-of-type(4) .ring {
        background-image: url('../../../../assets/img/app3/keyArea/c3.png');
      }
       &:nth-of-type(6) .ring {
        background-image: url('../../../../assets/img/app3/keyArea/c4.png');
      }
      &:nth-of-type(7) .ring, &:nth-of-type(8) .ring {
        background-image: url('../../../../assets/img/app3/keyArea/c5.png');
      }
      span {
        font-size: 0.36rem;
        font-family: Agency;
      }
    }
    .ring {
      position: absolute;
      top: 0.52rem;
      left: 0.08rem;
      width: 1.04rem;
      height: 1.04rem;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
@keyframes light {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
