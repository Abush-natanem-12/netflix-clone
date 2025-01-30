import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setEmali } from "../../features/slices/accountSlices";

function Header() {
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const handleEmailSent = function (e) {
    e.preventDefault();

    dispatch(setEmali("some@gmail.com"));
    redirect("/signup/password");
  };

  const email = useSelector((state) => state.account.email);
  return (
    <header className="py-10 mx-auto flex items-center justify-between w-[95%] md:w-[85%] lg:w-[75%] 2xl:w-[60%]">
      <Link to={"/"} className="">
        <img src="/logo.png" alt="netflix logo" className="w-32" />
      </Link>

      <button
        onClick={handleEmailSent}
        className="bg-red-600 text-white rounded-xs px-6 py-2 font-bold cursor-pointer"
      >
        {email ? "Logout" : "SignIn"}
      </button>
    </header>
  );
}

export default Header;
