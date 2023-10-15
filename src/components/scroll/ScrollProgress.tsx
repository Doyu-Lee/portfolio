'use client';

import React, { memo, RefObject } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './ScrollProgress.module.scss';

interface ScrollProgressProps {
  mainRef: RefObject<HTMLElement>;
}

const ScrollProgress = memo(({ mainRef }: ScrollProgressProps) => {
  const { containerRef, barRef, progressRef, handleProgressMove } = useScrollProgress({
    mainRef,
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        type="button"
        className={styles.bar}
        ref={barRef}
        onClick={handleProgressMove}
        onMouseMove={handleProgressMove}
        onMouseDown={handleProgressMove}
      >
        <div className={styles.progress} ref={progressRef} />
      </button>
    </div>
  );
});

export default ScrollProgress;
