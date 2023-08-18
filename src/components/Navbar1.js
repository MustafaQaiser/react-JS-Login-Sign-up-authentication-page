import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; // If using React Router
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

 
function Navbar1() {
  const navigate = useNavigate();
  
  const handleClick=()=>{

    localStorage.removeItem('token');
    navigate(('/login'));
  }
  
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Task </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
        {/* {
                localStorage.getItem('token')?<Nav.Link as={Link} to="/home">Home</Nav.Link>:""
            } */}
          
            

            {
                localStorage.getItem('token')?<Nav.Link as={Link} to="/filechanger">FileChanger</Nav.Link>:""
            }
            



  
  {
    localStorage.getItem('token')?
    <Button onClick={handleClick}>
      Logout
    </Button>
    :
    <>
    <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
    <Nav.Link as={Link} to="/login">Login</Nav.Link></>
  }
  


     

          
        
          
        </Nav>
      </Navbar.Collapse>
    </Navbar></>
  );
}

export default Navbar1;
