import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@ems/eslint-config/base";
import { nextjsConfig } from "@ems/eslint-config/nextjs";
import { reactConfig } from "@ems/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  nextjsConfig,
  restrictEnvAccess
);
