"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const locations = [
  { id: 1, name: 'Lagos', top: '63%', left: '16%', color: 'primary' },
  { id: 2, name: 'Abuja', top: '50%', left: '40%', color: 'black' },
  { id: 3, name: 'Kano', top: '30%', left: '48%', color: 'primary' },
  { id: 6, name: 'Maiduguri', top: '28%', left: '80%', color: 'primary' },
];

export default function NigeriaMap() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <section id="coverage" className="bg-white py-24 sm:py-15">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-end mb-4">
            <span className="inline-block bg-primary text-black text-[10px] font-light uppercase tracking-wider px-3 py-2">
              Our Coverage
            </span>
          </div>
          <p className="text-3xl md:text-4xl text-black leading-relaxed">
            Our operations span the entire nation, providing expert solutions from the commercial hub of Minna, Lagos to the capital city of Abuja and beyond.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Image
            src="/naija-map.jpeg"
            alt="Stylized outline of the map of Nigeria"
            width={800}
            height={700}
            className="w-full h-auto opacity-30"
          />

          {locations.map((loc, index) => (
            <div
              key={loc.id}
              className="absolute"
              style={{ top: loc.top, left: loc.left }}
              onMouseEnter={() => setHoveredLocation(loc.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 + index * 0.05 }}
                className="w-5 h-5 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                style={{
                  backgroundColor: loc.color === 'primary' ? 'var(--color-primary)' : 'var(--color-black)',
                }}
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </motion.div>

              <AnimatePresence>
                {hoveredLocation === loc.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-0"
                  >
                    <div className="bg-black/10 backdrop-blur-sm rounded-sm px-3 py-2">
                      <p className="text-primary text-[10px] font-light uppercase tracking-wider whitespace-nowrap">
                        {loc.color === 'primary' ? 'ONSHORE' : 'OFFSHORE'}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}