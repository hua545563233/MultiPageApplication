<template>
  <div class="family-tab tab1">
    <div class="select">
      <div :class="{active: activeIndex === 0}" @click="activeIndex = 0">电视重点直播频道</div>
      <div :class="{active: activeIndex === 1}" @click="activeIndex = 1">热点频道</div>
      <div :class="{active: activeIndex === 2}" @click="activeIndex = 2">热点节目</div>
    </div>
    <div class="tab-content">
      <div class="tab-container" :style="{transform: `translateX(-${activeIndex * 33.3333}%)`}">
        <div class="item">
          <div class="header">
            <div
              v-for="(item, index) in header"
              :key="index"
              v-html="item.name"
            ></div>
          </div>
          <div class="body">
            <div
              v-for="(item, index) in table1"
              :key="index"
              class="tr"
            >
              <div class="td" :class="{top3: index < 3}">{{ index + 1 }}</div>
              <div class="td">{{ item.col1 }}</div>
              <div class="td">
                <countTo :startVal="0" :endVal="item.col2 + randomN + Math.random()" :duration="3000" :decimals="1" separator=""></countTo>
              </div>
              <div class="td">
                <countTo :startVal="0" :endVal="item.col3 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="'%'"></countTo>
                <span class="icon" :class="[Math.random() * 100 > 90 ? 'down' : 'up']"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="header">
            <div
              v-for="(item, index) in header"
              :key="index"
              v-html="item.name"
            ></div>
          </div>
          <div class="body">
            <div
              v-for="(item, index) in table2"
              :key="index"
              class="tr"
            >
              <div class="td" :class="{top3: index < 3}">{{ index + 1 }}</div>
              <div class="td">{{ item.col1 }}</div>
              <div class="td">
                <countTo :startVal="0" :endVal="item.col2 + randomN + Math.random()" :duration="3000" :decimals="1" separator=""></countTo>
              </div>
              <div class="td">
                <countTo :startVal="0" :endVal="item.col3 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="'%'"></countTo>
                <span class="icon" :class="[Math.random() * 100 > 90 ? 'down' : 'up']"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="header">
            <div
              v-for="(item, index) in header"
              :key="index"
              v-html="item.name"
            ></div>
          </div>
          <div class="body">
            <div
              v-for="(item, index) in table3"
              :key="index"
              class="tr"
            >
              <div class="td" :class="{top3: index < 3}">{{ index + 1 }}</div>
              <div class="td">{{ item.col1 }}</div>
              <div class="td">
                <countTo :startVal="0" :endVal="item.col2 + randomN + Math.random()" :duration="3000" :decimals="1" separator=""></countTo>
              </div>
              <div class="td">
                <countTo :startVal="0" :endVal="item.col3 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="'%'"></countTo>
                <span class="icon" :class="[Math.random() * 100 > 90 ? 'down' : 'up']"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab1',
  data () {
    return {
      randomN: 0,
      activeIndex: 0,
      header: [
        {
          name: '序号'
        },
        {
          name: '名称'
        },
        {
          name: '收视<br />用户数(万)'
        },
        {
          name: '同期<br />增幅'
        }
      ],
      table1: [
        {
          col1: 'CCTV1',
          col2: 120,
          col3: 6.5
        },
        {
          col1: 'CCTV2',
          col2: 117,
          col3: 6.5
        },
        {
          col1: 'CCTV3',
          col2: 112,
          col3: 6.5
        },
        {
          col1: 'CCTV4',
          col2: 109,
          col3: 6.5
        },
        {
          col1: 'CCTV5',
          col2: 106,
          col3: 6.5
        },
        {
          col1: 'CCTV6',
          col2: 103,
          col3: 6.5
        },
        {
          col1: 'CCTV7',
          col2: 100,
          col3: 6.5
        },
        {
          col1: 'CCTV8',
          col2: 97,
          col3: 6.5
        },
        {
          col1: 'CCTV9',
          col2: 96,
          col3: 6.5
        },
        {
          col1: 'CCTV10',
          col2: 92,
          col3: 6.5
        }
      ],
      table2: [
        {
          col1: 'CCTV1',
          col2: 120,
          col3: 6.5
        },
        {
          col1: 'CCTV2',
          col2: 117,
          col3: 6.5
        },
        {
          col1: 'CCTV3',
          col2: 112,
          col3: 6.5
        },
        {
          col1: 'CCTV4',
          col2: 109,
          col3: 6.5
        },
        {
          col1: 'CCTV5',
          col2: 106,
          col3: 6.5
        },
        {
          col1: 'CCTV6',
          col2: 103,
          col3: 6.5
        },
        {
          col1: 'CCTV7',
          col2: 100,
          col3: 6.5
        },
        {
          col1: 'CCTV8',
          col2: 97,
          col3: 6.5
        },
        {
          col1: 'CCTV9',
          col2: 96,
          col3: 6.5
        },
        {
          col1: 'CCTV10',
          col2: 92,
          col3: 6.5
        }
      ],
      table3: [
        {
          col1: 'CCTV1',
          col2: 120,
          col3: 6.5
        },
        {
          col1: 'CCTV2',
          col2: 117,
          col3: 6.5
        },
        {
          col1: 'CCTV3',
          col2: 112,
          col3: 6.5
        },
        {
          col1: 'CCTV4',
          col2: 109,
          col3: 6.5
        },
        {
          col1: 'CCTV5',
          col2: 106,
          col3: 6.5
        },
        {
          col1: 'CCTV6',
          col2: 103,
          col3: 6.5
        },
        {
          col1: 'CCTV7',
          col2: 100,
          col3: 6.5
        },
        {
          col1: 'CCTV8',
          col2: 97,
          col3: 6.5
        },
        {
          col1: 'CCTV9',
          col2: 96,
          col3: 6.5
        },
        {
          col1: 'CCTV10',
          col2: 92,
          col3: 6.5
        }
      ]
    }
  },
  computed: {
    count () {
      return this.$root.TIME_COUNT
    }
  },
  watch: {
    count () {
      this.update()
    }
  },
  mounted () {
    this.update()
  },
  methods: {
    update () {
      this.randomN = Math.random()
    }
  }
}
</script>

