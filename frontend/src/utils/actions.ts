import { IRegisterFormUserData } from "../@types/form"
import { toast } from "react-toastify"

import { store } from "../app/store"
import { register } from "../features/auth/authSlice"

/**
 * Get Registration Form data and register user
 * @param {Request} request - comes from the Form Component
 * @returns {null} - redirects to protected dashboard route
 */
export async function registerAction({ request }: { request: Request }) {
  const formData: FormData = await request.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")

  //validate the fields - switch with regex
  if (typeof name !== "string" || name.length < 6) {
    toast.error("Please provide your real name")
    return
  }

  if (typeof email !== "string" || !email.includes("@")) {
    toast.error("That doesn't look like an email address")
    return
  }

  if (typeof password !== "string" || password.length < 6) {
    toast.error("Password must be > 6 characters")
    return
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match")
    return
  }

  const userData: IRegisterFormUserData = { name, email, password }

  // register user
  store.dispatch(register(userData))
  return null
}

// get login Form Data
export async function loginAction({ request }: { request: Request }) {
  const formData: FormData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  console.log(email, password)
  // // get url that directed user to login page; default to host route
  // const previousPathname =
  //   new URL(request.url).searchParams.get("redirectTo") || "/register"

  try {
    // const data = await loginUser({ email, password })
    // localStorage.setItem("loggedIn", true)
    // return redirect(previousPathname)
  } catch (error) {
    // return error.message
  }

  return null
}
