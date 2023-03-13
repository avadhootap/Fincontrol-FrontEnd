import { myAxios } from "./Helper";

export const signUp=(user)=>{
    return myAxios.post("/Fincontrol/signup",user)
    .then((response)=>response.user );
};
export const login=(loginDetail)=>{
    return myAxios.post('/Fincontrol/token',loginDetail).then((response)=>response.data)
}