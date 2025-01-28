import { footerLink } from "../constants";

// eslint-disable-next-line react/prop-types
function Footer({ dark }) {
  return (
    <footer
      className={`w-[95%] md:w-[85%] lg:w-[75%] 2xl:w-[60%] mx-auto flex flex-col gap-10 py-10 items-start ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <span className="text-xs font-thing tracking-[1px] underline pb-1 cursor-pointer">
        Questions? Contact Us
      </span>
      <div className="flex flex-wrap justify-between gap-y-[1rem]">
        {footerLink.map((el, i) => {
          return (
            <span
              key={i}
              className="text-xs w-full md:w-[43%] 2xl:w-[23%] text-start  font-thing tracking-[1px] underline pb-1 cursor-pointer"
            >
              {el}
            </span>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
