import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
  step: 1
}

const stepSlice = createSlice({
  name: 'stepSlice',
  initialState,
  reducers: {
    increaseStep: (state) => {
      console.log(state.step)
      state.step++
    },
    decreaseStep: (state) => {
      state.step--
    },
  }
})

export const { increaseStep, decreaseStep } = stepSlice.actions

export default stepSlice.reducer