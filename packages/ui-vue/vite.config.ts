import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        vue(),
        dts({
            include: ['**/*.vue', '**/*.ts'],
            exclude: ['**/*.stories.ts', '**/*.test.ts'],
            rollupTypes: true
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name: 'QuilityUIVue',
            fileName: 'index',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['vue', 'date-fns', '@org/design-tokens'],
            output: {
                globals: {
                    vue: 'Vue',
                    'date-fns': 'dateFns'
                }
            }
        }
    }
});
