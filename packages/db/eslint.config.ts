import { defineConfig } from "eslint/config";

import { baseConfig } from "@ems/eslint-config/base";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig
);
