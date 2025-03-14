import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function movieVideos({id}: {id: string} ) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>
}