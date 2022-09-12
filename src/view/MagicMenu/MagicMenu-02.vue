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
            <span class="icon"><home-two theme="outline" size="24" /></span>
            <span class="text">首页</span>
          </a>
        </li>
        <li :class="active === 1 ? 'active' : ''" @click="handle(1)">
          <a href="#">
            <span class="icon"><user theme="outline" size="24" /></span>
            <span class="text">用户</span>
          </a>
        </li>
        <li :class="active === 2 ? 'active' : ''" @click="handle(2)">
          <a href="#">
            <span class="icon"><message-one theme="outline" size="24"></message-one></span>
            <span class="text">通知</span>
          </a>
        </li>
        <li :class="active === 3 ? 'active' : ''" @click="handle(3)">
          <a href="#">
            <span class="icon"><camera theme="outline" size="24" /></span>
            <span class="text">照片</span>
          </a>
        </li>
        <li :class="active === 4 ? 'active' : ''" @click="handle(4)">
          <a href="#">
            <span class="icon"><setting theme="outline" size="24"></setting></span>
            <span class="text">设置</span>
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
import { HomeTwo, User, MessageOne, Camera, Setting } from '@icon-park/vue-next'
export default defineComponent({
  name: 'MagicMenu02',
  components: { HomeTwo, User, MessageOne, Camera, Setting },
  setup() {
    useMeta({
      title: '魔术菜单 - 02',
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
  background-color: #282a36;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
/*魔术菜单02*/
.navigation {
  width: 400px;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
}
.navigation ul {
  position: relative;
  display: flex;
  width: 350px;
  padding: 0;
  margin: 0;
}
.navigation ul li {
  position: relative;
  list-style: none;
  width: 70px;
  height: 60px;
  z-index: 2;
}
.navigation ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  text-decoration: none;
}
.navigation ul li a .icon {
  position: relative;
  display: block;
  line-height: 65px;
  color: #333;
  font-size: 1.5rem;
  transition: 0.5s;
}
.navigation ul li.active a .icon {
  transform: translateY(-31px);
  color: #fff;
}
.navigation ul li a .text {
  color: #333;
  position: absolute;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  line-height: 1.15rem;
  border-radius: 15px;
  opacity: 0;
  transform: translateY(15px);
  transition: 0.5s;
}
.navigation ul li.active a .text {
  transform: translateY(12px);
  opacity: 1;
}
/*核心代码*/
.indicator {
  position: absolute;
  top: -30px;
  left: 5px;
  width: 48px;
  height: 48px;
  background-color: #ff79c5;
  border-radius: 35px;
  z-index: 1;
  transition: 0.5s;
  border: 6px solid #282a36;
}
.indicator:before {
  content: '';
  display: block;
  top: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  position: absolute;
  border-top-right-radius: 20px;
  box-shadow: 1px -10px 0 0 #282a36;
}
.indicator:after {
  content: '';
  display: block;
  top: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  position: absolute;
  border-top-left-radius: 20px;
  box-shadow: -1px -10px 0 0 #282a36;
}
.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(70px * 0));
}
.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(70px * 1));
}
.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2));
}
.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(70px * 3));
}
.navigation ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(70px * 4));
}
</style>
