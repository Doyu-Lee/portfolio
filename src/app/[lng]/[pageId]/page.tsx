import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { getPageTitle } from 'notion-utils';
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
  const rootPageId = process.env.NOTION_PAGE_ID;
  const Footer = dynamic(() => import('@/components/layouts/footer/Footer'), {
    ssr: false,
  });

  try {
    const recordMap = await notion.getPage(pageId);
    return (
      <>
        <NotionEachPage
          recordMap={recordMap}
          isRootPage={pageId === rootPageId}
          lng={lng}
        />
        <Footer lng={lng} />
      </>
    );
  } catch (error) {
    return error;
  }
};

export default fetchEachPages;
