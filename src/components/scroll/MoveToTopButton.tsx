'use client';

import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { useScrollMoveToTop } from '@/hooks/useScrollMoveToTop';
import styles from './MoveToTopButton.module.scss';

const MoveToTopButton = () => {
  const { isShowButton, handleMoveToTop } = useScrollMoveToTop();

  return (
    <button
      type="button"
      className={`${styles.container} ${isShowButton ? styles.visibility : ''}`}
      onClick={handleMoveToTop}
    >
      <FaRegArrowAltCircleUp size={33} />
    </button>
  );
};

export default MoveToTopButton;
