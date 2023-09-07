<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  },
  watch: {
  },
  methods: {
  },
  destroyed () {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
html {
  // font-size: calc(100vw / 48);
  font-size: 100px;
  height: 100%;
  font-family: "Microsoft YaHei";
}
body {
  margin: 0;
  padding: 0 !important;
  overflow: inherit !important;
  height: 100%;
  width: 100%;
}
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
}
</style>
