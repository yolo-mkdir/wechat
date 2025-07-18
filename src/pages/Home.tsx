// src/pages/Home.tsx
import { useState, useEffect, useRef } from 'react'
import ChatWindow from '../components/ChatWindow'
import styles from '../style.module.scss'

import back from '../assets/后退.png'
import dot from '../assets/点.png'
import voice from '../assets/语音.png'
import face from '../assets/笑脸.png'
import plus from '../assets/加号.png'

export default function Home() {
  type Message = { text: string; from: 'left' | 'right' }
  const [messages, setMessages] = useState<Message[]>([
    { text: '你好呀', from: 'left' },
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
    <div className={styles.chat_wrapper}>
      <div className={styles.row}>
        <span className={styles.icon_wrapper}><img src={back} className="img" alt="后退" /></span>
        <span className={styles.title}>用户1</span>
        <span className={styles.icon_wrapper}><img src={dot} className="img" alt="点" /></span>
      </div>

      <section ref={chatAreaRef}>
        <ChatWindow messages={messages} />
      </section>

      <div className={styles.input_area}>
        <img src={voice} alt="语音" className={styles.icon_img} />
        <input
          type="text"
          placeholder="请输入..."
          className={styles.input_box}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <img src={face} alt="表情" className={styles.icon_img} />
        <img src={plus} alt="更多" className={styles.icon_img} />
      </div>
    </div>
  )
}
