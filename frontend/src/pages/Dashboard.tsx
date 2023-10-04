import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import GoalForm from "../components/GoalForm"

const Dashboard = () => {
  const navigate = useNavigate()

  const { user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    // if not logged in redirect to login
    if (!user) navigate("/login")
  }, [user, navigate])

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />
    </>
  )
}

export default Dashboard
