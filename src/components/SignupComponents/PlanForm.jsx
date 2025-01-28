/* eslint-disable react/prop-types */
import { useState } from "react";
import { plans } from "../../constants/index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlan } from "../../features/slices/accountSlices";

function PlanFormComponent() {
  const dispatch = useDispatch();
  const [activeSmallPlan, setActiveSmallPlan] = useState(4);
  const [activeLargePlan, setActiveLargePlan] = useState(4);

  const handleActiveSmallSizePlan = function (id) {
    setActiveSmallPlan(id);
  };

  const handleActiveLargeSizePlan = function (id, plan) {
    setActiveLargePlan(id);
    dispatch(setPlan(plan));
  };

  return (
    <div className="w-[95%] md:w-[85%] lg:w-[80%] 2xl:w-[75%]  flex flex-col   justify-center gap-5 lg:gap-10 2xl:gap-12 items-center">
      <span className="text-base text-gray-900 tracking-[1px] uppercase ">
        step 2 of 3
      </span>

      <h2 className="text-3xl 2xl:text-4xl font-bold text-black text-start">
        Choose The Plan that is Right For You
      </h2>

      <div className="w-full sm:w-[95%] md:w-[90%] xl:w-full">
        <div className="w-full xl:hidden">
          {plans.map((el) => {
            return (
              <SmallSizePlan
                key={el.id}
                title={el.planTitle}
                quality={el.quality}
                monhlyPrice={el.monhlyPrice}
                sound={el.sound}
                resolution={el.resolution}
                supportedDevices={el.supportedDevices}
                household={el.household}
                download={el.download}
                id={el.id}
              />
            );
          })}
        </div>

        <div className="w-full hidden xl:flex xl:justify-between">
          {plans.map((el) => {
            return (
              <LargeSizePlan
                key={el.id}
                title={el.planTitle}
                quality={el.quality}
                monhlyPrice={el.monhlyPrice}
                sound={el.sound}
                resolution={el.resolution}
                supportedDevices={el.supportedDevices}
                household={el.household}
                download={el.download}
                id={el.id}
                active={activeLargePlan}
                onHandleLarge={handleActiveLargeSizePlan}
              />
            );
          })}
        </div>
      </div>

      <span className="text-xs text-gray-900 tracking-[1px] ">
        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
        to your internet service and device capabilities. Not all content is
        available in all resolutions. <br /> <br /> See our Terms of Use for
        more details. Only people who live with you may use your account. Watch
        on 4 different devices at the same time with Premium, 2 with Standard,
        and 1 with Basic and Mobile. <br /> <br /> Live events are included with
        any Netflix plan and contain ads.
      </span>

      <Link
        to={"/signup/payment"}
        className="py-4 px-32 text-xl font-bold bg-red-600 text-white tracking-[1px] cursor-pointer hover:bg-red-700 duration-100"
      >
        Next
      </Link>
    </div>
  );
}

const LargeSizePlan = function (props) {
  const {
    id,
    title,
    quality,
    monhlyPrice,
    sound,
    resolution,
    supportedDevices,
    household,
    download,
    active,
    onHandleLarge,
  } = props;

  console.log(props);
  console.log(quality);

  return (
    <div
      className={`w-[23%] flex flex-col rounded-2xl p-2 border-[1px] cursor-pointer border-[rgba(0,0,0,.7)] ${
        id === active &&
        "shadow-lg shadow-indigo-500 border-2 bg-gray-50 scale-[1.01]"
      }`}
      onClick={() => onHandleLarge(id, title)}
    >
      {id === 4 && (
        <span className="w-full bg-[#4c4c4c] text-white text-base  tracking-[1px] py-2 mb-1 text-center font-bold rounded-tl-2xl rounded-tr-2xl">
          Most Popular
        </span>
      )}
      <div
        className={`w-full flex flex-col bg-blue px-4 pt-4 pb-6 rounded-2xl  items-start gap-2 bg-linear-to-bl ${
          id === 1 && "from-[#214e9c] to-[#2665d0]"
        } ${id === 2 && "from-[#214e9c] to-[#633bd6]"} ${
          id === 3 && "from-[#214e9c] to-[#a039d4]"
        } ${id === 4 && "from-[#214e9c] to-[#c5132c]"}`}
      >
        <span className="text-white tracking-[1px] font-bold text-base md:text-xl">
          {title}
        </span>
        <span className="tracking-[1px] font text-xs md:text-base text-white">
          {quality}
        </span>
      </div>

      <div className="w-full flex flex-col px-4 pt-4 pb-6   items-start gap-2 border-b-[1px] border-b-gray-400">
        <span className="text-gray-600 tracking-[1px] font-bold text-sm md:text-xs">
          monthly price
        </span>
        <span className="text-gray-800 tracking-[1px] font-bold text-xs md:text-base">
          {monhlyPrice}
        </span>
      </div>

      <div className="w-full flex flex-col px-4 pt-4 pb-6   items-start gap-2 border-b-[1px] border-b-gray-400">
        <span className="text-gray-600 tracking-[1px] font-bold text-sm md:text-xs">
          Video and Sound Quality
        </span>
        <span className="text-gray-800 tracking-[1px] font-bold text-xs md:text-base">
          {sound}
        </span>
      </div>

      <div className="w-full flex flex-col px-4 pt-4 pb-6   items-start gap-2 border-b-[1px] border-b-gray-400">
        <span className="text-gray-600 tracking-[1px] font-bold text-sm md:text-xs">
          Resolution
        </span>
        <span className="text-gray-800 tracking-[1px] font-bold text-xs md:text-base">
          {resolution}
        </span>
      </div>

      <div className="w-full flex flex-col px-4 pt-4 pb-6   items-start gap-2 border-b-[1px] border-b-gray-400">
        <span className="text-gray-600 tracking-[1px] font-bold text-sm md:text-xs">
          Supported Devices
        </span>
        <span className="text-gray-800 tracking-[1px] font-bold text-xs md:text-base">
          {supportedDevices}
        </span>
      </div>

      <div className="w-full flex flex-col px-4 pt-4 pb-6   items-start gap-2 border-b-[1px] border-b-gray-400">
        <span className="text-gray-600 tracking-[1px] font-bold text-sm md:text-xs">
          Devices your household can watch at same time
        </span>
        <span className="text-gray-800 tracking-[1px] font-bold text-xs md:text-base">
          {household}
        </span>
      </div>

      <div className="w-full flex flex-col px-4 pt-4 pb-6   items-start gap-2 border-b-[1px] border-b-gray-400">
        <span className="text-gray-600 tracking-[1px] font-bold text-sm md:text-xs">
          Download Devices
        </span>
        <span className="text-gray-800 tracking-[1px] font-bold text-xs md:text-base">
          {download}
        </span>
      </div>
    </div>
  );
};

const SmallSizePlan = function (props) {
  return (
    <div className="flex flex-col">
      <div className="w-full flex"></div>
    </div>
  );
};

export default PlanFormComponent;
