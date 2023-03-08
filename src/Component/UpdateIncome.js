import React, { useState, useEffect } from 'react';
import IncomeService from '../Services/IncomeService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateIncome = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [categoryType, setCategoryType] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    IncomeService.getIncomeById(id).then((res) => {
      setAmount(res.data.amount);
      setDate(res.data.date);
      setDescription(res.data.description);
      setCategoryType(res.data.categoryType);
    });
  }, [id]);

  const updateIncome = (e) => {
    e.preventDefault();
    const updatedIncome = {
      id: id,
      amount: amount,
      date: date,
      description: description,
      categoryType: categoryType
    };
    IncomeService.updateIncome(updatedIncome).then(() => {
      navigate('/income');
    });
  };

  return (
    <div>
      <h2 className="text-center">Update Income</h2>
      <form onSubmit={updateIncome}>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="text"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select
            className="form-control"
            value={categoryType}
            onChange={(e) => setCategoryType(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="SALARY">Salary</option>
            <option value="INVESTMENT">INVESTMENT</option>
            <option value="BONUS">BONUS</option>
            <option value="INTREST">INTREST</option>
            <option value="RENTALINCOME">RENTALINCOME</option>
            <option value="OTHER">OTHER</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateIncome;
