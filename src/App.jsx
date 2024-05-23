
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CustomerSingUp from "./components/Auth/CustomerSingUp";
import FarmersSingUp from "./components/Auth/FarmersSingUp";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Auth/LogIn";

// import { FilteredProducts } from "./components/FilteredProducts/FilteredProducts";
// import { ProductCard } from "./components/FilteredProducts/ProductCard";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import SignUp from "./components/Auth/SignUp";


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/customerSignUp" element={<CustomerSingUp />} />
              <Route path="/farmerSignUp" element={<FarmersSingUp />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              {/* <Route
                  path="/FilteredProducts/:type"
                  element={<FilteredProducts />}
              /> */}
              {/* <Route
                  path="/FilteredProducts"
                  element={<Navigate to="/FilteredProducts/default" />}
              /> */}
              {/* <Route path="/ProductCard" element={<ProductCard />} /> */}
          </Routes>
      </BrowserRouter>
  );
}


export default App;
