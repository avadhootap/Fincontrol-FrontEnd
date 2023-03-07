import { myAxios } from "./Helper";

export const addExpense=(expense)=>{
    return myAxios.post("/Fincontrol/Expense/addexpense",expense)
    .then((response)=>response.expense );


}