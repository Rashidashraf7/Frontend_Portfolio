import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Spinner } from 'react-bootstrap';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/blog/${id}/`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;

  return (
    <Container className="mt-5">
      <h2>{post.title}</h2>
      <p className="text-muted">Published: {new Date(post.date_created).toLocaleDateString()}</p>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>{post.content}</p>
      <Button as={Link} to="/blog" variant="outline-primary">← Back to Blog</Button>
    </Container>
  );
};

export default BlogDetail;
