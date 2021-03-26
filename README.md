## 使用說明
- npm install eslint -g
- eslint --init
    - 初始化完畢後目錄下會多一個 .eslintrc.js(有些選項可以按空白鍵多選)
    - 這時會產生 .eslintrc.js
- package.json 新增
```
"scripts": {
    "lint": "eslint *.js"
}
``` 
- 執行 npm run lint 即可偵錯裡面js檔錯誤

### 安裝 pre-commit (須按照順序否則不會生效):
- pre-commit 在多人合作時,在執行 git commit 時會事先檢查是否符合格式才允許commit
- 1. git init
- 2. 再 npm install --save-dev pre-commit
- 3. 安裝完之後在 package.json 加上 "pre-commit": ["lint"]
- pre-commit 才會生效

### 創建.gitignore
- touch .gitignore