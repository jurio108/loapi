import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 4000));
  
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;

  /**
   * error handling test
   */
  // throw new Error(`Error occured`);
}

export default async function movieVideos({id}: {id: string} ) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>
}