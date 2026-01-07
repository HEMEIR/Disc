import React, { useState } from 'react'

const ContractReview: React.FC = () => {
  const [contractText, setContractText] = useState('')
  const [reviewResult, setReviewResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const text = event.target?.result as string
        setContractText(text)
      }
      reader.readAsText(file)
    }
  }

  const handleReview = async () => {
    if (!contractText) {
      alert('请输入或上传合同内容')
      return
    }

    setIsLoading(true)
    try {
      // 这里应该调用后端API进行合同审查
      // 暂时模拟一个延迟响应
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // 模拟审查结果
      const mockResult = `合同合规性审查结果：\n\n1. 条款1.1 - 符合相关法律法规\n2. 条款2.3 - 存在潜在风险：建议明确违约责任\n3. 条款3.2 - 符合相关法律法规\n4. 条款4.1 - 存在潜在风险：建议补充争议解决方式\n5. 条款5.0 - 符合相关法律法规\n\n总体评估：合同基本合规，但存在2处潜在风险需要修改。`
      
      setReviewResult(mockResult)
    } catch (error) {
      console.error('合同审查失败:', error)
      setReviewResult('合同审查失败，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="component-container">
      <h2>合同合规性审查</h2>
      
      <div className="form-group">
        <label htmlFor="contractFile">上传合同文件：</label>
        <input
          type="file"
          id="contractFile"
          accept=".txt,.doc,.docx,.pdf"
          onChange={handleFileUpload}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="contractText">或直接输入合同内容：</label>
        <textarea
          id="contractText"
          value={contractText}
          onChange={(e) => setContractText(e.target.value)}
          placeholder="请输入合同文本内容..."
          rows={10}
        />
      </div>
      
      <button 
        className="btn-primary" 
        onClick={handleReview}
        disabled={isLoading}
      >
        {isLoading ? '审查中...' : '开始审查'}
      </button>
      
      {reviewResult && (
        <div className="result-container">
          <h3>审查结果</h3>
          <div className="result-content">{reviewResult}</div>
        </div>
      )}
    </div>
  )
}

export default ContractReview
