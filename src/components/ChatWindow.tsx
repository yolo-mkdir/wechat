import ChatMessage from './ChatMessage'

type Message = {
  text: string
  from: 'left' | 'right'
}

type ChatWindowProps = {
  messages: Message[]
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
  return (
    <section id="chatArea">
      {messages.map((msg, index) => (
        <ChatMessage key={index} text={msg.text} from={msg.from} />
      ))}
    </section>
  )
}

export default ChatWindow
