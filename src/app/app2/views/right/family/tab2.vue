<template>
  <div class="family-tab tab2">
    <div class="select">
      <div :class="{active: activeIndex === 0}" @click="activeIndex = 0">拍照方</div>
      <div :class="{active: activeIndex === 1}" @click="activeIndex = 1">链路质量</div>
    </div>
    <div class="tab-content">
      <div class="tab-container" :style="{transform: `translateX(-${activeIndex * 50}%)`}">
        <div class="item">
          <div class="options"></div>
          <div class="chart">
            <div class="item-name">{{ chart1.name }}</div>
            <div class="item-value">
              <countTo :startVal="0" :endVal="chart1.value + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="'%'"></countTo>
            </div>
          </div>
          <div class="list">
            <div
              v-for="(item, index) in list1"
              :key="index"
              class="li"
            >
              <div :style="{background: item.col1}"></div>
              <div>{{ item.col2 }}</div>
              <div>
                <countTo :startVal="0" :endVal="item.col3 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="'%'"></countTo>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="options"></div>
          <div class="chart">
            <div class="item-name">{{ chart2.name }}</div>
            <div class="item-value">
              <countTo :startVal="0" :endVal="chart2.value + randomN + Math.random()" :duration="3000" :decimals="0" separator="" :suffix="'%'"></countTo>
            </div>
          </div>
          <div class="list">
            <div
              v-for="(item, index) in list2"
              :key="index"
              class="li"
            >
              <div :style="{background: item.col1}"></div>
              <div>{{ item.col2 }}</div>
              <div>
                <countTo :startVal="0" :endVal="item.col3 + randomN + Math.random()" :duration="3000" :decimals="1" separator="" :suffix="'%'"></countTo>
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
  name: 'Tab2',
  data () {
    return {
      randomN: 0,
      activeIndex: 0,
      chart1: {
        name: '其他原因',
        value: 26
      },
      list1: [
        {
          col1: '#5467f1',
          col2: '误码链路',
          col3: 28
        },
        {
          col1: '#ecf173',
          col2: '拥塞链路',
          col3: 32
        },
        {
          col1: '#5fd799',
          col2: '质差链路',
          col3: 14
        },
        {
          col1: '#f6c173',
          col2: '其他原因',
          col3: 26
        }
      ],
      chart2: {
        name: '其他原因',
        value: 26
      },
      list2: [
        {
          col1: '#5467f1',
          col2: '误码链路',
          col3: 28
        },
        {
          col1: '#ecf173',
          col2: '拥塞链路',
          col3: 32
        },
        {
          col1: '#5fd799',
          col2: '质差链路',
          col3: 14
        },
        {
          col1: '#f6c173',
          col2: '其他原因',
          col3: 26
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
  .tab2 {
    top: 0.74rem;
    right: 0.2rem;
    width: 1.91rem;
    height: 3.4rem;
    .tab-container {
      width: 200%!important;
    }
    .item {
      width: 50%!important;
    }
  }
  .tab-content {
    .item {
      .options {
        height: 0.4rem;
        background-image: url("../../../../../assets/img/app2/right/select.png");
        background-repeat: no-repeat;
        background-size: 0.76rem 0.25rem;
        background-position: center right;
      }
      .chart {
        height: 0.98rem;
        text-align: right;
        background-image: url("../../../../../assets/img/app2/right/1.png");
        background-repeat: no-repeat;
        margin-bottom: 0.3rem;
        .item-name {
          height: 0.43rem;
          line-height: 0.3rem;
          font-size: 0.15rem;
          color: #a4a4b0;
        }
        .item-value {
          color: #e8cdff;
          font-size: 0.3rem;
          height: 0.3rem;
          line-height: 0.3rem;
        }
      }
      .list {
        .li {
          display: flex;
          align-items: center;
          height: 0.3rem;
          font-size: 0.16rem;
          >div:nth-child(1) {
            width: 0.1rem;
            height: 0.1rem;
            margin-left: 0.05rem;
          }
          >div:nth-child(2) {
            text-align: center;
            width: 0.92rem;
            color: #a7a7af;
          }
          >div:nth-child(3) {
            text-align: right;
            width: 0.8rem;
            color: #e8cefe;
          }
        }
      }
    }
  }
}
</style>
