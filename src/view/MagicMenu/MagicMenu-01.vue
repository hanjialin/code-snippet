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
  name: 'MagicMenu01',
  components: { HomeTwo, User, MessageOne, Camera, Setting },
  setup() {
    useMeta({
      title: '魔术菜单 - 01',
      htmlAttrs: { lang: 'zh-cn', amp: true }
    })
    const active = ref(0)
    const handle = function (index: any) {
      active.value = index
    }
    return {
      handle,
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
/*魔术菜单样式*/
.main {
  background-color: #282a36;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation {
  position: relative;
  width: 400px;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.navigation ul {
  display: flex;
  width: 350px;
  margin: 0;
  padding: 0;
}
.navigation ul li {
  list-style: none;
  position: relative;
  width: 70px;
  height: 60px;
  z-index: 2;
}
.navigation ul li a {
  position: relative;
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
  font-size: 1.5rem;
  transition: 0.5s;
  color: #333;
}
.navigation ul li.active a .icon {
  transform: translateY(-33px);
  color: #42b983;
}
.navigation ul li a .text {
  color: #fff;
  background-color: #42b983;
  padding: 2px 9px;
  position: absolute;
  border-radius: 15px;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  line-height: 1.25rem;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(15px);
}
.navigation ul li.active a .text {
  transform: translateY(-3px);
  opacity: 1;
}
/*核心代码*/
.indicator {
  position: absolute;
  top: -34.5px;
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 35px;
  z-index: 1;
  transition: 0.5s;
}
.indicator:before {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: -28px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 15px 18px white;
}
.indicator:after {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  right: -28px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: -15px 18px white;
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
/*结束*/
</style>
