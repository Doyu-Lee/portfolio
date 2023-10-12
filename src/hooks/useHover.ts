import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export const useHover = () => {
  const rootRef = useRef<HTMLAnchorElement | null>(null);
  const root = rootRef.current;

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to('.box', { duration: 0.2, rotate: 40 });
    tl.to('.box', { duration: 0.5, rotate: -40 });
    tl.to('.box', { duration: 0.7, rotate: 20 });
    tl.to('.box', { duration: 1, rotate: 10 });

    const handleHover = () => tl.play();
    const handleUnhover = () => tl.reverse();

    if (root) {
      root.addEventListener('mouseenter', handleHover);
      root.addEventListener('mouseleave', handleUnhover);
      handleUnhover();

      return () => {
        root.removeEventListener('mouseenter', handleHover);
        root.removeEventListener('mouseleave', handleUnhover);
      };
    }

    return undefined;
  }, [root]);

  return { rootRef };
};
