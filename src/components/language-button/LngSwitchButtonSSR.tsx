import { LngSwitch } from '@/types/lngSwitch';
import LngSwitchButton from './LngSwitchButton';

const LngSwitchButtonSSR = async ({ lng, url }: LngSwitch) => {
  return <LngSwitchButton lng={lng} url={url} />;
};

export default LngSwitchButtonSSR;
