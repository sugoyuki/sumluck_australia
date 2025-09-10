'use client';

import { useState } from 'react';
import { FaLeaf, FaPhone, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-[42px] h-[42px] bg-emerald-500 rounded-lg flex items-center justify-center text-white text-2xl">
            <FaLeaf />
          </div>
          <div className="text-lg font-bold text-gray-800 hidden sm:block">
            よつばオンラインメディカル
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-[30px] list-none m-0 p-0">
            <li>
              <a href="#" className="text-gray-800 text-sm px-3 py-2 no-underline hover:opacity-70 transition-opacity">
                診療内容
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 text-sm px-3 py-2 no-underline hover:opacity-70 transition-opacity">
                オンライン診療
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 text-sm px-3 py-2 no-underline hover:opacity-70 transition-opacity">
                クリニック一覧
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 text-sm px-3 py-2 no-underline hover:opacity-70 transition-opacity">
                当院について
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 text-sm px-3 py-2 no-underline hover:opacity-70 transition-opacity">
                コラム
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-5">
          <a 
            href="#" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded no-underline flex items-center gap-2 font-bold transition-colors"
          >
            <FaPhone />
            <span>診療予約</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded transition-colors"
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            <li>
              <a href="#" className="block text-gray-800 text-base py-2 no-underline hover:text-emerald-500 transition-colors">
                診療内容
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 text-base py-2 no-underline hover:text-emerald-500 transition-colors">
                オンライン診療
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 text-base py-2 no-underline hover:text-emerald-500 transition-colors">
                クリニック一覧
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 text-base py-2 no-underline hover:text-emerald-500 transition-colors">
                当院について
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 text-base py-2 no-underline hover:text-emerald-500 transition-colors">
                コラム
              </a>
            </li>
          </ul>
          
          {/* Mobile CTA Button */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <a 
              href="#" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded no-underline flex items-center gap-2 font-bold transition-colors justify-center"
            >
              <FaPhone />
              <span>診療予約</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}