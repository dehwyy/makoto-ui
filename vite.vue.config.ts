import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
	build: {
		outDir: 'package-vue/src/vue',
		lib: {
			entry: path.resolve(__dirname, 'src/lib/vue/index.ts'),
			name: 'makoto-ui',
			formats: ['es'],
			fileName: () => `index.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				exports: 'named',
				globals: {
					vue: 'Vue'
				}
			}
		},
		emptyOutDir: false
	}
})
