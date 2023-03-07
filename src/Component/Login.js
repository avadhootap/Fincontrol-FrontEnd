
import { CardBody, CardHeader, FormGroup, Input, Label,Button, Card, Container, Form, Row, Col } from "reactstrap";

const Login=()=>{
    return(

      
       <Container > 
            <Row className="mt-5">
                <Col sm={{size:6,offset:3}}>
                <Card color="dark" inverse>
                <CardHeader>
                    <h2 style={{color:"burlywood"}} className="text-center">Welcome To FinControl</h2>
                    <h6 className="text-center">Enter Information To Login</h6>
                </CardHeader>
                <CardBody>
                    <Form>
                        
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" placeholder="Enter here" id="email" name="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" placeholder="Enter here" id="password" name="password"/>
                        </FormGroup>
                        <Container className="text-center">
                           <Button color="success">LogIn</Button>&nbsp;&nbsp;
                           <Button color="warning" type="reset" >Reset</Button>
                        </Container>
                        <Container >
                            <h1 style={{color:"navy"}}>FinControl</h1>
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