import type { NavElement } from '@/types';

import CategoryNav from '@/components/CategoryNav/CategoryNav';

import * as styles from './page.css';
import { getDataFromEndpoint } from './server-actions/getDataFromEndpoint/getDataFromEndpoint';

type HomeProps = {
  searchParams?: Record<string, string>;
};

const baseURL = 'https://swapi.dev/api';

export default async function Home({ searchParams }: HomeProps) {
  const rootCategories = await getDataFromEndpoint<Record<string, string>>(baseURL);
  const rootCategoriesNavElements: NavElement[] = Object.entries(rootCategories).flatMap(
    ([label, path], index) => ({
      label,
      order: index,
      path,
    }),
  );

  return <div className={styles.page}>Main</div>;
}
