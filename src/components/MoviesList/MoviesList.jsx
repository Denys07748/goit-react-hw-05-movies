import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MoviestList = ({movies, isFromHome}) => {
    const location = useLocation();

    return (
        <ul>
            {movies.map(({id, title}) => {
                const path = `${isFromHome ? 'movies/' : ''}${id}`;
                return (
                    <li key={id}>
                        <Link to={path} state={{from: location}}>{title}</Link>
                    </li>
                )}
            )}
        </ul>
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