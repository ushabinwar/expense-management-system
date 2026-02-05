import { createExpense, deleteExpense, getAllExpense } from "../../services/expenseService";
import { addExpense, removeExpense, setError, setExpenses } from "./expenseSlice";

export const expenseCreate = (payload) => async (dispatch) => {
    try{
        const {data} = await createExpense(payload)
        dispatch(addExpense(data?.expense))
        return data;
        
    }catch(err){
       
        dispatch(setError(err?.response?.data?.message || "error in expense create")); 
        throw err;
    }

}

export const allExpense = () => async (dispatch) => {
    try{
        const {data} = await getAllExpense()
        dispatch(setExpenses(data?.allExpenses))
        return data;
        
    }catch(err){
       
        dispatch(setError(err?.response?.data?.message || "error in expense fetch")); 
        throw err;
    }

}


export const expenseDelete = (id) => async (dispatch) => {
    try{
        const {data} = await deleteExpense(id)
        dispatch(removeExpense(id))
        return data;
        
    }catch(err){
       
        dispatch(setError(err?.response?.data?.message || "error in expense delete")); 
        throw err;
    }

}