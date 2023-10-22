'use client';

import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { useScrollMoveToTop } from '@/hooks/useScrollMoveToTop';
import styles from './MoveToTopButton.module.scss';

const MoveToTopButton = ({ lng }: { lng: string }) => {
  const { isShowButton, handleMoveToTop } = useScrollMoveToTop();

  return (
    <button
      type="button"
      className={`${styles.container} ${isShowButton ? styles.visibility : ''}`}
      onClick={handleMoveToTop}
      aria-label={lng === 'ko' ? '위로 이동하기' : 'back to top'}
    >
      <FaRegArrowAltCircleUp size={33} />
    </button>
  );
};

export default MoveToTopButton;
