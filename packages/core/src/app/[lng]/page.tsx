import dynamic from 'next/dynamic';
import { NotionAPI } from 'notion-client';
import Intro from '@/components/common/effect/Intro';
import Loading from '@/components/common/loading/Loading';
import LngSwitchButtonSSR from '@/components/language-button/LngSwitchButtonSSR';
import NotionPage from '@/components/notion/NotionPages';
import { LngParamsProps } from '@/types/lngSwitch';
import styles from './page.module.scss';

export const notion = new NotionAPI({
  authToken: process.env.NOTION_TOKEN_V2,
});

const Home = async ({ params: { lng } }: LngParamsProps) => {
  const Footer = dynamic(() => import('@/components/layouts/footer/Footer'), {
    ssr: false,
  });

  if (process.env.NOTION_PAGE_ID) {
    try {
      const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID);

      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <LngSwitchButtonSSR lng={lng} url="/" />
            <Intro lng={lng} />
            <NotionPage recordMap={recordMap} isRootPage />
          </div>
          <Footer lng={lng} />
        </div>
      );
    } catch (error) {
      return error;
    }
  } else return <Loading />;
};

export default Home;
