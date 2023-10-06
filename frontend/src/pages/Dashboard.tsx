import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import GoalForm from "../components/GoalForm"

import Spinner from "../components/Spinner"
import { getGoals, reset } from "../features/goals/goalSlice"
import GoalItem from "../components/GoalItem"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user } = useAppSelector((state) => state.auth)

  const { goals, isLoading, isError, message } = useAppSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    // if not logged in redirect to login
    if (!user) navigate("/login")

    dispatch(getGoals())
    // TODO : Fix
    //unmount goals on logout
    // return () => dispatch(reset())
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      <div className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </div>
    </>
  )
}

export default Dashboard
