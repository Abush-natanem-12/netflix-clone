import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ValidInputs from "../validInputs";

function PasswordComponent() {
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(true);
  const email = useSelector((state) => state.account.email);
  const redirect = useNavigate();

  const handleRedirect = function (e) {
    e.preventDefault();
    if (password.length < 8) {
      setValidPass(false);
      return;
    }
    setValidPass(true);
    redirect("/signup/planoverview");
  };

  return (
    <div className="w-[90%] sm:w-[50%] md:w-[30%] lg:w-[25%] flex flex-col items-start h-[70vh] justify-center gap-5">
      <span className="text-base text-gray-900 tracking-[1px] uppercase ">
        step 1 of 3
      </span>

      <h2 className="text-3xl 2xl:text-4xl font-bold text-black text-start">
        Welcome back! <br /> Joining Netflix is Easy
      </h2>

      <span className="text-base text-gray-900 tracking-[1px] uppercase ">
        Enter your password and you will be watching in no time.
      </span>

      <div className="w-full flex flex-col items-start">
        <span className="text-base text-gray-900 tracking-[1px] font-bold">
          Email
        </span>

        <span className="text-base text-gray-900 tracking-[1px]  ">
          {email}
        </span>
      </div>

      <form
        onSubmit={handleRedirect}
        className="w-full h-14 flex flex-col items-start gap-3"
      >
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full h-full px-4 bg-transparent border-[1px] ${
            validPass ? "border-[rgba(0,0,0,.6)]" : "border-red-500"
          } outline-none py-4`}
          placeholder="Enter password"
        />

        {!validPass && <ValidInputs message={"Invalid input"} />}

        <button
          type="button"
          className="text-base text-blue-500 hover:underline duration-100 tracking-[1px] pb-2 cursor-pointer"
        >
          Forgot Password ?
        </button>

        <button
          onClick={handleRedirect}
          className="w-full py-4 text-xl font-bold bg-red-600 text-white tracking-[1px] cursor-pointer hover:bg-red-700 duration-100"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default PasswordComponent;
