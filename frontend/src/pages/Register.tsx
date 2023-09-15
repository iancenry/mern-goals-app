import { Form, useNavigation, useNavigate } from "react-router-dom"

import { FaUser } from "react-icons/fa"
import Spinner from "../components/Spinner"

import { useAppSelector } from "../app/hooks"
import { useEffect } from "react"
import { toast } from "react-toastify"

import { reset } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"

const Register = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) toast.error(message)
    if (isSuccess || user) {
      navigate("/")
    }
    // reset all redux states back to false
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

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
