import { useEffect, useRef, useState } from 'react'
import styles from '../style.module.scss'
import ChatWindow from '../components/ChatWindow'
import back from '../assets/后退.png'
import dot from '../assets/点.png'
import emoji from '../assets/笑脸.png'
import plus from '../assets/加号.png'
import voice from '../assets/语音.png'

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
    <div className={styles.chat_wrapper}>
      {/* 顶部栏 */}
      <div className={styles.row}>
        <span className={styles.icon_wrapper}>
          <img src={back} className="img" alt="后退" />
        </span>
        <span className={styles.title}>用户1</span>
        <span className={styles.icon_wrapper}>
          <img src={dot} className="img" alt="点" />
        </span>
      </div>

      {/* 中间聊天区域 */}
      <section ref={chatAreaRef} className={styles.chat_section}>
        <ChatWindow messages={messages} />
      </section>

      {/* 底部输入区域 */}
      <div className={styles.input_area}>
        <img src={voice} className={styles.icon_img} alt="语音" />
        <input
          type="text"
          placeholder="请输入..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input_box}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <img src={emoji} className={styles.icon_img} alt="表情" />
        <img src={plus} className={styles.icon_img} alt="加号" />
      </div>
    </div>
  )
}
