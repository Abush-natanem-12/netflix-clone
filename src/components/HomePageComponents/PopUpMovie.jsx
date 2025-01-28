import { ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { togglePopup } from "../../features/slices/MoviePopUpSlice";

function PopUpMovie() {
  const values = useSelector((state) => state.popUp);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  useEffect(() => {
    if (values.isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts
    return () => document.body.classList.remove("overflow-hidden");
  }, [values.isOpen]);

  const handleClosePopUp = () => {
    dispatch(togglePopup(false));
  };

  const handleRedirect = function () {
    dispatch(togglePopup(false));
    redirect("/signup/planoverview");
  };

  return (
    <div
      className={`w-full h-screen fixed inset-0 flex items-center justify-center duration-300 overflow-hidden   ${
        !values.isOpen
          ? "scale-[.5] opacity-0 -z-50"
          : "scale-[1] opacity-100 z-50"
      } bg-black/[.8]`}
    >
      <div className="w-[95%] relative bg-black md:w-[85%] lg:w-[75%] 2xl:w-[60%] h-[50%] py-10 mx-auto flex items-center justify-around gap-5">
        <img src={`/${values.poster}`} alt="movie poster" className="h-full" />
        <div className="w-[40%] flex flex-col items-start gap-5">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl  tracking-[2px] uppercase">
            {values.title}
          </h2>
          <p className="text-whiite text-gray-100 text-sm md:text-base tracking-[1px]">
            {values.description}
          </p>
          <button
            onClick={handleRedirect}
            className="cursor-pointer text-base sm:text-xl lg:text-2xl font-bold text-white tracking-[1px] bg-red-600 flex items-center gap-2 py-2 px-5 rounded-lg"
          >
            Get Started
            <ChevronRight className="text-white size-6 lg:size-10" />
          </button>
        </div>
        <button
          onClick={handleClosePopUp}
          className="p-2 cursor-pointer rounded-full bg-transparent hover:bg-gray-400/[.1] duration-200 absolute top-2 right-2"
        >
          <X className="size-5 lg:size-8 text-white font-thin" />
        </button>
      </div>
    </div>
  );
}

export default PopUpMovie;
