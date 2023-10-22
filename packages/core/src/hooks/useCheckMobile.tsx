import { useEffect, useState } from 'react';

export const useCheckMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mobileKeywords = /(iPhone|iPad|iPod|Android|SAMSUNG|LG|MOT|SonyEricsson)/i;
    const checkIsMobile = mobileKeywords.test(navigator.userAgent);

    if (checkIsMobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return isMobile;
};
