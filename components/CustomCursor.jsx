"use client";
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 500 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      // THE FIX IS HERE: 
      // 'hidden' makes it disappear on mobile/tablets.
      // 'lg:block' makes it reappear only on large screens (desktops).
      className="hidden lg:block fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: springX,
        y: springY,
      }}
    >
      {/* The crosshair visual */}
      <div className="relative w-4 h-4 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-500"></div>
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-500"></div>
      </div>
    </motion.div>
  );
}