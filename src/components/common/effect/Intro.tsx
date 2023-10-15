'use client';

import { Trans } from 'react-i18next';
import { useTranslation } from '@/app/i18n/client';
import { LngProps } from '@/types/lngSwitch';
import { useAfterSeconds } from '@/hooks/useAfterSeconds';
import { LetterDomino } from '@/hooks/useLetterDomino';
import GuideBox from '../Guide';
import { IntroSkeleton } from '../loading/skeleton/Skeleton';
import styles from './Intro.module.scss';

export default function Intro({ lng }: LngProps) {
  const { t } = useTranslation(lng, 'home');
  const { isLoading } = useAfterSeconds(800);

  const titleLetters = t('title');
  const { childSpans } = LetterDomino({ text: titleLetters });

  return (
    <div className={styles.wrap}>
      {isLoading && <IntroSkeleton />}
      <div className={styles.content}>
        <div className={styles.align}>
          <div className={`${styles.drift} ${lng === 'en' && styles.en1}`}>
            {childSpans}
          </div>
        </div>
        <div className={`${styles.introduction} ${lng === 'en' && styles.en2}`}>
          <Trans key="강조" components={[<span key="point" className={styles.point} />]}>
            {t('introduction1')}
          </Trans>
        </div>
        <div className={`${styles.introduction} ${lng === 'en' && styles.en2}`}>
          <Trans
            key="강조"
            components={[
              <span key="weight" className={styles.weight} />,
              <span key="highlight" className={styles.highlight} />,
            ]}
          >
            {t('introduction2')}
          </Trans>
        </div>
        <GuideBox text={t('guide')} lng={lng} />
      </div>
    </div>
  );
}
