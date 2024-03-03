export const fetcher = async (url: string) => {
  try {
    const response = await fetch(`https://hacker-news.firebaseio.com/${url}`);
    return response.json();
  } catch (err) {
    return new Error(`Error fetching data: ${err}`);
  }
};

export const arrayFetcher = (ids: number[]) => {
  return Promise.all(ids.map((id) => fetcher(`v0/item/${id}.json`)));
};
