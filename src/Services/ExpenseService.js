import axios from "axios";
const Expense_API_BASE_URL='http://localhost:8080/Fincontrol';

  class ExpenseService{
    getExpense(id){
        return axios.get(Expense_API_BASE_URL+"/Expense/getUserExpenseById/"+id);
    }

    getExpenseById(id){
        return axios.get(Expense_API_BASE_URL+"/Expense/getExpenseByid/"+ id)
    }

    updateExpense(expense){
        return axios.put(Expense_API_BASE_URL+"/Expense/updateExpenseData/"+ expense.id, expense)
    }

    deleteExpense(expenseId){
        return axios.delete(Expense_API_BASE_URL+"/Expense/deleteExpense/"+expenseId)
     }
}
export default new ExpenseService();
