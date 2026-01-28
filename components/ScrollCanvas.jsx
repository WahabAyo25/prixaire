"use client";
import React, { useRef, useEffect } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';

// Check your `public/frames` folder to get the exact number of frames.
// Let's assume your 30.5 second video at 30fps produced around 915 frames.
const totalFrames = 901; // IMPORTANT: Update this to your exact frame count.

const ScrollCanvas = ({ sectionRef }) => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const framePath = (frame) => `/frames/frame_${frame.toString().padStart(4, '0')}.jpg`;
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = framePath(i);
      imagesRef.current.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 50 });
  const frameIndex = useTransform(smoothProgress, [0, 1], [1, totalFrames], { clamp: true });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    
    // Set a higher resolution for the canvas buffer for crisp images on retina screens
    canvas.width = 1080;
    canvas.height = 1080;

    let animationFrameId;
    
    const render = () => {
      const currentFrame = Math.round(frameIndex.get());
      const img = imagesRef.current[currentFrame - 1];
      
      if (img && img.complete && img.naturalWidth > 0) {
        // --- THIS IS THE FIX ---
        // Replicate `object-cover` behavior for the canvas
        const canvasRatio = canvas.width / canvas.height;
        const imageRatio = img.naturalWidth / img.naturalHeight;

        let sx, sy, sWidth, sHeight;

        if (imageRatio > canvasRatio) { // Image is wider than canvas
          sHeight = img.naturalHeight;
          sWidth = sHeight * canvasRatio;
          sx = (img.naturalWidth - sWidth) / 2;
          sy = 0;
        } else { // Image is taller than or same aspect as canvas
          sWidth = img.naturalWidth;
          sHeight = sWidth / canvasRatio;
          sy = (img.naturalHeight - sHeight) / 2;
          sx = 0;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        // Use the 9-argument version of drawImage to crop the source image
        context.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
        // -----------------------
      }
      animationFrameId = requestAnimationFrame(render);
    };

    imagesRef.current[0].onload = render;

    return () => cancelAnimationFrame(animationFrameId);
  }, [frameIndex]);

  return <canvas ref={canvasRef} className="rounded-full aspect-square w-full h-full object-cover shadow-2xl" />;
};

export default ScrollCanvas;