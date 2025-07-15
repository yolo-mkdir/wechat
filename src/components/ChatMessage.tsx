type ChatMessageProps = {
  text: string
  from: 'left' | 'right'
}

const ChatMessage = ({ text, from }: ChatMessageProps) => {
  return (
    <div className={from === 'left' ? 'chat_left' : 'chat_right'}>
      <div className="avatar">
        <img src={from === 'left' ? '/1.png' : '/2.png'} alt="头像" />
      </div>
      <div className={from === 'left' ? 'chat_bubble_left' : 'chat_bubble_right'}>
        {text}
      </div>
    </div>
  )
}

export default ChatMessage
