import { useTranslation } from '../i18n';
import styles from './page.module.scss';

interface HomeProps {
  params: { lng: string };
}

export default async function Home({ params: { lng } }: HomeProps) {
  const { t } = await useTranslation(lng, 'home');

  return (
    <main className={styles.main}>
      <h2>{t('title')}</h2>
      <h2>{t('to-Mango')}</h2>
    </main>
  );
}
