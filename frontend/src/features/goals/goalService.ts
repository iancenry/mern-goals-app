import axios from "axios"
import { Goal } from "../../@types/functions"
import { IGoal } from "../../@types/redux"

//TODO add proxy in package.json and remove 'http://localhost:5000' part
const API_URL = "http://localhost:5000/api/goals/"

//Register user
const createGoal: Goal = async (goalData: IGoal, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, goalData, config)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data
}

const goalService = { createGoal }

export default goalService
