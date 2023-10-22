/* eslint-disable react/jsx-key */

'use client';

import { useState } from 'react';
import { Trans } from 'react-i18next';
import commonStyles from '@/styles/base/common.module.scss';
import { LngProps } from '@/types/lngSwitch';
import Button1 from './buttons/Button1';
import styles from './Guide.module.scss';

interface GuideBoxProps extends LngProps {
  text: string;
  hidedText?: string;
}

export default function GuideBox({ lng, text, hidedText }: GuideBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => setIsOpen((prev) => !prev);
  const transComponents = [
    <span className={commonStyles.italics} />,
    <span className={commonStyles.points} />,
    <span className={commonStyles.weights} />,
    <span className={commonStyles.highlights} />,
    <div className={commonStyles.margins} />,
    <Button1 handler={handleOnClick} />,
  ];

  return (
    <div
      className={`${styles.guide} ${lng === 'en' && styles.en} ${isOpen && styles.open}`}
    >
      <div>
        <Trans i18nKey="맞춤형" components={transComponents}>
          {text}
        </Trans>
      </div>
      <div className={`${commonStyles.toggles} ${isOpen ? styles.open : styles.close}`}>
        <Trans i18nKey="맞춤형" components={transComponents}>
          {hidedText}
        </Trans>
      </div>
    </div>
  );
}
