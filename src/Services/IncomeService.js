import axios from "axios";
const Income_API_BASE_URL='http://localhost:8080/Fincontrol';

class IncomeService{
    getincome(){
        return axios.get(Income_API_BASE_URL+"/income/getincome");
    }

    getIncomeById(id){
        return axios.get(Income_API_BASE_URL+"/income/getincomebyid/"+ id)
    }

    updateIncome(income){
        return axios.put(Income_API_BASE_URL+"/income/updateincomedata/"+ income.id, income)
    }

    deleteincome(incomeId){
        return axios.delete(Income_API_BASE_URL+"/income/deleteincome/"+incomeId)
     }
}
export default new IncomeService();
