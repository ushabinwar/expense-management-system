import { getAllIncome } from "../../services/incomeService";
import { setError, setIncomes } from "./incomeSlice";

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