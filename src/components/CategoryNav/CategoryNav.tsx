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

function CategoryNav({ activeNavElementLabel, navElements }: CategoryNavProps): ReactElement {
  const hasActiveNavElement = Boolean(activeNavElementLabel?.length);

  return (
    <nav className={styles.nav}>
      <Link
        className={hasActiveNavElement ? styles.navItem.inactive : styles.navItem.active}
        href="/"
      >
        Home
      </Link>
      {navElements.map((navElement) => (
        <Link
          className={
            activeNavElementLabel === navElement.label
              ? styles.navItem.active
              : styles.navItem.inactive
          }
          href={{
            pathname: '/',
            query: { category: navElement.label },
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
