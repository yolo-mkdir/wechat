import avatar1 from '../../assets/1.png'
import avatar2 from '../../assets/2.png'
import styles from './index.module.scss'

type ChatMessageProps = {
  text: string
  from: 'left' | 'right'
}

const ChatMessage = ({ text, from }: ChatMessageProps) => {
  return (
    <div className={from === 'left' ? styles.chat_left : styles.chat_right}>
      <div className={styles.avatar}>
        <img src={from === 'left' ? avatar1 : avatar2} alt="头像" />
      </div>
      <div className={from === 'left' ? styles.chat_bubble_left : styles.chat_bubble_right}>
        {text}
      </div>
    </div>
  )
}

export default ChatMessage