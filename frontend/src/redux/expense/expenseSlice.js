import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
    expenses: [],
    loading: false,
    error: null
}

export const expenseSlice = createSlice({
    name:"expense",
    initialState,
    reducers:{
        addExpense : (state, action) =>{
            state.expenses.push(action.payload)

        },
        setExpenses: (state, action) => {
            state.expenses = action.payload;
        },
        setUpdateExpesne : (state, action) =>{
            const index = state.expenses.findIndex((exp)=> exp._id === action?.payload?._id)

            if (index !== -1) {
               state.expenses[index] = action.payload;
            }
        },
        setLoading : (state, action) => {
            state.loading = true
        },
        resetLoading : (state, action) => {
            state.loading = false
        },
        setError : (state, action) => {
            state.error = action.payload
        },
        resetError : (state, action) => {
            state.error = null
        },
        removeExpense: (state, action) => {
            state.expenses = state.expenses.filter((exp) => exp._id !== action.payload);
        }
    }
})

export const {addExpense, setExpenses, setUpdateExpesne, removeExpense, resetError, setError, setLoading, resetLoading} = expenseSlice.actions;

export default expenseSlice.reducer;