import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import {
  Dashboard,
  Login,
  Register,
  action as loginAction,
  registerAction,
} from "./pages"
import Layout from "./components/Layout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="register" element={<Register />} action={registerAction} />
    </Route>
  )
)

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
