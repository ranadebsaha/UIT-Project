import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AdminLogin.css';
import Dropdown from 'react-bootstrap/Dropdown';

function AdminLogin() {
  const departments = ["Doctor", "Admin", "Staff", "Nurse"];
  const [selectedDepartment, setSelectedDepartment] = useState("Department");

  return (
    <Form className='container'>
      <div className='head'>
          <Form.Label className='text'>Admin Login Portal</Form.Label>
          <Form.Label className='underline'></Form.Label>

          <Dropdown onSelect={(eventKey) => setSelectedDepartment(eventKey)}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedDepartment}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {departments.map((dept, index) => (
            <Dropdown.Item key={index} eventKey={dept}>
              {dept}
            </Dropdown.Item>
            ))}
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

export default AdminLogin;