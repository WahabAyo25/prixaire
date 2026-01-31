"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    slug: 'sec-global-trends',
    label: 'Aerometrics',
    imageUrl: '/aerometric.jpg'
  },
  {
    id: 2,
    slug: 'sec-field-perspectives',
    label: 'Radiometric',
    imageUrl: '/radiometric.jpg'
  },
  {
    id: 3,
    slug: 'sec-technology-briefs',
    label: 'Magnetometers',
    imageUrl: '/magnetometer.jpg'
  },
  {
    id: 4,
    slug: 'sec-esg',
    label: 'Geophysics',
    imageUrl: '/geophysics.jpeg'
  },
  {
    id: 5,
    slug: 'sec-investment-risk',
    label: 'Investment & Risk',
    imageUrl: 'https://images.unsplash.com/photo-1560279966-2d681f3d4dfc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhbXxlbnwwfHwwfHx8MA%3D%3D'
  },
];

export default function ApplicationsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <section className="bg-white py-16 sm:py-32 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-black tracking-tight">
            Resource Discovery Applications
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={scrollPrev} className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors"><ChevronLeft size={20} /></button>
            <button onClick={scrollNext} className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div ref={emblaRef} className="-mx-2">
          <div className="flex">
            {slides.map(slide => (
              <div key={slide.id} className="flex-none w-full sm:w-[85%] md:w-1/2 lg:w-[40%] px-1">
                <Link href={`/projects?section=${slide.slug}`} scroll={false}>
                  <div className="relative h-[450px] overflow-hidden group cursor-pointer rounded-sm">
                    <Image src={slide.imageUrl} alt={slide.label} fill className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <p className="absolute bottom-6 left-6 text-white text-base font-light z-20">{slide.label}</p>
                    <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <div className="backdrop-blur-md bg-white/10 text-white text-xs font-light tracking-widest px-5 py-3 rounded-full border border-white/20">View Project</div>
                      <div className="backdrop-blur-md bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center border border-white/20"><ArrowRight size={18} /></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button key={index} onClick={() => scrollTo(index)} className={`w-1.5 h-1.5 rounded-full transition-colors ${index === selectedIndex ? 'bg-black' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}