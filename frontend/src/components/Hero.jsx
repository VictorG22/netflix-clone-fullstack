import { Bookmark, Play } from "lucide-react";
import HeroBG from "../assets/herobg2.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { tmdbOptions } from "../utils/api";

console.log("Hello")

const Hero = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        tmdbOptions
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.results && res.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * res.results.length);
            setMovie(res.results[randomIndex]);
          }
        })
        .catch((err) => console.error(err));
  }, []);

  if (!movie) {
    return <p>Loading...</p>;
  }


  return (
    <section id="landing">
      <div className="text-white relative">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          className="w-full rounded-2xl h-[480px] object-center object-cover"
          alt={movie.title}
        />

        <div className="flex space-x-2 md:space-x-4 absolute left-4 bottom-3 md:bottom-8 md:left-10 font-medium">
          <button
            className="flex justify-center items-center border-2  bg-white
          transform hover:-translate-y-1 hover:bg-[#e50914] hover:text-white text-[#e50914]
          py-3 px-4 rounded-full cursor-pointer text-sm md:text-base
          transition duration-300"
          >
            <Bookmark className="mr-2 w-4 h-5 md:w-5 md:h-5" />
            Save for Later
          </button>
          <Link to={`/movie/${movie.id}`}>
            <button
              className="flex justify-center items-center border-2  bg-[#e50914]
            transform hover:-translate-y-1 hover:bg-white hover:text-[#e50914] text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base
            transition duration-300"
            >
              <Play className="mr-2 w-4 h-5 md:w-5 md:h-5" />
              Watch Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
