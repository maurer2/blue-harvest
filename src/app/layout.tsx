import type { NavElement } from '@/types';
import type { Metadata } from 'next';

import CategoryNav from '@/components/CategoryNav/CategoryNav';
import 'modern-normalize/modern-normalize.css';

import './globals.css';
import { getDataFromEndpoint } from './server-actions/getDataFromEndpoint/getDataFromEndpoint';

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

const baseURL = 'https://swapi.dev/api';
const visibleCategories = ['starships', 'films', 'vehicles']; // other categories are hidden

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const rootCategories = await getDataFromEndpoint<Record<string, string>>(baseURL);
  const rootCategoriesNavElements: NavElement[] = Object.entries(rootCategories)
    .filter(([label]) => visibleCategories.includes(label))
    .flatMap(([label, path], index) => ({
      label,
      order: index,
      path,
    }));

  return (
    <html lang="en">
      <body>
        <CategoryNav navElements={rootCategoriesNavElements} />
        <main>{children}</main>
      </body>
    </html>
  );
}
