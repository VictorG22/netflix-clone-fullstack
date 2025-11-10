import { Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { tmdbOptions } from "../utils/api";



const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, tmdbOptions)
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      tmdbOptions
    )
      .then((res) => res.json())
      .then((res) => setRecommendations(res.results || []))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl text-red-500">Loading...</h1>      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <div
        className="relative h-[60vh] flex items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>

        <div className="relative z-10 flex items-end p-8 gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="rounded-lg shadow-lg w-48 hidden md:block"
            alt={movie.title}
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>            <div className="flex items-center gap-4 mb-2">
              <span>IMDb Rating: ⭐ {movie.vote_average?.toFixed(1)}</span>
              <span> Release Date: {movie.release_date}</span>
              <span>Movie Runtime: {movie.runtime} mins</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres.map((genre, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <p className="max-w-2xl text-gray-200 mb-4">{movie.overview}</p>
            <button
              className="flex justify-center items-center border-2  bg-[#e50914]
           hover:bg-white hover:text-[#e50914] text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base
          transition duration-300"
            >
              <Play className="mr-2 w-4 h-5 md:w-5 md:h-5" />
              Watch Now
            </button>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Details</h2>
        <div className="bg-[#232323] rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="text-gray-300 space-y-3">
              <li>
                <span className="font-semibold text-white">Status: </span>
                <span className="ml-2">{movie.status}</span>
              </li>

              <li>
                <span className="font-semibold text-white">Release Date:</span>
                <span className="ml-2">{movie.release_date}</span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Original Language:
                </span>
                <span className="ml-2">
                  {movie.original_language.toUpperCase()}
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">Budget:</span>
                <span className="ml-2">
                  ${movie.budget ? `${movie.budget.toLocaleString()}` : "N/A"}
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">Revenue:</span>
                <span className="ml-2">
                  ${movie.revenue ? `${movie.revenue.toLocaleString()}` : "N/A"}
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Production Companies:
                </span>
                <span className="ml-2">
                  {movie.production_companies
                    ?.map((company) => company.name)
                    .join(", ") || "N/A"}
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">Countries:</span>
                <span className="ml-2">
                  {movie.production_countries
                    ?.map((country) => country.name)
                    .join(", ") || "N/A"}
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Spoken Languages:
                </span>
                <span className="ml-2">
                  {movie.spoken_languages
                    ?.map((languages) => languages.english_name)
                    .join(", ") || "N/A"}
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-2">Tagline</h3>
            <p className="italic text-gray-400 mb-6">
              {movie.tagline || "No tagline available."}
            </p>
            <h3 className="font-semibold text-white mb-2">Overview</h3>
            <p className="text-gray-200">{movie.overview}</p>
          </div>
        </div>
      </div>
      {recommendations.length > 0 ? (
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">You might also like...</h2>
        </div>
      ) : "No recommendations"}
    </div>
  );
};

export default MoviePage;
