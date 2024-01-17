import { z } from 'zod';

export const vehicleSchema = z.object({
  cargo_capacity: z.string(),
  consumables: z.string(),
  cost_in_credits: z.string(),
  created: z.string(),
  crew: z.string(),
  edited: z.string(),
  films: z.string().array(),
  length: z.string(),
  manufacturer: z.string(),
  max_atmosphering_speed: z.string(),
  model: z.string(),
  name: z.string(),
  passengers: z.string(),
  pilots: z.string().array(),
  url: z.string(),
  vehicle_class: z.string(),
});
export const vehiclesSchema = z.array(vehicleSchema);

export type Vehicle = z.infer<typeof vehicleSchema>;
export type Vehicles = z.infer<typeof vehiclesSchema>;
