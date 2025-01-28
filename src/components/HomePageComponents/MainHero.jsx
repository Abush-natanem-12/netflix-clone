import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmali } from "../../features/slices/accountSlices";
import ValidInputs from "../validInputs";

function MainHero() {
  const [email, setEm] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const handleEmailSent = function (e) {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) return;
    if (!emailRegex.test(email)) {
      setValidEmail(false);
      return;
    }
    setValidEmail(true);
    dispatch(setEmali(email));
    redirect("/signup/password");
  };

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[70%] md:w-[60%] lg:w-[50%] 2xl:w-[40%] flex flex-col gap-4 items-center text-center">
      <h1 className="text-white font-extrabold tracking-[1px] text-4xl lg:text-5xl 2xl:text-6xl">
        Unlimited movies, TV shows, and more
      </h1>
      (
      <div className="w-full flex flex-col items-center gap-4 text-center">
        <span className="text-white font-bold tracking-[2px] text-base lg:text-xl">
          Starts at USD 2.99. Cancel anytime.
        </span>
        <span className="text-gray-200 font-bold tracking-[2px] text-base">
          Ready to watch? Enter your email to create or restart your membership.
        </span>

        <div
          className="w-full  flex justify-between flex-col md:flex-row items-center gap-5 md:gap-0"
          onSubmit={handleEmailSent}
        >
          <form
            className="relative w-full h-14 md:w-[70%]"
            onSubmit={handleEmailSent}
          >
            <input
              value={email}
              placeholder="Enter Emaeil"
              onChange={(e) => setEm(e.target.value)}
              type="email"
              className="w-full h-full bg-[rgba(0,0,0,.3)] border-[1px] border-red-600 rounded-xs px-4  text-white outline-none"
            />
            {!validEmail && <ValidInputs message={"Invalid Email Address"} />}
          </form>
          <button
            onClick={handleEmailSent}
            className="w-[40%] md:w-[29%] h-14 font-bold text-gray-100 cursor-pointer hover:bg-red-500 bg-red-600 tracking-[1px] text-xl lg:text-2xl"
          >
            Get Started{" "}
          </button>
        </div>
      </div>
      )
    </div>
  );
}

export default MainHero;
