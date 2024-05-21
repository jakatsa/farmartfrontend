import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CustomerSingUp from "./components/Auth/CustomerSingUp";
import FarmersSingUp from "./components/Auth/FarmersSingUp";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/LogIn";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";

import { FilteredProducts } from "./components/FilteredProducts/FilteredProducts";
import SignUp from "./components/Auth/SignUp";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/customerSingUp" element={<CustomerSingUp />} />
        <Route path="/farmerSingUp" element={<FarmersSingUp />} />

        <Route path="/HomePage" element={<HomePage />} />

        <Route path="/FilteredProducts/:type" element={<FilteredProducts />} />
        <Route
          path="/FilteredProducts"
          element={<Navigate to="/FilteredProducts/default" />}
        />


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
