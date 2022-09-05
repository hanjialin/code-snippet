<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="toggle" :class="active ? 'active' : ''" @click="active = !active">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMeta } from 'vue-meta'
export default defineComponent({
  name: 'MagicIcon01',
  setup() {
    useMeta({
      title: '魔术图标 - 01',
      htmlAttrs: { lang: 'zh-cn', amp: true }
    })

    return {
      active: ref(false)
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
/*魔术图标*/
.toggle {
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.toggle span {
  position: absolute;
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: #0575e6;
  transition: 0.5s;
}
.toggle span:nth-child(1) {
  transform: translateY(-15px);
  width: 25px;
  left: 15px;
}
.toggle span:nth-child(3) {
  transform: translateY(15px);
  width: 15px;
  left: 15px;
}
.toggle.active span:nth-child(2) {
  transform: translateX(80px);
}
.toggle.active span:nth-child(1) {
  width: 40px;
  transform: translateY(0) rotate(45deg);
}
.toggle.active span:nth-child(3) {
  transform: translateY(0) rotate(315deg);
  width: 40px;
}
</style>
