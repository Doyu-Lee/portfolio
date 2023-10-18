import { MouseEvent, RefObject, useCallback, useEffect, useRef, useState } from 'react';

interface ScrollProgressProps {
  mainRef: RefObject<HTMLElement>;
}

export const useScrollProgress = ({ mainRef }: ScrollProgressProps) => {
  const [height, setHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLButtonElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [events, setEvents] = useState<string[]>([]);

  const HEADER_HEIGHT = 80;
  const FOOTER_HEIGHT = 60 + 32 - 0.5;

  const handleProgressMove = useCallback(
    (event: MouseEvent<HTMLButtonElement>): void => {
      if (event.type === 'click') {
        setEvents(() => []);
      }
      setEvents((prev) => [...prev, event.type]);

      if (
        barRef.current &&
        containerRef.current &&
        mainRef.current &&
        ((events.includes('mousedown') &&
          events.includes('mousemove') &&
          events.includes('click')) ||
          event.type === 'click')
      ) {
        const { scrollHeight } = barRef.current;
        const { clientY } = event;

        const selectedPercent = ((clientY - HEADER_HEIGHT) / scrollHeight) * 100;

        const windowHeight =
          mainRef.current.offsetHeight +
          HEADER_HEIGHT +
          FOOTER_HEIGHT -
          containerRef.current.offsetHeight;

        const moveScrollPercent = (windowHeight * selectedPercent) / 100;

        window.scrollTo({
          top: moveScrollPercent,
          behavior: 'smooth',
        });
      }
    },
    [events],
  );

  const handleScroll = useCallback(() => {
    if (barRef.current && containerRef.current && mainRef.current) {
      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        setHeight(0);
        return;
      }

      const windowHeight: number =
        mainRef.current.offsetHeight +
        HEADER_HEIGHT +
        FOOTER_HEIGHT -
        containerRef.current.offsetHeight;
      const currentPercent: number = scrollTop / windowHeight;

      setHeight(currentPercent * 100);

      if (progressRef.current) {
        progressRef.current.style.height = `${height}%`;
      }
    }
  }, [height]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return { containerRef, barRef, progressRef, handleProgressMove };
};
