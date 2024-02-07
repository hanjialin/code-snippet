<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="number-rolling" style="color: #fff">{{ number }}</div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script setup lang="ts">
import { useMeta } from 'vue-meta'
import { ref } from 'vue'
useMeta({
  title: '魔术滚动 - 01',
  htmlAttrs: { lang: 'zh-cn', amp: true }
})
/*
 * @desc easeOut曲线先快后慢
 * @param
 * @author HanJiaLin
 * @time 2024/1/25 10:20
 * */
const easeOut = (t: number): number => 1 - Math.pow(1 - t, 5)
/*
 * @desc 魔术滚动接口对象
 * @param
 * @author HanJiaLin
 * @time 2024/1/24 16:33
 * */
interface IProps {
  from: number //起始数字
  to: number //结束数字
  rank: number //总位数
  duration: number //滚动时间
}
const number = ref('')
const fn = (params: IProps) => {
  const { from, to, rank, duration } = params
  number.value = ''.toString().padStart(rank, '0')
  //根据位数生成为数字符串
  const initStr = 0
  const numFn = () => {
    const current = performance.now()
    const elapsedTime = Math.min(current - startTime, duration)
    const initStr = from + Number(((to - from) * easeOut(elapsedTime / duration)).toFixed(0))
    if (initStr <= to) {
      number.value = initStr.toString().padStart(rank, '0')
      requestAnimationFrame(numFn)
    }
  }
  requestAnimationFrame(numFn)
}
const startTime = performance.now()
fn({ from: 0, to: 961, rank: 6, duration: 2000 })

// requestAnimationFrame(fn({ num: 961, rank: 5, duration: 3500 }))
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
  //background-color: #c8e0f4;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.number-rolling {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1rem;
}
</style>
