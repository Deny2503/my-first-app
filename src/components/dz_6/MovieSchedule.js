import "./MovieSchedule.css";

function MovieSchedule({ movies }) {
    return (
        <div className="movie-schedule">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <img src={movie.poster} alt={movie.title} className="movie-poster" />
                    <div className="movie-details">
                        <h2 className="movie-title">{movie.title}</h2>
                        <p className="movie-description">{movie.description}</p>
                        <div className="movie-sessions">
                            <strong>Сеанси:</strong>
                            <ul>
                                {movie.sessions.map((time, index) => (
                                    <li key={index}>{time}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieSchedule;