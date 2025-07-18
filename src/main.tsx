import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { createRoot } from "react-dom/client"
import App from "./App"
import { lazy, Suspense, type ComponentType } from "react"

const lazyLoad = (dynamicImport: () => Promise<{ default: ComponentType<any> }>) => {
  const Component = lazy(dynamicImport)
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: lazyLoad(() => import("./pages/Home")),
      },
      {
        path: "about",
        element: lazyLoad(() => import("./pages/About")),
      },
    ],
  },
])

const container = document.getElementById("root")
if (container) {
  const root = createRoot(container)
  root.render(
    <RouterProvider router={router} />
  )
}
