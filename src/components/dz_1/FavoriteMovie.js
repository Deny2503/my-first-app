
function FavoriteMovie() {
    const movie = {
        title: "Интерстеллар",
        direction: "Кристофер Нолан",
        year: 2014,
        studio: "Paramount Pictures",
        poster: "https://www.kino-teatr.ru/movie/poster/55826/75160.jpg",
        despription: "Документальный фильм про черные дыры и путушествие во времени"
    }

    return (
        <section>
            <h2>Task 1</h2>
            <img src={movie.poster} alt={movie.title} style={{ width: 200, borderRadius: 8 }} />
            <ul>
                <li><b>Название: </b> {movie.title}</li>
                <li><b>Продюсер: </b> {movie.direction}</li>
                <li><b>Год выпуска: </b> {movie.year}</li>
                <li><b>Студия: </b> {movie.studio}</li>
                <li><b>Описание: </b> {movie.despription}</li>
            </ul>
        </section>
    )
}

export default FavoriteMovie;