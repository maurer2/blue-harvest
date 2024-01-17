export const fetchJSON = async <T>(url: string, page: number): Promise<T> => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
  });

  const response = await fetch(`${url}?${queryParams.toString()}`);

  return response.json() as Promise<T>;
};
