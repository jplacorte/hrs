import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@ems/eslint-config/base";
import { reactConfig } from "@ems/eslint-config/react";

export default defineConfig(
  {
    ignores: [".nitro/**", ".output/**", ".tanstack/**"],
  },
  baseConfig,
  reactConfig,
  restrictEnvAccess
);
