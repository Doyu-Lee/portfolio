'use client';

import { Trans } from 'react-i18next';
import { LngProps } from '@/types/lngSwitch';
import styles from './Guide.module.scss';

interface GuideBoxProps extends LngProps {
  text: string;
}

export default function GuideBox({ lng, text }: GuideBoxProps) {
  return (
    <div className={`${styles.guide} ${lng === 'en' && styles.en}`}>
      <div>
        <Trans
          key="맞춤형"
          components={[
            <span key="italic" className={styles.italic} />,
            <span key="point" className={styles.point} />,
            <span key="weight" className={styles.weight} />,
            <span key="highlight" className={styles.highlight} />,
          ]}
        >
          {text}
        </Trans>
      </div>
    </div>
  );
}
