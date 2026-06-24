import { useEffect, useRef, useState } from 'react';

// Flips inView true the first time the element enters the viewport, then stops observing.
export const useInView = <T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};
