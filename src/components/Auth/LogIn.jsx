import {NavLink} from 'react-router-dom'

function Login() {
  return (
    <div>
            <h1 className="uppercase text-center  font-bold text-6xl">our awesome login page</h1>

        <div className="home-links | flex">
            <NavLink  className="capitalize"to="/farmerSingUp">farmer sign up</NavLink>
            <NavLink  className="capitalize"to="/customerSingUp">customer sign up</NavLink>
        </div>
    </div>
  )
}

export default Login