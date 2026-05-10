import { useEffect, useRef } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -50px 0px",
    delay = 0,
    direction = "up",
    distance = 40,
    duration = 700,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translateMap: Record<RevealDirection, string> = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
      none: "none",
    };

    el.style.opacity = "0";
    el.style.transform = translateMap[direction];
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) translateX(0)";
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay, direction, distance, duration]);

  return ref;
}

// Helper component for staggered children
export function useStaggerReveal(count: number, baseDelay = 0, stagger = 100) {
  return Array.from({ length: count }, (_, i) => baseDelay + i * stagger);
}
