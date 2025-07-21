import { useEffect, useRef, useState } from 'react'
import ChatWindow from '../components/ChatWindow'

// 本地图标
import voiceIcon from '../assets/语音.png'
import emojiIcon from '../assets/笑脸.png'
import plusIcon from '../assets/加号.png'

type Message = {
  text: string
  from: 'left' | 'right'
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { text: '你好呀', from: 'left' }
  ])
  const [input, setInput] = useState('')
  const chatAreaRef = useRef<HTMLDivElement>(null)

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, from: 'right' }])
    setInput('')
  }

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <>
      {/* 聊天消息区 */}
      <div
        ref={chatAreaRef}
        style={{
          flex: 1,
          height: '100%',
          overflowY: 'auto',
          padding: '12px 16px',
          backgroundColor: '#fff'
        }}
      >
        <ChatWindow messages={messages} />
      </div>

      {/* 输入框区域 */}
      <div
        style={{
          height: '50px',
          backgroundColor: '#18191a',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          color: 'white'
        }}
      >
        <img src={voiceIcon} alt="语音" style={{ width: 20, height: 20 }} />
        <input
          type="text"
          placeholder="请输入..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{
            flex: 1,
            height: '28px',
            margin: '0 10px',
            padding: '4px 8px',
            borderRadius: '6px',
            border: 'none',
            outline: 'none'
          }}
        />
        <img src={emojiIcon} alt="表情" style={{ width: 20, height: 20, marginLeft: 6 }} />
        <img src={plusIcon} alt="加号" style={{ width: 20, height: 20, marginLeft: 6 }} />
      </div>
    </>
  )
}
