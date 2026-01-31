"use client";
import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll to top when the pathname changes, but respect hash or search param if present
  useEffect(() => {
    let retryTimeoutId;

    // Slight delay to allow DOM to settle
    const timeoutId = setTimeout(() => {
      if (!lenisRef.current) return;

      const section = searchParams.get('section');
      const checkAndScroll = (retries = 0) => {
        if (!lenisRef.current) return;

        let targetId = null;

        // Priority 1: Search Param ?section=...
        if (section) {
          targetId = section;
        }
        // Priority 2: Hash #...
        else if (window.location.hash) {
          targetId = window.location.hash.slice(1);
        }

        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            try {
              lenisRef.current.scrollTo(element, { offset: 0, immediate: false });
            } catch (e) {
              console.warn("Lenis scroll error", e);
            }

            // Layout shift protection
            setTimeout(() => {
              if (lenisRef.current) {
                try {
                  lenisRef.current.scrollTo(element, { offset: 0, immediate: false });
                } catch (e) { }
              }
            }, 500);

            return;
          }
          // Retry
          if (retries < 10) {
            retryTimeoutId = setTimeout(() => checkAndScroll(retries + 1), 100);
          }
        } else {
          if (retries === 0) {
            try {
              lenisRef.current.scrollTo(0, { immediate: true });
            } catch (e) {
              console.warn("Lenis scroll error", e);
            }
          }
        }
      };

      checkAndScroll();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(retryTimeoutId);
    };
  }, [pathname, searchParams]);

  return <>{children}</>;
}