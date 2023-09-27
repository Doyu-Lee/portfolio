import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTranslation } from '@/app/i18n/client';
import { LngProps } from '@/types/lngSwitch';
import { useAfterSeconds } from '@/hooks/useAfterSeconds';
import styles from './TypingAni.module.scss';

export default function TypingAni({ lng }: LngProps) {
  const { t } = useTranslation(lng, 'contacts');
  const isMounting = useAfterSeconds(1000);

  const [text] = useTypewriter({
    words: ['', t('subTitle1'), t('subTitle2'), t('subTitle3')],
  });

  return (
    <div className={`${styles.box} ${lng === 'ko' && styles.ko}`}>
      {lng === 'en' && t('subTitle4')}
      <div className={styles.point}>
        {isMounting && (
          <div>
            {text}
            <Cursor cursorColor="green" />
          </div>
        )}
      </div>
      {lng === 'ko' && t('subTitle4')}
    </div>
  );
}
