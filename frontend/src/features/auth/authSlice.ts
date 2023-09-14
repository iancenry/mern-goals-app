import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { IUser } from "../../@types/redux"
import authService from "./authService"

//Get user from localStorage
// TODO check if code is correct
const user: IUser | null = JSON.parse(localStorage.getItem("user") as string)

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

//Async Thunk Function - Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user: IUser, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      //TODO - define error type and thunkAPI type
      //different checks where message might exist
      const message: string =
        error.response?.data?.message || error.message || error.toString()
      //reject and send error message as payload
      return thunkAPI.rejectWithValue(message)
    }
  }
)

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
  //async functions to account for pending, fulfilled and reject states  when we make a register
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
        state.message = action.payload
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
