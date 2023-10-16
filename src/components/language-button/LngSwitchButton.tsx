import { languages } from '@/app/i18n/settings';
import { LngSwitch } from '@/types/lngSwitch';
import Button2 from '../common/buttons/Button2';
import styles from './LngSwitchButton.module.scss';

const LngSwitchButton = ({ lng, url, isBlocked }: LngSwitch) => {
  return (
    <div className={styles['button-box']}>
      {languages
        .filter((l) => lng !== l)
        .map((l) => {
          return (
            <Button2
              key={l}
              lng={lng}
              isLink
              toWhere={url ? `/${l}/${url}` : `/${l}`}
              title={l}
              isBlocked={isBlocked}
            />
          );
        })}
    </div>
  );
};

export default LngSwitchButton;
