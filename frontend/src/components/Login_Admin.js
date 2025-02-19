import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login_Admin.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Login_Admin() {
  return (
    <Form className='container'>
      <div className='head'>
          <Form.Label className='text'>Admin Login Portal</Form.Label>
          <Form.Label className='underline'></Form.Label>
          <Dropdown>
      <Dropdown.Toggle className= '' variant="success" id="dropdown-basic">
        Department
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Doctor</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Admin</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Staff</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Nurse</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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

export default Login_Admin;