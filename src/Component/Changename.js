import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function ChangeName() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('data'));
  const id = user.dto.id;
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");

  function handleChangeFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleChangeLastname(e) {
    setLastname(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
   
    axios
      .put(`http://localhost:8080/Fincontrol/user/updateName/${id}`, {
        firstName,
        lastname,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("UserName Change Successfully !!!")
        navigate("/expesne")
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
        <h1 className="text-center mb-4"  style={{ color: "cadetblue"}}>CHANGE NAME</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter First Name" 
              value={firstName}
              onChange={handleChangeFirstName} 
              style={{ width: "500px" }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Last Name" 
              value={lastname}
              onChange={handleChangeLastname} 
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

export default ChangeName;
