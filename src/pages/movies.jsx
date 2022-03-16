import { useEffect } from 'react';
import SearchIcon from '../assets/search.svg';

const Movies = () => {
    const API_URL = 'http://www.omdbapi.com/?apikey=d0916aed&';

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    };

    const handleClick = () => {};

    useEffect(() => {
        searchMovies('guardian');
    }, []);

    return (
        <>
            <h1> Movie Land</h1>
            <div className="search">
                <input placeholder="Search for movies" value={''} onClick={handleClick} />
            </div>
        </>
    );
};

export default Movies;
