import { defineComponent } from 'vue'
import { useMessage, useDialog, useNotification, useLoadingBar } from 'naive-ui'
export default defineComponent({
  name: 'App',
  setup: function () {
    //父元素setup挂载提示类需要API调用的组件.
    window.$message = useMessage()
    window.$dialog = useDialog()
    window.$notification = useNotification()
    window.$loadingBar = useLoadingBar()
  }
})
