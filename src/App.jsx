
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerSignUp from "./components/Auth/CustomerSingUp";
import FarmerSignUp from "./components/Auth/FarmersSingUp";
import LandingPage from "./components/LandingPage";





import Login from "./components/Auth/LogIn";
import { NavBar } from "./components/NavBar";

import { HomePage } from "./components/HomePage";
import SignUp from "./components/Auth/SignUp";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/customerSingUp" element={<CustomerSignUp />} />
        <Route path="/farmerSingUp" element={<FarmerSignUp />} />

        <Route path="/HomePage" element={<HomePage />} />

        <Route path="/signup" element={<SignUp/>} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
