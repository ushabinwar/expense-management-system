import { deleteIncome, getAllIncome } from "../../services/incomeService";
import { removeIncome, setError, setIncomes } from "./incomeSlice";

export const asyncAllIncome = () => async (dispatch) => {
    try{
        const {data} = await getAllIncome()
        dispatch(setIncomes(data))
        return data;
        
    }catch(err){
       
        dispatch(setError(err?.response?.data?.message || "error in expense fetch")); 
        throw err;
    }

}

export const asyncIncomeDelete = (id) => async (dispatch) => {
    try{
        const data = await deleteIncome(id)
        dispatch(removeIncome(id))
        return data;
        
    }catch(err){
       
        dispatch(setError(err?.response?.data?.message || "error in expense delete")); 
        throw err;
    }

}