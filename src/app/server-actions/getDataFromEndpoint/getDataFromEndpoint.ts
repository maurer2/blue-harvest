'use server';

export const getDataFromEndpoint = async <T>(url: string, page?: number): Promise<T> => {
  const fullURL = new URL(url);

  if (page) {
    fullURL.pathname = `/${page}`;
  }

  const response = await fetch(fullURL.toString());

  return response.json() as Promise<T>;
};
