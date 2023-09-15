// service file - all http requests
import axios from "axios"
import { IUser, IUserRegistration } from "../../@types/redux"

//TODO add proxy in package.json and remove 'http://localhost:5000' part
const API_URL = "http://localhost:5000/api/users/"

type register = (userData: IUserRegistration) => Promise<IUser>

//Register user
const register: register = async (userData: IUserRegistration) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data
}

const authService = {
  register,
}

export default authService

// TODO define function TS type  == (userData: IUserRegistration) => AxiosResponse<IUser>
