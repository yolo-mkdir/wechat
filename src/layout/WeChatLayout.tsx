import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SideMenu from '../components/SideMenu'
import avatar from '../assets/1.png'
import styles from './WeChatLayout.module.scss'
import Home from '../pages/Home'

import voiceIcon from '../assets/语音.png'
import emojiIcon from '../assets/笑脸.png'
import plusIcon from '../assets/加号.png'

export type Message = {
  text: string
  from: 'left' | 'right'
}

export type WeChatLayoutProps = {
  onSelectUser: () => void
}

export default function WeChatLayout({ onSelectUser }: WeChatLayoutProps) {
  const [showHome, setShowHome] = useState(true) // ✅ 初始为 true，避免页面空白
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
      <SideMenu />
      <Sidebar />

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

      <div className={styles.chatArea}>
        {showHome ? (
          <div className={styles.chatWrapper}>
            <div className={styles.chatHeader}>
              <span className={styles.backBtn} onClick={() => setShowHome(false)}>
                &#x276E;
              </span>
              <span className={styles.chatTitle}>用户1</span>
              <span className={styles.chatMenu}>...</span>
            </div>

            <Home messages={messages} />

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
        ) : (
          <div className={styles.emptyHint}>
            👈 请选择一个联系人开始聊天
          </div>
        )}
      </div>
    </div>
  )
}
