<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="text">
      <span>时</span>
      <span>间</span>
      <span>就</span>
      <span>是</span>
      <span>金</span>
      <span>钱</span>
    </div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script setup lang="ts">
import { useMeta } from 'vue-meta'
useMeta({
  title: '魔术文字 - 01'
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
  background-color: #c8e0f4;
}
.text {
  color: #fff;
  font-size: 48px;
  letter-spacing: 0.05em;
  font-weight: bolder;
}
.text span {
  animation: ease-in-out 1s colorful infinite alternate;
}
@keyframes colorful {
  to {
    color: #c05090;
  }
}
@for $i from 1 through 6 {
  .text span:nth-child(#{$i}) {
    animation-delay: ($i - 1) * 0.1s;
  }
}
</style>
