import { toast } from "react-toastify"
import { signIn, signUp } from "../../services/userService"
import { addUser, setError } from "./userSlice"

export const asyncsignin = (newuser) => async (dispatch) => {
    try{
        const {data} = await signIn(newuser)
        dispatch(addUser(data?.user))
        return data;
    }catch(err){
        dispatch(setError(err?.response?.data?.message || "Login failed")); 
        throw err;
    }

}

export const asyncsignUp = (newuser) => async (dispatch) => {
    try{
        const {data} = await signUp(newuser)
        dispatch(addUser(data?.user))
        console.log("data:",data)
        return data
        
    }catch(err){
       
        dispatch(setError(err?.response?.data?.message || "Signup failed")); 
        throw err;
    }

}