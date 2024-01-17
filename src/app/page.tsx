import type { NavElement } from '@/types';

import CategoryNav from '@/components/CategoryNav/CategoryNav';

import * as styles from './page.css';
import { getDataFromEndpoint } from './server-actions/getDataFromEndpoint/getDataFromEndpoint';

const baseURL = 'https://swapi.dev/api';

export default async function Home() {
  const rootCategories = await getDataFromEndpoint<Record<string, string>>(baseURL);
  const rootCategoriesNavElements: NavElement[] = Object.entries(rootCategories).flatMap(
    ([label, path], index) => ({
      label,
      order: index,
      path,
    }),
  );

  return (
    <main className={styles.main}>
      <CategoryNav navElements={rootCategoriesNavElements} />
    </main>
  );
}
