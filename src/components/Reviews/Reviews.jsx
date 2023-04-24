import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as API from 'services/ApiService';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState('');
    const isLocationReviews = useLocation().pathname.includes('reviews');

    useEffect(() => {
        if(!isLocationReviews) {
            return;
        }

       getMovieReviews(movieId, 'reviews');
    }, [movieId, isLocationReviews]);

    const getMovieReviews = async (id, option) => {
        try {
            const movieReviews = await API.getMovieSubInfo(id, option);
            if(movieReviews > 0) {
                return toast.error('Sorry, there are no movies matching your search query. Please try again.');
                } 

            setReviews(movieReviews.results);
        } catch (error) {
            setError(error);
        }
    };

    return (
       <div>
            {reviews.length > 0 ?
                <ul>
                    {reviews.map(({id, author, content}) => 
                        <li key={id}>
                            <h4>{author}</h4>
                            <p>{content}</p>
                        </li>
                    )}
                </ul>
                : <p>We don`t have any reviews for this movies</p>
            }
           {error && toast.error("Oops, an error occurred while loading the page. Please try reloading the page")} 
        </div>
    )
}

export default Reviews;