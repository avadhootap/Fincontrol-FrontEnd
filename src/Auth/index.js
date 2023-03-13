export const dologin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next()
};

// export const isLoggedIn=()=>{
//     let data=localStorage.getItem("data")
//     if(data==null){
//         return false;
//     }else{
//         return true;
//     }
// };

// export const dologout=(next)=>{
//     localStorage.removeItem("data")
//     next()
// }

// export const getCurrentuserDetails=()=>{
//     if(isLoggedIn){
//         return JSON.parse(localStorage.getItem("data")) 
//     }else{
//         return false;
//     }
// }