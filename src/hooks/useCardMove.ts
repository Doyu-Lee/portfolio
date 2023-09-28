import { useLayoutEffect, useRef } from 'react';
import { useCheckMobile } from './useCheckMobile';

export const useCardMove = () => {
  const wrap = useRef<HTMLDivElement>(null);
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  const xRef = useRef<number | null>(null);
  const yRef = useRef<number | null>(null);
  const isMobile = useCheckMobile();

  const handleMouseMove = (e: MouseEvent) => {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
  };

  const handleMobileMove = (e: DeviceOrientationEvent) => {
    xRef.current = e.gamma;
    yRef.current = e.beta;
  };

  const loop = () => {
    mx += (x - mx) * 0.1;
    my += (y - my) * 0.1;

    if (wrap.current) {
      wrap.current.style.transform = `translate3d(-50%, -50%, 0) rotateX(${
        my / 10
      }deg) rotateY(${-mx / 10}deg)`;
    }

    window.requestAnimationFrame(loop);
  };

  const loopMobile = () => {
    mx += (x - mx) * 0.1;
    my += (y - my) * 0.1;
    if (wrap.current) {
      wrap.current.style.transform = `translate3d(-50%, -50%, 0) rotateX(${
        my - 50
      }deg) rotateY(${mx}deg)`;
    }
    window.requestAnimationFrame(loopMobile);
  };

  useLayoutEffect(() => {
    if (isMobile) {
      window.addEventListener('deviceorientation', handleMobileMove);
      loopMobile();

      return () => {
        window.removeEventListener('deviceorientation', handleMobileMove);
      };
    }
    window.addEventListener('mousemove', handleMouseMove);
    loop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { wrap };
};
