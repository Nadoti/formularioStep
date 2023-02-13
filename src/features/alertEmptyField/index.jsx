import { createSlice } from '@reduxjs/toolkit'


export const initialState = false


const alertEmptyField = createSlice({
  name: 'alertEmptyField',
  initialState,
  reducers: {
    changeAlertOpen: (state) => {
      return state = true
    },
    changeAlertClose: (state) => {
      return state = false
    },
  }
})

export const { changeAlertOpen, changeAlertClose } = alertEmptyField.actions

export default alertEmptyField.reducer