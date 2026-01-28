"use client";
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollCanvas from './ScrollCanvas'; // Import our new component

export default function AboutSection() {
  const sectionRef = useRef(null);

  return (
    <section id="about" ref={sectionRef} className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="mb-6">
              <span className="inline-block bg-primary text-black text-[12px] font-light px-4 py-2">
                Prixair EXPLORATION
              </span>
            </div>
            <p className="text-3xl md:text-4xl font-medium text-black leading-snug">
              <strong>Prixair Exploration</strong> is a global provider of sustainable, contactless subsurface exploration solutions. Through our proprietary <strong>Prixair EXPLORATION</strong> technology, we unlock hidden potential.
            </p>
            <button className="mt-10 flex items-center gap-3 bg-black text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Learn More
              <div className="bg-white/20 p-1 rounded-full">
                <ArrowRight size={16} />
              </div>
            </button>
          </motion.div>

          {/* Right Column: Canvas Animation */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <ScrollCanvas sectionRef={sectionRef} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}