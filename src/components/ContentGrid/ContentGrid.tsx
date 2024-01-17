import type { Content } from '@/types';
import type { ReactElement } from 'react';

import * as styles from './ContentGrid.css';

export type ContentGridProps<T extends Content> = {
  content: T;
};

function ContentGrid<T extends Content>({ content }: ContentGridProps<T>): ReactElement {
  return (
    <ul>
      {content.results.map((entry) => (
        <li key={entry?.name || entry?.title}>{JSON.stringify(entry)}</li>
      ))}
    </ul>
  );
}

export default ContentGrid;
