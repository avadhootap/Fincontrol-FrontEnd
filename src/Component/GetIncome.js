import React, { useState, useEffect } from "react";
import axios from "axios";

function GetIncome() {
  const user = JSON.parse(localStorage.getItem("data"));
  const id = user.dto.id;
  const [income, setIncome] = useState(null);

  useEffect(() => {
    async function fetchIncome() {
      try {
        const response = await axios.get(
          `http://localhost:8080/Fincontrol/income/getTotalIncome/${id}`
        );
        const IncomeObj = { income: response.data };
        setIncome(IncomeObj);
        console.log(IncomeObj.income);
      } catch (error) {
        console.error(error);
      }
    }
    fetchIncome();
  }, []);

  return (
    <div >
      <div style={{marginTop:'5px'}}>
        {income === null ? (
          <p>Loading...</p>
        ) : (
          <h4  style={{color:'red' ,backgroundColor:'yellow'}} className="display-6">
            Income : {income.income} .Rs
          </h4>
        )}
      </div>
    </div>
  );
}

export default GetIncome;
