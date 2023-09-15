//data sent to server
export interface IUserRegistration {
  name: string
  email: string
  password: string
}

//data returned on registration from server
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

// export type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number }
// https://redux.js.org/introduction/core-concepts
