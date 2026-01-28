"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // 1. Import Link

const industries = [
  {
    imageUrl: '/data.svg', 
    title: 'Mining and energy firms',
    description: 'Utilizing non-invasive geophysics to locate resources with precision and minimal environmental impact.'
  },
  {
    imageUrl: '/neural.svg',
    title: 'Infrastructure developers',
    description: 'Providing crucial subsurface data for planning and construction of stable, long-lasting projects.'
  },
  {
    imageUrl: '/solar.svg',
    title: 'ESG-aligned investors',
    description: 'Offering verifiable data to ensure investments meet stringent environmental and social governance criteria.'
  },
  {
    imageUrl: '/wind.svg',
    title: 'Governments & institutions',
    description: 'Assisting public sector bodies in resource management and sustainable development planning.'
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight">
            Leadership in Exploration
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
            As one of the few exploration providers combining advanced geophysics with a fully non-invasive approach, we are reshaping industry benchmarks for compliance, accuracy, and sustainability.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2">
          {industries.map((item, index) => (
            /* 2. Wrap the card in a Link pointing to /solutions */
            <Link href="/solutions" key={index} className="block cursor-pointer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-gray-100/70 p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full overflow-hidden"
              >
                {/* Plus icon in the corner */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gray-300/50 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-black z-30">
                  <Plus size={14} className="sm:w-4 sm:h-4" />
                </div>
                
                {/* Black overlay that slides up from bottom */}
                <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0 z-10"></div>
                
                {/* Initial Content container (hides on hover) */}
                <div className="relative z-20 transition-opacity duration-500 group-hover:opacity-0">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6">
                    <Image 
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-contain grayscale" 
                    />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-light text-black px-2">
                    {item.title}
                  </h3>
                </div>

                {/* Description that appears on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 translate-y-12 opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 z-20">
                  <div className="mb-4 sm:mb-6 self-start">
                    <span className="inline-block bg-primary text-black text-[11px] sm:text-[12px] font-medium px-3 py-1.5 sm:px-4 sm:py-2">
                      Overview:
                    </span>
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed text-left">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}