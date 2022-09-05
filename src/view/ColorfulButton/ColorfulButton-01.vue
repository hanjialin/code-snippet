<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="button">查看更多</div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'ColorfulButton01',
  setup() {
    useMeta({ title: '动感菜单 - 01', htmlAttrs: { lang: 'zh-cn', amp: true } })
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
  background: #282a36;
}
.button {
  width: 120px;
  height: 40px;
  border-radius: 20px;
  color: #ffffff;
  background-image: linear-gradient(to right, #a83eb8, #dd7277, #ffa50d, #dd7277, #a83eb8);
  background-size: 400%;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.05rem;
  cursor: pointer;
  background-position: 0;
  user-select: none;
}
.button:hover {
  animation: myAnimation 4s linear infinite;
}
@keyframes myAnimation {
  100% {
    background-position: -400% 0;
  }
}
</style>
