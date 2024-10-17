import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  assetsInclude: ['**/*.gltf', "**/*.glb"],
  base: "/portfolio/",
  host: '127.0.0.1'
})
