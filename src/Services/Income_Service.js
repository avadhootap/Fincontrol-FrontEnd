import { myAxios } from "./Helper";

export const addIncome=(id,income)=>{
    return myAxios.post(`/Fincontrol/income/AddIncomeById/${id}`,income)
    .then((response)=>response.income );
}