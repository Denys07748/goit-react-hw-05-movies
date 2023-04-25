import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from 'services/ApiService';


const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();
    const [error, setError] = useState('');

    useEffect(() => {
        if(!movieId) {
            return;
        }

       getMovieCast(movieId, 'credits');
    }, [movieId]);

    const getMovieCast = async (id, option) => {
        try {
            const movieCast = await API.getMovieSubInfo(id, option);
            if(movieCast.cast.length === 0) {
                return toast.error('Sorry, we didn`t find any actors.');
                } 

            setCast(movieCast.cast);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div>
            {cast &&
                <ul>
                    {cast.map(({cast_id, name, character, profile_path}) => 
                        <li key={cast_id}>
                            <img src={profile_path
                                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                : `https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png`} 
                                alt={name} 
                                width={150} />
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </li>
                    )}
                </ul>
            }
           {error && toast.error("Oops, an error occurred while loading the page. Please try reloading the page")} 
        </div>
    )
}

export default Cast;