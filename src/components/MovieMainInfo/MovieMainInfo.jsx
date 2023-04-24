import { Section } from "./MovieMainInfo.styled";

const MovieMainInfo = ({details}) => {
    const { poster_path, title, overview, genres, release_date, vote_average } = details;

    return (
        <Section>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="300" />
            <div>
                <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
                <p>User score: {Math.round(vote_average*10)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{genres.map(({id, name}) => <span key={id}>{name}</span>)}</p>
            </div>
        </Section>
    )
}

export default MovieMainInfo;