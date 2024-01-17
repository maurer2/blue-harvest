import type { Films } from '@/types';
import type { ReactElement } from 'react';

import * as styles from '../../ContentGrid.css';

export type FilmBoxProps = {
  content: Films;
};

function FilmBox({ content }: FilmBoxProps): ReactElement {
  return (
    <div className={styles.grid}>
      <h2 className={styles.gridTitle}>Films</h2>
      {content.map((entry) => (
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
