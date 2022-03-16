import { useEffect, useState } from 'react';
import SearchIcon from '../assets/search.svg';
import MovieCard from '../components/MovieCard';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const API_URL = 'http://www.omdbapi.com/?apikey=d0916aed&';

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    const handleChange = (e) => setSearchTerm(e.target.value);
    const handleClick = (title) => searchMovies(title);

    useEffect(() => {
        searchMovies('spider');
    }, []);

    return (
        <>
            <h1> Movie Mania </h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={handleChange} />
                <img src={SearchIcon} alt="Search" onClick={() => handleClick(searchTerm)} />
            </div>

            {movies.length > 0 ? (
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
