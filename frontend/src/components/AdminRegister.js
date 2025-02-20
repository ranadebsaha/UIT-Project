import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./AdminRegister.css";
import Dropdown from 'react-bootstrap/Dropdown';


function AdminRegister() {
  return (
    <Form className="container">
      <div className="head">
        <Form.Label className="text">Admin Registration Portal</Form.Label>
        <Form.Label className="underline"></Form.Label>
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
        <Form.Group className="mb-3">
          <Row className="row">
            <Col md={6}>
              <Form.Label>Id Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Id Number" />
            </Col>
            <Col md={6}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name as per Aadhar" />
            </Col>
          </Row>

          <Row lassName="row">
            <Col md={6}>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Col>
            <Col md={6}>
              <Form.Label>Gender</Form.Label>
              <div>
                <input className="sex" type="radio" name="gender" /> Male
                <input className="sex" type="radio" name="gender" /> Female
                <input className="sex" type="radio" name="gender" /> Others
              </div>
            </Col>
          </Row>

          <Row lassName="row">
            <Col md={6}>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Mobile Number" />
            </Col>
            <Col md={6}>
              <Form.Label>Email ID</Form.Label>
              <Form.Control type="email" placeholder="Enter Email ID" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row lassName="row">
            <Col md={6}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Col>
            <Col md={6}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Col>
          </Row>
        </Form.Group>
      </div>

      <div className="submit">
        <Button variant="primary" type="submit">
          Register
        </Button>
      </div>
    </Form>
  );
}

export default AdminRegister;
