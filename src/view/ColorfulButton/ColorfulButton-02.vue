<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="button"><span>数字孪生</span></div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script setup lang="ts">
import { useMeta } from 'vue-meta'
useMeta({ title: '动感菜单 - 02', htmlAttrs: { lang: 'zh-cn', amp: true } })
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
  background: #282a36;
}
/*实现代码*/
.button {
  width: fit-content;
  position: relative;
  color: #fff;
  letter-spacing: 0.1em;
  font-size: 16px;
  background-image: linear-gradient(45deg, #0ce39a, #69007f, #fc0987, #69007f, #0ce39a);
  background-position: 0;
  background-size: 400%;
  padding: 14px 30px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  span {
    position: relative;
    z-index: 1;
  }
}

.button::before {
  content: '';
  position: absolute;
  background: #282a36;
  inset: 1px;
  border-radius: 9px;
  transition: 0.5s;
}
.button:hover::before {
  opacity: 0.7;
}
/*加入一些扩散阴影*/
.button::after {
  content: '';
  position: absolute;
  background-image: linear-gradient(45deg, #0ce39a, #69007f, #fc0987, #69007f, #0ce39a);
  background-size: 400%;
  background-position: 0;
  inset: 0;
  border-radius: 9px;
  transition: 0.5s;
  opacity: 0;
  filter: blur(20px);
}
.button:hover::after {
  opacity: 1;
}
/*sass写法与.button:hover.button相同 这里添加了跑马灯动画*/
/*.button:hover {
  &.button {
    animation: myAnimation 4s linear infinite;
  }
  &.button::after {
    animation: myAnimation 4s linear infinite;
  }
}*/
@keyframes myAnimation {
  100% {
    background-position: -400% 0;
  }
}
</style>
