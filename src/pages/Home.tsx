// src/pages/Home.tsx

import { useEffect, useRef } from 'react'
import ChatWindow from '../components/ChatWindow'
import type { User } from '../layout/WeChatLayout'

export default function Home({ user }: { user: User }) {
  const chatAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
    }
  }, [user.messages])

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
      <ChatWindow messages={user.messages} avatar={user.avatar} />
    </div>
  )
}
