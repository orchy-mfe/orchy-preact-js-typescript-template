/// <reference types="vitest" />
import {defineConfig} from 'vite'
import preact from '@preact/preset-vite'
import svgr from 'vite-plugin-svgr'
import {visualizer} from 'rollup-plugin-visualizer'
import qiankun from 'vite-plugin-qiankun'

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

export default defineConfig(({mode}) => ({
  plugins: [
    svgr(),
    preact(),
    qiankun('orchy-preact-js-typescript-template', {useDevMode: true}),
    visualizer()
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-preact-js-typescript-template/',
  server: {port, cors: true},
  test: {
    environment: 'jsdom',
    mockReset: true
  },
}))
