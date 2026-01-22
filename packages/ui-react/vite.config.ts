import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react({ jsxRuntime: 'classic' }),
        dts({
            include: ['**/*.tsx', '**/*.ts'],
            exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
            rollupTypes: true
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name: 'QuilityUIReact',
            fileName: 'index',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'date-fns', '@org/design-tokens'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'date-fns': 'dateFns'
                }
            }
        }
    }
});
