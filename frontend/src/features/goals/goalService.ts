import axios from "axios"

//TODO add proxy in package.json and remove 'http://localhost:5000' part
const API_URL = "http://localhost:5000/api/goals/"

//Register user
const createGoal = async (goalData: { text: string }, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)

  return response.data
}

// Get user goals
const deleteGoal = async (goalId: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(`${API_URL}${goalId}`, config)

  return response.data
}

const goalService = { createGoal, getGoals, deleteGoal }

export default goalService
