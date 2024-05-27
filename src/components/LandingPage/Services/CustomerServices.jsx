import { NavLink } from "react-router-dom";

function CustomerServices() {
    return (
        <section className="customer-service-card flex flex-col">
            <div className="customer-service-icon-wrapper grid">
                <img className="customer-service-icon "
                    src="https://raw.githubusercontent.com/jakatsa/farmartbackend/03d0bce04d0f6c82a2d3c2653acddbebcb3bf58f/media/customer-icon.png"
                    alt="customer icon"
                />
            </div>
            <h3 className="customer-services-heading | text-center service-card-heading uppercase font-bold ">
                customer services
            </h3>
            <div className="customer-service-text">
                <p>
                    As a customer, you enjoy a seamless shopping experience designed
                    to meet your needs.
                </p> 
                <p>
                    Our intuitive platform allows you to browse
                    through a diverse array of livestock products, adding your
                    selections to a convenient cart for streamlined purchasing. Once
                    ready, you can place your orders.
                </p>
                <p>
                    You will be able to track with
                    the option to track the status of each of your transactions in
                    real-time. With access to comprehensive product listings and
                    transparent order management tools, you can shop with
                    confidence, knowing that your needs are our top priority.
                </p>
                <p>
                    Join us today and experience the ease and convenience of shopping at
                    the livestock marketplace.
                </p>
                <div className="service-link">
                    <NavLink  className="flex items-center capitalize font-semibold hover:text-primary-500"to="/customerSignUp">customer sign up <span className="link-arrow">&#x27F6;</span></NavLink>
                </div>
            </div>
        </section>
    );
}

export default CustomerServices;
