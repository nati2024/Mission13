import Data from './MovieData.json'
const Movies = Data.MovieData

function MovieList() {
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
                    </tr>
                </thead>

                <tbody>
                        { Movies.map((movie) => (
                    <tr>
                        <td>{movie.Category}</td>
                        <td>{movie.Title}</td>
                        <td>{movie.Year}</td>
                        <td>{movie.Director}</td>
                        <td>{movie.Edited}</td>
                        <td>{movie.Rating}</td>
                    </tr>
                        ))}

                </tbody>
                </table>
        </div>
    )
}

export default MovieList;