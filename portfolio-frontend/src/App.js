import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Project';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import BlogDetail from './pages/BlogDetails';
import Blog from './pages/Blog'; 
import PersonalInfo from './pages/PersonalInfo';




function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personal-info" element={<PersonalInfo />} />

           <Route path="/blog" element={<Blog />} />
           <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
