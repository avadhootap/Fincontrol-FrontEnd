import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Balance from './Balance';


const Report = (props) => {

  const [expense, setExpense] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem('data'));
  const ids=user.dto.id;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  }

  const generateReport = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/Fincontrol/Expense/getreport/${ids}/${startDate}/${endDate}`);
      setExpense(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const back = () => {
    navigate("/expense")
  }

  return (
    <div>
      
      <h2 className="text-center" style={{ color: 'cadetblue', marginTop:'20px' }}>REPORT</h2>

      <div className="row"> 
      </div>
      <Balance></Balance>

      <div>
        <form>
          <div className="form-group row">
            <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date</label>
            
              <input type="text" className="form-control" id="startDate" value={startDate} onChange={handleStartDateChange} />
            
            <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date</label>
            
              <input type="text" className="form-control" id="endDate" value={endDate} onChange={handleEndDateChange} />
          
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="button" className="btn btn-primary" onClick={generateReport}>Generate Report</button>
            </div>
          </div>
        </form>

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

        <button className="btn btn-danger" onClick={back}>Back</button>
      </div>

    </div>
  );
}

export default Report;
