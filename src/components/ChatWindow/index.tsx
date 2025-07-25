// ✅ src/components/ChatWindow/index.tsx

import ChatMessage from '../ChatMessage'
import styles from './index.module.scss'
import type { Message } from '../../layout/WeChatLayout'

export type ChatWindowProps = {
  messages: Message[]
  avatar: string
}

const ChatWindow = ({ messages, avatar }: ChatWindowProps) => {
  return (
    <section className={styles.chat_section}>
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          text={msg.text}
          from={msg.from}
          avatar={msg.from === 'left' ? avatar : '/src/assets/2.png'}
        />
      ))}
    </section>
  )
}

export default ChatWindow;