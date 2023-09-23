'use client';

import gsap from 'gsap';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import styles from './Logo.module.scss';

const Logo = ({ lng }: { lng: string }) => {
  const root = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to('.box', { duration: 0.2, rotate: 40 });
    tl.to('.box', { duration: 0.5, rotate: -40 });
    tl.to('.box', { duration: 0.7, rotate: 20 });
    tl.to('.box', { duration: 1, rotate: 10 });
  }, []);

  return (
    <Link
      className={styles['header-logo']}
      ref={root}
      data-text="홈 로고"
      href={`/${lng}`}
    >
      <span className="box">D</span>O<span className={styles.point}>Y</span>U
    </Link>
  );
};

export default Logo;
