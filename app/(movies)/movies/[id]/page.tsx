import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDeatil({ params }: { params: { id: string } }) {
  const { id } = await params;
  /**
   * 순차적으로 시작
   */
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  /**
   * 동시에 시작, but 모든 작업이 끝나야 완료
   */
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  /**
   * suspense fetch하고 fallback 내용을 loading 중에 보여줌
   * 각각의 suspense는 각각 실행
   */
  return (
    <div>
      <h3>Movie Detail</h3>
      <Suspense fallback={<div>Loading movie...</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<div>Loading videos...</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}