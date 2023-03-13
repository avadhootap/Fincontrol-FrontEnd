import React, { useState, useEffect } from 'react';
import ExpenseService from '../Services/ExpenseService';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Balance from './Balance';
import GetExpense from './GetExpense';
import {confirmAlert} from 'react-confirm-alert'
import ExpenseSorting from './ExpenseSorting';
const ExpenseList = (props) => {
  
  const [expense, setExpense] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('data'));
  const id = user.dto.id;
  const name=user.dto.firstName

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Fincontrol/Expense/getUserExpenseById/${id}`);
        setExpense(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchExpense();
  }, []);

  const addExpense = () => {
    navigate('/addexpense');
  };

  const Incomes=()=>{
    navigate('/income')
  }

  const editExpense = (id) => {
    navigate(`/updateExpense/${id}`);
  };

  const deleteExpense = (id) => {
    ExpenseService.deleteExpense(id).then(() => {
      setExpense(expense.filter((expense) => expense.id !== id));
    });
  };

  const logout =() => {

    confirmAlert({
      title:'Confirm Logout',
      message:'Are you sure you want to logout?',
      buttons:[
        {
          label:'Yes',
          onClick:()=>{
            localStorage.removeItem('data');
            localStorage.removeItem('token');
            navigate('/login');
          }
        },
        {
          label:'No'
        }
      ]
    })
    
  }

  const Report=()=>{
    navigate("/report")
  }

  return (
    <div>
      
      <h2 className="text-center" style={{ color: 'cadetblue', marginTop:'20px' }}>EXPENSE LIST</h2>
      <h3 style={{marginLeft:'440px',color:'cadetblue'}} >Welcome {name.toUpperCase()}</h3>

      <div className="row"> 
      </div>
      <Balance></Balance>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
            <th className="text-center">Id</th>
              <th className="text-center">Amount</th>
              <th className="text-center">Date</th>
              <th className="text-center">Description</th>
              <th className="text-center">Category</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {expense.map((expenses) => (
              <tr key={expenses.id}>
                <td >{expenses.id}</td>
                <td>{expenses.amount}</td>
                <td>{expenses.date}</td>
                <td>{expenses.description}</td>
                <td>{expenses.categoryType}</td>
                <td>
                  <div >
                  <button onClick={() => editExpense(expenses.id)} className="btn btn-info">
                    Update
                  </button>
                  <button style={{ marginLeft: "10px" }} onClick={() => deleteExpense(expenses.id)} className="btn btn-danger">
                    Delete
                  </button>
                  </div>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
        <div style={{marginLeft:'850px',padding:'1000px,0px'}}>
            <GetExpense ></GetExpense>
        </div>
        <div className="text-center">
        <div style={{  padding: '0px 320px'}}>
        <button className="btn btn-primary" onClick={addExpense} style={{ color: 'white', margin: '10px'}}>
          Add Expense
        </button>
        <button  onClick={()=>Incomes()} className="btn btn-primary">Income List</button>&nbsp;&nbsp;
        <button  className="btn btn-primary" onClick={Report}>Report</button>&nbsp;&nbsp;
        <button  className="btn btn-danger" onClick={logout}>Logout</button>
        
        </div>
        </div>
        <ExpenseSorting></ExpenseSorting>
      </div>
    </div>
  );
};

export default ExpenseList;
