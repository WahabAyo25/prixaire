"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const stats = [
  { value: 100, label: 'Projects', suffix: '+' },
  { value: 15, label: 'Countries', suffix: '+' },
  { value: 4, label: 'Continents', suffix: '' },
];

// Animated Number Component
function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 80,
    stiffness: 100
  });
  const isInView = useInView(ref, { 
    once: false,
    margin: "0px"
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// Circle animation component
const RippleEffect = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { 
    once: false,
    margin: "0px",
    amount: 0.3
  });

  const arcs = Array.from({ length: 6 }, (_, i) => i);
  
  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {arcs.map((i) => {
        // Responsive circle sizes
        const baseRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 150;
        const radiusIncrement = typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 120;
        const radius = baseRadius + i * radiusIncrement;
        const strokeWidth = i % 2 === 0 ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 70) : (typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 50);
        const baseOpacity = 0.15 - i * 0.02;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: radius * 2,
              height: radius * 2,
              right: -radius,
              top: -radius,
              borderRadius: '50%',
              border: `${strokeWidth}px solid #ff6b35`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isInView ? baseOpacity : 0, 
              scale: isInView ? 1 : 0.8 
            }}
            transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }}
          />
        );
      })}
    </div>
  );
};

export default function StatsSection() {
  return (
    <>
      {/* Stats Section */}
      <section className="w-full mt-2 mb-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          
          {/* Left Column: Global Reach */}
          <div className="relative flex items-center justify-center p-6 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden mx-2 lg:ml-2 lg:mx-0">
            <RippleEffect />
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-semibold text-black flex flex-col lg:flex-row items-center gap-2 sm:gap-3 group"
            >
              Global reach
              {/* Arrow Down on mobile, Arrow Right on desktop */}
              <ArrowDown className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:hidden transition-transform group-hover:translate-y-2" />
              <ArrowRight className="hidden lg:block w-12 h-12 transition-transform group-hover:translate-x-2" />
            </motion.a>
          </div>

          {/* Right Column: Stats */}
          <div className="bg-black text-white p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center mx-2">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
              {stats.slice(0, 2).map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff6b35] mb-2 sm:mb-3 md:mb-4">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 sm:mt-2 text-base sm:text-lg md:text-xl text-[#ff6b35]/90">{stat.label}</p>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-2"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff6b35] mb-2 sm:mb-3 md:mb-4">
                  <AnimatedNumber value={stats[2].value} suffix={stats[2].suffix} />
                </div>
                <p className="mt-1 sm:mt-2 text-base sm:text-lg md:text-xl text-[#ff6b35]/90">{stats[2].label}</p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}