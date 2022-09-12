<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="navigation">
      <ul>
        <li :class="active === 0 ? 'active' : ''" @click="handle(0)">
          <a href="#">
            <span>首页</span>
          </a>
        </li>
        <li :class="active === 1 ? 'active' : ''" @click="handle(1)">
          <a href="#">
            <span>统计</span>
          </a>
        </li>
        <li :class="active === 2 ? 'active' : ''" @click="handle(2)">
          <a href="#">
            <span>通知</span>
          </a>
        </li>
        <li :class="active === 3 ? 'active' : ''" @click="handle(3)">
          <a href="#">
            <span>收藏</span>
          </a>
        </li>
        <li :class="active === 4 ? 'active' : ''" @click="handle(4)">
          <a href="#">
            <span>关于</span>
          </a>
        </li>
        <div class="indicator"></div>
      </ul>
    </div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMeta } from 'vue-meta'
export default defineComponent({
  name: 'DynamicMenu01',
  setup() {
    useMeta({
      title: '灵动菜单 - 01',
      htmlAttrs: { lang: 'zh-cn', amp: true }
    })
    const active = ref(0)
    const handle = function (index: any) {
      active.value = index
    }
    return {
      active,
      handle
    }
  }
})
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 10px;
  left: 10px;
  color: white;
  background-color: #42b983;
}
.main {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation {
  width: 600px;
  height: 50px;
  background-color: #fff;
  border-radius: 25px;
  position: relative;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.navigation ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
}
.navigation ul li {
  position: relative;
  flex: 1;
  list-style: none;
  text-align: center;
}
.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  line-height: 50px;
  color: #333;
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  text-decoration: none;
  z-index: 1;
  transition: 0.5s;
}
.navigation ul li.active a {
  color: #fff;
  transition: 0.5s;
}
.indicator {
  position: absolute;
  width: 120px;
  height: 50px;
  background: linear-gradient(to top right, #00f260, #0575e6);
  top: 0;
  left: 0;
  /*动效核心代码*/
  transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-radius: 25px;
}
.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(120px * 0));
}
.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(120px * 1));
}
.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(120px * 2));
}
.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(120px * 3));
}
.navigation ul li:nth-child(5).active ~ .indicator {
  /*会露出来一点点下面的菜单,懒得研究,+1px修复一下*/
  transform: translateX(calc(120px * 4 + 1px));
}
</style>
