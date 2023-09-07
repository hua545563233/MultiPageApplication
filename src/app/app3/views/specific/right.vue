<template>
  <div id="app3_specific_right">
    <div class="selectBox">
      <div class="point"></div>
      <div class="hc_name" :class="'icon' + (selected.index + 1)" @click="flag=!flag">{{selected.name}}</div>
      <div class="select_icon" @click="flag=!flag" :style="{'transform': !flag ? 'rotate(0)' : 'rotate(-180deg)'}"></div>
      <div class="selectList" :style="{'height': flag ? '2.6rem' : 0}">
        <div class="list_item" :class="['item' + (index + 1), {'activeItem': selected.index === index}]" v-for="(item, index) of selectList" :key="index" @click="sethc(index)">{{item}}</div>
      </div>
    </div>
    <div class="first">
      <countTo :startVal="0" :endVal="243.8" :duration="3000" :decimals="1" ></countTo>
      <countTo :startVal="0" :endVal="186.6" :duration="3000" :decimals="1" ></countTo>
      <countTo :startVal="0" :endVal="24.2" :duration="3000" :decimals="1" ></countTo>
    </div>
    <div class="hcList list1 animate__animated animate__fadeIn" v-if="selected.name === '会场'">
      <div class="hc_item">
        <div class="img">奥体中心</div>
        <div class="item-container">
          <div class="left">
            <div class="row1">
              <countTo :startVal="0" :endVal="42" :duration="3000" ></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="6" :duration="3000" ></countTo>
            </div>
            <div class="row3">黄启龙</div>
          </div>
          <div class="right">
            <div class="row1">
              <countTo :startVal="0" :endVal="1066" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="2186" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="9844" :duration="3000" separator=""></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="18.8" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="131.6" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="94.2" :duration="3000" :decimals="1" ></countTo>
            </div>
          </div>
        </div>
      </div>
      <div class="hc_item">
        <div class="img">贵阳市新体育场</div>
        <div class="item-container">
          <div class="left">
            <div class="row1">
              <countTo :startVal="0" :endVal="42" :duration="3000" ></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="6" :duration="3000" ></countTo>
            </div>
            <div class="row3">黄启龙</div>
          </div>
          <div class="right">
            <div class="row1">
              <countTo :startVal="0" :endVal="1066" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="2186" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="9844" :duration="3000" separator=""></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="18.8" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="131.6" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="94.2" :duration="3000" :decimals="1" ></countTo>
            </div>
          </div>
        </div>
      </div>
      <div class="hc_item">
        <div class="img">枫叶谷旅游度假区</div>
        <div class="item-container">
          <div class="left">
            <div class="row1">
              <countTo :startVal="0" :endVal="42" :duration="3000" ></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="6" :duration="3000" ></countTo>
            </div>
            <div class="row3">黄启龙</div>
          </div>
          <div class="right">
            <div class="row1">
              <countTo :startVal="0" :endVal="1066" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="2186" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="9844" :duration="3000" separator=""></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="18.8" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="131.6" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="94.2" :duration="3000" :decimals="1" ></countTo>
            </div>
          </div>
        </div>
      </div>
      <div class="hc_item">
        <div class="img">黑纹蚁篮球公园</div>
        <div class="item-container">
          <div class="left">
            <div class="row1">
              <countTo :startVal="0" :endVal="42" :duration="3000" ></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="6" :duration="3000" ></countTo>
            </div>
            <div class="row3">黄启龙</div>
          </div>
          <div class="right">
            <div class="row1">
              <countTo :startVal="0" :endVal="1066" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="2186" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="9844" :duration="3000" separator=""></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="18.8" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="131.6" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="94.2" :duration="3000" :decimals="1" ></countTo>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hcList list2 animate__animated animate__fadeIn" v-if="selected.name === '机场'">
      <div class="hc_item">
        <div class="img">高尔夫球场</div>
        <div class="item-container">
          <div class="left">
            <div class="row1">
              <countTo :startVal="0" :endVal="42" :duration="3000" ></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="6" :duration="3000" ></countTo>
            </div>
            <div class="row3">黄启龙</div>
          </div>
          <div class="right">
            <div class="row1">
              <countTo :startVal="0" :endVal="1066" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="2186" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="9844" :duration="3000" separator=""></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="18.8" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="131.6" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="94.2" :duration="3000" :decimals="1" ></countTo>
            </div>
          </div>
        </div>
      </div>
      <div class="hc_item">
        <div class="img">高坡云顶滑雪场</div>
        <div class="item-container">
          <div class="left">
            <div class="row1">
              <countTo :startVal="0" :endVal="42" :duration="3000" ></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="6" :duration="3000" ></countTo>
            </div>
            <div class="row3">黄启龙</div>
          </div>
          <div class="right">
            <div class="row1">
              <countTo :startVal="0" :endVal="1066" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="2186" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="9844" :duration="3000" separator=""></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="18.8" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="131.6" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="94.2" :duration="3000" :decimals="1" ></countTo>
            </div>
          </div>
        </div>
      </div>
      <div class="hc_item">
        <div class="img">乐湾国际高尔夫会所</div>
        <div class="item-container">
          <div class="left">
            <div class="row1">
              <countTo :startVal="0" :endVal="42" :duration="3000" ></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="6" :duration="3000" ></countTo>
            </div>
            <div class="row3">黄启龙</div>
          </div>
          <div class="right">
            <div class="row1">
              <countTo :startVal="0" :endVal="1066" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="2186" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="9844" :duration="3000" separator=""></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="18.8" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="131.6" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="94.2" :duration="3000" :decimals="1" ></countTo>
            </div>
          </div>
        </div>
      </div>
      <div class="hc_item">
        <div class="img">燃点健身</div>
        <div class="item-container">
          <div class="left">
            <div class="row1">
              <countTo :startVal="0" :endVal="42" :duration="3000" ></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="6" :duration="3000" ></countTo>
            </div>
            <div class="row3">黄启龙</div>
          </div>
          <div class="right">
            <div class="row1">
              <countTo :startVal="0" :endVal="1066" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="2186" :duration="3000" separator=""></countTo>
              <countTo :startVal="0" :endVal="9844" :duration="3000" separator=""></countTo>
            </div>
            <div class="row2">
              <countTo :startVal="0" :endVal="18.8" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="131.6" :duration="3000" :decimals="1" ></countTo>
              <countTo :startVal="0" :endVal="94.2" :duration="3000" :decimals="1" ></countTo>
            </div>
          </div>
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
      selected: {
        index: 0,
        name: '会场'
      },
      selectList: ['会场', '机场', '高铁', '酒店', '新闻中心'],
      flag: false
    }
  },
  methods: {
    sethc (index) {
      if (index > 1) return
      this.selected = {
        index,
        name: this.selectList[index]
      }
      this.flag = false
    }
  }
}
</script>

