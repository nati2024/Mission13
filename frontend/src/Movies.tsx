import { useEffect, useState } from 'react';
import { Movies } from './MoviesType';

function MovieList() {
    const [movies, setMovies] = useState<Movies[]>([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const rsp = await fetch('https://localhost:4000/movie');
            const temp = await rsp.json();
            setMovies(temp);
            console.log(temp);
        };
        fetchMovies();
    }, []);
    return(
        <div>
            <table className="table table-bordered table-striped">

                <thead className="font-weight-bold">
                    <tr>
                        <td>Category</td>
                        <td>Title</td>
                        <td>Year</td>
                        <td>Director</td>
                        <td>Edited</td>
                        <td>Rating</td>
                        <td>Lent To</td>
                        <td>Notes</td>
                    </tr>
                </thead>

                <tbody>
                        { movies.map((movie) => (
                    <tr>
                        <td>{movie.category}</td>
                        <td>{movie.title}</td>
                        <td>{movie.year}</td>
                        <td>{movie.director}</td>
                        <td>{movie.edited}</td>
                        <td>{movie.rating}</td>
                        <td>{movie.lentTo}</td>
                        <td>{movie.notes}</td>
                    </tr>
                        ))}

                </tbody>
                </table>
        </div>
    )
}

export default MovieList;