<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | 前端代码锦集` : `前端代码锦集`
    }}</template>
  </metainfo>
  <div class="main">
    <div class="card">
      <svg
        id="blobSvg"
        viewBox="0 0 400 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
      >
        <g transform="translate(-259, 192)">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: rgb(233, 100, 67)"></stop>
              <stop offset="100%" style="stop-color: rgb(144, 78, 149)"></stop>
            </linearGradient>
          </defs>
          <path
            class="blob"
            d="M463.5,283.5Q435,317,422.5,350.5Q410,384,391.5,423.5Q373,463,329.5,457.5Q286,452,251.5,443.5Q217,435,185.5,425.5Q154,416,119,402.5Q84,389,63.5,357Q43,325,31.5,287.5Q20,250,48.5,218.5Q77,187,72,142Q67,97,109,88Q151,79,184,69.5Q217,60,253,46Q289,32,317,59Q345,86,389,91Q433,96,445,135.5Q457,175,474.5,212.5Q492,250,463.5,283.5Z"
            fill="url(#gradient)"
          ></path>
        </g>
        <g transform="translate(260, -76)">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: rgb(233, 100, 67)"></stop>
              <stop offset="100%" style="stop-color: rgb(144, 78, 149)"></stop>
            </linearGradient>
          </defs>
          <path
            class="blob"
            d="M463.5,283.5Q435,317,422.5,350.5Q410,384,391.5,423.5Q373,463,329.5,457.5Q286,452,251.5,443.5Q217,435,185.5,425.5Q154,416,119,402.5Q84,389,63.5,357Q43,325,31.5,287.5Q20,250,48.5,218.5Q77,187,72,142Q67,97,109,88Q151,79,184,69.5Q217,60,253,46Q289,32,317,59Q345,86,389,91Q433,96,445,135.5Q457,175,474.5,212.5Q492,250,463.5,283.5Z"
            fill="url(#gradient)"
          ></path>
        </g>
      </svg>
      <div class="filter">
        <div class="avatar">
          <img width="100" height="100" src="src/assets/img/utils/avatar.png" alt="" />
        </div>
        <div class="title">魔术卡片01</div>
        <div class="name">爱琨琨爱硕硕</div>
      </div>
    </div>
  </div>
  <n-button strong class="fixed" tag="a" href="/">返回首页</n-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'MagicCard01',
  setup() {
    useMeta({
      title: '魔术卡片 - 01'
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
  background-color: #c8e0f4;
}
.card {
  width: 400px;
  height: 600px;
  position: relative;
  border-radius: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  //background: linear-gradient(#0575e6, #0575e6 45%, #fff 45%, #fff 100%);
}
.card .filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 600px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card .filter .avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  //border: 2px solid #333;
  box-shadow: 0 10px 15px rgba(51, 51, 51, 0.1);
}
.card .filter .title {
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
  color: rgba(255, 255, 255, 0.9);
}
.card .filter .name {
  font-size: 1rem;
  letter-spacing: 0.05rem;
  color: rgba(255, 255, 255, 0.9);
}
.card .filter .title,
.card .filter .name,
.card .filter .avatar {
  margin: 20px 0;
  transform: translateY(-45px);
}
</style>
