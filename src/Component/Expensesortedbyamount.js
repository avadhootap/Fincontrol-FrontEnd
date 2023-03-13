import React, { useState, useEffect } from 'react';
import ExpenseService from '../Services/ExpenseService';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Balance from './Balance';
import GetExpense from './GetExpense';
import {confirmAlert} from 'react-confirm-alert'
import ExpenseSorting from './ExpenseSorting';

const Expensesortedbyamount = (props) => {
  
  const [expense, setExpense] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('data'));
  const id = user.dto.id;
  

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Fincontrol/Expense/getExpSortedByAmount/${id}`);
        setExpense(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchExpense();
  }, []);

  const back=()=>{
    navigate("/expense")
  }
  return (
    <div>
      
      <h2 className="text-center" style={{ color: 'cadetblue', marginTop:'20px' }}>EXPENSE LIST SORTED BY AMOUNT</h2>

      <div className="row"> 
      </div>
      <Balance></Balance>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead >
            <tr>
            <th className="text-center">Id</th>
              <th className="text-center">Amount</th>
              <th className="text-center">Date</th>
              <th className="text-center">Description</th>
              <th className="text-center">Category</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {expense.map((expenses) => (
              <tr key={expenses.id}>
                <td>{expenses.id}</td>
                <td>{expenses.amount}</td>
                <td>{expenses.date}</td>
                <td>{expenses.description}</td>
                <td>{expenses.categoryType}</td>
              </tr>
              
            ))}
          </tbody>
        </table>
        <div style={{marginLeft:'850px',padding:'1000px,0px'}}>
            <GetExpense ></GetExpense>
        </div>
        <div className="text-center">
        <div style={{  padding: '0px 550px'}}>
        <button  className="btn btn-dark" onClick={back}>back</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Expensesortedbyamount;
