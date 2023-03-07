import React, { useState, useEffect } from 'react';
import IncomeService from '../Services/IncomeService';
import { useNavigate } from 'react-router-dom';

const IncomeList = (props) => {
  const [income, setIncome] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    IncomeService.getincome().then((res) => {
      setIncome(res.data);
    });
  }, []);

  const addIncome = () => {
    navigate('/addincome');
  };

  const editIncome = (id) => {
    navigate(`/updateincome/${id}`);
  };

  const deleteIncome = (id) => {
    IncomeService.deleteincome(id).then(() => {
      setIncome(income.filter((income) => income.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center">Income List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addIncome}>
          Add Income
        </button>
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
            {income.map((incomes) => (
              <tr key={incomes.id}>
                <td>{incomes.amount}</td>
                <td>{incomes.date}</td>
                <td>{incomes.description}</td>
                <td>{incomes.categoryType}</td>
                <td>
                  <button
                    onClick={() => editIncome(incomes.id)}
                    className="btn btn-info">Update
                  </button>
                  <button style={{marginLeft:"10px"}}
                    onClick={() => deleteIncome(incomes.id)}
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

export default IncomeList;
