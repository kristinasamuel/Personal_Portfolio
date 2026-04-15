import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals.mjs";

const config = defineConfig([
  ...nextCoreWebVitals,
  {
    ignores: ["node_modules/**"],
  },
]);

export default config;
