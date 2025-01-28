import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const email = useSelector((state) => state.account.email);
  return (
    <header className="py-10 mx-auto flex items-center justify-between w-[95%] md:w-[85%] lg:w-[75%] 2xl:w-[60%]">
      <Link to={"/"} className="">
        <img src="/logo.png" alt="netflix logo" className="w-32" />
      </Link>

      <button className="bg-red-600 text-white rounded-xs px-6 py-2 font-bold cursor-pointer">
        {email ? "Logout" : "SignIn"}
      </button>
    </header>
  );
}

export default Header;
