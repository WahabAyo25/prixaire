"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SolutionsShowcase() {
  return (
    <section className="bg-white py-24 mt-20 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Tall Mountain Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[3/4] overflow-hidden"
          >
            <Image
              src="/mountain.avif"
              alt="Mountain exploration landscape"
              fill
              className="object-cover"
            />
            {/* Optional subtle crosshair detail from your design language */}
            <div className="absolute bottom-12 right-12 z-10 opacity-40">
                <div className="w-4 h-[1px] bg-white absolute top-1/2 -left-2"></div>
                <div className="h-4 w-[1px] bg-white absolute left-1/2 -top-2"></div>
            </div>
          </motion.div>

          {/* Right Column: Offset Solar/Worker Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-[3/4] md:aspect-[2/3] lg:aspect-[3/4] mt-0 md:-mt-30  overflow-hidden"
          >
            <Image
              src="/contractor.jpeg"
              alt="Sustainable infrastructure and workers"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}