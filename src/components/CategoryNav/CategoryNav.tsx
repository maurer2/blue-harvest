'use client';

import type { ReactElement } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as styles from './CategoryNav.css';

export type NavElement = {
  label: string;
  order?: number;
  path: string;
};

export type CategoryNavProps = {
  navElements: NavElement[];
};

function CategoryNav({ navElements }: CategoryNavProps): ReactElement {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link className={pathname === '/' ? styles.navItem.active : styles.navItem.inactive} href="/">
        Home
      </Link>
      {navElements.map((navElement) => (
        <Link
          className={
            pathname === `/${navElement.label}` ? styles.navItem.active : styles.navItem.inactive
          }
          href={navElement.label}
          key={navElement.label}
        >
          {navElement.label}
        </Link>
      ))}
    </nav>
  );
}

export default CategoryNav;
