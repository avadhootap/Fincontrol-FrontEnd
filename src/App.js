import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import IncomeList from './Component/IncomeList'
import HeaderComponent from './Component/HeaderComponent';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import AddIncome from './Component/AddIncome';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UpdateIncome from './Component/UpdateIncome';
import AddExpense from './Component/AddExpense';
import ExpenseList from './Component/ExpenseList';


function App() {
  return (
    
     <BrowserRouter>
        <ToastContainer position='bottom-center'></ToastContainer>
          <HeaderComponent></HeaderComponent>
          <div className='container'>
          <Routes>
              <Route path="/" exact element={<SignUp></SignUp>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signup" element={<SignUp></SignUp>}></Route>
              <Route path="/income" element={<IncomeList></IncomeList>}></Route>
              <Route path="/addincome" element={<AddIncome></AddIncome>}></Route>
              <Route path="/updateIncome/:id" element={<UpdateIncome></UpdateIncome>}></Route>
              <Route path="/expense" element={<ExpenseList></ExpenseList>}></Route>
              <Route path="/addexpense" element={<AddExpense></AddExpense>}></Route>
              
          </Routes>
           </div>
      </BrowserRouter>
  );
}

export default App;
