import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"
import expenseReducer from "./expense/expenseSlice"

export const store = configureStore({
    reducer: {
    user: userReducer,
    expense: expenseReducer,
    // income: incomeReducer,
  },
})

