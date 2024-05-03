// @ts-check
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import withNuxt from './.nuxt/eslint.config.mjs'
import unocssFlat from '@unocss/eslint-config/flat'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended
});
export default withNuxt(
  // Your custom configs here
  [
    ...compat.extends("@vanwei/eslint-config/typescript"),
    ...compat.extends("@vanwei/eslint-config/vue3"),
    ...compat.extends('@vue/eslint-config-typescript'),
    unocssFlat,
    {
      rules: {
        'prefer-rest-params': 0,
        "@typescript-eslint/no-explicit-any": 0,
        "vue/multi-word-component-names": 0,
        'vue/no-setup-props-destructure': 0,
        'vue/no-dupe-keys': 0
      },
      ignores: [
        "vite.config.*",
        "vue.config.*",
        "rollup.config.*",
        "nuxt.config.*",
        "jest.config.*",
        "tailwind.config.*",
        "unocss.config.*",
        "vitest.config.*",
        "vetur.config.*",
        "windi.config.*",
        "jsconfig.*",
        "tsconfig.*",
        "tsdoc.*",
        ".babelrc.*",
        "babel.config.*",
        ".postcssrc.*",
        "postcss.config.*",
        ".prettierrc.*",
        "prettier.config.*",
        ".stylelintrc.*",
        "stylelint.config.*",
        ".eslintrc.*",
        "eslint.config.*",
        ".cz-config.js",
        ".browserslist*",
        ".editorconfig",
        "*.d.ts",
        ".vscode/*",
        ".git/*",
        ".env*",
        "*.config.*",
        "Dockerfile",
        "*.conf",
        "*.yaml",
        "*.md",
        "*.png",
        "*.jpg",
        "*.gif",
        "*.pdf",
        "*.doc",
        "node_modules",
        "node_modules/*",
        "public/*",
        "dist/*",
        "mock/*",
        "docs/*",
        "bower_components/*",
        "vender/*",
        "external/*",
        "src/config/theme.ts",
        ".nuxt/*",
        ".output/*"
      ]
    }]
)
