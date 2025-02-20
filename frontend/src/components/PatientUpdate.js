import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import './PatientUpdate.css'

function PatientUpdate(){
    return (
    <Form className="container">
        <div className="head">
          <Form.Label className="text">Patient Details Update</Form.Label>
          <Form.Label className="underline"></Form.Label>
  
          <Form.Group className="mb-3">
            <Row className="row">
              <Col md={6}>
                <Form.Label>Aadhar Card Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Aadhar Card Number" />
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
  
            <Row lassName="row">
              <Col md={6}>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
              </Col>
            </Row>
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Row lassName="row">
              <Col md={6}>
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Col>
              <Col md={6}>
                <Form.Label>New Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Col>
            </Row>
          </Form.Group>
        </div>
  
        <div className="submit">
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </Form>
    );
}

export default PatientUpdate;