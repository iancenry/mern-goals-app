import { Form } from "react-router-dom"

const GoalForm = () => {
  return (
    <section className="form">
      <Form method="post">
        <div className="form-group input-container">
          <label htmlFor="text">Goal</label>
          <input type="text" name="text" id="text" />
        </div>

        <div className="form-group">
          <button className="btn btn-block">Add Goal</button>
        </div>
      </Form>
    </section>
  )
}

export default GoalForm
