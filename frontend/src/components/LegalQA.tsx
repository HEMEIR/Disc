import React, { useState, useRef, useEffect } from 'react'

interface ChatMessage {
  id: number
  content: string
  sender: 'user' | 'ai'
  timestamp: Date
}

const LegalQA: React.FC = () => {
  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) {
      alert('请输入您的法律问题：')
      return
    }

    // 添加用户消息
    const userMessage: ChatMessage = {
      id: Date.now(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      // 模拟AI响应延迟
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // 模拟回答结果
      const mockAnswers: Record<string, string> = {
        '什么是合同？': '合同是平等主体的自然人、法人、其他组织之间设立、变更、终止民事权利义务关系的协议。',
        '劳动合同应该包括哪些内容？': '劳动合同应当包括以下条款：(一)用人单位的名称、住所和法定代表人或者主要负责人；(二)劳动者的姓名、住址和居民身份证或者其他有效身份证件号码；(三)劳动合同期限；(四)工作内容和工作地点；(五)工作时间和休息休假；(六)劳动报酬；(七)社会保险；(八)劳动保护、劳动条件和职业危害防护；(九)法律、法规规定应当纳入劳动合同的其他事项。',
        '著作权的保护期限是多久？': '著作权的保护期限为作者终生及其死亡后五十年，截止于作者死亡后第五十年的12月31日；如果是合作作品，截止于最后死亡的作者死亡后第五十年的12月31日。',
        '什么是商标侵权？': '商标侵权是指未经商标注册人的许可，在同一种商品或者类似商品上使用与其注册商标相同或者近似的商标，或者销售侵犯注册商标专用权的商品的行为。',
        '民间借贷的利息最高是多少？': '根据最高人民法院的规定，民间借贷的利率不得超过合同成立时一年期贷款市场报价利率(LPR)的四倍。超过部分的利息约定无效。'
      }
      
      const answer = mockAnswers[inputMessage] || '抱歉，我暂时无法回答这个问题。建议您咨询专业律师。'
      
      // 添加AI消息
      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        content: answer,
        sender: 'ai',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('问答失败:', error)
      alert('问答失败，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="component-container">
      <h2>法律知识问答</h2>
      
      <div className="chat-container">
        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="chat-message ai">
              <div className="message-sender">AI助手</div>
              <div className="message-content">
                您好！我是法律知识AI助手，有什么法律问题可以问我。
              </div>
            </div>
          ) : (
            messages.map(message => (
              <div 
                key={message.id} 
                className={`chat-message ${message.sender}`}
              >
                <div className="message-sender">
                  {message.sender === 'user' ? '您' : 'AI助手'}
                </div>
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="chat-message ai">
              <div className="message-sender">AI助手</div>
              <div className="message-content">
                正在思考中...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input-area">
          <div className="form-group chat-input-wrapper">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="请输入您的法律问题，按Enter发送..."
              rows={3}
              disabled={isLoading}
            />
            
            <div className="chat-input-actions">
              <label className="chat-btn upload-btn" title="上传文件">
                <input 
                  type="file" 
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      alert(`已选择文件: ${file.name}`);
                    }
                  }}
                  disabled={isLoading}
                />
                📎
              </label>
              
              <button 
                className="chat-btn send-btn" 
                onClick={handleSendMessage}
                disabled={isLoading}
                title="发送消息 (Enter)"
              >
                {isLoading ? '⏳' : '➤'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegalQA
