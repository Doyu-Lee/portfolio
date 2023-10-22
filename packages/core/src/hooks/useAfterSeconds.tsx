import { useEffect, useState } from 'react';
import Loading from '@/components/common/loading/Loading';
import styles from './useAfterSeconds.module.scss';

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
  }, [seconds]);

  const LoadingComponent = (
    <div className={styles.loading}>
      <Loading />
    </div>
  );

  return { isLoading, isMounting, LoadingComponent };
};
