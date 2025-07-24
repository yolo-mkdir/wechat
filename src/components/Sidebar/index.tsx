import useUserStore from '../../store/user'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const user = useUserStore((state) => state.user)
  const logout = useUserStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div>
      <div>
        <div>{user?.username || '未登录'}</div>
        <button onClick={handleLogout}>退出</button>
      </div>
    </div>
  )
}