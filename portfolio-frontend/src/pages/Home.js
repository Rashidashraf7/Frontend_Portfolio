import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../Assets/profileimage.png";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <Card className="text-center shadow-lg border-0 rounded-4 p-4">
            <Card.Body>
              <img
                src={profileImage}
                alt="Rashad Ashraf"
                className="rounded-circle mb-4 shadow"
                width="140"
                height="140"
              />
              <h1 className="fw-bold">Hi, I'm Rashad Ashraf</h1>

              {/* 🔹 Typewriter Effect */}
              <p className="text-muted fs-5 mb-3">
                <Typewriter
                  words={[
                    "Full Stack Developer 👨‍💻",
                    "AI/ML Enthusiast 🤖",
                    "Python & Django Lover 🐍",
                    "React Frontend Dev ⚛️",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>

              <p className="mt-3 text-secondary" style={{ fontSize: "1.1rem" }}>
                I'm passionate about building smart, scalable web apps using
                Django, React, and AI. I enjoy solving real-world problems —
                from e-commerce platforms to NLP-powered chatbots.
              </p>

              <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                <Button variant="primary" href="/personal-info">
                  About me
                </Button>
                <Button variant="primary" href="/projects">
                  View Projects
                </Button>
                <Button variant="primary" href="/contact">
                  Contact Me
                </Button>
                <Button variant="primary" href="/resume.pdf" download>
                  Download Resume
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
