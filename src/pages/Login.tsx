import { useNavigate } from 'react-router-dom'
import useUserStore from '../store/user'

export default function Login() {
  const login = useUserStore((state) => state.login)
  const navigate = useNavigate()

  const handleLogin = () => {
    const fakeUser = { username: '张三', token: 'abc123' }
    login(fakeUser)
    navigate('/wechat')
  }

  return (
    <div>
      <h2>登录页</h2>
      <button onClick={handleLogin}>一键登录</button>
    </div>
  )
}
