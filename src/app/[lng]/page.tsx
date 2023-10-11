import { NotionAPI } from 'notion-client';
import Intro from '@/components/common/effect/Intro';
import LngSwitchButtonSSR from '@/components/language-button/LngSwitchButtonSSR';
import Footer from '@/components/layouts/footer/Footer';
import NotionPage from '@/components/notion/NotionPages';
import { LngParamsProps } from '@/types/lngSwitch';
import styles from './page.module.scss';

export const notion = new NotionAPI({
  authToken: process.env.NOTION_TOKEN_V2,
});

const Home = async ({ params: { lng } }: LngParamsProps) => {
  try {
    const recordMap = await notion.getPage(
      process.env.NOTION_PAGE_ID ? process.env.NOTION_PAGE_ID : '',
    );

    return (
      <main className={styles.container}>
        <LngSwitchButtonSSR lng={lng} url="/" />
        <Intro lng={lng} />
        <NotionPage recordMap={recordMap} />
        <Footer lng={lng} />
      </main>
    );
  } catch (error) {
    return console.error(error);
  }
};

export default Home;
