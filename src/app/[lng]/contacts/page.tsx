'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import Card3D from '@/components/common/effect/card/Card';
import { PageTitleWithTyping } from '@/components/common/titles/PageTitle';
import ContactArticle from '@/components/contacts/ContactArticle';
import LngSwitchButtonCSR from '@/components/language-button/LngSwitchButtonCSR';
import { contactInfos } from '@/constants/contactInfos';
import { LngParamsProps } from '@/types/lngSwitch';
import { getPathFromURL } from '@/utils/common/getPathFromURL';
import { useAfterSeconds } from '@/hooks/useAfterSeconds';
import { useCheckMobile } from '@/hooks/useCheckMobile';
import styles from './page.module.scss';

export default function Contacts({ params: { lng } }: LngParamsProps) {
  const { t } = useTranslation(lng, 'contacts');
  const url = getPathFromURL(usePathname());
  const { isLoading, LoadingComponent } = useAfterSeconds(1000);
  const isMobile = useCheckMobile();

  const GuideBox = dynamic(() => import('@/components/common/Guide').then((m) => m), {
    ssr: false,
  });

  return (
    <main className={styles.container}>
      <LngSwitchButtonCSR lng={lng} url={url} />
      {isLoading && LoadingComponent}
      <article className={styles.wrapper}>
        <PageTitleWithTyping title={t('title')} lng={lng} />
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
}
