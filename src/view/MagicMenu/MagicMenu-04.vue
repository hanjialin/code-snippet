<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="icon" :class="active ? 'active' : ''" @click="active = !active"></div>
    <div class="navigation">
      <ul>
        <li style="--i: 0.1s"><a href="#">新增</a></li>
        <li style="--i: 0.2s"><a href="#">修改</a></li>
        <li style="--i: 0.3s"><a href="#">删除</a></li>
      </ul>
    </div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMeta } from 'vue-meta'
export default defineComponent({
  name: 'MagicMenu04',
  setup() {
    useMeta({
      title: '魔术菜单 - 04',
      htmlAttrs: { lang: 'zh-cn', amp: true }
    })
    const active = ref(false)
    return {
      active
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
  //background-color: #282a36;
  background-color: #c8e0f4;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.icon {
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
}
.icon:before {
  content: '+';
  position: absolute;
  font-size: 3rem;
  color: #ff216d;
  transition: transform 1.5s;
}
.icon.active:before {
  transform: rotate(225deg);
}
.navigation {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 70px;
  z-index: -1;
  transition: transform 0.5s, width 0.5s, height 0.5s, z-index 0.3s;
  transition-delay: 1s, 0.5s, 0.5s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}
.icon.active ~ .navigation {
  width: 240px;
  height: 70px;
  z-index: 1;
  transform: translateY(-100px);
  transition-delay: 0s, 0.5s, 0.5s;
}
.navigation::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #fff;
  left: calc(50% - 8px);
  bottom: 4px;
  transform: rotate(45deg);
  border-radius: 2px;
  transition: 0.1s;
}
.icon.active ~ .navigation::before {
  transition-delay: 0.5s;
  bottom: -6px;
}
.navigation ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  gap: 40px;
  margin: 0;
  padding: 0;
}
.navigation ul li {
  list-style: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: 0.25s;
  transform: translateY(-30px);
  transition-delay: calc(0s + var(--i));
}
.icon.active ~ .navigation ul li {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
  transition-delay: calc(0.75s + var(--i));
}
.navigation ul li a {
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  width: 2.3rem;
  letter-spacing: 0.05rem;
  font-weight: bold;
}
.navigation ul li a:hover {
  color: #ff216d;
}
</style>
