import type { Films, Starships, Vehicles } from '@/types';

import ContentGrid from '@/components/ContentGrid/ContentGrid';
import { filmsSchema, starshipsSchema, vehiclesSchema } from '@/constants';

import { getDataFromEndpoint } from '../server-actions/getDataFromEndpoint/getDataFromEndpoint';
import * as styles from './page.css';

type CategoryProps = {
  params: Record<string, string[]>; // route segments in string[]
};

type Schemas = typeof filmsSchema | typeof starshipsSchema | typeof vehiclesSchema;

type Results = Films | Starships | Vehicles;

type Payload = {
  count: number;
  next: null | string;
  results: Results;
};

export type Content = {
  category: string;
  count: number;
  results: unknown[];
};

const schemaMap: Record<string, Schemas> = {
  films: filmsSchema,
  starships: starshipsSchema,
  vehicles: vehiclesSchema,
};

const baseURL = 'https://swapi.dev/api';

export default async function Category({ params }: CategoryProps) {
  const category = params.category[0];
  const url = `${baseURL}/${category}`;

  if (!Object.hasOwn(schemaMap, category)) {
    throw new Error(`Schema missing for category`);
  }

  const currentSchema = schemaMap[category];
  const content: Content = {
    category,
    count: 0,
    results: [],
  };

  async function getAllPages(currentUrl: string) {
    const { count, next, results }: Payload = await getDataFromEndpoint(currentUrl);

    content.count = count;
    content.results = [...content.results, results].flat();

    if (next !== null) {
      return getAllPages(next);
    }

    return undefined;
  }

  await getAllPages(url);

  try {
    currentSchema.parse(content.results);
  } catch (error) {
    throw new Error(`Schema invalid for payload.`, { cause: error });
  }

  return (
    <div className={styles.page}>
      <h2>
        {category} ({url})
      </h2>
      <ContentGrid content={content} />
    </div>
  );
}
