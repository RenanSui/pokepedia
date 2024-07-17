/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'
// import { loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{js,jsx,ts,tsx}', '**/*.d.ts'],
      reporter: ['html'],
    },
    environment: 'jsdom',
  },
  plugins: [tsconfigPaths(), react()],
})
