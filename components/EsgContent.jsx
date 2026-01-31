"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EsgContent() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      
     

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Image (Occupies 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm"
          >
            <Image 
              src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29udHJhY3RvcnxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Engineers on site"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side: Text Content (Occupies 5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* The Process Tag */}
            <span className="bg-primary text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-2 mb-8">
              PROCESS
            </span>

            {/* Description Text */}
            <p className="text-lg md:text-xl text-black leading-relaxed font-light">
              Leveraging geophysical data and subsurface analysis, our team developed and implemented a customized energy solution that optimized system performance and delivered significant energy efficiency gains through continuous monitoring.
            </p>
          </motion.div>

        </div>
      </div>
      <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative aspect-[16/9] h-[700px] mt-30 mb-30 w-full rounded-sm overflow-hidden shadow-sm"
          >
            <Image 
              src="/engineers.webp" 
              alt="Engineers on site"
              fill
              className="object-cover"
            />
          </motion.div>

<div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24  items-center">
          
          {/* Left Side: Image (Occupies 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* The Process Tag */}
            <span className="bg-primary text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-2 mb-8">
              RESULT
            </span>

            {/* Description Text */}
            <p className="text-lg md:text-xl text-black leading-relaxed font-light">
             The implemented solution, informed by geophysical interpretation and subsurface modeling, resulted in significant cost savings, optimized energy efficiency, improved sustainability outcomes, and enhanced operational reliability, exceeding performance benchmarks and supporting long-term operational success.
            </p>
          </motion.div>

          {/* Right Side: Text Content (Occupies 5 columns) */}
         

           <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm"
          >
            <Image 
              src="https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdpbmQlMjB0dXJiaW5lfGVufDB8fDB8fHww" 
              alt="Engineers on site"
              fill
              className="object-cover"
            />
          </motion.div>
          </div>

        </div>
    </section>
  );
}