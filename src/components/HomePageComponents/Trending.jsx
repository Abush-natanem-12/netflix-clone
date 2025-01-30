import { useDispatch, useSelector } from "react-redux";
import { setMovies, togglePopup } from "../../features/slices/MoviePopUpSlice";

import { trendingMovies } from "../../constants";

function Trending() {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.popUp);
  const handleOpenPopUp = function (title, description, poster) {
    dispatch(togglePopup(true));
    dispatch(setMovies(title, description, poster));

    console.log(title, description, poster);

    console.log(values);
  };

  return (
    <div className="w-full flex flex-col gap-4 items-start">
      <h2 className="text-2xl lg:text-3xl font-bold tracking-[1px] text-white">
        Trending Movies
      </h2>
      <div className="w-full flex gap-4 items-center overflow-auto ">
        {trendingMovies.map((el) => {
          return (
            <div
              onClick={() =>
                handleOpenPopUp(el.title, el.description, el.imageUrl)
              }
              key={el.id}
              className="w-[30%] shrink-0 cursor-pointer hover:scale-[1.1] duration-200 relative rounded-lg"
            >
              <span className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl absolute top-[50%] left-0 -translate-y-[50%] font-extrabold -translate-x-[50%] text-black stroke-2 stroke-white ">
                {el.id}
              </span>
              <img
                src={`/${el.imageUrl}`}
                alt="trending movie"
                className="w-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
