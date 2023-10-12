'use client';

import { ReactNode } from 'react';
import { getProps } from '@/utils/common/getButtonProps';
import styles from './Button2.module.scss';

interface Button1Props {
  handler?: () => void;
  title?: string;
  children?: ReactNode;
  lng?: string;
}

const Button2 = ({ handler, title, children, lng }: Button1Props) => {
  const buttonContents = getProps(title, children);

  return (
    <button
      type="button"
      className={`${styles.button} ${lng === 'ko' && styles.en}`}
      onClick={handler}
    >
      {buttonContents}
    </button>
  );
};

export default Button2;
