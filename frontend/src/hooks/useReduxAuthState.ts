import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { reset } from "../features/auth/authSlice"

const useReduxAuthState = () => {
  const dispatch = useAppDispatch()
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

  return isLoading
}

export default useReduxAuthState
