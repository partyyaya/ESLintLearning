## 開始使用
- eslint官網: [eslint](https://eslint.org/docs/user-guide/getting-started)
- 1.npm install eslint --save-dev
- 2.npx eslint --init
    - 初始化完畢後目錄下會多一個 .eslintrc.js(有些選項可以按空白鍵多選)
    - 這時會產生 .eslintrc.js
- 3.package.json 新增
```
"scripts": {
    "lint": "eslint *.js"
}
``` 
- 4.執行 npm run lint 即可偵錯裡面js檔錯誤
  - 或執行 npx eslint yourfile.js 來偵錯指定檔案

### 功能使用
- 自動修正錯誤(有些如未使用變量無法修復): npx eslint xxx.js --fix

### 安裝 pre-commit (須按照順序否則不會生效):
- 功用:pre-commit 在多人合作時,在執行 git commit 時會事先檢查是否符合格式才允許commit
- git init
- npm install --save-dev pre-commit
- 安裝完之後在 package.json 加上 "pre-commit": ["lint"] 即可

### 創建.gitignore
- touch .gitignore
