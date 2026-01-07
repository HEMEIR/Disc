# Discernment - 合同合规性审查和法律知识问答平台

## 项目介绍
Discernment是一个集成了合同合规性审查、法律知识问答、Sparrow设计语言展示和编程语言转换引擎的综合网站平台。

## 技术栈

### 前端
- React 18
- TypeScript
- Vite
- React Router DOM

### 后端
- Node.js
- Express
- TypeScript

## 项目结构

```
Discernment/
├── frontend/             # 前端项目
├── backend/              # 后端项目
└── package.json          # 根目录配置（工作区）
```

## 快速开始

### 1. 安装依赖

在项目根目录执行以下命令安装所有依赖：

```bash
npm install
```

### 2. 启动开发服务器

#### 同时启动前后端（推荐）

```bash
npm run dev
```

这将同时启动前端开发服务器（端口3000）和后端开发服务器（端口5000）。

#### 单独启动前端

```bash
npm run dev:frontend
```

前端服务器将运行在 http://localhost:3000

#### 单独启动后端

```bash
npm run dev:backend
```

后端服务器将运行在 http://localhost:5000

### 3. 访问网站

启动开发服务器后，在浏览器中访问：

```
http://localhost:3000
```

## 功能模块

### 1. 合同合规性审查
- 支持上传合同文件或直接输入合同内容
- 自动审查合同合规性
- 识别并提示潜在风险
- 提供审查结果和建议

### 2. 法律知识问答
- 支持用户提问法律问题
- 提供专业法律知识解答
- 展示问答历史记录

### 3. Sparrow设计语言
- 介绍Sparrow设计理念
- 展示设计组件库
- 展示色彩系统和排版系统

### 4. 编程语言转换引擎
- 支持多种编程语言之间的转换
- 提供代码编辑器界面
- 实时展示转换结果

## 构建生产版本

### 构建前端

```bash
npm run build:frontend
```

构建产物将生成在 `frontend/dist` 目录。

### 构建后端

```bash
npm run build:backend
```

构建产物将生成在 `backend/dist` 目录。

## API 端点

### 合同审查API
- POST /api/contract-review/review - 审查合同内容
- GET /api/contract-review/templates - 获取合同模板

### 法律问答API
- POST /api/legal-qa/ask - 提交法律问题
- GET /api/legal-qa/knowledge-base - 获取法律知识库

### 代码转换API
- POST /api/language-converter/convert - 转换代码
- GET /api/language-converter/languages - 获取支持的语言列表

### 健康检查
- GET /api/health - 检查API服务状态

## 开发说明

- 前端使用Vite进行开发和构建
- 后端使用tsx进行热重载开发
- 前后端均使用TypeScript确保类型安全
- 前端通过代理配置（vite.config.ts）访问后端API

## 许可证

MIT
