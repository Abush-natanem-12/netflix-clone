import Header from "../components/HomePageComponents/Header";
import PlanOverviewComponent from "../components/SignupComponents/PlaOverview";

const PlanOverview = function () {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <PlanOverviewComponent />
    </div>
  );
};

export default PlanOverview;
