import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
  };

  useEffect(() => {
    // Default: light mode
    document.body.classList.remove('bg-dark', 'text-white');
  }, []);

  return (
    <Button variant={darkMode ? 'light' : 'dark'} onClick={toggleDarkMode} size="sm">
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </Button>
  );
};

export default DarkModeToggle;
