
import {NavLink} from 'react-router-dom';

function FarmersSingUp() {
    return <div className="farmer-sign-up | form-wrapper">        
        <div className=" form-wrapper-sign-up | glass flow">
        {/* Logo */}
        <p className='font-semi-bold uppercase  text-7xl text-center'>farmart</p>
        {/* Form heading */}
        <h2 className='form-heading font-semi-bold uppercase text-2xl text-center'>farmer&lsquo;s sign up</h2>
        {/* Form wrapper */}
        <form action="" className='form-sing-up flow'>
        {/* Name */}
        <div className="form-item flex flex-col">
            <label className="uppercase font-semi-bold"htmlFor="name">name</label>
            <input className="input-area"name="name" id="name" type="text"/>
        </div>
        {/* Email */}
        <div className="form-item flex flex-col">
            <label className="uppercase font-semi-bold"htmlFor="name">email</label>
            <input className="input-area"name="name" id="name" type="email"/>
        </div>
        {/* Password */}
        <div className="form-item flex flex-col">
            <label className="uppercase font-semi-bold"htmlFor="name">password</label>
            <input className="input-area"name="name" id="name" type="password"/>
        </div>
        {/* Phone Number */}
        <div className="form-item flex flex-col">
            <label className="uppercase font-semi-bold"htmlFor="name">phone number</label>
            <input className="input-area"name="name" id="name" type="text"/>
        </div>
        <button type='submit' className="sign-up-submit-btn btn bg-primary-500 text-neutral-100 font-bold text-sm form-btn" value="sign up">sign up</button>
        </form>
        <div className="already-have-an-account flex justify-between">
            <p>Already have an account?</p> 
            <NavLink to="/login" className="font-bold text-l capitalize">log in</NavLink>
        </div>
            <p className='uppercase text-center or'>or</p>           
        <div className="social-btns flex flex-col flow">
            <NavLink to="#" className=" flex social-btn btn btn-ghost capitalize text-center" >
                <img className="sign-up-social-icon"src="../src/assets/icons/google.svg" alt="google icon" />
                <p>sing up with google</p></NavLink>
            <NavLink to="#"className=" flex social-btn btn btn-ghost capitalize text-center" >
                <img className="sign-up-social-icon"src="../src/assets/icons/facebook.svg" alt="facebook icon" />
                <p>sing up with facebook</p></NavLink>
                
        </div>
        </div>

    </div>;
}

export default FarmersSingUp;

