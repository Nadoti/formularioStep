import { createSlice } from '@reduxjs/toolkit'


export const initialState = {}

const takeObjectInputSlice = createSlice({
  name: 'takeObjectInputSlice',
  initialState,
  reducers: {
    changeObjectData: (state, action) => {
      return state = action.payload
    },
  }
})

export const { changeObjectData } = takeObjectInputSlice.actions

export default takeObjectInputSlice.reducer