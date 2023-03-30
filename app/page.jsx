import MovieCard from "./MovieCard";
export default async function Home() {
    let movies=[];
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json();
    movies=res.results;
  return (
    <div className="grid-container py-3">
      {movies.map((item,index) =>
        <MovieCard
          id={item.id}
          title={item.title}
          ranking={item.vote_average}
          photo={item.backdrop_path}
          key={index}
        />
      )

      }
    </div>
  )
}
