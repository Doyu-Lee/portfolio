import dynamic from 'next/dynamic';
import Intro from '@/components/common/effect/Intro';
import { LngParamsProps } from '@/types/lngSwitch';
import styles from './page.module.scss';

const Home = async ({ params: { lng } }: LngParamsProps) => {
  const Footer = dynamic(() => import('@/components/layouts/footer/Footer'), {
    ssr: false,
  });
  const LngSwitchButtonSSR = dynamic(
    () => import('@/components/language-button/LngSwitchButtonSSR'),
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LngSwitchButtonSSR lng={lng} url="/" />
        <Intro lng={lng} />
        <div className={styles['iframe-container']}>
          <iframe
            allow="microphone;"
            title="chatbot"
            src="https://console.dialogflow.com/api-client/demo/embedded/918b3a83-ebd8-410f-8155-dff0bf42e5d2"
          />
        </div>
      </div>
      <Footer lng={lng} />
    </div>
  );
};

export default Home;
