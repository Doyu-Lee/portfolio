'use client';

import styles from './Button1.module.scss';

interface Button1Props {
  handler: () => void | undefined;
  title: string | undefined;
}

const Button1 = ({ handler, title }: Button1Props) => {
  return (
    <div className={styles['button-box']}>
      <button type="button" className={styles.button} onClick={handler}>
        {title}
      </button>
    </div>
  );
};

export default Button1;
