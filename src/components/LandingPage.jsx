import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Working on it!</h1>

      <div className="home-links | flex">
        <NavLink className="capitalize" to="/farmerSingUp">
          farmer sign up
        </NavLink>
        <NavLink className="capitalize" to="/customerSingUp">
          customer sign up
        </NavLink>
        <NavLink className="capitalize" to="/login">
          Login
        </NavLink>
        <NavLink className="capitalize" to="/HomePage">
          HomePage
        </NavLink>
      </div>
    </div>
  );
}

export default LandingPage;
