import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTranslation } from '@/app/i18n/client';
import { LngProps } from '@/types/lngSwitch';
import { useAfterSeconds } from '@/hooks/useAfterSeconds';
import styles from './TypingAni.module.scss';

export default function TypingAni({ lng }: LngProps) {
  const { t } = useTranslation(lng, 'contacts');
  const { isMounting } = useAfterSeconds(2000);

  const [text] = useTypewriter({
    words: [' ', t('subtitle1'), t('subtitle2'), t('subtitle3')],
  });

  return (
    <div className={`${styles.box} ${lng === 'ko' && styles.ko}`}>
      {lng === 'en' && t('subtitle4')}
      <div className={`${styles.point} ${lng === 'ko' && styles.ko}`}>
        {isMounting && (
          <div className={styles.words}>
            {text}
            <Cursor cursorColor="green" />
          </div>
        )}
      </div>
      {lng === 'ko' && t('subtitle4')}
    </div>
  );
}
