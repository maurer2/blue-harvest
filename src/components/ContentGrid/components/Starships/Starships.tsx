'use client';

import type { Starships } from '@/types';
import type { ReactElement } from 'react';

import { useMemo, useReducer } from 'react';

import * as styles from '../../ContentGrid.css';

export type ContentGridProps = {
  content: Starships;
};

function StarshipBox({ content }: ContentGridProps): ReactElement {
  const [isOrderedByName, toggleIsOrderedByName] = useReducer((state: boolean) => !state, false);

  const contentWithCustomOrder = useMemo(() => {
    if (!isOrderedByName) {
      return content;
    }

    return structuredClone(content).sort((valueA, valueB) =>
      valueA.name.localeCompare(valueB.name, 'en', { sensitivity: 'base' }),
    );
  }, [isOrderedByName, content]);

  return (
    <div className={styles.grid}>
      <div className={styles.gridHeader}>
        <h2 className={styles.gridTitle}>Starships ({contentWithCustomOrder.length})</h2>
        <button className={styles.gridOrderToggle} onClick={toggleIsOrderedByName} type="button">
          {isOrderedByName ? 'Restore default order' : 'Sort by name'}
        </button>
      </div>
      {contentWithCustomOrder.map((entry) => (
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
