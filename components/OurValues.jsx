"use client";
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Innovation with Purpose',
    desc: 'We develop solutions that drive performance and responsibility',
    iconType: 'dots'
  },
  {
    title: 'Environmental Leadership',
    desc: 'Exploration should never come at the cost of ecosystems',
    iconType: 'bars'
  },
  {
    title: 'Precision & Trust',
    desc: 'We deliver actionable insights that clients and regulators can rely on',
    iconType: 'ring'
  }
];

// Helper components for the custom geometric icons
const IconDots = () => (
  <div className="grid grid-cols-2 gap-2 w-30 h-30">
    <div className="w-full h-full rounded-full bg-primary"></div>
    <div className="w-full h-full rounded-full bg-primary/80"></div>
    <div className="w-full h-full rounded-full bg-white/20"></div>
    <div className="w-full h-full rounded-full bg-primary/60"></div>
  </div>
);

const IconBars = () => (
  <div className="flex items-end gap-1.5 h-30">
    {[0.4, 0.7, 1, 0.8, 0.5, 0.3].map((op, i) => (
      <div 
        key={i} 
        className="w-2 rounded-full bg-primary" 
        style={{ height: `${op * 100}%`, opacity: op }}
      ></div>
    ))}
    {[0.2, 0.2, 0.2].map((op, i) => (
      <div key={i+6} className="w-2 h-full rounded-full bg-white/10"></div>
    ))}
  </div>
);

const IconRing = () => (
  <div className="relative w-30 h-30">
    <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
    <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-primary border-l-transparent border-b-transparent -rotate-45"></div>
  </div>
);

export default function OurValues() {
  return (
    <section className="bg-black text-white py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-primary"
          >
            Our Values
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xs text-sm text-gray-400 font-light leading-relaxed md:text-right"
          >
            Our team of experts works closely with clients to understand their goals and challenges, 
            delivering customized solutions that drive value.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 p-12 min-h-[450px] flex flex-col justify-between group hover:bg-white/10 transition-colors duration-500"
            >
              {/* Top: Geometric Icon */}
              <div className="flex justify-center items-center h-40">
                {val.iconType === 'dots' && <IconDots />}
                {val.iconType === 'bars' && <IconBars />}
                {val.iconType === 'ring' && <IconRing />}
              </div>

              {/* Bottom: Text */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-white transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative central plus sign */}
        <div className="flex justify-center mt-12 opacity-20">
             <div className="w-6 h-[1px] bg-white absolute"></div>
             <div className="h-6 w-[1px] bg-white absolute -top-3"></div>
        </div>
      </div>
    </section>
  );
}