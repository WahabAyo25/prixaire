"use client";
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'; // 1. Import usePathname
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  const pathname = usePathname(); // 2. Track the current URL path
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  // 3. Reset scroll to top when the pathname changes
  useEffect(() => {
    if (lenisRef.current) {
      // 'immediate: true' prevents the user from seeing a long slide up
      // It just snaps to the top of the new page instantly.
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]); 

  return <>{children}</>;
}