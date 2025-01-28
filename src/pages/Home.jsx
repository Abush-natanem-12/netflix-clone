import Faqs from "../components/HomePageComponents/Faqs";
import { Hero } from "../components/HomePageComponents/Hero";
import PopUpMovie from "../components/HomePageComponents/PopUpMovie";
import Reasons from "../components/HomePageComponents/Reasons";
import Trending from "../components/HomePageComponents/Trending";

const Home = function () {
  return (
    <div className="w-full bg-black relative">
      <Hero />
      <div className=" w-[95%] md:w-[85%] lg:w-[75%] 2xl:w-[60%] mx-auto flex flex-col gap-10 py-7">
        <Trending />
        <Reasons />
        <Faqs />
      </div>
      <PopUpMovie />
    </div>
  );
};

export default Home;
