import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import MoviestList from "components/MoviesList/MoviesList";
import Searchbar from "components/Searchbar/Searchbar";
import * as API from 'services/ApiService';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if(query === '') {
            return;
        }

        getMovies(query);
    }, [query]);

    const getMovies = async (query) => {
        try {
            const moviesData = await API.getMoviesByQuery(query);
             if(moviesData.results.length === 0) {
                return toast.error('Sorry, there are no movies matching your search query. Please try again.');
                }

            setMovies(moviesData.results);
        } catch (error) {
            setError(error);
        }  
    };

    const handleSearch = (searchQuery) => {
        if(searchQuery === '') {
            toast.warn('The input field cannot be empty.');
        }
        if(query === searchQuery) {
            return;
        }

        const nextParams = searchQuery !== '' ? { query: searchQuery } : {};
        
        setSearchParams(nextParams);
        setMovies([]); 
    } 

    return (
        <main>
            <Searchbar onSubmit={handleSearch} />
            <MoviestList movies={movies} />
            {error && toast.error("Oops, an error occurred while loading the page. Please try reloading the page")}
        </main>
    )
}

export default Movies;