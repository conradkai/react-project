# 使用 Node.js 的官方 Docker 映像檔作為基礎映像檔
FROM node:latest

# 設定工作目錄
WORKDIR /app

# 將 package.json 和 package-lock.json 兩個檔案複製到 Docker 容器中
COPY package*.json ./

# 在容器中安裝依賴項
RUN npm install

# 將整個 React 專案複製到容器中
COPY . .

# 設定環境變數
ENV PORT=3000

# 開放端口號
EXPOSE 3000

# 啟動 React 專案
CMD ["npm", "start"]

# 放在最底部(映射本機的app)
VOLUME /app
