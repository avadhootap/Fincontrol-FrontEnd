import { myAxios } from "./Helper";

export const addExpense=(id,expense)=>{
    return myAxios.post(`/Fincontrol/Expense/addIncomeByUserId/${id}`,expense)
    .then((response)=>response.expense );


}