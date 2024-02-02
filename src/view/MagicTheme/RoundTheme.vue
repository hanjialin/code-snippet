<script setup lang="ts">
import { useMeta } from 'vue-meta'
import { ref } from 'vue'
useMeta({
  title: '魔术主题 | 01',
  htmlAttrs: { lang: 'zh-cn', amp: true }
})
const dark = ref(false)
const fn = () => {
  if (dark.value) {
    dark.value = false
  } else {
    dark.value = true
  }
}
</script>

<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div style="overflow: hidden; width: 100%; height: 100vh; z-index: 0; position: relative">
    <div class="theme-modal" :class="dark ? 'dark' : ''"></div>
    <div class="main-theme">
      <div class="main-container">
        <div class="main-menu-area">
          <div class="theme-button" @click="fn">主题切换</div>
        </div>
        <div class="main-work-area"></div>
      </div>
    </div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<style scoped lang="scss">
.fixed {
  position: fixed;
  top: 10px;
  left: 10px;
  color: white;
  background-color: #42b983;
}
.main-theme {
  position: absolute;
  z-index: 2;
}
.main-theme,
.main-container {
  width: 100%;
  height: 100vh;
}
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-menu-area {
  width: 300px;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-work-area {
  width: calc(100% - 300px);
  height: 100vh;
}
.theme-button {
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 3px;
  border: 1px solid #0ce39a;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: #0ce39a;
  }
  position: relative;
  transition: all 0.3s;
}
.theme-modal {
  position: absolute;
  z-index: 1;
  width: 0;
  height: 0;
  border-radius: 100%;
  transform: scale(0);
  left: 50px;
  bottom: 50px;
  transition: transfrom 15s cubic-bezier(0.73, 0.2, 0.2, 0.11), background-color 0.3s, width 6s,
    height 6s;
}
.theme-modal.dark {
  width: 100%;
  height: 100vh;
  background-color: #282a36;
  transform: scale(5, 10);
}
.theme-modal.light {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  transform: scale(10, 10);
}
</style>
