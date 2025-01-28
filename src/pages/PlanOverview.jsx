import Footer from "../components/Footer";
import Header from "../components/HomePageComponents/Header";
import PlanOverviewComponent from "../components/SignupComponents/PlaOverview";

const PlanOverview = function () {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <PlanOverviewComponent />
      <Footer dark={false} />
    </div>
  );
};

export default PlanOverview;
