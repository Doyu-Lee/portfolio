/* eslint-disable prettier/prettier */
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { useTranslation } from '@/app/i18n/client';
import { LngProps } from '@/types/lngSwitch';
import { useAfterSeconds } from '@/hooks/useAfterSeconds';
import styles from './TypingAni.module.scss';

export default function TypingAni({ lng  }:LngProps) {
  const { t } = useTranslation(lng, 'contacts');
  const isMounting = useAfterSeconds(1000);

  return (
    <div className={`${styles.box} ${lng === 'ko' && styles.ko}`}>
      { lng === 'en' && t('subTitle4')}
      <div className={styles.point}>
        {isMounting && <Typist className="inline" startDelay={1000}>
          {t('subTitle1')}
          <Typist.Backspace count={lng === 'ko' ? 18 : 35} delay={2000} />
          {t('subTitle2')}
          <Typist.Backspace count={lng === 'ko' ? 18 : 45} delay={2000} />
          {t('subTitle3')}
        </Typist>}
      </div>
      { lng === 'ko' && t('subTitle4')}
    </div>
  );
}
