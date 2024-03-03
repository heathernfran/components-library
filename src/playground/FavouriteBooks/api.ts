export async function fetchData(url: string) {
  try {
    const response = await fetch(`https://openlibrary.org/${url}`);
    if (!response.ok) {
      throw new Error(`Network request error`)
    }
    return response.json();
  } catch (err) {
    throw new Error(`Error fetching data: ${err}`);
  }
}
