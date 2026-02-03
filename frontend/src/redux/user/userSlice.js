import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated:false,
    error:null,
    loading: false
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser : (state, action) =>{
            state.user = action.payload
            state.isAuthenticated = true
            state.error = null
        },
        signOut: (state, action) =>{
            state.user = null
            state.isAuthenticated = false
            state.error = null
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
        }
    }
})

export const {addUser, signOut, resetError, setError, setLoading, resetLoading} = userSlice.actions;

export default userSlice.reducer;