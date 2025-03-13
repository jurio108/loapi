import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

async function getVideos(id: string) {
  console.log(`fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function MovieDeatil({ params }: { params: { id: string } }) {
  const { id } = await params;
  console.log(`====================`);
  console.log(`start fetching`);
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  console.log(`end fetching`);
  console.log(`====================`);

  return (
    <h1>{movie.title}</h1>
  );
}