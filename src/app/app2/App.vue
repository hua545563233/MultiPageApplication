<template>
  <div id="app2" >
    <div class="title">
      Page2
    </div>
    <div class="content">
      <a class="page" href="./page1.html" >页面1</a>
      <a class="page" href="./page3.html" target="_blank">页面3</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App2',
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss">
#app2 {
  width: 1080px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: #eee;
  .title {
    font-size: 50px;
    text-align: center;
  }
  .content {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    overflow: hidden;
    .page {
      margin: 20px;
    }
  }

}
</style>
