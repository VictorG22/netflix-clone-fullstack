import React, { useEffect, useState } from "react";
import { tmdbOptions } from "../utils/api";
import { Link } from "react-router";

const RecommendedMovies = ( { movieTitles } ) => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchMovie = async (title) => {
        const encodedTitle = encodeURIComponent(title);
        const url = `https://api.themoviedb.org/3/search/movie?query=${encodedTitle}&include_adult=false&language=en-US&page=1`;

        try {
            const res = await fetch(url, tmdbOptions)
            const data = await res.json();
            return data.results?.[0] || null ;
        } catch (error) {
            console.log("Error fetching movie: ", error);
            return null;
            
        }
    };

    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true);
            const results = await Promise.all(movieTitles.map((title) => fetchMovie(title)));
            setMovies(results.filter(Boolean));
            setLoading(false);
        };

        if(movieTitles?.length){
            loadMovies();
        }

    }, [movieTitles]);

    if(isLoading){
        <p>Loading...</p>
    }

    console.log(movies)

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-4 p-4">
        {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="bg-[#232323] rounded-lg flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg">
                {
                movie.poster_path
                    ?
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className=" h-72 w-full object-cover "/>
                   : 
                <div className="h-72 w-full bg-[#2f2f2f] flex items-center justify-center text-gray-500">No Image</div>
                }

                <div className="p-2 ">
                    <h3 className="text-sm font-semibold text-white truncate">{movie.title}</h3>
                    <h3 className="text-xs text-gray-400">{movie.release_date ? movie.release_date.slice(0,4) : "N/A"}</h3>
                </div>
            </Link>
        ))}

    </div>
  );
};

export default RecommendedMovies;