<style lang="scss">
#app3_specific_right {
  z-index: 1;
  .selectBox {
    width: 2rem;
    height: 0.34rem;
    position: absolute;
    right: 1rem;
    top: 0.4rem;
    background-color: rgba($color: #2a8da0, $alpha: 0.3);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 8;
    cursor: pointer;
    .point {
      width: 0.08rem;
      height: 0.08rem;
      border-radius: 50%;
      background-color: #27d4d8;
      margin-left: 0.22rem;
      margin-right: 0.1rem;
    }
    .hc_name {
      width: 1.2rem;
      height: 0.34rem;
      background-position: left center;
      background-repeat: no-repeat;
      padding-left: 0.34rem;
      box-sizing: border-box;
      font-size: 0.18rem;
      color: #32ded0;
      letter-spacing: 1em;
      line-height: 0.34rem;
    }
    .select_icon {
      width: 0.17rem;
      height: 0.12rem;
      transition: 0.5s;
      background-image: url('../../../../assets/img/app3/specific/selectIcon.png');
    }
    .icon1 {
      background-image: url('../../../../assets/img/app3/specific/1_active.png');
    }
    .icon2 {
      background-image: url('../../../../assets/img/app3/specific/2_active.png');
    }
    .selectList {
      position: absolute;
      top: 0.36rem;
      left: 0;
      width: 2rem;
      height: 2.6rem;
      border-radius: 5px;
      background-color: rgba($color: #2a8da0, $alpha: 0.3);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      transition: 0.5s;
      overflow: hidden;
      .list_item {
        width: 2rem;
        height: 0.5rem;
        line-height: 0.5rem;
        padding-left: 0.74rem;
        background-position: 0.4rem center;
        background-repeat: no-repeat;
        box-sizing: border-box;
        font-size: 0.16rem;
        color: #3cadd6;
        letter-spacing: 1em;
        &:hover {
          background-color: rgba($color: #2a8da0, $alpha: 0.6);
        }
      }
      .item1 {
        background-image: url('../../../../assets/img/app3/specific/1.png');
      }
      .item2 {
        background-image: url('../../../../assets/img/app3/specific/2.png');
      }
      .item3 {
        background-image: url('../../../../assets/img/app3/specific/3.png');
      }
      .item4 {
        background-image: url('../../../../assets/img/app3/specific/4.png');
      }
      .item5 {
        background-image: url('../../../../assets/img/app3/specific/5.png');
        letter-spacing: 0.04rem;
      }
      .activeItem {
        color: #39cfd0;
        background-color: rgba($color: #2a8da0, $alpha: 0.6);
      }
      .item1.activeItem {
        background-image: url('../../../../assets/img/app3/specific/1_active.png');
      }
      .item2.activeItem {
        background-image: url('../../../../assets/img/app3/specific/2_active.png');
      }
    }
  }
  .first {
    position: absolute;
    right: 1.1rem;
    top: 1.1rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 8.2rem;
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
  .hcList {
    position: absolute;
    top: 4.49rem;
    right: 1.1rem;
    >div {
      position: relative;
      width: 9.4rem;
      height: 1.52rem;
      margin-bottom: 0.32rem;
      background-image: url('../../../../assets/img/app3/specific/hc_bg.png');
      .img {
        position: absolute;
        height: 1.22rem;
        left: 0.19rem;
        top: 0.1rem;
        line-height: 0.4rem;
        color: #fff;
        font-family: SSZH;
        font-size: 0.16rem;
        background-position: left bottom;
        text-align: center;
        background-repeat: no-repeat;
        min-width: 1.22rem;
      }
      .item-container {
        position: absolute;
        display: flex;
        justify-content: space-between;
        height: 1.5rem;
        top: 0;
        right: 0.14rem;
        .left {
          width: 1.8rem;
          .row1 {
            margin-top: 0.26rem;
          }
          .row2 {
            margin-top: 0.11rem;
          }
          span {
            width: 0.9rem;
            display: block;
            height: 0.32rem;
            font-size: 0.24rem;
            font-family: Agency;
            color: #42eaea;
          }
        }
        .right {
          width: 4.8rem;
          .row1, .row2 {
            display: flex;
            justify-content: space-between;
            margin-left: 0.6rem;
            span {
              width: 0.9rem;
              display: block;
              height: 0.32rem;
              font-size: 0.24rem;
              font-family: Agency;
              color: #ddecf3;
              &:nth-child(1) {
                color: #42eaea;
              }
              &:nth-child(2) {
                color: #5ae087;
              }
              &:nth-child(3) {
                color: #39a6cd;
              }
            }
          }
          .row1 {
            margin-top: 0.36rem;
          }
          .row2 {
            margin-top: 0.3rem;
          }
        }
      }
    }
  }
  .list1 .hc_item{
    &:nth-child(1) .img{
      background-image: url('../../../../assets/img/app3/specific/at.png');
    }
    &:nth-child(2) .img{
      background-image: url('../../../../assets/img/app3/specific/zjg.png');
    }
    &:nth-child(3) .img{
      background-image: url('../../../../assets/img/app3/specific/hy.png');
    }
    &:nth-child(4) .img{
      background-image: url('../../../../assets/img/app3/specific/hl.png');
    }
  }
  .list2 .hc_item{
    &:nth-child(1) .img{
      background-image: url('../../../../assets/img/app3/specific/nbjc.png');
    }
    &:nth-child(2) .img{
      background-image: url('../../../../assets/img/app3/specific/t1.png');
    }
    &:nth-child(3) .img{
      background-image: url('../../../../assets/img/app3/specific/t2.png');
    }
    &:nth-child(4) .img{
      background-image: url('../../../../assets/img/app3/specific/t3.png');
    }
  }
  .item-container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    height: 1.5rem;
    right: 1.4rem;
    .left {
      width: 1.6rem;
      .row1 {
        margin-top: 0.22rem;
      }
      .row2 {
        margin-top: 0.11rem;
      }
      .row3 {
        width: 0.9rem;
        height: 0.32rem;
        font-size: 0.24rem;
        font-family: SSZH;
        color: #42eaea;
      }
      span {
        width: 0.9rem;
        display: block;
        height: 0.32rem;
        font-size: 0.24rem;
        font-family: Agency;
        color: #42eaea;
      }
    }
    .right {
      width: 4.8rem;
      .row1, .row2 {
        display: flex;
        justify-content: space-between;
        margin-left: 0.6rem;
        span {
          width: 0.9rem;
          display: block;
          height: 0.32rem;
          font-size: 0.24rem;
          font-family: Agency;
          color: #ddecf3;
          &:nth-child(1) {
            color: #42eaea;
          }
          &:nth-child(2) {
            color: #5ae087;
          }
          &:nth-child(3) {
            color: #39a6cd;
          }
        }
      }
      .row1 {
        margin-top: 0.36rem;
      }
      .row2 {
        margin-top: 0.3rem;
      }
    }
  }
  .second {
    top: 4.5rem;
  }
  .third {
    top: 6.32rem;
  }
  .fourth {
    top: 8.18rem;
  }
  .fifth {
    top: 10.02rem;
  }
}
</style>
