import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [rememberme, setRememberme] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here
    
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
  
    // axios.post(, userData)
    try {
      const response = await axios.post("http://localhost:3000/Login", userData);
      
      if(response.data.token )
      {
        if(rememberme)
        {
          localStorage.setItem('token',response.data.token)
        }
        
        navigate(('/filechanger'));
      }
      console.log(response.data.success)
      if(response.data.success===false)
        {setMessage("wrong credentials")
      }
      
      console.log('Response:', response.data.token);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2  style={{color:'white'}}  >Login</h2>
      <Form  style={{color:'white'}} onSubmit={handleSubmit}>
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
        <div>
        <label>
        <input type="checkbox" checked={rememberme} onChange={(e) => setRememberme(!rememberme)} />
        Remember Me
      </label>
        </div>
        <Button variant="primary" type="submit"  >
          Login
        </Button>
      </Form>
      <div style={{color:"white",fontSize:'100px'}}>
      { message}
      </div>
      
    </div>
  );
}

export default Login;
