import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviestList = ({movies, isFromHome}) => {

    return (
        <ul>
            {movies.map(({id, title}) => {
                const path = `${isFromHome ? 'Movies/' : ''}${id}`;
                return (
                    <li key={id}>
                        <Link to={path}>{title}</Link>
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