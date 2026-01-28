"use client";
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import Image from 'next/image';

export default function InvestmentHero() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-end overflow-hidden">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1560279966-2d681f3d4dfc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhbXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Wind turbines landscape"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      {/* 2. Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>



      {/* 4. Content Layer */}
      <div className="relative z-30 container mx-auto px-6 pb-12 md:pb-24 flex justify-between items-end w-full">
        
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight"
        >
          Investment & Risk
        </motion.h1>

        {/* Explore Project Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 mb-4 group cursor-pointer"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light text-white/70 group-hover:text-primary transition-colors">
            Explore 
          </span>
          <div className="p-2 border border-white/20 rounded-full group-hover:border-primary group-hover:bg-primary transition-all">
            <ArrowDownRight size={14} className="text-white group-hover:text-black transition-colors" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}