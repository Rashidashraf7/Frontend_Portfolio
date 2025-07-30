import React from "react";
import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import profileImage from "../Assets/profileimage.png"; // ✅ Make sure path is correct

const PersonalInfo = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0 rounded-4 p-4 text-center">
            <Card.Body>
              {/* ✅ Profile Image */}
              <Image
                src={profileImage}
                roundedCircle
                width={140}
                height={140}
                alt="Rashad Ashraf"
                className="mb-3 shadow"
              />

              <h2 className="mb-4">Personal Information</h2>

              <ListGroup variant="flush" className="text-start">
                <ListGroup.Item>
                  <strong>Full Name:</strong> Rashad Ashraf
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Qualification:</strong> B.Tech in Computer Science, NIT Srinagar
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> rashad_2022bcse013@nitsri.ac.in
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Location:</strong> India
                </ListGroup.Item>
              </ListGroup>

              <h4 className="mt-4 text-start">Skills</h4>
              <ul className="text-start">
                <li>Full Stack Development (Django + React)</li>
                <li>Python Developer 🐍</li>
                <li>ML Engineer 🤖</li>
                <li>NLP Enthusiast 🧠</li>
                <li>REST API & Django REST Framework</li>
                <li>Frontend: React, Bootstrap, Typewriter Effects</li>
                <li>Backend: Django, PostgreSQL, SQLite</li>
                <li>Tools: Git, GitHub, VS Code, Postman</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalInfo;
