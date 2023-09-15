import { redirect } from "react-router-dom"
import { IRegisterFormData } from "../@types/form"
import { useAppDispatch } from "../app/hooks"
import { toast } from "react-toastify"

export async function registerAction({ request }: { request: Request }) {
  const formData: FormData = await request.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")

  console.log(name, email, password, confirmPassword)

  const errors: IRegisterFormData = {} as IRegisterFormData

  //validate the fields - switch with regex
  if (typeof name !== "string" || name.length < 6) {
    errors.name = "Please provide your real name"
  }

  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "That doesn't look like an email address"
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.password = "Password must be > 6 characters"
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match"
    toast.error("Passwords do not match")
  }

  // create the user and redirect
  //   await createUser(email, password)
  // return redirect("/dashboard")
  return { name, email, password, confirmPassword }
}

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
