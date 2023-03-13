import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExpenseSorting = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === 'byAmount') {
      navigate('/Expensesortedbyamount');
    } else if (e.target.value === 'byDate') {
      navigate('/Expensesortedbydate');
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="sortSelect">Sort by:</label>
        <select className="form-control" id="sortSelect" value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="byAmount">Amount</option>
          <option value="byDate">Date</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseSorting;
