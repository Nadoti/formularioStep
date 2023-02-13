import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
  step: 1
}

const stepSlice = createSlice({
  name: 'stepSlice',
  initialState,
  reducers: {
    increaseStep: (state) => {
      state.step++
    },
    decreaseStep: (state) => {
      state.step--
    },
    restartStep: (state) => {

      state.step = 1

    }
  }
})

export const { increaseStep, decreaseStep, restartStep } = stepSlice.actions

export default stepSlice.reducer