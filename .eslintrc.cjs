module.exports = {
  root: true,
  // env: {
  //   browser: true,
  //   node: true
  // },
  // parser: 'vue-eslint-parser',
  // parserOptions: {
  //   parser: '@typescript-eslint/parser'
  // },
  extends: ['@nuxt/eslint-config', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 0
  }
};
