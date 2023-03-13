import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ExpenseService from '../Services/ExpenseService';

const UpdateExpense = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [categoryType, setCategoryType] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    ExpenseService.getExpenseById(id).then((res) => {
      setAmount(res.data.amount);
      setDate(res.data.date);
      setDescription(res.data.description);
      setCategoryType(res.data.categoryType);
    });
  }, [id]);

  const updateExpense = (e) => {
    e.preventDefault();
    const updatedExpense = {
      id: id,
      amount: amount,
      date: date,
      description: description,
      categoryType: categoryType
    };
    ExpenseService.updateExpense(updatedExpense).then(() => {
      navigate('/expense');
    });
  };

  const back=()=>{
    navigate('/expense')
  }

  return (
    <div>
      <h2 className="text-center" style={{ color: 'cadetblue', marginTop:'20px' }}>UPDATE  EXPENSE</h2>
      <form onSubmit={updateExpense}>
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
            <option value="FOOD">FOOD</option>
            <option value="BILLS">BILLS</option>
            <option value="UTILITIES">UTILITIES</option>
            <option value="ENTERTAINMENT">ENTERTAINMENT</option>
            <option value="EDUCATION">EDUCATION</option>
            <option value="PERSONALCARE">PERSONALCARE</option>
            <option value="HEALTH">HEALTH</option>
            <option value="FITNESS">FITNESS</option>
            <option value="KIDS">KIDS</option>
            <option value="GIFTS">GIFTS</option>
            <option value="DONATION">DONATION</option>
            <option value="INVESTMENTS">INVESTMENTS</option>
            <option value="TRANSPORT">TRANSPORT</option>
            <option value="TAXES">TAXES</option>
            <option value="PETCARE">PETCARE</option>
            <option value="TRAVEL">TRAVEL</option>
            <option value="SAVINGS">SAVINGS</option>
            <option value="CLOTHING">CLOTHING</option>
            <option value="MISCELLANEOUS">MISCELLANEOUS</option>
            <option value="GROCERIES">GROCERIES</option>
            <option value="AIRTICKETS">AIRTICKETS</option>
            <option value="BEAUTY">BEAUTY</option>
            <option value="BIKE">BIKE</option>
            <option value="BOOKS">BOOKS</option>
            <option value="CABLE">CABLE</option>
            <option value="CAR">CAR</option>
            <option value="CIGARETTE">CIGARETTE</option>
            <option value="DRINKS">DRINKS</option>
            <option value="ELECTRICITY">ELECTRICITY</option>
            <option value="ELECTRONICS">ELECTRONICS</option>
            <option value="VEGETABLES">VEGETABLES</option>
            <option value="FRUITS">FRUITS</option>
            <option value="GAS">GAS</option>
            <option value="MAINTAINANCE">MAINTAINANCE</option>
            <option value="MOBILE">MOBILE</option>
            <option value="PETROL">PETROL</option>
            <option value="RENT">RENT</option>
            <option value="SALLON">SALLON</option>
            <option value="SHOPPING">SHOPPING</option>
            <option value="STATIONERY">STATIONERY</option>
            <option value="HOMELOAN">HOMELOAN</option>
            <option value="PERSONALLOAN">PERSONALLOAN</option>
            <option value="EDUCATIONALLOAN">EDUCATIONALLOAN</option>
            <option value="FESTIVAL">FESTIVAL</option>
            <option value="CARLOAN">CARLOAN</option>
            <option value="EMI">EMI</option>
            <option value="TOLL">TOLL</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>&nbsp;&nbsp;
        <button  className="btn btn-dark" onClick={back}>
          Back
        </button>
      </form>
    </div>
  );
};

export default UpdateExpense;
