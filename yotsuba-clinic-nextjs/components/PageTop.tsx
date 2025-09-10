'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

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
      className={`fixed bottom-20 md:bottom-24 right-4 md:right-5 bg-gray-800 text-white p-3 md:p-4 rounded border-none cursor-pointer z-50 transition-all duration-300 hover:bg-gray-700 ${
        isHovered ? 'opacity-100' : 'opacity-80'
      } flex flex-col items-center gap-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaChevronUp className="text-lg md:text-xl" />
      <span className="text-xs hidden md:block">TOP</span>
    </button>
  );
};

export default PageTop;