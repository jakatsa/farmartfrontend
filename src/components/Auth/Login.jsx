import {NavLink} from 'react-router-dom'

function Login() {
  return (
    <div>
        <h1 className='font-bold text-4xl'>Login</h1>
        <div className="home-links | flex">
            <NavLink  className="capitalize"to="/farmerSingUp">farmer sign up</NavLink>
            <NavLink  className="capitalize"to="/customerSingUp">customer sign up</NavLink>
        </div>
    </div>
  )
}

export default Login