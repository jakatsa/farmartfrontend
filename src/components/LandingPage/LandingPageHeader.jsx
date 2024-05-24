import { NavLink } from "react-router-dom";

function LandingPageHeader () {
return (
    <header id="home" className="primary-header ">
        <div className="container">
            <div className="primary-nav-bar flex">
                {/* Logo */}
                <p className="uppercase  text-accent-100 font-bold text-xl">
                    farmart
                </p>
                {/* Navigation */}
                <nav className="primary-nav">
                    <ul className="primary-nav-list | flex text-accent-100 font-bold capitalize">
                        <li className="link">
                            <NavLink to="#">home</NavLink>
                        </li>
                        <li className="link">
                            <NavLink to="#">services</NavLink>
                        </li>
                        <li className="link">
                            <NavLink to="#">contacts</NavLink>
                        </li>
                    </ul>
                </nav>
                {/* Header btns */}
                <div className="primary-nav-btns | flex">
                    {/* Sign Up btn */}
                    <div className="btn-ghost-white | rounded-lg text-center ">
                        <NavLink
                            className="uppercase font-bold text-white"
                            to="/signup"
                        >
                            sign up
                        </NavLink>
                    </div>
                    {/* Login btn */}
                    <div className="btn-primary | rounded-lg text-center bg-primary-500">
                        <NavLink
                            className="uppercase font-bold text-accent-100"
                            to="/login"
                        >
                            Log in
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
)
}

export default LandingPageHeader