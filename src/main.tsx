// src/main.tsx
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { lazy, Suspense, type ComponentType } from 'react'
import App from './App'

const lazyLoad = (loader: () => Promise<{ default: ComponentType<any> }>) => {
  const Component = lazy(loader)
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <Component />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: lazyLoad(() => import('./pages/Login')),
  },
  {
    path: '/wechat',
    element: <App />,
  },
  {
    path: '/home',
    element: lazyLoad(() => import('./pages/Home')),
  },
  {
    path: '/about',
    element: lazyLoad(() => import('./pages/About')),
  },
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
