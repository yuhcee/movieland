import { useEffect, useState } from 'react';
import SearchIcon from '../assets/search.svg';
import MovieCard from '../components/MovieCard';
import debounce from '../utils/debounce';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const API_URL = 'http://www.omdbapi.com/?apikey=d0916aed&';

    const searchMovies = async (title = 'movie') => {
        if (title === '') return;
        const response = await fetch(`${API_URL}s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    const handleChange = debounce((e) => {
        setSearchTerm(e.target.value);
    }, 1000);

    useEffect(() => {
        searchMovies();
    }, [searchTerm]);

    return (
        <>
            <h1> Movie Mania </h1>
            <div className="search">
                <input placeholder="Search for movies" onChange={handleChange} />
                <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />
            </div>
            {movies !== undefined ? (
                <div className="container">
                    {movies.map((movie, idx) => (
                        <MovieCard key={idx} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2> No Movies Found</h2>
                </div>
            )}
        </>
    );
};

export default Movies;
