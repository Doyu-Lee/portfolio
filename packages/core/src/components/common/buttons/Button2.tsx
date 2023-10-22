'use client';

import Link from 'next/link';
import { MouseEvent, ReactNode } from 'react';
import { getProps } from '@/utils/common/getButtonProps';
import styles from './Button2.module.scss';

interface Button1Props {
  handler?: () => void;
  title?: string;
  children?: ReactNode;
  lng?: string;
  isLink?: boolean;
  toWhere?: string;
  isNewTab?: boolean;
  isBlocked?: boolean;
  ariaLabel?: string;
}

const Button2 = ({
  handler,
  title,
  children,
  lng,
  isLink,
  toWhere,
  isNewTab,
  isBlocked = false,
  ariaLabel,
}: Button1Props) => {
  const contents = getProps(title, children);

  const handleBlockedLink = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isBlocked) {
      event.preventDefault();
    }
  };

  if (isLink && toWhere) {
    return (
      <div className={styles['button-box']}>
        <Link
          href={toWhere}
          className={`${styles.button} ${isBlocked && styles.block} ${
            lng === 'ko' && styles.en
          }`}
          target={isNewTab ? '_blank' : undefined}
          rel={isNewTab ? 'noopener' : undefined}
          onClick={handleBlockedLink}
        >
          {contents}
        </Link>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${lng === 'ko' && styles.en}`}
      onClick={handler}
      disabled={isBlocked}
      aria-label={ariaLabel}
    >
      {contents}
    </button>
  );
};

export default Button2;
