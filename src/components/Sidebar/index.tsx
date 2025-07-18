import styles from './index.module.scss'
import avatar from '../../assets/2.png'

// 图标导入（使用你整理过的文件名）
import chat from '../../assets/chat.png'
import contact from '../../assets/contact.png'
import box from '../../assets/box.png'
import folder from '../../assets/folder.png'
import photo from '../../assets/photo.png'
import explore from '../../assets/explore.png'
import star from '../../assets/star.png'
import miniapp from '../../assets/miniapp.png'
import mobile from '../../assets/mobile.png'
import menu from '../../assets/menu.png'

// 图标列表（顺序和微信左侧一致）
const icons = [
    chat,
    contact,
    box,
    folder,
    photo,
    explore,
    star,
    miniapp,
    mobile,
    menu,
]

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <img src={avatar} alt="头像" className={styles.avatar} />
            <div className={styles.iconList}>
                {icons.map((icon, index) => (
                    <img key={index} src={icon} alt="" className={styles.icon} />
                ))}
            </div>
        </div>
    )
}