<style lang="scss">
.app2-left-family {
  .tab-content {
    width: 100%;
    height: calc(100% - 0.3rem);
    overflow: hidden;
    .tab-container {
      display: flex;
      width: 300%;
      transition: all 0.3s;
      >div {
        width: 33.33333%;
      }
      .header {
        display: flex;
        height: 0.57rem;
        line-height: 0.2rem;
        border-bottom: 1px solid #7d87ba;
        font-size: 0.16rem;
        color: #8888a0;
        text-align: center;
        box-sizing: border-box;
        >div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        >div:nth-child(1) {
          width: 0.47rem;
        }
        >div:nth-child(2) {
          flex: 1;
        }
        >div:nth-child(3) {
          width: 1.1rem;
        }
        >div:nth-child(4) {
          width: 0.6rem;
        }
      }
      .body {
        width: 100%;
        // height: calc(100% - 0.47rem);
        border-bottom: 1px solid #7d87ba;
        box-sizing: border-box;
        .tr {
          display: flex;
          height: 0.24rem;
          line-height: 0.24rem;
          font-size: 0.14rem;
          text-align: center;
          >div:nth-child(1) {
            width: 0.47rem;
            color: #8e8b9e;
            font-family: "TiHei";
          }
          >div:nth-child(2) {
            flex: 1;
            color: #8e8b9e;
            font-family: "TiHei";
          }
          >div:nth-child(3) {
            width: 1.1rem;
            color: #e4cdff;
          }
          >div:nth-child(4) {
            width: 0.6rem;
            color: #e5cbfb;
          }
          .icon {
            display: inline-block;
            width: 0.07rem;
            height: 0.14rem;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .up {
            background-image: url("../../../../../assets/img/app2/right/up.png");
          }
          .down {
            background-image: url("../../../../../assets/img/app2/right/down.png");
          }
        }
      }
    }
  }
  .tab1 {
    top: 0.74rem;
    width: 3.4rem;
    height: 3.4rem;
    padding-left: 0.1rem;
    .item {
      width: 33.33333%!important;
    }
  }
}
</style>
