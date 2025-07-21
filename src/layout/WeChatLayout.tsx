// src/layout/WeChatLayout.tsx
import Sidebar from '../components/Sidebar'
import avatar from '../assets/1.png'
import styles from './WeChatLayout.module.scss'
import Home from '../pages/Home'
import { useState } from 'react'

type WeChatLayoutProps = {
  onSelectUser: () => void
}

export default function WeChatLayout({ onSelectUser }: WeChatLayoutProps) {
  const [showHome, setShowHome] = useState(false)

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

            {/* 消息 + 输入框 */}
            <Home />
          </div>
        )}
      </div>
    </div>
  )
}
