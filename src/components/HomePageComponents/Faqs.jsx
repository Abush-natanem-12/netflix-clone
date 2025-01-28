import { useState } from "react";
import { faqs } from "../../constants";
import { Plus, X } from "lucide-react";
function Faqs() {
  const [open, setOpen] = useState(null);
  const handleOpen = function (i) {
    if (open === i) setOpen(null);
    else setOpen(i);
  };

  return (
    <div className="w-full flex flex-col gap-2 items-start">
      <h2 className="text-2xl lg:text-3xl font-bold tracking-[1px] text-white">
        Frequently Asked Questions
      </h2>
      {faqs.map((el, i) => {
        return (
          <Faq
            key={i}
            onHandleOpen={handleOpen}
            index={i}
            qn={el.question}
            ans={el.answer}
            open={open === i}
          />
        );
      })}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const Faq = function ({ qn, ans, open, onHandleOpen, index }) {
  return (
    <div className="w-full bg-[#2d2d2d]">
      <div
        onClick={() => onHandleOpen(index)}
        className="w-full  px-4 py-5 text-base md:text-xl font-bold tracking-[1px] 2xl:text-2xl border-b-[1px] border-b-black text-white flex items-center justify-between cursor-pointer hover:bg-[#3f3f3f]"
      >
        <span className="">{qn}</span>
        <span>
          {open ? (
            <X className="w-5 h-5 lg:w-10 lg:h-10" />
          ) : (
            <Plus className="w-5 h-5 lg:w-10 lg:h-10" />
          )}
        </span>
      </div>

      {open ? (
        <div className="w-full px-4 py-5 text-xs md:text-base 2xl:text-xl text-gray-100 tracking-[1px] duration-200">
          {ans}{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Faqs;

// #2d2d2d
