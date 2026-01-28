"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Data for our testimonial slides
const testimonials = [
  {
    id: 1,
    quote: "\"STARC Limited hereby testifies that following full 3D seismic integration and evaluations, this 'blind' study has successfully and accurately predicted and located two new stacked, compacted geological channel features as viable.\"",
    author: 'Nils Trulsvik',
    company: 'COO, STARC LIMITED'
  },
  {
    id: 2,
    quote: "\"Prixair EXPLORATION fully supplements alternative, remote sensing methods. It helps to screen large areas very quickly.\"",
    author: 'Ola Fjeld',
    company: 'GROUP COO, ARA PETROLEUM'
  },
  {
    id: 3,
    quote: "\"Volkswagen recognises the opportunity to quickly source relevant raw material deposits such as Lithium and Cobalt for e-mobility as a way to secure its raw material demand.\"",
    author: 'Volkswagen',
    company: 'PRESS RELEASE'
  },
  {
    id: 4,
    quote: "\"The accuracy and speed of the preliminary data have given us a significant competitive advantage in our exploration efforts.\"",
    author: 'Jane Doe',
    company: 'CEO, GEOTECH INC.'
  },
];

export default function TestimonialsCarousel() {
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

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Auto-advance every 5 seconds
    
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3 sm:gap-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-black tracking-tight">
            Client Testimonials
          </h2>
          
          {/* Desktop navigation buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={scrollPrev} 
              className="bg-gray-200 p-2.5 sm:p-3 rounded-md hover:bg-gray-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext} 
              className="bg-gray-200 p-2.5 sm:p-3 rounded-md hover:bg-gray-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden -mx-2 sm:-mx-0" ref={emblaRef}>
          <div className="flex">
            {testimonials.map(item => (
              <div key={item.id} className="flex-grow-0 flex-shrink-0 basis-[95%] sm:basis-[90%] md:basis-1/2 lg:basis-1/3 pl-2">
                <div className="h-full bg-black text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[400px] sm:min-h-[450px] md:min-h-[500px] w-full">
                  {/* Quote */}
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary leading-relaxed">
                    {item.quote}
                  </p>
                  
                  {/* Author Info */}
                  <div className="mt-6 sm:mt-8">
                    <p className="font-semibold text-white text-sm sm:text-base">{item.author}</p>
                    <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider mt-1">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-black scale-125' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile navigation buttons */}
        <div className="flex md:hidden justify-center items-center gap-3 mt-6">
          <button 
            onClick={scrollPrev} 
            className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition-colors active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollNext} 
            className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition-colors active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}