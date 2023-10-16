import { useEffect, useState } from 'react';

export const useScrollMoveToTop = () => {
  const [isShowButton, setIsShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsShowButton(true);
    } else {
      setIsShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { isShowButton, handleMoveToTop };
};
