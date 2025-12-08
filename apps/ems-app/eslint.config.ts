import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@ems/eslint-config/base";
import { emsAppConfig } from "@ems/eslint-config/ems-app";
import { reactConfig } from "@ems/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  emsAppConfig,
  restrictEnvAccess
);
