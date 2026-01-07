import React from 'react'

const SparrowDesign: React.FC = () => {
  return (
    <div className="component-container">
      <h2>Sparrow 设计语言</h2>
      
      <div className="design-intro">
        <h3>设计理念</h3>
        <p>Sparrow 是一套现代化的设计语言，旨在为用户提供简洁、高效、一致的用户体验。它基于以下核心原则：</p>
        <ul>
          <li><strong>简洁性</strong>：减少视觉噪音，突出核心内容</li>
          <li><strong>一致性</strong>：统一的设计规范，确保跨平台、跨设备的一致性体验</li>
          <li><strong>高效性</strong>：优化用户流程，提高操作效率</li>
          <li><strong>可访问性</strong>：确保所有用户都能方便地使用产品</li>
          <li><strong>可扩展性</strong>：灵活的设计系统，支持快速迭代和扩展</li>
        </ul>
      </div>
      
      <div className="design-components">
        <h3>设计组件库</h3>
        <div className="components-grid">
          <div className="component-item">
            <h4>按钮</h4>
            <p>提供多种样式和尺寸的按钮组件，支持不同状态和交互效果。</p>
            <div className="component-preview">
              <button className="btn-primary">主要按钮</button>
              <button style={{ marginLeft: '10px', backgroundColor: '#6c757d' }}>次要按钮</button>
              <button style={{ marginLeft: '10px', backgroundColor: '#28a745' }}>成功按钮</button>
            </div>
          </div>
          
          <div className="component-item">
            <h4>表单控件</h4>
            <p>包括输入框、下拉选择框、复选框、单选按钮等表单控件。</p>
            <div className="component-preview">
              <input 
                type="text" 
                placeholder="输入框示例" 
                style={{ marginRight: '10px', padding: '5px' }}
              />
              <select style={{ padding: '5px' }}>
                <option>下拉选择</option>
                <option>选项1</option>
                <option>选项2</option>
              </select>
            </div>
          </div>
          
          <div className="component-item">
            <h4>卡片</h4>
            <p>用于展示相关信息的卡片组件，支持不同布局和样式。</p>
            <div className="component-preview">
              <div style={{ 
                border: '1px solid #ddd', 
                borderRadius: '4px', 
                padding: '10px', 
                width: '200px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}>
                <h5>卡片标题</h5>
                <p>卡片内容示例</p>
              </div>
            </div>
          </div>
          
          <div className="component-item">
            <h4>导航</h4>
            <p>包括顶部导航栏、侧边栏、面包屑等导航组件。</p>
            <div className="component-preview">
              <nav style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '10px',
                borderRadius: '4px'
              }}>
                <a href="#" style={{ marginRight: '15px' }}>首页</a>
                <a href="#" style={{ marginRight: '15px' }}>产品</a>
                <a href="#" style={{ marginRight: '15px' }}>文档</a>
                <a href="#">关于</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      <div className="design-colors">
        <h3>色彩系统</h3>
        <p>Sparrow 设计语言使用一套精心设计的色彩系统，包括主色调、辅助色和中性色：</p>
        <div className="colors-grid">
          <div className="color-item">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#646cff',
              borderRadius: '4px',
              marginBottom: '5px'
            }}></div>
            <p>主色调：#646cff</p>
          </div>
          <div className="color-item">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#535bf2',
              borderRadius: '4px',
              marginBottom: '5px'
            }}></div>
            <p>主色调深色：#535bf2</p>
          </div>
          <div className="color-item">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#747bff',
              borderRadius: '4px',
              marginBottom: '5px'
            }}></div>
            <p>主色调浅色：#747bff</p>
          </div>
          <div className="color-item">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#28a745',
              borderRadius: '4px',
              marginBottom: '5px'
            }}></div>
            <p>成功色：#28a745</p>
          </div>
          <div className="color-item">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#dc3545',
              borderRadius: '4px',
              marginBottom: '5px'
            }}></div>
            <p>错误色：#dc3545</p>
          </div>
          <div className="color-item">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#ffc107',
              borderRadius: '4px',
              marginBottom: '5px'
            }}></div>
            <p>警告色：#ffc107</p>
          </div>
        </div>
      </div>
      
      <div className="design-typography">
        <h3>排版系统</h3>
        <p>Sparrow 设计语言使用清晰的排版层次结构，确保内容易读性和视觉美感：</p>
        <div className="typography-examples">
          <h1 style={{ margin: '10px 0' }}>H1 - 标题层级 1</h1>
          <h2 style={{ margin: '10px 0' }}>H2 - 标题层级 2</h2>
          <h3 style={{ margin: '10px 0' }}>H3 - 标题层级 3</h3>
          <h4 style={{ margin: '10px 0' }}>H4 - 标题层级 4</h4>
          <p style={{ margin: '10px 0' }}>正文文本：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p style={{ margin: '10px 0', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>辅助文本：Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default SparrowDesign
