import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
    incomes: [],
    loading: false,
    error: null
}

export const incomeSlice = createSlice({
    name:"income",
    initialState,
    reducers:{
        setIncomes: (state, action) => {
            state.incomes = action.payload;
        },
        setUpdateIncome : (state, action) =>{
            const index = state.incomes.findIndex((exp)=> exp._id === action?.payload?._id)

            if (index !== -1) {
               state.incomes[index] = action.payload;
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
        removeIncome: (state, action) => {
            state.incomes = state.incomes.filter((exp) => exp._id !== action.payload);
        }
    }
})

export const { setIncomes, setUpdateIncome, removeIncome, resetError, setError, setLoading, resetLoading} = incomeSlice.actions;

export default incomeSlice.reducer;