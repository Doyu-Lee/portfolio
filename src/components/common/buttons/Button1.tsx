'use client';

import Link from 'next/link';
import { MouseEvent, ReactNode } from 'react';
import { getProps } from '@/utils/common/getButtonProps';
import styles from './Button1.module.scss';

interface Button1Props {
  handler?: () => void;
  title?: string;
  children?: ReactNode;
  isLink?: string;
  toWhere?: string;
  isNewTab?: boolean;
  isBlocked?: boolean;
}

const Button1 = ({
  handler,
  title,
  children,
  isLink,
  toWhere,
  isNewTab,
  isBlocked,
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
          className={styles.button}
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
    <div className={styles['button-box']}>
      <button
        type="button"
        className={styles.button}
        onClick={handler}
        disabled={!isBlocked}
      >
        {contents}
      </button>
    </div>
  );
};

export default Button1;
