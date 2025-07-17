import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from "./App"
import Home from "./Home"
import ErrorPage from "./ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
