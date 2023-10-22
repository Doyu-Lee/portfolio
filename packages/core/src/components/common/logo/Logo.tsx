'use client';

import Link from 'next/link';
import { useHover } from '@/hooks/useHover';
import styles from './Logo.module.scss';

const Logo = ({ lng }: { lng: string }) => {
  const { rootRef } = useHover();

  return (
    <Link
      className={styles['header-logo']}
      ref={rootRef}
      aria-label="DOYU"
      href={`/${lng}`}
    >
      <div aria-hidden className={`box ${styles.word}`}>
        D
      </div>
      <span aria-hidden>O</span>
      <span aria-hidden className={styles.point}>
        Y
      </span>
      <span aria-hidden>U</span>
    </Link>
  );
};

export default Logo;
