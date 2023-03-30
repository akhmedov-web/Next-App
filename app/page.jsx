import MovieCard from "./MovieCard";
export default async function Home() {
    let movies=[];
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ee95d277fa0c0009d59cc14c21dc8109`)
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
