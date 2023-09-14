// service file - all http requests
import axios from "axios"
import { IUser } from "../../@types/redux"

const API_URL = "/api/users/"

type register = (userData: IUser) => Promise<IUser>

//Register user
const register: register = async (userData: IUser) => {
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

// TODO define function TS type  == (userData: IUser) => AxiosResponse<IUser>
// TODO check if my type in line  is the correct way
