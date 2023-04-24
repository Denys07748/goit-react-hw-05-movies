import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container, MovieWrapper, MovieName } from './MoviesList.styled';

const MoviestList = ({movies, isFromHome}) => {
    const location = useLocation();


    return (
        <Container>
            {movies.map(({id, title, backdrop_path}) => {
                const path = `${isFromHome ? 'movies/' : ''}${id}`;
                return (
                    <MovieWrapper key={id}>
                        <Link to={path} state={{from: location}}>
                            <img src={backdrop_path 
                                ? `https://image.tmdb.org/t/p/w200/${backdrop_path}`
                                : "https://via.placeholder.com/200x120"} 
                                alt={title} />
                            <MovieName>{title}</MovieName>
                        </Link>
                    </MovieWrapper>
                )}
            )}
        </Container>
    )
}

export default MoviestList;

MoviestList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),),
    isFromHome: PropTypes.bool,
}
