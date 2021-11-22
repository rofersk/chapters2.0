module.exports = {
  env: {
  browser:false,
  es6: false,
  node: false,
  },
  parser: "babel-eslint",
  extends: [
  // "eslint:recommended",
  // "plugin:vue/recommended",
  // "prettier",
  // "prettier/vue",
  ],
  parserOptions: {
    ecmaVersion: "2017",
    ecmaFeatures: {
      experimentalObjectRestSpread: false,
    },
    sourceType: "module",
  },
  plugins: ["babel", "import", "prettier","vue"],
  rules: {
    // "import/no-duplicates": "error",
    // "import/no-unresolved": "error",
    // "import/named": "error",
    // "prettier/prettier": "",
    // "array-callback-return": "",
    // "consistent-return": "",
    // "babel/no-invalid-this": "",
    // "no-unused-vars": ["", { argsIgnorePattern: "^_" }],
  },
  settings: {
    vue: {
      pragma: "vue",
      version: "detect",
      flowVersion: "0.63.1",
    },
  },
};