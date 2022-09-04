<template>
  <n-config-provider :locale="locale" :date-locale="dateZhCN">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <App />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import App from '@/App.vue'
import useConfig from '@/hooks/useConfig'
export default defineComponent({
  name: 'AppProvider',
  components: { App },
  setup() {
    const { zhCN, dateZhCN } = useConfig() //theme 使用默认主题配置

    return {
      locale: zhCN,
      dateZhCN: dateZhCN
    }
  }
})
</script>
<style lang="scss">
@font-face {
  font-family: 'HarmonyOS';
  src: url('/src/assets/font/HarmonyOS_Sans_SC_Regular.ttf') format('truetype');
}
html,
body {
  font-family: 'HarmonyOS', serif;
}
</style>
