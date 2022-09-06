<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="navigation" :class="open ? 'open' : ''">
      <div class="toggle" @click="open = !open">
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <a href="#"><span>首页</span></a>
        </li>
        <li>
          <a href="#"><span>统计</span></a>
        </li>
        <li>
          <a href="#"><span>通知</span></a>
        </li>
        <li>
          <a href="#"><span>收藏</span></a>
        </li>
        <li>
          <a href="#"><span>关于</span></a>
        </li>
      </ul>
    </div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMeta } from 'vue-meta'
export default defineComponent({
  name: 'MagicMenu03',
  setup() {
    useMeta({
      title: '魔术菜单 - 03',
      htmlAttrs: { lang: 'zh-cn', amp: true }
    })
    const open = ref(false)
    return { open }
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
  background-color: #282a36;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
/*魔术菜单03代码*/
.navigation {
  width: 60px;
  height: 60px;
  position: relative;
  background-color: #fff;
  border-radius: 30px;
  transition: 0.5s;
  overflow: hidden;
}
.navigation .toggle {
  width: 60px;
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  z-index: 2;
}
.navigation .toggle span {
  width: 25px;
  height: 4px;
  background: #0575e6;
  border-radius: 2px;
  position: absolute;
  transition: 0.5s;
}
.navigation.open .toggle span:nth-child(1) {
  transform: translateY(0) rotate(45deg);
}

.navigation.open .toggle span:nth-child(2) {
  transform: translateY(0) rotate(-45deg);
}
.navigation .toggle span:nth-child(1) {
  transform: translateY(-5px) rotate(0);
}

.navigation .toggle span:nth-child(2) {
  transform: translateY(5px) rotate(0);
}
.navigation ul {
  width: 360px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex: 1;
}
.navigation ul li {
  list-style: none;
  flex: 1;
}
.navigation ul li a {
  display: block;
  line-height: 60px;
  color: #333;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.05rem;
}
.navigation.open {
  width: 420px;
}
</style>
