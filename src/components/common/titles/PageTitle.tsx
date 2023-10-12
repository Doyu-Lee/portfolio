import TypingAni from '../effect/TypingAni';
import styles from './PageTitle.module.scss';

interface PageTitlesProps {
  title: string;
  lng: string;
}

export const PageTitle = ({ title, lng }: PageTitlesProps) => {
  return (
    <div className={`${styles['title-wrapper']} ${styles.center}`}>
      <div className={`${styles['title-box']} ${styles.center}`}>
        <h2 className={`${styles.title} ${lng === 'ko' && styles.ko}`}>{title}</h2>
      </div>
    </div>
  );
};

export const PageTitleWithTyping = ({ title, lng }: PageTitlesProps) => {
  return (
    <div className={styles['title-wrapper']}>
      <div className={styles['title-box']}>
        <h2 className={`${styles.title} ${lng === 'ko' && styles.ko}`}>{title}</h2>
        <div className={styles['sub-title']}>
          <TypingAni lng={lng} />
        </div>
      </div>
    </div>
  );
};
