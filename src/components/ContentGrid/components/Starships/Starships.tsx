import type { Starships } from '@/types';
import type { ReactElement } from 'react';

import * as styles from '../../ContentGrid.css';

export type ContentGridProps = {
  content: Starships;
};

function StarshipBox({ content }: ContentGridProps): ReactElement {
  return (
    <div className={styles.grid}>
      <h2 className={styles.gridTitle}>Starships</h2>
      {content.map((entry) => (
        <dl className={styles.gridBox} key={entry.name}>
          <dt>Name</dt>
          <dd>{entry.name}</dd>
          <dt>Model</dt>
          <dd>{entry.model}</dd>
          <dt>Manufacturer</dt>
          <dd>{entry.manufacturer}</dd>
          <dt>Cost in credits</dt>
          <dd>{entry.cost_in_credits}</dd>
          <dt>Length</dt>
          <dd>{entry.length}</dd>
          <dt>Crew</dt>
          <dd>{entry.crew}</dd>
          <dt>Passengers</dt>
          <dd>{entry.passengers}</dd>
          <dt>Cargo capacity</dt>
          <dd>{entry.cargo_capacity}</dd>
        </dl>
      ))}
    </div>
  );
}

export default StarshipBox;
