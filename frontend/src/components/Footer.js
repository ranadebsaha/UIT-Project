import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <Container>
                <Row className="text-center">
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>Providing real-time water monitoring and survey solutions.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: support@watermonitoring.com</p>
                        <p>Phone: +123 456 7890</p>
                    </Col>
                </Row>
                <hr className="my-3 border-light" />
                <Row className="text-center">
                    <Col>
                        <p className="mb-0">&copy; 2025 Water Monitoring System | All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
