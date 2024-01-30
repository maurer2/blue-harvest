import type { NavElement } from '@/types';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import CategoryNav from '@/components/CategoryNav/CategoryNav';
import SearchBox from '@/components/SearchBox/SearchBox';
import 'modern-normalize/modern-normalize.css';

import './globals.css';
import { getDataFromEndpoint } from './server-actions/getDataFromEndpoint/getDataFromEndpoint';

export const metadata: Metadata = {
  description: 'Code assignment',
  title: 'Blue Harvest',
};

const baseURL = 'https://swapi.dev/api';
const visibleCategories = ['starships', 'films', 'vehicles']; // other categories are hidden

export default async function RootLayout({ children }: PropsWithChildren) {
  const rootCategories = await getDataFromEndpoint<Record<string, string>>(baseURL);
  const rootCategoriesNavElements: NavElement[] = Object.entries(rootCategories)
    .filter(([label]) => visibleCategories.includes(label))
    .flatMap(([label, path]) => ({
      label,
      path,
    }));

  return (
    <html lang="en">
      <body>
        <CategoryNav navElements={rootCategoriesNavElements} />
        <SearchBox navElements={rootCategoriesNavElements} />
        <main>{children}</main>
      </body>
    </html>
  );
}
