"use client";
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Passive EM & Gravity Fusion',
    desc: 'Captures natural field variations without active energy sources.'
  },
  {
    number: '02',
    title: 'AI Inversion Engine',
    desc: 'Produces high-resolution 3D models through advanced processing.'
  },
  {
    number: '03',
    title: 'Secure Cloud Portal',
    desc: 'Client dashboard with real-time analytics and API export.'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* Header Content */}
        <div className="max-w-4xl mb-20">
          <span className="inline-block bg-primary text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 mb-6">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight mb-6">
            How Prixair EXPLORATION Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We are a team of dedicated professionals working together to create a more 
            sustainable future through data-driven subsurface intelligence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          {/* Subtle connecting lines (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              {/* Number Circle */}
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-primary text-xs font-bold mb-8 shadow-xl">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}