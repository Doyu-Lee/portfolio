'use client';

import { ReactNode } from 'react';
import { getProps } from '@/utils/common/getButtonProps';
import styles from './Button2.module.scss';

interface Button1Props {
  handler?: () => void;
  title?: string;
  children?: ReactNode;
}

const Button2 = ({ handler, title, children }: Button1Props) => {
  const buttonContents = getProps(title, children);

  return (
    <div className={styles['button-box']}>
      <button type="button" className={styles.button} onClick={handler}>
        {buttonContents}
      </button>
    </div>
  );
};

export default Button2;
