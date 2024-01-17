import type { ReactElement } from 'react';

import Link from 'next/link';

import * as styles from './CategoryNav.css';

export type NavElement = {
  label: string;
  order?: number;
  path: string;
};

export type CategoryNavProps = {
  activeNavElementLabel?: NavElement['label'];
  navElements: NavElement[];
};

function CategoryNav({ navElements }: CategoryNavProps): ReactElement {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navItem} href="/">
        Home
      </Link>
      {navElements.map((navElement) => (
        <Link
          className={styles.navItem}
          href={{
            pathname: '/',
            query: navElement.label,
          }}
          key={navElement.label}
        >
          {navElement.label}
        </Link>
      ))}
    </nav>
  );
}

export default CategoryNav;
