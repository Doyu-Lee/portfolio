'use client';

import Link from 'next/link';
import React from 'react';
import styles from './ContactArticle.module.scss';

interface Modal1Props {
  title?: string;
  subtitle?: string;
  url?: string;
}

const ContactArticle = React.memo(({ title, subtitle, url }: Modal1Props) => {
  return (
    <section className={styles.container}>
      {url ? (
        <Link href={url || ''} target="_blank">
          <div className={styles['article-box']}>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </Link>
      ) : (
        <div className={styles.flip}>
          <div className={styles['mail-box']}>
            <h2 className={styles['mail-title']}>{title}</h2>
            <div className={styles['subtitle-box']}>
              <div className={styles.subtitle}>{subtitle}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

export default ContactArticle;
