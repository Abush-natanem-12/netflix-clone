import Header from "../components/HomePageComponents/Header";
import PlanFormComponent from "../components/SignupComponents/PlanForm";

const PlanForm = function () {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <PlanFormComponent />
    </div>
  );
};

export default PlanForm;
