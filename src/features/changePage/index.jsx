import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
  home: true,
  newClient: false
}

const changePageSlice = createSlice({
  name: 'changePageSlice',
  initialState,
  reducers: {
    handleNewClient: () => {
      return {
        home: false,
        newClient: true
      }
    },
    handleListClient: () => {
      return {
        home: false,
        newClient: false
      }
    }
  }
})

export const { handleNewClient, handleListClient } = changePageSlice.actions

export default changePageSlice.reducer