'use client';

import { usePathname } from 'next/navigation';
import LngSwitchButtonCSR from '@/components/language-button/LngSwitchButtonCSR';
import { LngParamsProps } from '@/types/lngSwitch';
import { getPathFromURL } from '@/utils/common/getPathFromURL';
import styles from './page.module.scss';

export default function RoadMap({ params: { lng } }: LngParamsProps) {
  const url = getPathFromURL(usePathname());
  return (
    <div className={styles.container}>
      <div className={styles['iframe-container']}>
        <iframe title="scrap" src="https://portfolio-doyu-notion.vercel.app/" />
      </div>
      <LngSwitchButtonCSR lng={lng} url={url} />
    </div>
  );
}
