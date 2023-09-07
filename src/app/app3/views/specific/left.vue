<template>
  <div id="app3_specific_left">
    <div class="first" :class="visible? 'appblur': ''">
      <countTo :startVal="0" :endVal="99.6" :duration="3000" :decimals="1" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="99.7" :duration="3000" :decimals="1" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="99.3" :duration="3000" :decimals="1" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="99.3" :duration="3000" :decimals="1" suffix="%"></countTo>
    </div>
    <div class="second" :class="visible? 'appblur': ''">
      <countTo :startVal="0" :endVal="232.8" :duration="3000" :decimals="1"></countTo>
      <countTo :startVal="0" :endVal="27.6" :duration="3000" :decimals="1"></countTo>
      <countTo :startVal="0" :endVal="24.2" :duration="3000" :decimals="1"></countTo>
    </div>
    <div class="third" :class="visible? 'appblur': ''">
      <div class="item item1">
        <countTo :startVal="0" :endVal="95.82" :duration="3000" :decimals="2" suffix="%"></countTo>
      </div>
      <div class="item item2">
        <countTo :startVal="0" :endVal="3541" :duration="3000" separator=""></countTo>
      </div>
      <div class="item item3">
        <countTo :startVal="0" :endVal="25484" :duration="3000" separator=""></countTo>
      </div>
    </div>
    <div class="fourth" :class="visible? 'appblur': ''">
      <countTo :startVal="0" :endVal="99.32" :duration="3000" :decimals="2" suffix="%"></countTo>
      <countTo :startVal="0" :endVal="0.68" :duration="3000" :decimals="2" suffix="%"></countTo>
    </div>
    <div class="bottom"  @click="changeBlur">
      <div class="up">
        <countTo :startVal="0" :endVal="674" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="82" :duration="3000"></countTo>
      </div>
      <div class="down">
        <countTo :startVal="0" :endVal="13" :duration="3000"></countTo>
        <countTo :startVal="0" :endVal="4" :duration="3000"></countTo>
      </div>
    </div>
    <div class="mask" v-if="visible">
    </div>
    <div v-if="visible" class="animate__animated animate__zoomIn popup">
      <div class="box">
        <countTo class="row1" :startVal="0" :endVal="36" :duration="3000" ></countTo>
        <countTo class="row2" :startVal="0" :endVal="2" :duration="3000" ></countTo>
        <countTo class="row3" :startVal="0" :endVal="36" :duration="3000" ></countTo>
        <countTo class="row4" :startVal="0" :endVal="2" :duration="3000" ></countTo>
      </div>
      <div class="img"></div>
      <div class="table">
        <div class="t1">
          <div class="header item">
            <div
              v-for="(item, index) in tableHeader"
              :key="index"
            >{{ item.name }}</div>
          </div>
          <vue-seamless-scroll :data="tableBody" class="seamless-warp" :class-option="option">
            <div class='body'>
              <div v-for='(item, index) in tableBody' class='list' :key='index'>
                <div :class="item.a === 'green' ? 'green' : 'redPoint'">
                  <div class="circle"></div>
                </div>
                <div>{{ item.b }}</div>
                <div>{{ item.c }}</div>
                <div>{{ item.d }}</div>
                <div>{{ item.e }}</div>
                <div>{{ item.f }}</div>
                <div>{{ item.g }}</div>
              </div>
            </div>
          </vue-seamless-scroll>
        </div>
        <div class="t2">
          <div class="header item">
            <div
              v-for="(item, index) in tableHeader2"
              :key="index"
            >{{ item.name }}</div>
          </div>
          <vue-seamless-scroll :data="tableBody2" class="seamless-warp" :class-option="option">
            <div class='body'>
              <div v-for='(item, index) in tableBody2' class='list' :key='index'>
                <div :class="index < 2 ? 'blue2' : 'green2'">
                  {{index + 1}}
                </div>
                <div>{{ item.b }}</div>
                <div>{{ item.c }}</div>
                <div>{{ item.d }}</div>
                <div>{{ item.e }}</div>
                <div>{{ item.f }}</div>
                <div>{{ item.g }}</div>
              </div>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      visible: false,
      option: {
        autoPlay: true,
        // step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 6, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 60, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      },
      tableHeader: [
        {
          name: '告警状态'
        },
        {
          name: '电路名称'
        },
        {
          name: '所属客户'
        },
        {
          name: '电路类型'
        },
        {
          name: 'A端省份'
        },
        {
          name: 'Z端省份'
        },
        {
          name: '是否派单'
        }
      ],
      tableHeader2: [
        {
          name: '序号'
        },
        {
          name: '电路名称'
        },
        {
          name: '工单号'
        },
        {
          name: '工单状态'
        },
        {
          name: '告警名称'
        },
        {
          name: '故障发生时间'
        },
        {
          name: '当前处理组'
        }
      ],
      tableBody2: [
        {
          b: '贵州-贵阳FE0001KA/NP',
          c: '9002762002',
          d: '进行中',
          e: '传输故障',
          f: '2020-12-29',
          g: '第六维修组'
        },
        {
          b: '贵州-贵阳FE0001KA/NP',
          c: '9002762002',
          d: '进行中',
          e: '传输故障',
          f: '2020-12-29',
          g: '第六维修组'
        },
        {
          b: '贵州-贵阳FE0001KA/NP',
          c: '9002762002',
          d: '进行中',
          e: '传输故障',
          f: '2020-12-29',
          g: '第六维修组'
        },
        {
          b: '贵州-贵阳FE0001KA/NP',
          c: '9002762002',
          d: '进行中',
          e: '传输故障',
          f: '2020-12-29',
          g: '第六维修组'
        },
        {
          b: '贵州-贵阳FE0001KA/NP',
          c: '9002762002',
          d: '进行中',
          e: '传输故障',
          f: '2020-12-29',
          g: '第六维修组'
        },
        {
          b: '贵州-贵阳FE0001KA/NP',
          c: '9002762002',
          d: '进行中',
          e: '传输故障',
          f: '2020-12-29',
          g: '第六维修组'
        }
      ],
      tableBody: [
        {
          a: 'green',
          b: '贵州-贵阳FE0001KA/NP',
          c: '中国建设银行',
          d: '传输专线',
          e: '贵州',
          f: '上海',
          g: '是'
        },
        {
          a: 'green',
          b: '贵州-贵阳FE0001KA/NP',
          c: '中国建设银行',
          d: '传输专线',
          e: '贵州',
          f: '上海',
          g: '是'
        },
        {
          a: 'green',
          b: '贵州-贵阳FE0001KA/NP',
          c: '中国建设银行',
          d: '传输专线',
          e: '贵州',
          f: '上海',
          g: '是'
        },
        {
          a: 'red',
          b: '贵州-贵阳FE0001KA/NP',
          c: '中国建设银行',
          d: '传输专线',
          e: '贵州',
          f: '上海',
          g: '是'
        },
        {
          a: 'green',
          b: '贵州-贵阳FE0001KA/NP',
          c: '中国建设银行',
          d: '传输专线',
          e: '贵州',
          f: '上海',
          g: '是'
        },
        {
          a: 'green',
          b: '贵州-贵阳FE0001KA/NP',
          c: '中国建设银行',
          d: '传输专线',
          e: '贵州',
          f: '上海',
          g: '是'
        }
      ]
    }
  },
  methods: {
    changeBlur () {
      this.visible = !this.visible
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss">
#app3_specific_left {
  z-index: 99;
  .first {
    position: absolute;
    left: 1.4rem;
    top: 1.55rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 8.8rem;
    span {
      font-size: 0.24rem;
      font-family: Agency;
      letter-spacing: 3px;
      line-height: 0.5rem;
      display: inline-block;
      color: #f4fcff;
      width: 1.6rem;
      text-align: center;
    }
  }
  .second {
    // border: 1px solid #ccc;
    position: absolute;
    width: 7.7rem;
    left: 2.75rem;
    top: 2.66rem;
    display: flex;
    justify-content: space-between;
    span {
      display: block;
      height: 0.32rem;
      font-size: 0.24rem;
      font-family: Agency;
      color: #42eaea;
      width: 1rem;
    }
  }
  .third {
    position: absolute;
    left: 4.75rem;
    top: 6.74rem;
    width: 6.2rem;
    display: flex;
    .item {
      width: 1.5rem;
      height: 0.51rem;
      position: relative;
      text-align: center;
      span {
        font-size: 0.2rem;
        color: #f4fcff;
        line-height: 0.51rem;
        font-family: Agency;
        display: block;
      }
    }
    .item1 {
      height: 1.6rem;
      line-height: 1.6rem;
      span {
        line-height: 1.6rem;
        font-size: 0.42rem;
      }
    }
    .item2 {
      width: 0.8rem;
      margin-left: 1.3rem;
    }
    .item3 {
      margin-left: 1.25rem;
      width: 0.8rem;
    }
  }
  .fourth {
    position: absolute;
    left: 7.6rem;
    top: 9.65rem;
    width: 2.85rem;
    height: 0.5rem;
    span {
      position: absolute;
      width: 0.9rem;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.2rem;
      font-family: Agency;
      color: #f4fcff;
      &:nth-child(1) {
        left: 0;
        top: 0;
      }
      &:nth-child(2) {
        right: 0;
        top: 0;
      }
    }
  }
  .bottom {
    position: absolute;
    left: 0.7rem;
    bottom: 0.5rem;
    width: 3.1rem;
    height: 5.3rem;
    cursor: pointer;
    background: url('../../../../assets/img/app3/specific/specific-left-bottom.png');
    z-index: 99;
    .up, .down {
      position: absolute;
      left: 0.3rem;
      right: 0.3rem;
      height: 0.65rem;
      display: flex;
      justify-content: space-between;
      text-align: center;
      span {
        width: 0.77rem;
        font-size: 0.32rem;
        color: #f4fcff;
        display: block;
        line-height: 0.65rem;
      }
    }
    .up {
      top: 0.93rem;
    }
    .down {
      bottom: 0.58rem;
    }
  }
  .popup {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
    .box {
      position: absolute;
      text-align: center;
      left: 15.6rem;
      width: 1rem;
      top: 0;
      height: 100%;
      span {
        width: 100%;
        display: block;
        position: absolute;
        left: 0;
        font-size: 0.44rem;
        font-family: Agency;
      }
      .row1 {
        top: 1.5rem;
        color: #42eaea;
      }
      .row2 {
        top: 2.6rem;
        color: #f43346;
      }
      .row3 {
        bottom: 3rem;
        color: #42eaea;
      }
      .row4 {
        bottom: 1.9rem;
        color: #f43346;
      }
    }
  }
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.8);
    z-index: 9;
  }
  .img {
    background: url('../../../../assets/img/app3/specific/popup.jpg');
    width: 42.3rem;
    height: 10.8rem;
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    z-index: 999;
  }
  .table {
    width: 17.65rem;
    position: absolute;
    right: 2.2rem;
    top: 1.6rem;
    z-index: 1000;
    overflow: hidden;
    .t2 {
      margin-top: 1.34rem;
      .seamless-warp {
        overflow: hidden;
        height: 3rem;
      }
      .body {
        height: 3rem;
      }
      .blue2 {
        position: relative;
        line-height: 0.6rem;
        text-align: center;
        font-weight: bold;
        font-family: Agency;
        &::before {
          content: '';
          width: 0.28rem;
          height: 0.28rem;
          border-radius: 50%;
          background-color: rgba($color: #3aadaa, $alpha: 0.4);
          box-sizing: border-box;
          border: 1px solid #3aadaa;
          position: absolute;
          top: 0.16rem;
          left: 0.61rem;
          z-index: -1;
        }
      }
      .green2 {
        position: relative;
        line-height: 0.6rem;
        text-align: center;
        font-family: Agency;
        font-weight: bold;
        color: #5ff58a;
        &::before {
          content: '';
          width: 0.28rem;
          height: 0.28rem;
          border-radius: 50%;
          background-color: rgba($color: #5db58b, $alpha: 0.4);
          box-sizing: border-box;
          border: 1px solid #5db58b;
          position: absolute;
          top: 0.16rem;
          left: 0.61rem;
          z-index: -1;
        }
      }
      .header {
        & :nth-child(6) {
          width: 2rem;
        }
        & :nth-child(7) {
          width: 2rem;
        }
      }
      .list {
        & :nth-child(6) {
          width: 2rem !important;
        }
        & :nth-child(7) {
          width: 2rem !important;
        }
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      color: #fff;
      font-size: 0.3rem;
      font-family: SSZH;
      letter-spacing: 0.03rem;
      margin-bottom: 0.14rem;
      & :nth-child(1) {
        width: 1.5rem;
        text-align: center;
      }
      & :nth-child(2) {
        width: 4rem;
      }
      & :nth-child(3) {
        width: 1.8rem;
      }
      & :nth-child(4) {
        width: 1.5rem;
      }
      & :nth-child(5) {
        width: 1.5rem;
      }
      & :nth-child(6) {
        width: 1.5rem;
      }
      & :nth-child(7) {
        width: 1.5rem;
      }
    }
    .seamless-warp {
      overflow: hidden;
      height: 3.6rem;
    }
    .body {
      height: 3.6rem;
      color: #fff;
      font-size: 0.26rem;
      overflow: hidden;
      .list {
        display: flex;
        justify-content: space-between;
        height: 0.6rem;
        line-height: 0.6rem;
        font-family: SSZH;
        letter-spacing: 0.03rem;
        .green {
          .circle {
            margin: 0.18rem auto;
            width: 0.24rem;
            height: 0.24rem;
            border-radius: 50%;
            background: rgba($color: #5bf08c, $alpha: 0.4);
            position: relative;
            &::after {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translateX(-50%) translateY(-50%);
              width: 0.1rem;
              height: 0.1rem;
              border-radius: 50%;
              background: #5bf08c;
              // animation: light2 3s linear infinite;
            }
          }
        }
        .redPoint {
          .circle {
            margin: 0.18rem auto;
            width: 0.24rem;
            height: 0.24rem;
            border-radius: 50%;
            // background: rgba($color: #f84d60, $alpha: 0.4);
            position: relative;
            &::after {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translateX(-50%) translateY(-50%);
              width: 0.1rem;
              height: 0.1rem;
              border-radius: 50%;
              background: #f84d60;
              animation: point 1s linear infinite;
            }
          }
        }
        & :nth-child(1) {
          width: 1.5rem;
          text-align: center;
        }
        & :nth-child(2) {
          width: 4rem;
          color: #37cac2;
        }
        & :nth-child(3) {
          color: #d7ab54;
          width: 1.8rem;
        }
        & :nth-child(4) {
          color: #37cac2;
          width: 1.5rem;
        }
        & :nth-child(5) {
          color: #d7ab54;
          width: 1.5rem;
        }
        & :nth-child(6) {
          color: #d7ab54;
          width: 1.5rem;
        }
        & :nth-child(7) {
          color: #37cac2;
          width: 1.5rem;
        }
      }
    }
  }
}
@keyframes point {
  0% {
    box-shadow: 0 0 0 0 rgba($color: #f84d60, $alpha: 0.4);
  }
  to {
    box-shadow: 0 0 0 10px rgba($color: #f84d60, $alpha: 0.4);
  }
}
@keyframes light2 {
  0% {
    box-shadow: 0 0 0 0 rgba($color: #5bf08c, $alpha: 0.4);
  }
  to {
    box-shadow: 0 0 0 10px rgba($color: #5bf08c, $alpha: 0.4);
  }
}
</style>
