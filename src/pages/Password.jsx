import Footer from "../components/Footer";
import Header from "../components/HomePageComponents/Header";
import PasswordComponent from "../components/SignupComponents/Password";

const Password = function () {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <PasswordComponent />
      <Footer dark={false} />
    </div>
  );
};

export default Password;
