'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import 'react-notion-x/src/styles.css';
import { NotionRenderer } from 'react-notion-x';

interface NotionPageProps {
  recordMap: ExtendedRecordMap;
}

export default function NotionPage({ recordMap }: NotionPageProps) {
  const Code = dynamic(() =>
    import('react-notion-x/build/third-party/code').then((m) => m.Code),
  );
  const Collection = dynamic(() =>
    import('react-notion-x/build/third-party/collection').then((m) => m.Collection),
  );
  const Equation = dynamic(() =>
    import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
  );

  const Modal = dynamic(
    () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
    {
      ssr: false,
    },
  );

  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        nextImage: Image,
        nextLink: Link,
      }}
    />
  );
}
