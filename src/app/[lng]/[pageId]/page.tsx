import NotionPage from '@/components/notion/NotionPages';
import { notion } from '../page';

interface fetchEachPagesProps {
  params: {
    pageId: string;
  };
}

const fetchEachPages = async ({ params: { pageId } }: fetchEachPagesProps) => {
  try {
    const recordMap = await notion.getPage(pageId);
    return <NotionPage recordMap={recordMap} />;
  } catch (error) {
    return console.error(error);
  }
};

export default fetchEachPages;
