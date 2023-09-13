import { Form, redirect, useNavigation } from "react-router-dom"
import { IRegisterFormData } from "../@types/form"
import { FaUser } from "react-icons/fa"

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
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    console.log(errors)
    return errors
  }

  // create the user and redirect
  // await createUser(email, password)
  // return redirect("/dashboard")
  return null
}

const Register = () => {
  const navigation = useNavigation()

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <Form method="post">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your name."
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-block"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting"
                ? "Registering..."
                : "Register"}
            </button>
          </div>
        </Form>
      </section>
    </>
  )
}

export default Register
