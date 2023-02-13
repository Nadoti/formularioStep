import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from '../features/user'
import stepSlice from '../features/step'
import takeObjectInputSlice from '../features/takeObjectInput'
import alertEmptyField from '../features/alertEmptyField'
import listRegisteredUsers from '../features/listRegisteredUsers'
import changePageSlice from '../features/changePage'

const reducer = combineReducers({
  userSlice,
  stepSlice,
  takeObjectInputSlice,
  alertEmptyField,
  listRegisteredUsers,
  changePageSlice
})
const store = configureStore({ reducer })


export default store