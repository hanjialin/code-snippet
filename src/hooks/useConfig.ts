/**
 * @Description: 暗色主题与语言进行全局配置,naive-ui默认支持英文需要对组件进行中文配置.
 * @Author: JiaLin Han
 * @Date: 2021/8/10 16:31
 */
import { zhCN, darkTheme, GlobalTheme, useOsTheme, dateZhCN } from 'naive-ui'
import { ref } from 'vue' //, getCurrentInstance, ComponentInternalInstance

/**
 * @Description: tips 方便在setup中调用主题配置,
 */
const theme = ref<GlobalTheme | null>(null)
export default () => {
  //获取系统主题
  const useOsThemeRef = useOsTheme()
  const changeTheme = () => {
    if (theme.value === null) {
      theme.value = <GlobalTheme>darkTheme
    } else {
      theme.value = null
    }
  }
  const changeThemeOs = () => {
    if (useOsThemeRef.value === 'dark') {
      theme.value = darkTheme
    } else {
      theme.value = null
    }
  }
  return {
    zhCN,
    dateZhCN,
    theme,
    changeTheme,
    changeThemeOs,
    useOsThemeRef
  }
}
