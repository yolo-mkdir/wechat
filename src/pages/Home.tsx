// src/pages/Home.tsx
import { useEffect, useRef } from 'react'
import ChatWindow from '../components/ChatWindow'

type Message = {
  text: string
  from: 'left' | 'right'
}

export default function Home({ messages }: { messages: Message[] }) {
  const chatAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div
      ref={chatAreaRef}
      style={{
        flex: 1,
        height: '100%',
        overflowY: 'auto',
        padding: '12px 16px',
        backgroundColor: '#fff'
      }}
    >
      <ChatWindow messages={messages} />
    </div>
  )
}
