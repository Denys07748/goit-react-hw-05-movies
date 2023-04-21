import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviestList = ({movies}) => {
    return (
        <ul>
            {movies.map(({id, title}) => 
                <li key={id}>
                    <Link to={`${id}`}>{title}</Link>
                </li>
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
}