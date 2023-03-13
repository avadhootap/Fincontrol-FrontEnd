import './App.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
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
import UpdateExpense from './Component/UpdateExpense';
import Balance from './Component/Balance';
import GetExpense from './Component/GetExpense';
import GetIncome from './Component/GetIncome';
import Incomesortedbyamount from './Component/Incomesortedbyamount';
import Incomesortedbydate from './Component/Incomesortedbydate';
import Expensesortedbydate from './Component/Expensesortedbydate';
import Expensesortedbyamount from './Component/Expensesortedbyamount';
import Report from './Component/Report';
import Navbar from './Component/Navbar';
import { FaUser } from 'react-icons/fa';
import ChangeName from './Component/Changename';
import ChangePassword from './Component/ChangePassword';



function App() {
  return (
    
     <BrowserRouter>
        <ToastContainer position='bottom-center'></ToastContainer>
          <Navbar></Navbar>
          <div className='container'>
          <Routes>
              <Route path="/" exact element={<SignUp></SignUp>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signup" element={<SignUp></SignUp>}></Route>
              <Route path="/income" element={<IncomeList></IncomeList>}></Route>
              <Route path="/addincome" element={<AddIncome></AddIncome>}></Route>
              <Route path="/updateIncome/:id" element={<UpdateIncome></UpdateIncome>}></Route>
              <Route path="/updateExpense/:id" element={<UpdateExpense></UpdateExpense>}></Route>
              <Route path="/expense" element={<ExpenseList></ExpenseList>}></Route>
              <Route path="/addexpense" element={<AddExpense></AddExpense>}></Route>
              <Route path="/incomesortedbyamount" element={<Incomesortedbyamount></Incomesortedbyamount>}></Route>
              <Route path="/incomesortedbydate" element={<Incomesortedbydate></Incomesortedbydate>}></Route>
              <Route path="/Expensesortedbydate" element={<Expensesortedbydate></Expensesortedbydate>}></Route>
              <Route path="/navbar" element={<Navbar></Navbar>}></Route>
              <Route path="/Expensesortedbyamount" element={<Expensesortedbyamount></Expensesortedbyamount>}></Route>
              <Route path="/report" element={<Report></Report>}></Route>
              <Route path="/changename" element={<ChangeName></ChangeName>}></Route>
              <Route path="/changepassword" element={<ChangePassword></ChangePassword>}></Route>
              {/* <Route path="/balance" element={<Balance></Balance>}></Route> */}
              {/* <Route path="/totalExpense" element={<GetExpense></GetExpense>}></Route>
              <Route path="/totalincome" element={<GetIncome></GetIncome>}></Route> */}
              
              
          </Routes>
           </div>
      </BrowserRouter>
  );
}

export default App;
