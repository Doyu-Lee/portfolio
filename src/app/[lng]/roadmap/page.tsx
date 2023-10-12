'use client';

import { usePathname } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import LngSwitchButtonCSR from '@/components/language-button/LngSwitchButtonCSR';
import { LngParamsProps } from '@/types/lngSwitch';
import { getPathFromURL } from '@/utils/common/getPathFromURL';
import styles from './page.module.scss';

export default function RoadMap({ params: { lng } }: LngParamsProps) {
  const { t } = useTranslation(lng, 'roadmaps');
  const url = getPathFromURL(usePathname());
  return (
    <div className={styles.container}>
      <h2>{t('title')}</h2>
      <h2>{t('subtitle')}</h2>
      <h2>{t('to-Mango')}</h2>
      <LngSwitchButtonCSR lng={lng} url={url} />
    </div>
  );
}
