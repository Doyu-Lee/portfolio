/* eslint-disable react/jsx-key */

'use client';

import { Trans } from 'react-i18next';
import { useTranslation } from '@/app/i18n/client';
import commonStyles from '@/styles/base/common.module.scss';
import { LngProps } from '@/types/lngSwitch';
import { LetterDomino } from '@/hooks/useLetterDomino';
import GuideBox from '../Guide';
import styles from './Intro.module.scss';

export default function Intro({ lng }: LngProps) {
  const { t } = useTranslation(lng, 'home');

  const titleLetters = t('title');
  const { childSpans } = LetterDomino({ text: titleLetters });

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.align}>
          <div className={`${styles.drift} ${lng === 'en' ? styles.en1 : ''}`}>
            {childSpans}
          </div>
        </div>
        <div className={`${styles.introduction} ${lng === 'en' ? styles.en2 : ''}`}>
          <Trans
            i18nKey="introduction1"
            components={[<span className={commonStyles.highlights} />]}
          >
            {t('introduction1')}
          </Trans>
        </div>
        <div className={`${styles.introduction} ${lng === 'en' ? styles.en2 : ''}`}>
          <Trans
            i18nKey="introduction2"
            components={[
              <span className={commonStyles.points} />,
              <span className={commonStyles.italics} />,
            ]}
          >
            {t('introduction2')}
          </Trans>
        </div>
        <GuideBox text={t('guide')} hidedText={t('hidedGuide')} lng={lng} />
      </div>
    </div>
  );
}
