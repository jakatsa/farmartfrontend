import {NavLink} from 'react-router-dom'

const SignUp = () => {
  return (   

    <div className="home-links | flex">
            <NavLink  className="capitalize"to="/farmerSingUp">farmer sign up</NavLink>
            <NavLink  className="capitalize"to="/customerSingUp">customer sign up</NavLink>
    </div>
    
  )
}

export default SignUp