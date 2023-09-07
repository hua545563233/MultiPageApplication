<template>
  <div id="app3_specific" class="app3_page animate__animated animate__fadeIn" >
    <div class="bg" :class="blur? 'appblur': ''">
      <div class="cancelBtn" @click="$router.push({ name: '首页' })">
        <!-- <div class="subBtn" @click.stop="$router.push({ name: '首页' })"></div> -->
      </div>
    </div>
    <Left @change="blur = !blur" />
    <Right :class="blur? 'appblur': ''" />
    <Center :class="blur? 'appblur': ''" />
  </div>
</template>

<script>
import Left from './left'
import Right from './right'
import Center from './center'
export default {
  name: 'specific',
  data () {
    return {
      blur: false
    }
  },
  components: {
    Left,
    Right,
    Center
  }
}
</script>

<style lang="scss">
#app3_specific {
  position: relative;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('../../../../assets/img/app3/specific/bg.jpg');
    .cancelBtn .subBtn{
      background-image: url('../../../../assets/img/app3/cancel1.jpg');
    }
  }
}
div.appblur {
  filter: blur(0.05rem);
}

</style>
