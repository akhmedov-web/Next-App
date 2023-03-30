import MovieCard from "./MovieCard";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  return (
    <div className="grid-container py-3">
      {res.results.map((item) =>
        <MovieCard
          id={item.id}
          title={item.title}
          ranking={item.vote_average}
          photo={item.backdrop_path}
        />
      )}
    </div>
  )
}
