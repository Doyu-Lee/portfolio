'use client';

import { ExtendedRecordMap } from 'notion-types';
import { useRef } from 'react';
import LngSwitchButtonCSR from '@/components/language-button/LngSwitchButtonCSR';
import NotionPage from '@/components/notion/NotionPages';
import MoveToTopButton from '@/components/scroll/MoveToTopButton';
import ScrollProgress from '@/components/scroll/ScrollProgress';
import { useCheckMobile } from '@/hooks/useCheckMobile';
import styles from './page.module.scss';

interface NotionEachPageProps {
  recordMap: ExtendedRecordMap;
  isRootPage: boolean;
  lng: string;
}

const NotionEachPage = ({ recordMap, isRootPage, lng }: NotionEachPageProps) => {
  const mainRef = useRef(null);
  const isMobile = useCheckMobile();

  return (
    <main ref={mainRef} className={styles.container}>
      <LngSwitchButtonCSR lng={lng} url="/" isBlocked />
      {!isRootPage && !isMobile && <ScrollProgress mainRef={mainRef} />}
      <NotionPage recordMap={recordMap} />
      <MoveToTopButton />
    </main>
  );
};

export default NotionEachPage;
