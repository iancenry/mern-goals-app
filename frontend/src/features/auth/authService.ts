// service file - all http requests
import axios from "axios"
import { IUserRegistration } from "../../@types/redux"
import { Register, Login } from "../../@types/functions"

//TODO add proxy in package.json and remove 'http://localhost:5000' part
const API_URL = "http://localhost:5000/api/users/"

//Register user
const register: Register = async (userData: IUserRegistration) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data
}

//Login user
const login: Login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data
}

//Logout User
const logout = () => {
  localStorage.removeItem("user")
}

const authService = {
  register,
  logout,
  login,
}

export default authService
