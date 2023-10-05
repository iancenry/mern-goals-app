import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { IGoal, IGoalState } from "../../@types/redux"

import axios from "axios"
import goalService from "./goalService"

const initialState: IGoalState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// Create new goal
export const createGoal = createAsyncThunk(
  "goals/create",
  async (goalData: IGoal, thunkAPI) => {
    try {
      // get token from redux state
      const authToken: string = thunkAPI.getState().auth.user.token
      return await goalService.createGoal(goalData, authToken)
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

// Get user's goals
export const getGoals = createAsyncThunk(
  "goals/getAll",
  async (_, thunkAPI) => {
    try {
      const authToken: string = thunkAPI.getState().auth.user.token
      return await goalService.getGoals(authToken)
    } catch (error) {
      let message: string = ""

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

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    //goal doesnt have to persist unlike user
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset: (_state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(action.payload)
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
