import { NotionAPI } from 'notion-client';
import NotionPage from '@/components/notion/NotionPages';

export const notion = new NotionAPI({
  authToken: process.env.NOTION_TOKEN_V2,
});

const fetchPages = async () => {
  try {
    const recordMap = await notion.getPage(
      process.env.NOTION_PAGE_ID ? process.env.NOTION_PAGE_ID : '',
    );
    return <NotionPage recordMap={recordMap} />;
  } catch (error) {
    return console.error(error);
  }
};

export default fetchPages;
