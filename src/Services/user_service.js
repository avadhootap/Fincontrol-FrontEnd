import { myAxios } from "./Helper";

export const signUp=(user)=>{
    return myAxios.post("/Fincontrol/user/adduser",user)
    .then((response)=>response.user );


}