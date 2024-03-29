'use client';

import type { Films } from '@/types';
import type { ReactElement } from 'react';

import { useMemo, useReducer } from 'react';

import * as styles from '../../ContentGrid.css';

export type FilmBoxProps = {
  content: Films;
};

function FilmBox({ content }: FilmBoxProps): ReactElement {
  const [isOrderedByTitle, toggleIsOrderedByTitle] = useReducer((state: boolean) => !state, false);

  const contentWithCustomOrder = useMemo(() => {
    if (!isOrderedByTitle) {
      return content;
    }

    return structuredClone(content).sort((valueA, valueB) =>
      valueA.title.localeCompare(valueB.title, 'en', { sensitivity: 'base' }),
    );
  }, [isOrderedByTitle, content]);

  return (
    <div className={styles.grid}>
      <div className={styles.gridHeader}>
        <h2 className={styles.gridTitle}>Films ({contentWithCustomOrder.length})</h2>
        <button className={styles.gridOrderToggle} onClick={toggleIsOrderedByTitle} type="button">
          {isOrderedByTitle ? 'Restore default order' : 'Sort by title'}
        </button>
      </div>

      {contentWithCustomOrder.map((entry) => (
        <dl className={styles.gridBox} key={entry.title}>
          <dt>Title</dt>
          <dd>{entry.title}</dd>
          <dt>Episode Number</dt>
          <dd>{entry.episode_id}</dd>
          <dt>Director</dt>
          <dd>{entry.director}</dd>
          <dt>Producer</dt>
          <dd>{entry.producer}</dd>
          <dt>Release Date</dt>
          <dd>{entry.release_date}</dd>
          <dt>Opening Crawl</dt>
          <dd>{entry.opening_crawl}</dd>
        </dl>
      ))}
    </div>
  );
}

export default FilmBox;
