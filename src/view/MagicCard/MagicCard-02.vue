<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="card">
      <div class="tag">魔术卡片 | 02</div>
    </div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useMeta } from 'vue-meta'
export default defineComponent({
  name: 'MagicCard02',
  setup() {
    useMeta({
      title: '魔术卡片 - 02'
    })
    return {}
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
  background-color: #282a36;
}
.card {
  width: 400px;
  height: 300px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 3px;
  position: relative;
}
.tag {
  position: absolute;
  width: 450px;
  height: 50px;
  background: #ff79c5;
  left: -30px;
  border-top-left-radius: 50px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-left: 50px;
  box-sizing: border-box;
  line-height: 50px;
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
  color: white;
  font-weight: bolder;
}
.tag:before {
  content: '';
  position: absolute;
  width: 30px;
  height: 50px;
  left: 0;
  //background: #c05090;
  background: #ff79c5;

  top: 50px;
  border-bottom-left-radius: 50px;
}
.tag:after {
  content: '';
  position: absolute;
  width: 30px;
  height: 50px;
  top: 50px;
  left: 0;
  background: #c05090;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
}
</style>
