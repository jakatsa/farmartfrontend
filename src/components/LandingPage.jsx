import {NavLink} from 'react-router-dom';

function LandingPage  () {
  return (
    <div>
      <h1 className="font-bold text-3xl">Working on it!</h1>
      <h2 className="font-bold uppercase text-xl">Services</h2>
      <div className="home-links | flex">
        <NavLink  className="capitalize"to="/farmerSingUp">farmer sign up</NavLink>
        <NavLink  className="capitalize"to="/customerSingUp">customer sign up</NavLink>
        <NavLink  className="capitalize"to="/login">Login</NavLink>
      </div>
    </div>
  )
}

export default LandingPage