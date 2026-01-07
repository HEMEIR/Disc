import express from 'express'

const router = express.Router()

// 法律问答API
router.post('/ask', (req, res) => {
  try {
    const { question } = req.body
    
    if (!question) {
      return res.status(400).json({ error: '问题不能为空' })
    }
    
    // 这里应该实现实际的法律问答逻辑
    // 暂时返回模拟数据
    const mockAnswers: Record<string, string> = {
      '什么是合同？': '合同是平等主体的自然人、法人、其他组织之间设立、变更、终止民事权利义务关系的协议。',
      '劳动合同应该包括哪些内容？': '劳动合同应当包括以下条款：(一)用人单位的名称、住所和法定代表人或者主要负责人；(二)劳动者的姓名、住址和居民身份证或者其他有效身份证件号码；(三)劳动合同期限；(四)工作内容和工作地点；(五)工作时间和休息休假；(六)劳动报酬；(七)社会保险；(八)劳动保护、劳动条件和职业危害防护；(九)法律、法规规定应当纳入劳动合同的其他事项。',
      '著作权的保护期限是多久？': '著作权的保护期限为作者终生及其死亡后五十年，截止于作者死亡后第五十年的12月31日；如果是合作作品，截止于最后死亡的作者死亡后第五十年的12月31日。',
      '什么是商标侵权？': '商标侵权是指未经商标注册人的许可，在同一种商品或者类似商品上使用与其注册商标相同或者近似的商标，或者销售侵犯注册商标专用权的商品的行为。',
      '民间借贷的利息最高是多少？': '根据最高人民法院的规定，民间借贷的利率不得超过合同成立时一年期贷款市场报价利率(LPR)的四倍。超过部分的利息约定无效。'
    }
    
    const answer = mockAnswers[question] || '抱歉，我暂时无法回答这个问题。建议您咨询专业律师。'
    
    res.json({ success: true, answer })
  } catch (error) {
    console.error('法律问答失败:', error)
    res.status(500).json({ error: '法律问答失败，请稍后重试' })
  }
})

// 法律知识库API
router.get('/knowledge-base', (req, res) => {
  try {
    // 模拟法律知识库数据
    const knowledgeBase = [
      { id: 1, title: '合同的基本概念', category: '合同', viewCount: 1234 },
      { id: 2, title: '劳动合同法解读', category: '劳动', viewCount: 892 },
      { id: 3, title: '著作权保护指南', category: '知识产权', viewCount: 567 },
      { id: 4, title: '商标注册流程', category: '知识产权', viewCount: 432 },
      { id: 5, title: '民间借贷法律规定', category: '金融', viewCount: 789 }
    ]
    
    res.json({ success: true, knowledgeBase })
  } catch (error) {
    console.error('获取法律知识库失败:', error)
    res.status(500).json({ error: '获取法律知识库失败，请稍后重试' })
  }
})

export default router
