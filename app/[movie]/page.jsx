import Image from 'next/image'
export default async function page({ params }) {
  const { movie } = params;
  const imagePathWay = "https://image.tmdb.org/t/p/original"
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  console.log(res);
  console.log(movie)
  return (
    <div className='further_details_container d-flex flex-column align-items-center'>
      <h3 className='text-center mb-3'>{res.title}</h3>
      <Image
        src={imagePathWay + res.backdrop_path}
        alt="img"
        width="500"
        height="400"
        className='further_grid rounded'
      />
      <table className='table further_grid'>
        <tbody>
          <tr>
            <th scope="row">Realesed date</th>
            <td className='text-center'>{res.release_date}</td>
          </tr>
          <tr>
            <th scope="row">Runtime</th>
            <td className='text-center'>{res.runtime} min</td>
          </tr>
          <tr>
            <th scope="row">Ranking</th>
            <td className='text-center'>{res.vote_average}/10</td>
          </tr>
          <tr>
            <th scope="row">Country</th>
            <td className='text-center'>{res.production_countries[0].name}</td>
          </tr>
          <tr>
            <th scope="row">Budget</th>
            <td className='text-center'>${res.budget}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
