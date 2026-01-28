"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative bg-white py-40 md:py-64 overflow-hidden border-t border-gray-100">
      
      {/* 1. Tiny Orange Plus-Sign Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          // We use %23 instead of # for the hex code #ff6b35 in the SVG string
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ff6b35' stroke-width='1'%3E%3Cpath d='M20 17.5v5M17.5 20h5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        
        {/* 2. Minimalist "Contact" Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="bg-black text-white text-[10px] font-medium uppercase tracking-[0.2em] px-4 py-2 rounded-sm">
            CONTACT
          </span>
        </motion.div>

        {/* 3. Clean Typography */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-medium text-black tracking-tight mb-16 leading-[1.1]"
        >
          Ready to see <span className="italic font-bold border-b-4 border-primary">Prixair EXPLORATION</span> <br /> 
          in action?
        </motion.h2>

        {/* 4. High-End "Double Pill" Button Group */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center"
        >
          {/* Main Pill */}
          <button className="bg-black text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
            Get In Touch
          </button>
          
          {/* Arrow Pill */}
          <button className="bg-black text-white p-5 rounded-full hover:bg-primary hover:text-black transition-all shadow-xl group">
            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}