'use client';

import { LngSwitch } from '@/types/lngSwitch';
import LngSwitchButton from './LngSwitchButton';

const LngSwitchButtonCSR = ({ lng, url }: LngSwitch) => {
  return <LngSwitchButton lng={lng} url={url} />;
};

export default LngSwitchButtonCSR;
