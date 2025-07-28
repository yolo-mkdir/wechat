// src/layout/WeChatLayout.tsx

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SideMenu from '../components/SideMenu'
import avatar1 from '../assets/1.png'
import avatar2 from '../assets/2.png'
import avatar3 from '../assets/3.jpg'
import styles from './WeChatLayout.module.scss'
import Home from '../pages/Home'

import voiceIcon from '../assets/语音.png'
import emojiIcon from '../assets/笑脸.png'
import plusIcon from '../assets/加号.png'

export type Message = {
  text: string
  from: 'left' | 'right'
}

export type User = {
  id: number
  name: string
  avatar: string
  messages: Message[]
}

export default function WeChatLayout() {
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: '用户1',
      avatar: avatar1,
      messages: [{ text: '你好呀', from: 'left' }]
    },
    {
      id: 2,
      name: '用户2',
      avatar: avatar3,
      messages: [{ text: '去吃饭', from: 'left' }]
    }
  ])
  const [input, setInput] = useState('')

  const currentUser = users.find((u) => u.id === currentUserId)

  const sendMessage = () => {
    if (!input.trim() || currentUserId === null) return
    const updatedUsers = users.map((user) => {
      if (user.id === currentUserId) {
        return {
          ...user,
          messages: [...user.messages, { text: input, from: 'right' }]
        }
      }
      return user
    })
    setUsers(updatedUsers)
    setInput('')
  }

  return (
    <div className={styles.container}>
      <SideMenu />
      <Sidebar />

      <div className={styles.chatList}>
        {users.map((user) => (
          <div
            key={user.id}
            className={styles.userItem}
            onClick={() => setCurrentUserId(user.id)}
          >
            <img src={user.avatar} alt="用户头像" className={styles.userAvatar} />
            <span className={styles.username}>{user.name}</span>
          </div>
        ))}
      </div>

      <div className={styles.chatArea}>
        {currentUser ? (
          <div className={styles.chatWrapper}>
            <div className={styles.chatHeader}>
              <span className={styles.backBtn} onClick={() => setCurrentUserId(null)}>
                &#x276E;
              </span>
              <span className={styles.chatTitle}>{currentUser.name}</span>
              <span className={styles.chatMenu}>...</span>
            </div>

            <Home user={currentUser} />

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
        ) : null}
      </div>
    </div>
  )
}
