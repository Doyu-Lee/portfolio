'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import LngSwitchButtonCSR from '@/components/language-button/LngSwitchButtonCSR';
import { contactInfos } from '@/constants/contactInfos';
import { LngParamsProps } from '@/types/lngSwitch';
import { getPathFromURL } from '@/utils/common/getPathFromURL';
import styles from './page.module.scss';

const TypingAni = dynamic(() => import('@/components/common/effect/TypingAni'), {
  ssr: false,
});
const ContactArticle = dynamic(() => import('@/components/contacts/ContactArticle'), {
  ssr: false,
});
const Card3D = dynamic(() => import('@/components/common/effect/card/Card'), {
  ssr: false,
});

export default function Contacts({ params: { lng } }: LngParamsProps) {
  const { t } = useTranslation(lng, 'contacts');
  const url = getPathFromURL(usePathname());

  return (
    <div className={styles.container}>
      <LngSwitchButtonCSR lng={lng} url={url} />
      <div className={styles.wrapper}>
        <div className={styles['title-wrapper']}>
          <div className={styles['title-box']}>
            <h2 className={`${styles.title} ${lng === 'ko' && styles.ko}`}>
              {t('title')}
            </h2>
            <div className={styles['sub-title']}>
              <TypingAni lng={lng} />
            </div>
          </div>
        </div>
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
          <div className={styles['card-box']}>
            <Card3D lng={lng} />
          </div>
        </div>
      </div>
    </div>
  );
}
