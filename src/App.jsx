import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Password from "./pages/Password";
import PlanOverview from "./pages/PlanOverview";
import PlanForm from "./pages/PlanForm";
import PaymentOrder from "./pages/PaymentOrder";
import { Provider } from "react-redux";
import store from "./features/store";

const App = function () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup/password" element={<Password />} />
          <Route path="/signup/planoverview" element={<PlanOverview />} />
          <Route path="/signup/planform" element={<PlanForm />} />
          <Route path="signup/payment" element={<PaymentOrder />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
