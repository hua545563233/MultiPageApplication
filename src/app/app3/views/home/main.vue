<template>
  <div id="app3_home" class="app3_page animate__animated animate__fadeIn">
    <div :class="['appBox', {'blur': popup}]">
      <Left />
      <Center />
    </div>
    <Right  @toggle="toggle" />
    <div class="videoPopup animate__animated animate__zoomIn" v-if="popup">
      <video ref="video" class="video" src="../../../../assets/video/video.mp4" @click="stop"></video>
      <div class="playBtn" v-if="visible" @click="videoplay"></div>
      <div class="pauseBtn" v-if="!visible" @click="stop"></div>
    </div>
  </div>
</template>

<script>
import Left from './left'
import Center from './center'
import Right from './right'
export default {
  name: 'home',
  data () {
    return {
      popup: false,
      visible: true,
      swiperOption: {
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    toggle (flag) {
      this.popup = flag
    },
    stop () {
      this.$refs.video.pause()
      this.visible = true
    },
    videoplay () {
      this.$refs.video.play()
      this.visible = false
    }
  },
  components: {
    Left,
    Center,
    Right
  }
}
</script>

<style lang="scss">
  #app3_home {
    .appBox {
      width: 100%;
      height: 100%;
      position: relative;
      background-image: url('../../../../assets/img/app3/home/home_bg.jpg');
      background-size: 100% 100%;
      overflow: hidden;
    }
    .videoPopup {
      width: 12rem;
      height: 7.52rem;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -6rem;
      margin-top: -3.76rem;
      background-image: url('../../../../assets/img/app3/home/videoBg.jpg');
      display: flex;
      justify-content: center;
      align-items: center;
      .video {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 11rem;
        height: 5.65rem;
        cursor: pointer;
      }
      .playBtn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 4.44rem;
        height: 4.44rem;
        background-image: url('../../../../assets/img/app3/home/play.jpg');
        cursor: pointer;
      }
      .pauseBtn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 4.44rem;
        height: 4.44rem;
        cursor: pointer;
        opacity: 0;
        background-image: url('../../../../assets/img/app3/home/pause.jpg');
        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
