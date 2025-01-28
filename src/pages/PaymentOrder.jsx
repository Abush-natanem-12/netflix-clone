import Header from "../components/HomePageComponents/Header";
import PaymentComponent from "../components/SignupComponents/Payment";

const PaymentOrder = function () {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <PaymentComponent />
    </div>
  );
};

export default PaymentOrder;
