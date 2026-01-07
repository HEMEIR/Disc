import express from 'express'

const router = express.Router()

// 代码转换API
router.post('/convert', (req, res) => {
  try {
    const { sourceCode, sourceLanguage, targetLanguage } = req.body
    
    if (!sourceCode || !sourceLanguage || !targetLanguage) {
      return res.status(400).json({ error: '源代码、源语言和目标语言不能为空' })
    }
    
    if (sourceLanguage === targetLanguage) {
      return res.json({ success: true, convertedCode: sourceCode })
    }
    
    // 这里应该实现实际的代码转换逻辑
    // 暂时返回模拟数据
    const mockConversions: Record<string, Record<string, string>> = {
      'javascript': {
        'python': `# JavaScript 转换为 Python\ndef hello_world():
    print("Hello, World!")
    
hello_world()`,
        'java': `// JavaScript 转换为 Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        'csharp': `// JavaScript 转换为 C#
using System;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("Hello, World!");
    }
}`
      },
      'python': {
        'javascript': `// Python 转换为 JavaScript
function helloWorld() {
    console.log("Hello, World!");
}

helloWorld();`,
        'java': `// Python 转换为 Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        'csharp': `// Python 转换为 C#
using System;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("Hello, World!");
    }
}`
      }
    }
    
    const convertedCode = mockConversions[sourceLanguage]?.[targetLanguage] || 
                       `// 暂不支持从 ${sourceLanguage} 到 ${targetLanguage} 的转换\n${sourceCode}`
    
    res.json({ success: true, convertedCode })
  } catch (error) {
    console.error('代码转换失败:', error)
    res.status(500).json({ error: '代码转换失败，请稍后重试' })
  }
})

// 支持的语言列表API
router.get('/languages', (req, res) => {
  try {
    const languages = [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
      { value: 'csharp', label: 'C#' },
      { value: 'go', label: 'Go' },
      { value: 'typescript', label: 'TypeScript' }
    ]
    
    res.json({ success: true, languages })
  } catch (error) {
    console.error('获取语言列表失败:', error)
    res.status(500).json({ error: '获取语言列表失败，请稍后重试' })
  }
})

export default router
