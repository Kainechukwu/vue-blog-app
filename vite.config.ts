
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    // setupFiles: "test.setup.js",
    coverage: {
      reporter: ["text", "lcov"],
      reportsDirectory: "./coverage",
    },
    exclude: [
      "node_modules/**",
      "src/_mocks_/**",
      "*.config.js",
      "src/plugins/**/src/store",
      "src/utils/constants.js",
      "src/utils/constants.js",
      "src/utils/data.js",
      "src/assets/**",
      "src/router/index.js",
    ],
  },
  // root: ".", //Define the root,
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
});