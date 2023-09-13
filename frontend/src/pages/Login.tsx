import {
  Form,
  // useLoaderData,
  // redirect,
  // useActionData,
  useNavigation,
} from "react-router-dom"
import { FaSign } from "react-icons/fa"

export async function action({ request }: { request: Request }) {
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

const Login = () => {
  // const errorMessage = useActionData()
  // const message = useLoaderData()
  const navigation = useNavigation()

  return (
    <>
      <section className="heading">
        <h1>
          <FaSign /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className="form">
        {/* {errorMessage && <h3 className="red">{errorMessage}</h3>} */}
        {/* {message && <h3 className="red">{message}</h3>} */}
        <Form method="post">
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <button
              className="btn btn-block"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Logging In..." : "Log In"}
            </button>
          </div>
        </Form>
      </section>
    </>
  )
}

export default Login
