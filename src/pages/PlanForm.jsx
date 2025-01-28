import Footer from "../components/Footer";
import Header from "../components/HomePageComponents/Header";
import PlanFormComponent from "../components/SignupComponents/PlanForm";

const PlanForm = function () {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <PlanFormComponent />
      <Footer dark={false} />
    </div>
  );
};

export default PlanForm;
