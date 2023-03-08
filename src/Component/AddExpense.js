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
import { addExpense } from "../Services/Expense_Service"
import { toast } from "react-toastify";

const AddExpense = () => {
  const navigate = useNavigate();
  const [expense, setExpense] = useState({
    amount: "",
    date: "",
    description: "",
    categoryType: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleChange = (event, property) => {
    setExpense({ ...expense, [property]: event.target.value });
  };

  const resetExpense = () => {
    setExpense({
      amount: "",
      date: "",
      description: "",
      categoryType: "",
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(expense);
    addExpense(expense)
      .then((response) => {
        console.log(response);
        console.log("Success log");
        toast.success("Expense Added Successfully");
        setExpense({
          amount: "",
          date: "",
          description: "",
          categoryType: "",
        });
      })
      navigate("/expense")
      .catch((error) => {
        console.log(error);
        console.log("Error log");
      });
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <h2 style={{ color: "cadetblue" }} className="text-center">
                ADD EXPENSE
              </h2>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitForm}>
                <FormGroup>
                  <Label for="amount">Enter Amount</Label>
                  <Input
                    type="number"
                    placeholder="Enter Amount"
                    id="amount"
                    name="amount"
                    onChange={(e) => handleChange(e, "amount")}
                    value={expense.amount}
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
                    value={expense.date}
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
                    value={expense.description}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="categoryType">Category Type</Label>
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle caret>
                      {expense.categoryType
                        ? expense.categoryType
                        : "Select Category Type"}
                    </DropdownToggle>
                <DropdownMenu>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="FOOD">FOOD
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="BILLS">BILLS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="UTILITIES">UTILITIES
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="BONUS">BONUS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="ENTERTAINMENT">ENTERTAINMENT
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="PERSONALCARE">PERSONALCARE
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="HEALTH">HEALTH
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="FITNESS">FITNESS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="KIDS">KIDS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="DONATION">DONATION
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="INVESTMENTS">INVESTMENTS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="TRANSPORT">TRANSPORT
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="TAXES">TAXES
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="PETCARE">PETCARE
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="TRAVEL">TRAVEL
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="SAVINGS">SAVINGS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="CLOTHING">CLOTHING
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="MISCELLANEOUS">MISCELLANEOUS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="EDUCATION">EDUCATION
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="GROCERIES">GROCERIES
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="AIRTICKETS">AIRTICKETS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="BEAUTY">BEAUTY
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="BIKE">BIKE
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="BOOKS">BOOKS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="CABLE">CABLE
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="CAR">CAR
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="DRINKS">DRINKS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="ELECTRICITY">ELECTRICITY
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="SHOPPING">SHOPPING
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="SALLON">SALLON
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="RENT">RENT
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="PETROL">PETROL
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="MOBILE">MOBILE
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="MAINTAINANCE">MAINTAINANCE
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="GAS">GAS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="FRUITS">FRUITS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="VEGETABLES">VEGETABLES
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="ELECTRONICS">ELECTRONICS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="STATIONERY">STATIONERY
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="VACATIONS">VACATIONS
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="HOMELOAN">HOMELOAN
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="PERSONALLOAN">PERSONALLOAN
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="EDUCATIONALLOAN">EDUCATIONALLOAN
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="FESTIVAL">FESTIVAL
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="CARLOAN">CARLOAN
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="EMI">EMI
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => handleChange(e, "categoryType")}
                        value="TOLL">TOLL
                      </DropdownItem>
                      

                </DropdownMenu>
              </Dropdown>
            </FormGroup>
            <div>
              <Button color="success" type="submit">
                Submit
              </Button>{" "}
              <Button color="warning" onClick={resetExpense}>
                Reset
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  </Row>
</Container>
  )
}
export default AddExpense;
                     
