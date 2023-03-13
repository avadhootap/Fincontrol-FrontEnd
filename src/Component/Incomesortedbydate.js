import React, { useState, useEffect } from 'react';
import IncomeService from '../Services/IncomeService';
import { useNavigate } from 'react-router-dom';
import Balance from './Balance';
import GetIncome from './GetIncome';
import IncomeSorting from './IncomeSorting';

import axios from 'axios';

const Incomesortedbydate = (props) => {
  const [income, setIncome] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('data'));
  const id = user.dto.id;


  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Fincontrol/income/getIncomeSortedByDate/${id}`);
        setIncome(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchIncome();
  }, []);



  const back =()=>{
    navigate('/income')
  }



  return (
    <div>
      <h2 className="text-center" style={{color:'cadetblue',marginTop:'20px'}}>INCOME LIST SORTED BY DATE</h2>
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
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{marginLeft:'850px',padding:'1000px,0px'}}>
            <GetIncome></GetIncome>
        </div>
        <div style={{  padding: '0px 500px'}}>
        <button className="btn btn-dark" onClick={back}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Incomesortedbydate;
