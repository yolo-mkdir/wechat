import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>这是首页</h1>
      <Link to="/about">去关于页</Link>
    </>
  )
}
