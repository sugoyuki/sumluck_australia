'use client';

import React, { useState, useEffect } from 'react';

const PageTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        background: '#34495e',
        color: 'white',
        padding: '15px 10px',
        textDecoration: 'none',
        writingMode: 'vertical-rl',
        borderRadius: '4px',
        fontSize: '14px',
        opacity: isHovered ? 1 : 0.8,
        transition: 'opacity 0.3s',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1000
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      PAGE TOP
    </button>
  );
};

export default PageTop;