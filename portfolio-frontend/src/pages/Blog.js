import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/blog/')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Blog</h2>

      {loading ? (
        <div className="text-center"><Spinner animation="border" /></div>
      ) : (
        posts.map((post) => (
          <Card key={post.id} className="mb-4 shadow-sm border-0 rounded-4">
            <Card.Body>
              <Card.Title className="fw-bold">{post.title}</Card.Title>
              <Card.Text style={{ fontSize: '0.95rem' }}>
                {post.content.length > 250
                  ? post.content.slice(0, 250) + '...'
                  : post.content}
              </Card.Text>
              <Button as={Link} to={`/blog/${post.id}`} variant="primary" size="sm">
                Read More
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Blog;
