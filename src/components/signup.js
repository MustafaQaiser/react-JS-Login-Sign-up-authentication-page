import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword]= useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform sign-up logic here
    const userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(userData);
    if(name || email || password || confirmPassword ==="")
    {
      setMessage('Enter all details')
    }
  
    // axios.post(, userData)
    try {
      const response = await axios.post("http://localhost:3000/SignUp", userData);
      
      if(response.data.success )
      {
        setMessage(`Your Data is Submitted go to Login Page`)
        // navigate(('/login'));
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
      else{
          setMessage(`Email is already in use`);
      }
      console.log('Response:', response.data);
    } catch (error) {
      
      console.error('Error:', error);
    }
    
  };

  return (
    <div className="signup-container">
      <h2 style={{color:'white'}}> Sign Up</h2>
      <Form style={{color:'white'}} onSubmit={handleSubmit}>
     
      <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="confirmpassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>

        
      </Form>
      <div style={{color:"white",fontSize:'100px'}}>
      { message}
      </div>
      
    </div>
  );
}

export default SignUp;
