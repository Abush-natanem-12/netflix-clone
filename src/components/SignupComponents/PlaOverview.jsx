import { Check } from "lucide-react";
import { Link } from "react-router-dom";

function PlanOverviewComponent() {
  return (
    <div className="w-[90%] sm:w-[50%] md:w-[30%] lg:w-[25%] flex flex-col  h-[70vh] justify-center gap-5 items-center">
      <span className="text-base text-gray-900 tracking-[1px] uppercase ">
        step 2 of 3
      </span>

      <h2 className="text-3xl 2xl:text-4xl font-bold text-black text-start">
        Choose Your Plan
      </h2>

      <div className="w-full flex items-center justify-between px-6">
        <Check className="w-6 h-6 2xl:w-10 2xl:h-10 text-red-500" />
        <p className="text-base md:text-xl tracking-[1px] text-black">
          No commitments, cancel anytime.
        </p>
      </div>

      <div className="w-full flex items-center justify-between px-6">
        <Check className="w-6 h-6 2xl:w-10 2xl:h-10 text-red-500" />
        <p className="text-base md:text-xl tracking-[1px] text-black">
          Everything on Netflix for one low price.
        </p>
      </div>

      <div className="w-full flex items-center justify-between px-6">
        <Check className="w-6 h-6 2xl:w-10 2xl:h-10 text-red-500" />
        <p className="text-base md:text-xl tracking-[1px] text-black">
          No ads and no extra fees. Ever.
        </p>
      </div>
      <Link
        to={"/signup/planform"}
        className="w-full text-center py-4 text-xl font-bold bg-red-600 text-white tracking-[1px] cursor-pointer hover:bg-red-700 duration-100"
      >
        Next
      </Link>
    </div>
  );
}

export default PlanOverviewComponent;
