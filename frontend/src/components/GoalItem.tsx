import { DBGoal } from "../@types/redux"
import { useAppDispatch } from "../app/hooks"
import { deleteGoal } from "../features/goals/goalSlice"

const GoalItem = ({ goal }: { goal: DBGoal }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleString("en-US")}
        <h2>{goal.text}</h2>
        <button
          onClick={() => dispatch(deleteGoal(goal._id))}
          className="close"
        >
          X
        </button>
      </div>
    </div>
  )
}

export default GoalItem
