function Track() {
    return (
        <section className="service-card-grid | grid">
            <div className="service-card-grid-img-wrapper">
                <img
                    className="service-card-grid-img"
                    src="https://raw.githubusercontent.com/jakatsa/farmartbackend/03d0bce04d0f6c82a2d3c2653acddbebcb3bf58f/media/transaction.png"
                    alt="transaction image, a phone and a bag of money connected with a vertical rectangle "
                />
            </div>
            <h3 className="service-card-grid-heading uppercase font-bold text-primary-800 ">
                track your transactions
            </h3>
            <div className="service-card-grid-text text-primary-800">
                <p>
                    At Farmart, we offer a comprehensive platform that caters to
                    the needs of both farmers and customers alike. Farmers can
                    effortlessly showcase their prized livestock, manage sales,
                    and approve orders with ease, ensuring full control over
                    their agricultural enterprise. Meanwhile, customers enjoy a
                    seamless shopping experience, browsing through a diverse
                    selection of livestock, adding items to their cart, and
                    placing orders with confidence. Our platform provides
                    customers with real-time visibility into the approval status
                    of their purchases, fostering trust and transparency
                    throughout the transaction process.
                </p>
            </div>
        </section>
    );
}

export default Track;
