import {NavLink} from 'react-router-dom'

const SignUp = () => {
  return (   

    <div className="home-links | flex">
            <NavLink  className="capitalize"to="/farmerSignUp">farmer sign up</NavLink>
            <NavLink  className="capitalize"to="/customerSignUp">customer sign up</NavLink>
    </div>
    
  )
}

export default SignUp