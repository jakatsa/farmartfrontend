import {NavLink} from "react-router-dom"

function CustomerSingUp() {
    return(
        <div className="home-links flex">
        <h1 className='font-bold text-4xl'>Customer</h1>
            <NavLink to="/login" className="capitalize">log in</NavLink>
            <NavLink  className="capitalize"to="/farmerSingUp">farmer sign up</NavLink>
        </div>

    ) 
}

export default CustomerSingUp;
