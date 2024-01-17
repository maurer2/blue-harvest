import ContentGrid from '@/components/ContentGrid/ContentGrid';

import { getDataFromEndpoint } from '../server-actions/getDataFromEndpoint/getDataFromEndpoint';
import * as styles from './page.css';

type CategoryProps = {
  params: Record<string, string[]>; // route segments in string[]
};

type Payload = {
  count: number;
  next: null | string;
  results: unknown[];
};

export type Content = {
  category: string;
  count: number;
  results: unknown[];
};

const baseURL = 'https://swapi.dev/api';

export default async function Category({ params }: CategoryProps) {
  const category = params.category[0];
  const url = `${baseURL}/${category}`;

  const content: Content = {
    category,
    count: 0,
    results: [],
  };

  async function getAllPages(currentUrl: string) {
    const { count, next, results }: Payload = await getDataFromEndpoint(currentUrl);

    content.count = count;
    content.results = [...content.results, results].flat();

    if (next !== null) {
      await getAllPages(next);
    }
  }

  await getAllPages(url);

  return (
    <div className={styles.page}>
      <ContentGrid content={content} />
    </div>
  );
}
