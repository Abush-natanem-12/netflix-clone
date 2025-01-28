import { CreditCard, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ValidInputs from "../validInputs";

function PaymentComponent() {
  const plan = useSelector((state) => state.account.plan);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [checked, setChecked] = useState(false);

  const [validCardNumber, setValidCardNumber] = useState(true);
  const [validExpiryDate, setValidExpiryDate] = useState(true);
  const [validCvv, setValidCvv] = useState(true);
  const [validCardName, setValidCardName] = useState(true);
  const [validCheck, setValidCheck] = useState(true);

  const handlePayment = function (e) {
    e.preventDefault();
    if (cardNumber.length !== 10) {
      setValidCardName(false);
    }

    if (expiryDate.length !== 4) {
      setValidExpiryDate(false);
    }

    if (cvv.length !== 4) {
      setValidCvv(false);
    }

    if (cardName.length === 0) {
      setValidCardName(false);
    }

    if (validCardNumber || validExpiryDate || validCvv || validCardName) {
      return;
    }

    alert("good job boy");
  };

  // now for validity of email

  return (
    <div className="w-[90%] sm:w-[50%] md:w-[30%] lg:w-[25%] flex flex-col items-center h-[70vh] justify-center gap-5">
      <span className="text-base text-gray-900 tracking-[1px] uppercase ">
        step 2 of 2
      </span>

      <h2 className="text-3xl 2xl:text-4xl font-bold text-black text-start">
        set up your credit card or debit card
      </h2>

      <form
        onSubmit={handlePayment}
        className="w-full flex justify-between flex-wrap gap-y-5"
      >
        <div className="w-full relative">
          <input
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            type="text"
            placeholder="Card number"
            className="w-full h-12  bg-transparent outline-none border-[1px] border-gray-600 px-4"
          />

          {!validCardName && <ValidInputs message={"Invalid Card Number"} />}
        </div>

        <div className="w-[48%] relative">
          <input
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            type="text"
            placeholder="Expiration date"
            className="w-full h-12 bg-transparent outline-none border-[1px] border-gray-600 px-4"
          />
          {!validExpiryDate && <ValidInputs message={"Invalid Card Number"} />}
        </div>

        <div className="w-[48%] relative">
          <input
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            type="text"
            placeholder="CVV"
            className="w-full h-12 bg-transparent outline-none border-[1px] border-gray-600 px-4"
          />
          {!validCvv && <ValidInputs message={"Invalid Card Number"} />}
          <HelpCircle className="size-7 font-thin text-gray-600 absolute top-[50%] right-4 -translate-y-[50%]" />
        </div>

        <div className="w-full relative ">
          <input
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            type="text"
            placeholder="Name On card"
            className="w-full h-12  bg-transparent outline-none border-[1px] border-gray-600 px-4"
          />
          {!validCardName && <ValidInputs message={"Invalid Card Number"} />}
        </div>
      </form>

      <div className="w-full flex items-center justify-between px-3 py-2 bg-gray-200">
        <div className="flex flex-col items-start">
          <span className="text-base md:text-xl  text-black">
            {plan === "Mobile" && "USD 2.99/month"}
            {plan === "Basic" && "USD 3.99/month"}
            {plan === "Standard" && "USD 7.99/month"}
            {plan === "Premium" && "USD 9.99/month"}
          </span>

          <span className="text-xs md:text-base text-gray-600">{plan}</span>
        </div>

        <Link
          to={"/signup/planform"}
          className="text-xs md:text-base font-bold tracking-[1px] text-blue-700"
        >
          Change
        </Link>
      </div>

      <span className="text-sm text-gray-900 tracking-[1px] ">
        By checking the checkbox below, you agree to our{" "}
        <Link to={"/termsofuses"} className="text-blue-600">
          Terms of Use
        </Link>{" "}
        <Link to={"/privacy"} className="text-blue-600">
          Privacy Statement,
        </Link>{" "}
        and that you are over 18. Netflix will automatically continue your
        membership and charge the membership fee (currently USD 2.99/month) to
        your payment method until you cancel. You may cancel at any time to
        avoid future charges.
      </span>

      <form className="w-full flex items-center py-3 gap-3">
        <input type="checkbox" className="size-5 cursor-pointer" />
        <span className="text-gray-500 uppercase tracking-[1px]">I agree</span>
      </form>

      <button
        onClick={handlePayment}
        className="w-full py-4 text-xl font-bold bg-red-600 text-white tracking-[1px] cursor-pointer hover:bg-red-700 duration-100"
      >
        Start MemberShip
      </button>
    </div>
  );
}

export default PaymentComponent;
