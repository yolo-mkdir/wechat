import ChatMessage from '../ChatMessage'
import styles from './index.module.scss'

type Message = {
  text: string
  from: 'left' | 'right'
}

type ChatWindowProps = {
  messages: Message[]
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
  return (
    <section className={styles.chat_section}>
      {messages.map((msg, index) => (
        <ChatMessage key={index} text={msg.text} from={msg.from} />
      ))}
    </section>
  )
}


export default ChatWindow
