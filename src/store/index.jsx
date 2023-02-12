import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from '../features/user'
import stepSlice from '../features/step'

const reducer = combineReducers({ userSlice, stepSlice })
const store = configureStore({ reducer })


export default store