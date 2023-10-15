'use client';

import { ExtendedRecordMap } from 'notion-types';
import { useRef } from 'react';
import LngSwitchButtonCSR from '@/components/language-button/LngSwitchButtonCSR';
import NotionPage from '@/components/notion/NotionPages';
import styles from './page.module.scss';

interface NotionEachPageProps {
  recordMap: ExtendedRecordMap;
  lng: string;
}

const NotionEachPage = ({ recordMap, lng }: NotionEachPageProps) => {
  const mainRef = useRef(null);

  return (
    <main ref={mainRef} className={styles.container}>
      <LngSwitchButtonCSR lng={lng} url="/" isBlocked />
      <NotionPage recordMap={recordMap} />
    </main>
  );
};

export default NotionEachPage;
