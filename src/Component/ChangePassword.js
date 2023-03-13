import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Changepassword() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('data'));
  const id = user.dto.id;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
   
    axios
      .put(`http://localhost:8080/Fincontrol/user/Changepassword/${id}`, {
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Password Change Successfully !!!")
        navigate("/expense")
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed !!!")
      });
      navigate("/expense")

  }
  const back=()=>{
    navigate("/expense")
  }

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" >
      <div>
        <h1 className="text-center mb-4"  style={{ color: "cadetblue"}}>CHANGE PASSWORD</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicpassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter Password" 
              value={password}
              onChange={handlePassword} 
              style={{ width: "500px" }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicconfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter ConfirmPassword" 
              value={confirmPassword}
              onChange={handleConfirmPassword} 
              style={{ width: "500px" }}
            />
            <br></br>
          </Form.Group>
          <Button variant="primary" type="submit">
            SAVE
          </Button>&nbsp;&nbsp;
          <Button variant="dark" onClick={back}>
            BACK
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Changepassword;
