"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Image and Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-hero-mountain bg-cover bg-center"></div>
      <div className="absolute inset-0 z-10 bg-black/60"></div>

      {/* Technical Grid Lines (with padding) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Horizontal Lines */}
        <div className="absolute top-1/4 inset-x-[5%] h-[1px] bg-white/10"></div>
        <div className="absolute top-1/2 inset-x-[5%] h-[1px] bg-white/10"></div>
        <div className="absolute top-3/4 inset-x-[5%] h-[1px] bg-white/10"></div>
        
        {/* Vertical Lines */}
        <div className="absolute left-1/4 inset-y-[5%] w-[1px] bg-white/10"></div>
        <div className="absolute left-1/2 inset-y-[5%] w-[1px] bg-white/10"></div>
        <div className="absolute left-3/4 inset-y-[5%] w-[1px] bg-white/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-30 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Sustainable Exploration, <br />
          Powered by Prixair
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="mt-4 text-lg md:text-xl text-white/80"
        >
          Redefining Mining for a Changing World
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-xs uppercase tracking-widest text-white/50">
        Scroll Down
      </div>
    </section>
  );
}