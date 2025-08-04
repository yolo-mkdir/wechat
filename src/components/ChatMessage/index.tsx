// src/components/ChatMessage/index.tsx

import styles from './index.module.scss'

export type ChatMessageProps = {
  text: string
  from: 'left' | 'right'
  avatar: string
}

const ChatMessage = ({ text, from, avatar }: ChatMessageProps) => {
  return (
    <div className={from === 'left' ? styles.chat_left : styles.chat_right}>
      <div className={styles.avatar}>
        <img 
          src={avatar} 
          alt="头像" 
          width={40} 
          height={40} 
          loading="lazy"   // 懒加载优化
        />
      </div>
      <div className={from === 'left' ? styles.chat_bubble_left : styles.chat_bubble_right}>
        {text}
      </div>
    </div>
  )
}

export default ChatMessage
