import { useState } from "react";
import { toast } from "react-toastify";
import {
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  Container,
  Form,
  Row,
  Col,
} from "reactstrap";
import { login } from "../Services/user_service";
import { dologin } from "../Auth";
import { useNavigate } from "react-router-dom";
import {user_service} from '../Services/user_service';

const Login = () => {


  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: ""
  });

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    console.log(loginDetail);
    if (loginDetail.username == "" || loginDetail.password == "") {
      toast.error("Field is Required !!");
      return;
    }

  //  navigate("/expense");

       login(loginDetail)
      .then((data) => {
        console.log("user login:");
        console.log(data);
        dologin(data, () => {
          console.log("login detail saved to localstorage");
        });
        // localStorage.setItem("token", "Bearer " + data.token);
        // localStorage.setItem("user", JSON.stringify(data.dto));
        // var user = JSON.parse(localStorage.getItem("user"));
        toast.success("Successfully Login");
        navigate("/expense");
      })
      .catch((error) => {
        console.log(Error);
        if (error.response.status == 400 || error.response.status == 403 || error.response.status == 404) {
          toast.error("Invalid User Id or Password");
        } else {
          toast.error("something went Wrong on server !!");
        }
      });
  };

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" inverse>
            <CardHeader>
              <h2 style={{ color: "burlywood" }} className="text-center">
                Welcome To FinControl
              </h2>
              <h6 className="text-center">Enter Information To Login</h6>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    id="email"
                    name="email"
                    value={loginDetail.username}
                    onChange={(e) => handleChange(e, "username")}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    value={loginDetail.password}
                    onChange={(e) => handleChange(e, "password")}
                  />
                </FormGroup>
                <Container className="text-center">
                  <Button color="success">LogIn</Button>&nbsp;&nbsp;
                  <Button onClick={handleReset} color="warning" type="reset">
                    Reset
                  </Button>
                </Container>
                <Container>
                  <h1 style={{ color: "navy" }}>FinControl</h1>
                  <h5>Expense Tracking And Management</h5>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
