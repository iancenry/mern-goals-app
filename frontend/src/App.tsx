import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Dashboard, Login, Register } from "./pages"
import Layout from "./components/Layout"

import { loginAction, registerAction } from "./utils/actions"

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
      <ToastContainer />
    </>
  )
}

export default App

// TODO add cookies and remove use of local storage
