<template>
  <div class="menu-container">
    <div v-for="(item, index) of list" class="menu-item" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  mounted () {
    // window.addEventListener('mousemove', e => {
    //   console.log(e.clientY, window.innerHeight, 'eeeeeeeee')
    // })
  },
  data () {
    return {
      list: [
        {
          name: '1'
        },
        {
          name: '2'
        },
        {
          name: '3'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.menu-container {
  position: fixed;
  bottom: 0;
  text-align: center;
  right: 20%;
  left: 20%;
  width: 60%;
  background: rgba(255,255,255,0.2);
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .menu-item {
    width: 0.8rem;
    font-size: 0.24rem;
    height: 0.8rem;
    line-height: 0.8rem;
    transition: all 0.2s;
  }
  .menu-item:hover {
    transform: scale(2);
    margin: 0 0.1rem;
  }
}
</style>
