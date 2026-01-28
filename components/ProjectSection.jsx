"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectSection({ id, title, category, description, imageUrl, isDark }) {
  return (
    <section id={id} className={`min-h-screen flex items-center py-24 md:py-32 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 mb-8">
              {category}
            </span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">
              {title}
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed max-w-xl font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {description}
            </p>
            
            {/* Technical Spec Grid */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                    <p className="text-[10px] uppercase tracking-widest text-primary mb-2">Accuracy</p>
                    <p className="text-xl font-medium">99.2% Subsurface</p>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-widest text-primary mb-2">Depth Range</p>
                    <p className="text-xl font-medium">0 - 10,000m</p>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
          >
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}