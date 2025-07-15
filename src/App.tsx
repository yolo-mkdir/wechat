import { useEffect, useRef, useState } from 'react'
import ChatWindow from './components/ChatWindow'
import './style.css'

function App() {
  const [messages, setMessages] = useState([
    { text: '你好呀', from: 'left' as const },
    { text: '你吃了吗', from: 'right' as const },
  ])
  const [input, setInput] = useState('')
  const chatAreaRef = useRef<HTMLDivElement>(null)

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, from: 'right' }])
    setInput('')
  }

  // 自动滚动到底部
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="chat_wrapper">
      <div className="row">
        <span className="icon_wrapper"><img src="../assets/后退.png" className="img" alt="后退" /></span>
        <span className="title">用户1</span>
        <span className="icon_wrapper"><img src="../assets/点.png" className="img" alt="点" /></span>
      </div>

      <section id="chatArea" ref={chatAreaRef}>
        <ChatWindow messages={messages} />
      </section>

    <div className="input_area">
      <img src="../assets/语音.png" alt="语音" className="icon_img" />
      <input
        type="text"
        placeholder="请输入..."
        className="input_box"
        id="inputBox"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <img src="../assets/笑脸.png" alt="表情" className="icon_img" />
      <img src="../assets/加号.png" alt="更多" className="icon_img" />
    </div>

    </div>
  )
}

export default App
