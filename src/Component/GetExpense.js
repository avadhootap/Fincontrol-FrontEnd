import React, { useState, useEffect } from "react";
import axios from "axios";

function GetExpense() {
  const user = JSON.parse(localStorage.getItem("data"));
  const id = user.dto.id;
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    async function fetchExpense() {
      try {
        const response = await axios.get(
          `http://localhost:8080/Fincontrol/Expense/getTotalExp/${id}`
        );
        const ExpenseObj = { expense: response.data };
        setExpense(ExpenseObj);
        console.log(ExpenseObj.expense);
      } catch (error) {
        console.error(error);
      }
    }
    fetchExpense();
  }, []);

  return (
    <div >
      <div style={{marginTop:'5px'}}>
        {expense === null ? (
          <p>Loading...</p>
        ) : (
          <h4  style={{color:'red' ,backgroundColor:'yellow'}} className="display-6">
            Expense : {expense.expense} .Rs
          </h4>
        )}
      </div>
    </div>
  );
}

export default GetExpense;
