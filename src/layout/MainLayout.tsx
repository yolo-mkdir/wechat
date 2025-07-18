import Sidebar from '../components/Sidebar'

export default function MainLayout() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            {/* 右侧继续放联系人/聊天区 */}
        </div>
    )
}
