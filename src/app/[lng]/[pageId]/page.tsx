import { Metadata } from 'next';
import { getPageTitle } from 'notion-utils';
import Footer from '@/components/layouts/footer/Footer';
import { notion } from '../page';
import NotionEachPage from './NotionEachPage';

type Props = {
  params: { pageId: string };
};

export const generateMetadata = async ({
  params: { pageId },
}: Props): Promise<Metadata> => {
  const recordMap = await notion.getPage(pageId);
  const title = getPageTitle(recordMap);

  return {
    title,
    openGraph: {
      title,
    },
  };
};

interface fetchEachPagesProps {
  params: {
    pageId: string;
    lng: string;
  };
}

const fetchEachPages = async ({ params: { pageId, lng } }: fetchEachPagesProps) => {
  try {
    const recordMap = await notion.getPage(pageId);
    return (
      <>
        <NotionEachPage recordMap={recordMap} lng={lng} />
        <Footer lng={lng} />
      </>
    );
  } catch (error) {
    return console.error(error);
  }
};

export default fetchEachPages;
