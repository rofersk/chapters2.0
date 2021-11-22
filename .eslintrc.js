module.exports = {
  env: {
  browser: true,
  es6: true,
  node: true,
  },
  parser: "babel-eslint",
  extends: [
  "eslint:recommended",
  "plugin:vue/recommended",
  "prettier",
  "prettier/vue",
  ],
  parserOptions: {
    ecmaVersion: "2017",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: "module",
  },
  plugins: ["babel", "import", "prettier","vue"],
  rules: {
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "prettier/prettier": "error",
    "array-callback-return": "error",
    "consistent-return": "error",
    "babel/no-invalid-this": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  settings: {
    vue: {
      pragma: "vue",
      version: "detect",
      flowVersion: "0.63.1",
    },
  },
};