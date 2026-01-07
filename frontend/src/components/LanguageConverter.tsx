import React, { useState } from 'react'

const LanguageConverter: React.FC = () => {
  const [sourceCode, setSourceCode] = useState('')
  const [targetCode, setTargetCode] = useState('')
  const [sourceLanguage, setSourceLanguage] = useState('sparrow')
  const [targetLanguage, setTargetLanguage] = useState('solidity')
  const [isLoading, setIsLoading] = useState(false)

  // 源语言选项
  const sourceLanguages = [
    { value: 'sparrow', label: 'Sparrow' },
    { value: 'epc', label: 'EPC' },
    { value: 'bpmn', label: 'BPMN' },
    { value: 'fsm', label: 'FSM' }
  ]

  // 目标语言选项（只能是Solidity）
  const targetLanguages = [
    { value: 'solidity', label: 'Solidity' }
  ]

  const handleConvert = async () => {
    if (!sourceCode) {
      alert('请输入源代码')
      return
    }

    setIsLoading(true)
    try {
      // 这里应该调用后端API进行代码转换
      // 暂时模拟一个延迟响应
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // 模拟转换结果
      const mockConversions: Record<string, Record<string, string>> = {
        'sparrow': {
          'solidity': `// Sparrow 转换为 Solidity
contract SparrowContract {
    // Sparrow 智能合约实现
    function execute() public returns (bool) {
        // 执行逻辑
        return true;
    }
}`
        },
        'epc': {
          'solidity': `// EPC 转换为 Solidity
contract EPCContract {
    // 事件驱动流程链实现
    event ProcessStarted(address indexed sender, uint256 timestamp);
    
    function startProcess() public {
        emit ProcessStarted(msg.sender, block.timestamp);
    }
}`
        },
        'bpmn': {
          'solidity': `// BPMN 转换为 Solidity
contract BPMNContract {
    // 业务流程模型实现
    enum ProcessState { Created, Running, Completed, Failed }
    ProcessState public currentState;
    
    constructor() {
        currentState = ProcessState.Created;
    }
    
    function startProcess() public {
        currentState = ProcessState.Running;
    }
}`
        },
        'fsm': {
          'solidity': `// FSM 转换为 Solidity
contract FSMContract {
    // 有限状态机实现
    enum State { A, B, C }
    State public currentState = State.A;
    
    function transitionToB() public {
        require(currentState == State.A, "Invalid state transition");
        currentState = State.B;
    }
    
    function transitionToC() public {
        require(currentState == State.B, "Invalid state transition");
        currentState = State.C;
    }
}`
        }
      }
      
      // 获取转换结果，如果没有匹配的转换，则返回原代码
      const convertedCode = mockConversions[sourceLanguage]?.[targetLanguage] || 
                         `// 暂不支持从 ${sourceLanguage} 到 ${targetLanguage} 的转换\n${sourceCode}`
      
      setTargetCode(convertedCode)
    } catch (error) {
      console.error('代码转换失败:', error)
      setTargetCode('代码转换失败，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="component-container">
      <h2>编程语言转换引擎</h2>
      
      <div className="converter-layout">
        <div className="source-section">
          <div className="language-selector">
            <label htmlFor="sourceLanguage">源语言：</label>
            <select
              id="sourceLanguage"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              {sourceLanguages.map(lang => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="code-editor">
            <textarea
              value={sourceCode}
              onChange={(e) => setSourceCode(e.target.value)}
              placeholder={`请输入${sourceLanguages.find(l => l.value === sourceLanguage)?.label}代码...`}
              rows={20}
            />
          </div>
        </div>
        
        <div className="convert-controls">
          <button 
            className="btn-primary convert-btn" 
            onClick={handleConvert}
            disabled={isLoading}
            title={isLoading ? '转换中...' : '转换代码'}
          >
            {isLoading ? '⏳' : <span className="arrow-icon"></span>}
          </button>
        </div>
        
        <div className="target-section">
          <div className="language-selector">
            <label htmlFor="targetLanguage">目标语言：</label>
            <select
              id="targetLanguage"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              disabled
            >
              {targetLanguages.map(lang => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="code-editor">
            <textarea
              value={targetCode}
              readOnly
              placeholder="转换后的代码将显示在这里..."
              rows={20}
            />
          </div>
        </div>
      </div>
      
      <div className="converter-info">
        <h3>转换引擎特点</h3>
        <ul>
          <li>支持多种编程语言之间的转换</li>
          <li>基于先进的语法分析和代码生成技术</li>
          <li>保持代码的语义正确性和可读性</li>
          <li>支持复杂代码结构的转换</li>
          <li>持续更新支持的语言和特性</li>
        </ul>
      </div>
    </div>
  )
}

export default LanguageConverter
