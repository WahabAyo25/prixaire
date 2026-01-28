"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    title: 'Real-time Data Delivery',
    image: '/data.svg', // Path to your image in public folder
    detail: 'Preliminary models in 72 hours'
  },
  {
    title: 'Carbon-neutral Workflows',
    image: '/neural.svg',
    detail: 'Audited to ISO 14064'
  },
  {
    title: 'Regulator-ready Outputs',
    image: '/solar.svg',
    detail: 'NI 43-101, JORC, UNEP-aligned'
  },
  {
    title: 'Rapid Deployment',
    image: '/wind.svg',
    detail: 'Field-ready in 48 hours, minimal crew'
  }
];

export default function KeyBenefits() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-20 tracking-tight">
          Key Benefits
        </h2>

        {/* Benefits List */}
        <div className="flex flex-col">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 items-center py-12 border-t border-gray-100 last:border-b group hover:bg-gray-50/50 transition-colors"
            >
              {/* Left: Title */}
              <div className="text-xl font-light text-black md:text-left text-center mb-6 md:mb-0">
                {benefit.title}
              </div>

              {/* Center: Image */}
              <div className="flex justify-center mb-6 md:mb-0">
                <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
                    <Image 
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
              </div>

              {/* Right: Detail */}
              <div className="text-sm font-light text-gray-500 md:text-right text-center uppercase tracking-widest">
                {benefit.detail}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}