import Image from 'next/image'
import Link from 'next/link';
export default function MovieCard({ id, title, ranking, photo }) {
    const imagePathWay = "https://image.tmdb.org/t/p/original"
    console.log(imagePathWay + photo);
    return (
        <div  key={id} className="card movie_card justify-content-between text-decoration-none">
            <Image
                src={imagePathWay + photo}
                alt="img"
                width="260"
                height="280"
                className='card-img-top'
            />
            <h5 className='my-3 text-center text-dark'>{title}</h5>
            <button className='btn btn-success col mx-1 ranking_btn'>{ranking}/10</button>
            <Link href={`/${id}`} className='btn btn-success'>Further details</Link>
        </div>
    )
}
