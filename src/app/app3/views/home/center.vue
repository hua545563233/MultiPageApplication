<template>
  <div id="app3_home_center" @click="$router.push({ name: '专题' })" class="animate__bounceInDown animate__animated"></div>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
#app3_home_center {
  width: 9.34rem;
  height: 4.93rem;
  background-image: url('../../../../assets/img/app3/home/icons.png');
  position: absolute;
  left: 18.22rem;
  top: 3.6rem;
  cursor: pointer;
}
</style>
