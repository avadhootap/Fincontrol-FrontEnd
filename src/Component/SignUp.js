import { useEffect, useState } from "react";
import { CardBody, CardHeader, FormGroup, Input, Label,Button, Card, Container, Form, Row, Col } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { signUp } from "../Services/user_service";
import { toast } from 'react-toastify';

const SignUp=()=>{

    const navigate = useNavigate();
    const[user,setUser]=useState({
        firstName:'', 
        lastname:'',
        city:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleChange=(event,property)=>{
        setUser({...user,[property]:event.target.value})
    }

    const resetuser=()=>{
        setUser({
            firstName:'', 
            lastname:'',
            city:'',
            email:'',
            password:'',
            confirmPassword:''
        })
    }

    const submitForm=(event)=>{
        event.preventDefault()
        console.log(user)
        signUp(user).then((response)=>{
            console.log(response);
            console.log("Success log");
            toast.success("User is Register Successfully")
            setUser({
                firstName:'', 
                lastname:'',
                city:'',
                email:'',
                password:'',
                confirmPassword:''
            })
            navigate('/login');
        }).catch((error)=>{
            console.log(error);
            console.log("Error log")
        })
    }
    return(
        
        
          <Container>
            <Row className="mt-4">
                <Col sm={{size:6,offset:3}}>
                <Card color="dark" inverse>
                <CardHeader>
                    <h2 style={{color:"burlywood"}} className="text-center">Welcome To FinControl</h2>
                    <h5 className="text-center">Enter Information To SignUp</h5>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitForm} >
                        <FormGroup>
                            <Label for="firstName">Enter FirstName</Label>
                            <Input type="text" placeholder="Enter here" id="firstName" name="firstName"
                            onChange={(e)=>handleChange(e,'firstName')} value={user.firstName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastname">Enter LastName</Label>
                            <Input type="text" placeholder="Enter here" id="lastname" name="lastname"
                            onChange={(e)=>handleChange(e,'lastname')} value={user.lastname}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" placeholder="Enter here" id="city" name="city"
                            onChange={(e)=>handleChange(e,'city')} value={user.city}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" placeholder="Enter here" id="email" name="email"
                            onChange={(e)=>handleChange(e,'email')} value={user.email}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" placeholder="Enter here" id="password" name="password"
                            onChange={(e)=>handleChange(e,'password')} value={user.password}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Password</Label>
                            <Input type="password" placeholder="Enter here" id="confirmPassword" name="confirmPassword"
                            onChange={(e)=>handleChange(e,'confirmPassword')} value={user.confirmPassword}
                            />
                        </FormGroup>
                        <Container className="text-center">
                           <Button color="success">SignUp</Button>&nbsp;&nbsp;
                           <Button onClick={resetuser} color="warning" type="reset" >Reset</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
                </Col>
            </Row>
          </Container>
       
    );
};
export default SignUp;