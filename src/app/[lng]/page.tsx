import LngSwitchButtonSSR from '@/components/language-button/LngSwitchButtonSSR';
import { LngParamsProps } from '@/types/lngSwitch';
import { useTranslation } from '../i18n';
import styles from './page.module.scss';

export default async function Home({ params: { lng } }: LngParamsProps) {
  const { t } = await useTranslation(lng, 'home');

  return (
    <main className={styles.main}>
      <h2>{t('title')}</h2>
      <h2>{t('to-Mango')}</h2>
      <LngSwitchButtonSSR lng={lng} url="/" />
    </main>
  );
}
