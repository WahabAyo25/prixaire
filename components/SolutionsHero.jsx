"use client";
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function SolutionsHero() {
  return (
    <section className="relative h-screen w-full flex items-end text-white overflow-hidden">
      {/* Background Image - Using a similar mountain ridge photo */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop')`,
          filter: 'brightness(0.8)' 
        }}
      ></div>
      
      {/* Subtle Bottom Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Crosshair Motif (Center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-40 pointer-events-none">
        <div className="w-6 h-[1px] bg-white absolute top-1/2 -translate-y-1/2 -left-3"></div>
        <div className="h-6 w-[1px] bg-white absolute left-1/2 -translate-x-1/2 -top-3"></div>
      </div>

      <div className="relative z-30 container mx-auto px-6 pb-16 flex justify-between items-end">
        {/* Left Title */}
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-extrabold tracking-tighter"
        >
          Our Technology
        </motion.h1>

        {/* Right Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-light text-white/70 mb-4"
        >
          Explore Solutions <ArrowDownRight size={14} />
        </motion.div>
      </div>
    </section>
  );
}