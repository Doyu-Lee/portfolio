import { useEffect, useState } from 'react';

export const useAfterSeconds = (seconds: number) => {
  const [isMounting, setIsMounting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounting(true);
      setIsLoading(false);
    }, seconds);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { isLoading, isMounting };
};
