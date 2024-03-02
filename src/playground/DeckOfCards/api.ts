export const fetcher = async (url: string) => {
  try {
    const response = await fetch(`https://www.deckofcardsapi.com${url}`);
    return response.json();
  } catch (err) {
    return new Error(`Error in fetch request: ${err}`);
  }
};
