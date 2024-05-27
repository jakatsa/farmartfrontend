import { NavLink } from "react-router-dom"

function FarmerNav(){
return (

    <aside className="farmer-nav-bar shadow bg-neutral-200">

        <div className="flex flex-col">
            <p className="farmer-nav-logo | uppercase font-bold text-3xl">farmart</p>
            <nav className="farmer-nav">
                <ul className="farmer-nav-list | flex flex-col capitalize">

                    <li className="farmer-primary-nav-link"><NavLink to="/farmer/orders">my orders</NavLink></li>
                    <li className="farmer-primary-nav-link"><NavLink to="/farmer/products">my products</NavLink></li>
                    <li className="farmer-primary-nav-link"><NavLink to="/farmer/createProduct">create product</NavLink></li>
                    <li className="farmer-primary-nav-link | farmer-primary-nav-link-log-out  "><NavLink to="/login">log out</NavLink></li>

                </ul>
            </nav>
        </div>
    </aside>
)
}

export default FarmerNav