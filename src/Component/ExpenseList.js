import React, { useState, useEffect } from 'react';
import ExpenseService from '../Services/ExpenseService'
import { useNavigate } from 'react-router-dom';

const ExpenseList = (props) => {
  const [expense, setExpense] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ExpenseService.getExpense().then((res) => {
        setExpense(res.data);
    });
  }, []);
  const addExpense = () => {
    navigate('/addexpense');
  };

  const editExpense = (id) => {
    navigate(`/updateexpense/${id}`);
  };

  const deleteExpense = (id) => {
    ExpenseService.deleteExpense(id).then(() => {
      setExpense(expense.filter((expense) => expense.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center" style={{color:'cadetblue'}}>EXPENSE LIST</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addExpense}>
          Add Expense
        </button>
        <br></br>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="text-center">Amount</th>
              <th className="text-center">Date</th>
              <th className="text-center">Description</th>
              <th className="text-center">Category</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {expense.map((expenses) => (
              <tr key={expenses.Expenseid}>
                <td>{expenses.amount}</td>
                <td>{expenses.date}</td>
                <td>{expenses.description}</td>
                <td>{expenses.categoryType}</td>
                <td>
                  <button
                    onClick={() => editExpense(expenses.id)}
                    className="btn btn-info">Update
                  </button>
                  <button style={{marginLeft:"10px"}}
                    onClick={() => deleteExpense(expenses.id)}
                    className="btn btn-danger">Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
