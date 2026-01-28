"use client";
import { motion } from 'framer-motion';

export default function SolutionsDetail() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-2xl md:text-3xl text-black leading-tight font-light">
            <span className="font-bold border-b-2 border-primary pb-1 mr-2 italic">
              Prixair EXPLORATION
            </span> 
            is our proprietary remote sensing platform that captures 
            deep subsurface data—up to 10,000 meters below surface—without 
            the need for drilling, seismic blasting, or physical intrusion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}