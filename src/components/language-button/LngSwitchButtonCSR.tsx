'use client';

import { LngSwitch } from '@/types/lngSwitch';
import LngSwitchButton from './LngSwitchButton';

const LngSwitchButtonCSR = ({ lng, url, isBlocked }: LngSwitch) => {
  return <LngSwitchButton lng={lng} url={url} isBlocked={isBlocked} />;
};

export default LngSwitchButtonCSR;
