import js from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...airbnbBase.rules,
    },
  },
];
