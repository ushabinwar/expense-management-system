import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"
import expenseReducer from "./expense/expenseSlice"
import incomeReducer from "./income/incomeSlice"

export const store = configureStore({
    reducer: {
    user: userReducer,
    expense: expenseReducer,
    income: incomeReducer,
  },
})

