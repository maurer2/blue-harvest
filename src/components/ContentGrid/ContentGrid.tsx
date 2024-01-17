import type { Content, Films, Starships, Vehicles } from '@/types';
import type { ReactElement } from 'react';

import { filmsSchema, starshipsSchema, vehiclesSchema } from '@/constants';

import FilmBox from './components/Films/Films';
import StarshipBox from './components/Starships/Starships';
import VehicleBox from './components/Vehicles/Vehicles';

export type ContentGridProps<T extends Content> = {
  content: T;
};

function ContentGrid<T extends Content>({ content }: ContentGridProps<T>): ReactElement {
  const { category } = content;

  try {
    switch (category) {
      case 'films': {
        const parseResults: Films = filmsSchema.parse(content.results);

        return <FilmBox content={parseResults} />;
      }
      case 'starships': {
        const parseResults: Starships = starshipsSchema.parse(content.results);

        return <StarshipBox content={parseResults} />;
      }
      case 'vehicles': {
        const parseResults: Vehicles = vehiclesSchema.parse(content.results);

        return <VehicleBox content={parseResults} />;
      }
      default:
        throw new Error('Unknown category');
    }
  } catch (error) {
    throw new Error('Invalid schema for category');
  }
}

export default ContentGrid;
