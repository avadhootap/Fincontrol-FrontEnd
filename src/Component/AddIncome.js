import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
import { addIncome } from "../Services/Income_Service";
import { toast } from "react-toastify";

const AddIncome = () => {
  const user = JSON.parse(localStorage.getItem('data'));
  const id = user.dto.id;
  const navigate = useNavigate();
  const [income, setIncome] = useState({
    amount: "",
    date: "",
    description: "",
    categoryType: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleChange = (event, property) => {
    setIncome({ ...income, [property]: event.target.value });
  };

  const resetIncome = () => {
    setIncome({
      amount: "",
      date: "",
      description: "",
      categoryType: "",
    });
  };

  const back=()=>{
    navigate('/income')
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(income);
    addIncome(id,income)
      .then((response) => {
        console.log(response);
        console.log("Success log");
        toast.success("Income Added Successfully");
        setIncome({
          amount: "",
          date: "",
          description: "",
          categoryType: "",
        });
        navigate("/income")

      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
      });
  };

  return (
    <Container>
    <Container>
      <Row className="mt-4">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <h2 style={{ color: "cadetblue"}} className="text-center">
                ADD INCOME
              </h2>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitForm}>
                <FormGroup>
                  <Label for="amount">Enter Amount</Label>
                  <Input
                    type="number"
                    placeholder="Enter here"
                    id="amount"
                    name="amount"
                    onChange={(e) => handleChange(e, "amount")}
                    value={income.amount}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="date">Enter Date</Label>
                  <Input
                    type="text"
                    placeholder="Enter here"
                    id="date"
                    name="date"
                    onChange={(e) => handleChange(e, "date")}
                    value={income.date}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    placeholder="Enter here"
                    id="description"
                    name="description"
                    onChange={(e) => handleChange(e, "description")}
                    value={income.description}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="categoryType">Category Type</Label>
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle caret>
                      {income.categoryType
                        ? income.categoryType
                        : "Select Category Type"}
                    </DropdownToggle>
                <DropdownMenu>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="SALARY">SALARY
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="INVESTMENT">INVESTMENT
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="INTREST">INTREST
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="BONUS">BONUS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="RENTALINCOME">RENTALINCOME
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="OTHER">OTHER
                      </DropdownItem>
                      

                </DropdownMenu>
              </Dropdown>
            </FormGroup>
            <div>
              <Button color="success" type="submit">
                Submit
              </Button>{" "}
              <Button color="warning" onClick={resetIncome}>
                Reset
              </Button>{" "}
              <Button color="dark" onClick={back}>
                Back
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  </Row>
</Container>
</Container>
  )
}
export default AddIncome;
                     
