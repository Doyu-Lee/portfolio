import Link from 'next/link';
import { languages } from '@/app/i18n/settings';
import Button2 from '../common/buttons/Button2';
import styles from './LanguageSwitchButton.module.scss';

const LanguageSwitchButton = async ({ lng }: { lng: string }) => {
  return (
    <div className={styles['button-box']}>
      {languages
        .filter((l) => lng !== l)
        .map((l) => {
          return (
            <Button2 key={l}>
              <Link href={`/${l}`}>{l}</Link>
            </Button2>
          );
        })}
    </div>
  );
};

export default LanguageSwitchButton;
