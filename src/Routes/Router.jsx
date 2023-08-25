import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../pages/Layout/MainLayout";
import Login from "../pages/Login&Register/Login";
import Register from "../pages/Login&Register/Register";
import DataAnalysis from "../pages/Products/DataAnalysis";
import ConsultingProducts from "../pages/Home/ConsultingProducts/ConsultingProducts";
import CustomerService from "../pages/Home/CustomerService/CustomerService";
import BussinessOption from "../pages/Products/BussinessOption";
import CompetitorSolution from "../pages/Products/CompetitorSolution";
import Pricing from "../Components/Pricing";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import DashHome from "../Dashboard/DashHome/DashHome";
import Payment from "../pages/Payment/Payment";
import UpscaleCustomer from "../pages/Home/UpscaleCustomer/UpscaleCustomer";
import HybridCustomer from "../pages/Home/HybridCustomer/HybridCustomer";
import Contact from "../Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dataAnalysis",
        element: <DataAnalysis></DataAnalysis>,
      },
      {
        path: "/consulting",
        element: <ConsultingProducts></ConsultingProducts>,
      },
      {
        path: "/businessoption",
        element: <BussinessOption />,
      },
      {
        path: "/competitor",
        element: <CompetitorSolution />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/customerService",
        element: <CustomerService></CustomerService>,
      },
      {
        path: "/upscale",
        element: <UpscaleCustomer></UpscaleCustomer>,
      },
      {
        path: "/hybridcustomer",
        element: <HybridCustomer></HybridCustomer>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/payment/:plan/:billingOption",
        element: <Payment />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "dashhome",
        element: <DashHome></DashHome>,
      },
      {
        path: "help",
        element: <Contact/>,
      },
      {
        path: "dai",
        element: <DataAnalysis/>,
      },
      {
        path: "cs",
        element: <ConsultingProducts/>,
      },
      {
        path: "comps",
        element: <CompetitorSolution/>,
      },
    ],
  },
]);
export default router;
