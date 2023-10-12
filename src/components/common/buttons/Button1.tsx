'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { getProps } from '@/utils/common/getButtonProps';
import styles from './Button1.module.scss';

interface Button1Props {
  handler?: () => void;
  title?: string;
  children?: ReactNode;
  isLink?: string;
  toWhere?: string;
  isNewTab?: boolean;
}

const Button1 = ({
  handler,
  title,
  children,
  isLink,
  toWhere,
  isNewTab,
}: Button1Props) => {
  const contents = getProps(title, children);

  if (isLink && toWhere) {
    return (
      <div className={styles['button-box']}>
        <Link
          href={toWhere}
          className={styles.button}
          target={isNewTab ? '_blank' : undefined}
          rel={isNewTab ? 'noopener' : undefined}
        >
          {contents}
        </Link>
      </div>
    );
  }
  return (
    <div className={styles['button-box']}>
      <button type="button" className={styles.button} onClick={handler}>
        {contents}
      </button>
    </div>
  );
};

export default Button1;
