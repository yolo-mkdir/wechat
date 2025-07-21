// src/layout/WeChatLayout.tsx
import Sidebar from '../components/Sidebar'
import avatar from '../assets/1.png'
import styles from './WeChatLayout.module.scss'
import Home from '../pages/Home'
import { useState } from 'react'

import voiceIcon from '../assets/语音.png'
import emojiIcon from '../assets/笑脸.png'
import plusIcon from '../assets/加号.png'

type Message = {
  text: string
  from: 'left' | 'right'
}

type WeChatLayoutProps = {
  onSelectUser: () => void
}

export default function WeChatLayout({ onSelectUser }: WeChatLayoutProps) {
  const [showHome, setShowHome] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: '你好呀', from: 'left' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, from: 'right' }])
    setInput('')
  }

  return (
    <div className={styles.container}>
      {/* 左侧导航栏 */}
      <Sidebar />

      {/* 中间联系人列表 */}
      <div className={styles.chatList}>
        <div
          className={styles.userItem}
          onClick={() => {
            setShowHome(true)
            onSelectUser()
          }}
        >
          <img src={avatar} alt="用户头像" className={styles.userAvatar} />
          <span className={styles.username}>用户1</span>
        </div>
      </div>

      {/* 右侧聊天区域 */}
      <div className={styles.chatArea}>
        {showHome && (
          <div className={styles.chatWrapper}>
            {/* 顶部 */}
            <div className={styles.chatHeader}>
              <span className={styles.backBtn} onClick={() => setShowHome(false)}>
                &#x276E;
              </span>
              <span className={styles.chatTitle}>用户1</span>
              <span className={styles.chatMenu}>...</span>
            </div>

            {/* 聊天消息区域 */}
            <Home messages={messages} />

            {/* 输入框区域 */}
            <div className={styles.chatInputBar}>
              <img src={voiceIcon} alt="语音" style={{ width: 20, height: 20 }} />
              <input
                type="text"
                placeholder="请输入..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className={styles.chatInput}
              />
              <img src={emojiIcon} alt="表情" style={{ width: 20, height: 20, marginLeft: 6 }} />
              <img src={plusIcon} alt="加号" style={{ width: 20, height: 20, marginLeft: 6 }} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
