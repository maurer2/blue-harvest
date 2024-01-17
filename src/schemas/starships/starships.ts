import { z } from 'zod';

export const starshipSchema = z.object({
  MGLT: z.string(),
  cargo_capacity: z.string(),
  consumables: z.string(),
  cost_in_credits: z.string(),
  created: z.string(),
  crew: z.string(),
  edited: z.string(),
  films: z.string().array(),
  hyperdrive_rating: z.string(),
  length: z.string(),
  manufacturer: z.string(),
  max_atmosphering_speed: z.string(),
  model: z.string(),
  name: z.string(),
  passengers: z.string(),
  pilots: z.string().array(),
  starship_class: z.string(),
  url: z.string(),
});
export const starshipsSchema = z.array(starshipSchema);

export type Starship = z.infer<typeof starshipSchema>;
export type Starships = z.infer<typeof starshipsSchema>;
