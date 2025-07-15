import avatar1 from '../assets/1.png'
import avatar2 from '../assets/2.png'

type ChatMessageProps = {
  text: string
  from: 'left' | 'right'
}

const ChatMessage = ({ text, from }: ChatMessageProps) => {
  return (
    <div className={from === 'left' ? 'chat_left' : 'chat_right'}>
      <div className="avatar">
        <img src={from === 'left' ? avatar1 : avatar2} alt="头像" />
      </div>
      <div className={from === 'left' ? 'chat_bubble_left' : 'chat_bubble_right'}>
        {text}
      </div>
    </div>
  )
}

export default ChatMessage
