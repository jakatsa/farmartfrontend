import { NavLink } from 'react-router-dom';

function FarmerServices() {
    return (
        <section className="farmer-service-card flex flex-col">
            <div className="farmer-service-icon-wrapper grid">
                <img
                    className="farmer-service-icon "
                    src="https://raw.githubusercontent.com/jakatsa/farmartbackend/03d0bce04d0f6c82a2d3c2653acddbebcb3bf58f/media/farmer-icon.png"
                    alt="farmers icon"
                />
            </div>
            <h3 className="farmer-services-heading | text-center service-card-heading uppercase font-bold ">
                farmer&lsquo;s services
            </h3>
            <div className=" farmer-service-text">
                <p>
                    As a farmer, you can use this platform to showcase your
                    prized livestock and efficiently manage sales.
                </p>
                <p>
                    Our user-friendly interface allows you to effortlessly post
                    your products for sale, complete with detailed descriptions
                    and images to attract potential buyers.
                </p>
                <p>
                    Once an order is received, you will have the autonomy to
                    review and approve each transaction, ensuring full control
                    over the sales process. With our intuitive tools and
                    dedicated support, you can maximize your reach,optimize your
                    sales, and cultivate lasting relationships with discerning
                    buyers.
                </p>
                <p>
                    Join our community of farmers today and unlock the full
                    potential of your agricultural enterprise.
                </p>
                <div className="service-link farmer-service-link">
                    <NavLink
                        className="flex items-center capitalize font-semibold hover:text-primary-500"
                        to="/farmerSignUp"
                    >
                        farmer&lsquo;s sign up{' '}
                        <span className="link-arrow">&#x27F6;</span>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default FarmerServices;
