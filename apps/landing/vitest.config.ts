import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig, type Plugin } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths() as Plugin],
  test: {
    globals: true,
    css: true,
    coverage: {
      all: false,
      include: ["app/**"],
      reporter: ["text", "json-summary", "json"],
      reportOnFailure: true,
    },
  },
});
