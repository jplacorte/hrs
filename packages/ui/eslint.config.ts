import { defineConfig } from "eslint/config";

import { baseConfig } from "@ems/eslint-config/base";
import { reactConfig } from "@ems/eslint-config/react";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
  reactConfig
);
