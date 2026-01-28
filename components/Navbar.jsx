// components/Navbar.jsx

"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container lg:max-w-md">
        <div className="bg-gray-100/80 backdrop-blur-md rounded-md shadow-md overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-3 md:p-4">
          {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo2.png" 
            alt="Prix air" 
            className="h-8 w-auto"
          />
        </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-[12px] font-light uppercase tracking-wider text-gray-700">
              <Link href="/" className="relative hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
              <Link href="/solutions" className="relative flex items-center gap-1 hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                Company
              </Link>
              <Link href="/solutions" className="relative hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                Solutions
              </Link>
            </nav>

            {/* Animated Mobile Menu Button */}
            <button 
              className="md:hidden w-6 h-6 flex flex-col justify-center items-center gap-1 hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span 
                className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>

          {/* Mobile Navigation Menu - Curtain Effect Inside Same Container */}
          <div 
            className={`md:hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col gap-1 px-3 pb-3 border-t border-gray-200/50">
              <Link 
                href="/" 
                className="text-sm font-light uppercase tracking-wider text-gray-700 hover:text-primary hover:bg-gray-200/50 transition-all py-3 px-2 rounded transform transition-transform duration-300 hover:translate-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/company" 
                className="text-sm font-light uppercase tracking-wider text-gray-700 hover:text-primary hover:bg-gray-200/50 transition-all py-3 px-2 rounded transform transition-transform duration-300 hover:translate-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>
              <Link 
                href="/solutions" 
                className="text-sm font-light uppercase tracking-wider text-gray-700 hover:text-primary hover:bg-gray-200/50 transition-all py-3 px-2 rounded transform transition-transform duration-300 hover:translate-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}