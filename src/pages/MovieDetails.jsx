import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from 'services/ApiService';

const MovieDitails = () => {
    const [ditails, setDitails] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const {id} = useParams();

    useEffect(() => {
       getMovieDetails(id);
    }, []);

    const getMovieDetails = async (id) => {
        setIsLoading(true);
        try {
            const movieDetails = await API.getMovieById(id);
             if(movieDetails) {
                    setIsLoading(false);

                    return toast.error('Sorry, there are no movies matching your search query. Please try again.');
                }

            setDitails(movieDetails.results);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }   
    };

    return (
        <div>
            
        </div>
    )
}

export default MovieDitails;