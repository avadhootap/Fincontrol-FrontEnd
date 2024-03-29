import React, { useState, useEffect } from 'react';
import IncomeService from '../Services/IncomeService';
import { useNavigate } from 'react-router-dom';
import Balance from './Balance';
import GetIncome from './GetIncome';
import IncomeSorting from './IncomeSorting';

import axios from 'axios';

const IncomeList = (props) => {
  const [income, setIncome] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('data'));
  const id = user.dto.id;


  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Fincontrol/income/getIncomeListByUser/${id}`);
        setIncome(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchIncome();
  }, []);

  const addIncome = () => {
    navigate('/addincome');
  };

  const editIncome = (id) => {
    navigate(`/updateincome/${id}`);
  };

  const back =()=>{
    navigate('/expense')
  }

  const deleteIncome = (id) => {
    IncomeService.deleteincome(id).then(() => {
      setIncome(income.filter((income) => income.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center" style={{color:'cadetblue',marginTop:'20px'}}>INCOME LIST</h2>
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
            {income.map((incomes) => (
              <tr key={incomes.id}>
                <td>{incomes.id}</td>
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
        <div style={{marginLeft:'850px',padding:'1000px,0px'}}>
            <GetIncome></GetIncome>
        </div>
        <div style={{  padding: '0px 480px'}}>
        <button className="btn btn-primary" onClick={addIncome}>Add Income</button>&nbsp;&nbsp;
        <button className="btn btn-dark" onClick={back}>Back</button>
        </div>
        <IncomeSorting></IncomeSorting>
      </div>
    </div>
  );
};

export default IncomeList;
