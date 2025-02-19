import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login_Patient.css';

function Login_Patient() {
  return (
    <Form className='container'>
      <div className='head'>
          <Form.Label className='text'>Patient Login Portal</Form.Label>
          <Form.Label className='underline'></Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email ID</Form.Label>
            <div className='input'>
              <Form.Control type="email" placeholder="Enter Email" />
            </div>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            < div className='input'>
              <Form.Control type="password" placeholder="Password" />
            </div>
        </Form.Group>
        <Form.Label className='forgot-password'>Forgot password? <span>Click here</span></Form.Label>
      </div>
      <div className='submit'><Button variant="primary" type="submit">Login</Button></div>
    </Form>
  );
}

export default Login_Patient;