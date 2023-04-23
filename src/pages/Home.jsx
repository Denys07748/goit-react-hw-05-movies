import { toast } from 'react-toastify';
import MoviesList from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import * as API from 'services/ApiService';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if(movies === []) {
            return;
        }

        getMovies();
    }, [movies]);

    const getMovies = async () => {
        try {
            const moviesData = await API.getTrendingMovies();
             if(moviesData.results.length === 0) {
                return toast.error('Sorry, there are no images matching your search query. Please try again.');
                }
           

            setMovies(moviesData.results);
        } catch (error) {
            setError(error);
        }   
    };

    return (
        <main>
            <h1>Trending today</h1>
            <MoviesList movies={movies} isFromHome={true} />
            {error && toast.error("Oops, an error occurred while loading the page. Please try reloading the page")}
        </main>
    )
}   

export default Home;