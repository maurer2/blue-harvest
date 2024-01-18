'use client';

import type { NavElement } from '@/types';
import type { FormEvent, ReactElement } from 'react';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import * as styles from './SearchBox.css';

type SearchBoxProps = {
  navElements: NavElement[];
};

function capitalizeValue(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function SearchBox({ navElements }: SearchBoxProps): ReactElement {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  function handleChange(event: FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    setSearchValue(value);
    const targetCategory = navElements.find(
      (navElement) => navElement.label === value.toLocaleLowerCase(),
    );

    if (typeof targetCategory !== 'undefined') {
      router.push(targetCategory.label);
      setSearchValue('');
    }
  }

  return (
    <div className={styles.searchBoxWrapper}>
      <label htmlFor="category">Please select a category:</label>
      <input
        className={styles.searchBox}
        id="category"
        list="categories"
        name="category"
        onChange={handleChange}
        placeholder="Category"
        type="search"
        value={searchValue}
      />
      {Boolean(navElements.length) && (
        <datalist id="categories">
          {navElements.map((navElement) => (
            <option key={navElement.label} value={capitalizeValue(navElement.label)}>
              {capitalizeValue(navElement.label)}
            </option>
          ))}
        </datalist>
      )}
    </div>
  );
}

export default SearchBox;
