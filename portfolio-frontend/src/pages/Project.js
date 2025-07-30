import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Projects</h2>

      {loading ? (
        <div className="text-center"><Spinner animation="border" /></div>
      ) : (
        <Row className="g-4">
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.id}>
              <Card className="h-100 shadow-sm border-0 rounded-4">
                {project.image && (
                  <Card.Img
                    variant="top"
                    src={`http://localhost:8000${project.image}`}
                    className="rounded-top"
                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text style={{ fontSize: '0.95rem' }}>
                    {project.description.length > 150
                      ? project.description.slice(0, 150) + '...'
                      : project.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 d-flex gap-2 justify-content-center mb-2">
                  {project.github_link && (
                    <Button variant="outline-dark" href={project.github_link} size="sm" target="_blank">
                      GitHub
                    </Button>
                  )}
                  {project.demo_link && (
                    <Button variant="outline-primary" href={project.demo_link} size="sm" target="_blank">
                      Live Demo
                    </Button>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Projects;
