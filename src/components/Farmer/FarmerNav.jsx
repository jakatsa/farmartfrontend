import { NavLink } from "react-router-dom"

function FarmerNav(){
return (
    <aside className="farmer-nav-bar shadow">
        <div className="flex flex-col">
            <p className="farmer-nav-logo | uppercase font-bold text-3xl">farmart</p>
            <nav className="farmer-nav">
                <ul className="farmer-nav-list | flex flex-col capitalize">
                    <li className="farmer-primary-nav-link"><NavLink to="#">my orders</NavLink></li>
                    <li className="farmer-primary-nav-link"><NavLink to="#">my products</NavLink></li>
                    <li className="farmer-primary-nav-link"><NavLink to="#">create product</NavLink></li>
                </ul>
            </nav>
        </div>
    </aside>
)
}

export default FarmerNav