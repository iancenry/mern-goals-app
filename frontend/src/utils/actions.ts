import { IRegisterFormUserData, ILoginForm } from "../@types/form"
import { toast } from "react-toastify"

import { store } from "../app/store"
import { register, login } from "../features/auth/authSlice"
import { createGoal } from "../features/goals/goalSlice"

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

/**
 * Get Login Form data and login user
 * @param {Request} request - comes from the Form Component
 * @returns {null} - redirects to protected dashboard route
 */
export async function loginAction({ request }: { request: Request }) {
  const formData: FormData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  //validate the fields - switch with regex
  if (typeof email !== "string" || !email.includes("@")) {
    toast.error("That doesn't look like an email address")
    return
  }

  if (typeof password !== "string" || password.length < 6) {
    toast.error("Password must be > 6 characters")
    return
  }

  const userData: ILoginForm = { email, password }

  // login user
  store.dispatch(login(userData))
  return null
}

/**
 * Get Goal Data
 * @param {Request} request - comes from the Form Component
 * @returns {null}
 */
export async function goalAction({ request }: { request: Request }) {
  const formData: FormData = await request.formData()
  const text = formData.get("text")

  //validate the fields - switch with regex
  if (typeof text !== "string" || text.length < 1) {
    toast.error("Input a goal")
    return
  }

  const goalData = { text }

  // create goal
  store.dispatch(createGoal(goalData))
  return 0
}
