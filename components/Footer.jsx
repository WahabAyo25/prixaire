"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Responsive height and padding
    <footer className="relative bg-black text-white rounded-t-xl sm:rounded-t-2xl overflow-hidden min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh]">
      
      {/* Giant Background Wordmark - Centered within the entire tall footer */}
      <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-[35vw] sm:text-[30vw] md:text-[25vw] leading-none pointer-events-none z-0">
        prixair
      </div>
      
      {/* Main Content - Positioned at the top with responsive padding */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 text-sm">
          
          {/* Hero Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary leading-snug">
              Sustainable Exploration, Powered by <br className="hidden sm:block" /> Prixair EXPLORATION
            </h3>
          </div>

          {/* Address Section */}
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 sm:mb-4 text-white/60">
              Address
            </h4>
            <p className="text-sm sm:text-base">Plot 688,</p>
            <p className="text-sm sm:text-base">Markus Kangye Blvd,</p>
            <p className="text-sm sm:text-base">Off Oladipo Diya Way,</p>
            <p className="text-sm sm:text-base">Gaduwa, Abuja.</p>
            <p className="text-sm sm:text-base">08181888892</p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 sm:mb-4 text-white/60">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="hover:text-primary transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
             {/* <li>
                <Link href="#" className="hover:text-primary transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li> */}
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors text-sm sm:text-base">
                  Solutions
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 sm:mb-4 text-white/60">
              Connect
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-sm sm:text-base">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Absolutely positioned to the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 md:gap-8 items-center text-[10px] sm:text-xs text-white/40 font-mono">
            <span className="whitespace-nowrap">NIGERIA: {time}</span>
            <span className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} PRIXAIR EXPLORATION ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}