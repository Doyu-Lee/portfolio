'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useTranslation } from '@/app/i18n/client';
import { PageTitleWithTyping } from '@/components/common/titles/PageTitle';
import { contactInfos } from '@/constants/contactInfos';
import { LngParamsProps } from '@/types/lngSwitch';
import { getPathFromURL } from '@/utils/common/getPathFromURL';
import { useCheckMobile } from '@/hooks/useCheckMobile';
import styles from './page.module.scss';

const Contacts = React.memo(({ params: { lng } }: LngParamsProps) => {
  const { t } = useTranslation(lng, 'contacts');
  const url = getPathFromURL(usePathname());
  const isMobile = useCheckMobile();

  const GuideBox = dynamic(() => import('@/components/common/Guide'), {
    ssr: false,
  });
  const ContactArticle = dynamic(() => import('@/components/contacts/ContactArticle'), {
    ssr: false,
  });
  const Card3D = dynamic(() => import('@/components/common/effect/card/Card'), {
    ssr: false,
  });
  const LngSwitchButtonCSR = dynamic(
    () => import('@/components/language-button/LngSwitchButtonCSR'),
  );

  return (
    <main className={styles.container}>
      <h2 className="blind">{t('title')}</h2>
      <LngSwitchButtonCSR lng={lng} url={url} />
      <article className={styles.wrapper}>
        <PageTitleWithTyping lng={lng} />
        <div className={styles['contents-box']}>
          <div className={styles['info-box']}>
            {contactInfos.map((info) => (
              <ContactArticle
                key={info.title}
                title={info.title}
                subtitle={info.subtitle}
                url={info.url}
              />
            ))}
          </div>
          <div className={`${styles['card-box']} ${isMobile && styles.mobile}`}>
            {isMobile && <GuideBox text={t('mobile-guide')} lng={lng} />}
            <Card3D lng={lng} />
          </div>
        </div>
      </article>
    </main>
  );
});

export default Contacts;
