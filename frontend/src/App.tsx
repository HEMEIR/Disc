import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ContractReview from './components/ContractReview'
import LegalQA from './components/LegalQA'
import SparrowDesign from './components/SparrowDesign'
import LanguageConverter from './components/LanguageConverter'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/" className="header-logo">
            <h1>Discernment</h1>
          </Link>
          <nav>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/contract-review">合同合规性审查</Link></li>
              <li><Link to="/legal-qa">法律知识问答</Link></li>
              <li><Link to="/sparrow-design">Sparrow设计语言</Link></li>
              <li><Link to="/language-converter">语言转换引擎</Link></li>
            </ul>
          </nav>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contract-review" element={<ContractReview />} />
            <Route path="/legal-qa" element={<LegalQA />} />
            <Route path="/sparrow-design" element={<SparrowDesign />} />
            <Route path="/language-converter" element={<LanguageConverter />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>© 2024 Discernment 平台. 保留所有权利.</p>
        </footer>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div className="home">
      <h2>欢迎使用 Discernment 平台</h2>
      <p>我们提供合同合规性审查、法律知识问答服务，并展示 Sparrow 设计语言和编程语言转换引擎。</p>
      <div className="features">
        <Link to="/contract-review" className="feature-link">
          <div className="feature">
            <h3>合同合规性审查</h3>
            <p>上传合同文件，我们将自动检查合同的合规性，识别潜在风险。</p>
          </div>
        </Link>
        <Link to="/legal-qa" className="feature-link">
          <div className="feature">
            <h3>法律知识问答</h3>
            <p>向我们提问法律问题，获取专业、准确的答案。</p>
          </div>
        </Link>
        <Link to="/sparrow-design" className="feature-link">
          <div className="feature">
            <h3>Sparrow 设计语言</h3>
            <p>了解我们的 Sparrow 设计语言，查看设计规范和组件库。</p>
          </div>
        </Link>
        <Link to="/language-converter" className="feature-link">
          <div className="feature">
            <h3>编程语言转换引擎</h3>
            <p>体验我们开发的编程语言转换引擎，将代码在不同语言间转换。</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default App
