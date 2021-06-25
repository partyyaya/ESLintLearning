module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // 當前的配置繼承於 standard(eslint-config-standard)，在此基礎上進行擴展
  // 可以在 NPM 或 GItHub 上搜索 eslint-config 關鍵詞獲取
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    // "off" 或者 0：關閉規則
    // "warn" 或者 1：打開規則，並且作為一個警告
    // "error" 或者 2：打開規則，並且作為一個錯誤
    // 必須帶分號
    semi: ['error', 'always'],
    // 必須使用單引號
    quotes: ['error', 'single']
  }
};
