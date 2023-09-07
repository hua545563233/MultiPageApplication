<template>
  <div id="gis_popup" class="animate__animated animate__zoomIn">
    <div class="closeBtn" @click.stop="closePopup"></div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: [],
  data () {
    return {}
  },
  methods: {
    closePopup () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
  #gis_popup {
    width: 10.51rem;
    height: 6.01rem;
    background-size: 100% 100%;
    background-image: url('../../../assets/img/app1/right/popup2.jpg');
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -5.25rem;
    margin-top: -3rem;
    animation-duration: 0.5s;
    z-index: 99;
    .closeBtn {
      width: 0.28rem;
      height: 0.28rem;
      position: absolute;
      top: 0.27rem;
      right: 0.2rem;
      cursor: pointer;
    }
  }
</style>
