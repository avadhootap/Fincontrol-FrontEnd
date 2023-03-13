import React, { useState, useEffect } from "react";
import axios from "axios";

function Balance() {
  const user = JSON.parse(localStorage.getItem("data"));
  const id = user.dto.id;
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      try {
        const response = await axios.get(
          `http://localhost:8080/Fincontrol/Balance/getBalance/${id}`
        );
        const balanceObj = { balance: response.data };
        setBalance(balanceObj);
        console.log(balanceObj.balance);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBalance();
  }, []);

  return (
    <div style={{marginLeft:"800px"}}>
      <div className="container mt-5">
        {balance === null ? (
          <p>Loading...</p>
        ) : (
          <h4 className="display-6" style={{ color: "green" }}>
            BALANCE : {balance.balance} .Rs
          </h4>
        )}
      </div>
    </div>
  );
}

export default Balance;
