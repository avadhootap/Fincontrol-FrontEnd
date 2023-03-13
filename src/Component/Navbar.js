import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {confirmAlert} from 'react-confirm-alert'
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const navigate = useNavigate();
    const logout=()=>{
        confirmAlert({
            title:'Confirm Logout',
            message:'Are you sure you want to logout?',
            buttons:[
              {
                label:'Yes',
                onClick:()=>{
                  localStorage.removeItem('data');
                  localStorage.removeItem('token');
                  navigate('/login');
                }
              },
              {
                label:'No'
              }
            ]
          })
    }

    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
          <Navbar.Brand href="/expense">Fincontrol - An Income Expense Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{marginLeft:"970px"}}>
              <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
                <NavDropdown.Item href="/changename">Change Username</NavDropdown.Item>
                <NavDropdown.Item href="changepassword" >Change Password</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
      
}

export default NavigationBar;
