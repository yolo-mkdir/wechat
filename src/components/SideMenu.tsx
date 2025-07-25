import styles from './SideMenu.module.scss'
import avatar from '../assets/2.png'
import useUserStore from '../store/user'
import { useNavigate } from 'react-router-dom'

import chatIcon from '../assets/chat.png'
import contactIcon from '../assets/contact.png'
import boxIcon from '../assets/box.png'
import folderIcon from '../assets/folder.png'
import photoIcon from '../assets/photo.png'
import starIcon from '../assets/star.png'
import miniappIcon from '../assets/miniapp.png'
import phoneIcon from '../assets/mobile.png'
import menuIcon from '../assets/menu.png'

const icons = [
  chatIcon,
  contactIcon,
  boxIcon,
  folderIcon,
  photoIcon,
  starIcon,
  miniappIcon,
  phoneIcon,
  menuIcon,
]

export default function SideMenu() {
  const navigate = useNavigate()
  const logout = useUserStore((state) => state.logout)
  const user = useUserStore((state) => state.user)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className={styles.sideMenu}>
      <div className={styles.avatarWrapper}>
        <img src={avatar} alt="头像" className={styles.avatar} />
      </div>

      <div className={styles.iconList}>
        {icons.map((icon, index) => (
          <div
            key={index}
            className={styles.iconContainer}
            style={{
              backgroundImage: `url(${icon})`,
              backgroundColor: 'transparent',
              backgroundSize: '80% 80%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      <div className={styles.logoutWrapper}>
        <div className={styles.usernameDisplay}>
          {user?.username || '未登录'}
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          退出
        </button>
      </div>
    </div>
  )
}
