import CardImg from "../assets/cardimg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { tmdbOptions } from "../utils/api";

const CardList = ({ title, category }) => {
  const [data, setData] = useState([]);



  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      tmdbOptions
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="text-white md:px-4">
      <h2 className="mb-4">{title}</h2>

      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        freeMode={true}
        mousewheel={{
          forceToAxis: false, // allow horizontal scrolling via wheel
          invert: false, // optional: wheel scroll direction
        }}
        modules={[FreeMode, Mousewheel]}
        className="mySwiper py-4"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="max-w-72 ">
            {" "}
            <Link to={`/movie/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                className="h-44 w-full object-cover object-center rounded-lg"
                alt={item.title}
              />
              <p className="text-center pt-2">{item.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
