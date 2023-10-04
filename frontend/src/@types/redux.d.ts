//data sent to server on register
export interface IUserRegistration {
  name: string
  email: string
  password: string
}

//data sent to server on login
export interface IUserLogin {
  email: string
  password: string
}

//data returned on registration/login from server
export interface IUser {
  _id: string
  name: string
  email: string
  token: string
}

//authSlice initial state
export interface IAuthState {
  user: IUser | null
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
}

//Goal
export interface IGoal {
  text: string
}

//goalSlice initial state
export interface IGoalState {
  goals: IGoal[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
}
