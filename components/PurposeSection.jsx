"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// A high-quality, free-to-use background image that matches the theme.
const backgroundImageUrl = "https://images.unsplash.com/photo-1604998103924-89e012e5265a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function PurposeSection() {
  return (
    <section className="relative text-white min-h-[80vh] flex items-center justify-center py-24 sm:py-32">
      {/* Background Image */}
      <Image
        src={backgroundImageUrl}
        alt="Aerial view of a dramatic coastline with green fields and a road"
        fill
        className="object-cover z-0"
        priority // Preload this image as it's likely important
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Crosshair Motif (optional, for style consistency) */}
      <div className="absolute top-16 left-16 z-20 opacity-30 pointer-events-none">
        <div className="w-5 h-[1px] bg-white absolute top-1/2 -translate-y-1/2"></div>
        <div className="h-5 w-[1px] bg-white absolute left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Our Purpose
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
          To transform how the world explores and manages subsurface resources using real-time data, precision sensing, and zero-impact methods that align with the future of our planet.
        </p>
      </motion.div>
    </section>
  );
}