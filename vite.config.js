import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import { Console } from 'node:console'

// https://vitejs.dev/config/


export default defineConfig({
    plugins: [
        vue(),
        // element-plus
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            // 1.配置elementPlus采用sass
            resolvers: [ElementPlusResolver({importStyle: "sass"})],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})


