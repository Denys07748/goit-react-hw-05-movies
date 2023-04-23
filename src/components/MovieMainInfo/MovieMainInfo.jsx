const MovieMainInfo = ({details}) => {
    const { poster_path, title, overview, genres, release_date } = details;

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="300" />
            <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
            <p></p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{genres.map(({id, name}) => <span key={id}>{name}</span>)}</p>
        </div>
    )
}

export default MovieMainInfo;