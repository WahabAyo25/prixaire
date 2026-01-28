"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Data for the metrics grid, making it easy to update
const metrics = [
  { value: '80%', title: 'Cheaper', description: 'THAN CONVENTIONAL APPROACHES' },
  { value: '3x', title: 'Faster', description: 'THAN TRADITIONAL METHODS' },
  { value: 'More', title: 'Reliable', description: 'THAN CONVENTIONAL APPROACHES' },
  { value: '0%', title: 'Climate', description: 'WITH ZERO SURFACE DISTURBANCE' },
];

export default function PerformanceMetrics() {
  return (
    <section className=" py-24 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* Header Content */}
        <div className="text-center">
          <span className="inline-block bg-primary text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5">
            COMPANY STATS
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium text-black tracking-tight">
            Performance Metrics:
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 border-t border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Add a right border to all but the last item on large screens
                className="text-center p-8 lg:p-12 border-b md:border-b-0 lg:border-r border-gray-200 last:lg:border-r-0"
              >
                <h3 className="text-3xl md:text-4xl font-medium text-black">
                  <span className="font-extrabold">{metric.value}</span> {metric.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500 uppercase tracking-widest">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}