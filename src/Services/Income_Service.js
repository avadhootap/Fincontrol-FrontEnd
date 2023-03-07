import { myAxios } from "./Helper";

export const addIncome=(income)=>{
    return myAxios.post("/Fincontrol/income/addincome",income)
    .then((response)=>response.income );


}