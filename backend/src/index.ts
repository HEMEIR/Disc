import express from 'express'
import contractReviewRouter from './routes/contractReview'
import legalQARouter from './routes/legalQA'
import languageConverterRouter from './routes/languageConverter'

const app = express()
const PORT = process.env.PORT || 5000

// 中间件
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS中间件
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// API路由
app.use('/api/contract-review', contractReviewRouter)
app.use('/api/legal-qa', legalQARouter)
app.use('/api/language-converter', languageConverterRouter)

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API服务运行正常' })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`)
})
