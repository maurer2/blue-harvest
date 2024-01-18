'use server';

export const getDataFromEndpoint = async <T>(url: string): Promise<T> => {
  const fullURL = new URL(url);

  const response = await fetch(fullURL.toString());

  return response.json() as Promise<T>;
};
