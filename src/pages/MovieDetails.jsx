import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from 'services/ApiService';
import MovieMainInfo from 'components/MovieMainInfo/MovieMainInfo';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDitails = () => {
    const [details, setDetails] = useState({});
    const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if(!id) {
            return;
        }

       getMovieDetails(id);
    }, [id]);

    const getMovieDetails = async (id) => {
        try {
            const movieDetails = await API.getMovieById(id);
             if(movieDetails === {}) {
                return toast.error('Sorry, there are no movies matching your search query. Please try again.');
                }   
            setDetails(movieDetails);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div>
            {details.id && <MovieMainInfo details={details} />}
            <p>Additional information</p>
            <ul>
                <li><Cast /></li>
                <li><Reviews /></li>
            </ul>
            {error && toast.error("Oops, an error occurred while loading the page. Please try reloading the page")}
        </div>
    )
}

export default MovieDitails;