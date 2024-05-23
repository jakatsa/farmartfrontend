import {NavLink} from 'react-router-dom'

function Login() {
  return (
    <div>
<div className="login | grid form-wrapper">        
        <div className=" form-wrapper-login | glass flow rounded-xl">
        {/* Logo */}
        <p className='font-bold uppercase  text-5xl text-center'>farmart</p>
        {/* Form heading */}
        <h2 className='form-heading font-bold uppercase text-3xl text-center'>login</h2>
        {/* Form wrapper */}
        <form action="" className='form-login flow'>
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
        <button type='submit' className="sign-up-submit-btn btn bg-primary-500 text-neutral-100 font-bold text-sm form-btn">log in</button>
        </form>
        <div className="sign-alternative flex justify-between">
            <p>Don&lsquo;t have an account?</p> 
            <NavLink to="/signup" className="font-bold text-l capitalize">sign up</NavLink>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Login