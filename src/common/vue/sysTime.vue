<template>
  <div class='sys-time'>
    <div class='date'>{{date}}</div>
    <div class='time'>{{time}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      time: '',
      date: ''
    }
  },
  methods: {
    initDate () {
      var date = new Date()
      //年
      var year = date.getFullYear()
      //月
      var month = date.getMonth() + 1
      if (month < 10) {
        month = '0' + month
      }
      //日
      var day = date.getDate()
      if (day < 10) {
        day = '0' + day
      }
      //时
      var hh = date.getHours()
      if (hh < 10) {
        hh = '0' + hh
      }
      //分
      var mm = date.getMinutes()
      if (mm < 10) {
        mm = '0' + mm
      }
      //秒
      var ss = date.getSeconds()
      if (ss < 10) {
        ss = '0' + ss
      }
      //   var rq = year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + ss
      this.date = year + '-' + month + '-' + day
      // this.time = hh + ':' + mm + ':' + ss
      this.time = hh + ':' + mm
    }
  },
  mounted () {
    this.timeInterval = setInterval(() => {
      this.initDate()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timeInterval)
  }
}
</script>
<style lang="scss">
.sys-time {
  display: flex;
  justify-content: space-between;
  width: 2.93rem;
  font-size: 0.2rem;
  color: #6186a2;
  letter-spacing: 5px;
  font-weight: 700;
  .date {
    font-size: 20px;
    // text-align: right;
    // letter-spacing: 10px;
    // font-family: "Agency-FB";
    // text-shadow: 0px 0px 0.18rem #ffd600;
    text-align: right;
  }
  .time {
    // color: #e8f5ff;
    // text-shadow: 0px 0px 0.18rem #e8f5ff;
    // letter-spacing: 14px;
    text-align: right;
    // margin-left: 82px;
  }
}
</style>
