import { reasons } from "../../constants";

function Reasons() {
  return (
    <div className="w-full flex justify-between gap-y-8 flex-wrap">
      <h2 className="text-2xl lg:text-3xl font-bold tracking-[1px] text-white w-full text-start">
        More Reasonsto Join
      </h2>

      {reasons.map((el, i) => {
        return (
          <Reason key={i} title={el.reasonTitle} desc={el.reasonDescription} />
        );
      })}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const Reason = function ({ title, desc }) {
  return (
    <div className="w-full md:w-[44%] 2xl:w-[24%] rounded-lg p-8 bg-linear-to-bl from-[#1a2144] to-[#210f19] shadow-md hover:shadow-lg flex flex-col gap-6 items-end">
      <h3 className="text-2xl font-bold tracking-[1px] text-white w-full">
        {title}
      </h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default Reasons;

// #1a2144 #210f19
