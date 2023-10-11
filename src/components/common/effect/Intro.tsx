'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from '@/app/i18n/client';
import { LngProps } from '@/types/lngSwitch';
import styles from './Intro.module.scss';

export default function Intro({ lng }: LngProps) {
  const { t } = useTranslation(lng, 'home');

  const titleLetters = t('title');

  const [childRef, setChildRef] = useState<React.JSX.Element[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const letters = titleLetters.split('');
  const spanRef = useRef<null[] | HTMLSpanElement[]>([]);
  const max = 73;
  const factor = 1.2;
  const ratio = max / factor ** (letters.length - 1);

  useEffect(() => {
    if (childRef.length !== letters.length) {
      letters.map((letter, index) => {
        const newSpan = (
          <span
            key={Math.random()}
            ref={(el) => {
              spanRef.current[index] = el;
            }}
          >
            {letter}
          </span>
        );
        return setChildRef((prev) => [...prev, newSpan]);
      });
    }

    return () => setChildRef([]);
  }, [titleLetters]);

  useEffect(() => {
    const currentSpan = spanRef.current[currentIndex];
    const rotation = factor ** currentIndex * ratio;
    if (currentSpan) {
      setTimeout(
        () => {
          currentSpan.style.transform = `rotate(${rotation}deg)`;
        },
        2000 + currentIndex * 70,
      );
    }
    if (currentIndex < letters.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.align}>
          <div className={`${styles.drift} ${lng === 'en' && styles.en1}`}>
            {childRef}
          </div>
        </div>
        <div className={`${styles.introduction} ${lng === 'en' && styles.en2}`}>
          <Trans key="강조" components={[<span className={styles.point} />]}>
            {t('introduction1')}
          </Trans>
        </div>
        <div className={`${styles.introduction} ${lng === 'en' && styles.en2}`}>
          <Trans
            key="강조"
            components={[
              <span className={styles.weight} />,
              <span className={styles.highlight} />,
            ]}
          >
            {t('introduction2')}
          </Trans>
        </div>
        <div className={`${styles.guide} ${lng === 'en' && styles.en2}`}>
          <div>{t('guide')}</div>
        </div>
      </div>
    </div>
  );
}
