
import { createSlice } from '@reduxjs/toolkit'


export const initialState = []

const listRegisteredUsers = createSlice({
  name: 'listRegisteredUsers',
  initialState,
  reducers: {
    increaseUserList: (state, action) => {
      state.push(action.payload)
    },
    attStateList: (state, action) => {
      return state = action.payload
    }
  }
})

export const { increaseUserList, attStateList } = listRegisteredUsers.actions

export default listRegisteredUsers.reducer