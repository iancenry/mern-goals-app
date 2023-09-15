import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { IUser, IAuthState, IUserRegistration } from "../../@types/redux"
import authService from "./authService"
import axios from "axios"

const user: IUser | null = JSON.parse(localStorage.getItem("user")!)

const initialState: IAuthState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

//Async Thunk Function - Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user: IUserRegistration, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      let message: string = ""

      //different checks where message might exist
      if (error instanceof Error) {
        message = error.message
      } else if (typeof error === "string") {
        message = error.toString()
      } else if (axios.isAxiosError(error)) {
        message = error?.response?.data?.message
      }
      //reject and send error message as payload
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// TODO add logout functionality

export const authSlice = createSlice({
  name: "auth", //state name
  initialState, //initial state value(s)
  reducers: {
    //reset values after registration
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ""
    },
  },
  // account for pending, fulfilled and reject states  when we make a register call
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload // returned from register function
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
