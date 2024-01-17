import { z } from 'zod';

export const filmSchema = z.object({
  characters: z.string().array(),
  created: z.string(),
  director: z.string(),
  edited: z.string(),
  episode_id: z.number().int(),
  opening_crawl: z.string(),
  planets: z.string().array(),
  producer: z.string(),
  release_date: z.string(),
  species: z.string().array(),
  starships: z.string().array(),
  title: z.string(),
  url: z.string(),
  vehicles: z.string().array(),
});
export const filmsSchema = z.array(filmSchema);

export type Film = z.infer<typeof filmSchema>;
export type Films = z.infer<typeof filmsSchema>;
