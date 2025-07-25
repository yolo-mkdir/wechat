// src/pages/Login.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../store/user'
import styles from './Login.module.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const login = useUserStore((state) => state.login)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username || !password) {
      setError('用户名和密码不能为空')
      return
    }
    if (username === 'admin' && password === '123456') {
      login({ username, token: 'fake-token' }) // ✅ 写入用户状态
      navigate('/wechat')                      // ✅ 跳转聊天页
    } else {
      setError('用户名或密码错误')
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>登录</h2>
        <input
          type="text"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">登录</button>
      </form>
    </div>
  )
}

export default Login
