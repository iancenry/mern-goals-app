import { Form, useNavigation } from "react-router-dom"

import Spinner from "../components/Spinner"
import { FaSign } from "react-icons/fa"

import useReduxAuthState from "../hooks/useReduxAuthState"

const Login = () => {
  const navigation = useNavigation()

  const isLoading = useReduxAuthState()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSign /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className="form">
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
