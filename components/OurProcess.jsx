"use client";
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'We listen to your needs and goals, understanding your unique challenges and opportunities.'
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Our team crafts tailored solutions that meet your objectives, leveraging cutting-edge technology.'
  },
  {
    number: '03',
    title: 'Deliver',
    desc: 'We implement and integrate our solutions, ensuring seamless execution and minimal disruption.'
  },
  {
    number: '04',
    title: 'Support',
    desc: 'We provide ongoing maintenance and support, ensuring your systems operate at peak performance.'
  }
];

export default function OurProcess() {
  return (
    <section className="bg-gray-50/50 py-24 sm:py-32 border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Header Content */}
        <div className="max-w-4xl mb-24 relative">
          <span className="inline-block bg-primary text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 mb-6">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight mb-8">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Hydra was founded on a mission to accelerate the world&apos;s transition to clean 
            energy. We&apos;re a team of dedicated professionals working together to create a 
            more sustainable future.
          </p>

          {/* Decorative Plus sign from your image */}
          <div className="absolute -right-12 top-1/2 opacity-20 hidden lg:block">
             <div className="w-6 h-[1px] bg-black absolute top-1/2 -left-3"></div>
             <div className="h-6 w-[1px] bg-black absolute left-1/2 -top-3"></div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          
          {/* Connecting Dashed Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10"
            >
              {/* Number Circle */}
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-primary text-xs font-bold mb-10 transition-transform duration-300 hover:scale-110 shadow-lg">
                {step.number}
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}