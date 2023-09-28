'use client';

import Link from 'next/link';
import styles from './ContactArticle.module.scss';

interface Modal1Props {
  title?: string;
  subTitle?: string;
  url?: string;
}

const ContactArticle = ({ title, subTitle, url }: Modal1Props) => {
  return (
    <section className={styles.container}>
      {url ? (
        <Link href={url || ''} target="_blank">
          <div className={styles['article-box']}>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </Link>
      ) : (
        <div className={styles.flip}>
          <div className={styles['mail-box']}>
            <h3 className={styles['mail-title']}>{title}</h3>
            <div className={styles['subtitle-box']}>
              <div className={styles.subtitle}>{subTitle}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactArticle;
