
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerSingUp from "./components/Auth/CustomerSingUp";
import FarmersSingUp from "./components/Auth/FarmersSingUp";
import LandingPage from "./components/LandingPage";





import Login from "./components/Auth/LogIn";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/customerSingUp" element={<CustomerSingUp />} />
        <Route path="/farmerSingUp" element={<FarmersSingUp />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
