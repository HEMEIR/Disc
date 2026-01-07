import express from 'express'

const router = express.Router()

// 合同审查API
router.post('/review', (req, res) => {
  try {
    const { contractText } = req.body
    
    if (!contractText) {
      return res.status(400).json({ error: '合同内容不能为空' })
    }
    
    // 这里应该实现实际的合同审查逻辑
    // 暂时返回模拟数据
    const reviewResult = {
      overallStatus: '基本合规',
      riskCount: 2,
      reviewDetails: [
        { clause: '条款1.1', status: '合规', comment: '符合相关法律法规' },
        { clause: '条款2.3', status: '风险', comment: '建议明确违约责任' },
        { clause: '条款3.2', status: '合规', comment: '符合相关法律法规' },
        { clause: '条款4.1', status: '风险', comment: '建议补充争议解决方式' },
        { clause: '条款5.0', status: '合规', comment: '符合相关法律法规' }
      ],
      summary: '合同基本合规，但存在2处潜在风险需要修改。'
    }
    
    res.json({ success: true, result: reviewResult })
  } catch (error) {
    console.error('合同审查失败:', error)
    res.status(500).json({ error: '合同审查失败，请稍后重试' })
  }
})

// 合同模板API
router.get('/templates', (req, res) => {
  try {
    // 模拟合同模板数据
    const templates = [
      { id: 1, name: '劳动合同模板', category: '劳动', description: '适用于企业与员工签订的劳动合同' },
      { id: 2, name: '服务合同模板', category: '服务', description: '适用于服务提供方与接受方签订的合同' },
      { id: 3, name: '买卖合同模板', category: '买卖', description: '适用于商品买卖双方签订的合同' },
      { id: 4, name: '租赁合同模板', category: '租赁', description: '适用于房屋、设备等租赁的合同' }
    ]
    
    res.json({ success: true, templates })
  } catch (error) {
    console.error('获取合同模板失败:', error)
    res.status(500).json({ error: '获取合同模板失败，请稍后重试' })
  }
})

export default router
