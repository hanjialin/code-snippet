import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { createHtmlPlugin } from 'vite-plugin-html'
import vitePluginHtmlEnv from 'vite-plugin-html-env'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// @ts-ignore
import path from 'path'
// import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default (mode: string) =>
  defineConfig({
    base: './',
    plugins: [
      vue(),
      Components({
        resolvers: [NaiveUiResolver()]
      }),
      vitePluginHtmlEnv({
        compress: true
      })
      /*viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })*/
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/main.scss";'
        }
      }
    },
    //启动服务配置
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      https: false,
      proxy: {}
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  })
