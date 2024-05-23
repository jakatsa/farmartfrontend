

function Footer () {
  return (
    <div className="footer bg-primary-700 text-accent-100">
        <div className="container">
            <div className="footer-grid grid">
                {/* Trade Assurance */}
                <section className=" trade | footer-nav-block">
                    <h2 className="footer-heading | font-semibold capitalize">trade assurance</h2>
                    <nav>
                        <ul className="footer-nav-list | flex flex-col">
                            <li className="footer-link">Safe and easy payment</li>
                            <li className="footer-link">Money-back policy</li>
                            <li className="footer-link">On-time shipping</li>
                            <li className="footer-link">After-sales protections</li>
                            <li className="footer-link">Product monitoring services</li>
                        </ul>
                    </nav>
                </section>
                {/* Get support */}
                <section className="support | footer-nav-block">
                    <h2 className="footer-heading | font-semibold capitalize">Get support</h2>
                    <nav>
                        <ul className="footer-nav-list | flex flex-col">
                            <li className="footer-link">Help center</li>
                            <li className="footer-link">Live chat</li>
                            <li className="footer-link">Check order status</li>
                            <li className="footer-link">Refunds</li>
                            <li className="footer-link">Report abuse</li>
                        </ul>
                    </nav>
                </section>
                {/* Source on Farmart */}
                <section className="source | footer-nav-block">
                    <h2 className="footer-heading | font-semibold capitalize">Source on Farmart </h2>
                    <nav>
                        <ul className="footer-nav-list | flex flex-col">
                            <li className="footer-link ">Request for quotation</li>
                            <li className="footer-link ">Membership program</li>
                            <li className="footer-link ">Farmart.com logistics</li>
                            <li className="footer-link ">Sales tax and VAT</li>
                            <li className="footer-link ">Farmart Reads</li>
                        </ul>
                    </nav>
                </section>
                {/* Social links */}
                <nav className="social-links" aria-label="social links">
                    <ul className="footer-social-links-list flex">
                        <li className="social-link"><img src="../src/assets/icons/icon-facebook.svg" alt="facebook icon" className="footer-social-icon" /></li>
                        <li className="social-link"><img src="../src/assets/icons/icon-youtube.svg" alt="youtube icon" className="footer-social-icon" /></li>
                        <li className="social-link"><img src="../src/assets/icons/icon-instagram.svg" alt="instagram icon" className="footer-social-icon" /></li>
                        <li className="social-link"><img src="../src/assets/icons/icon-pinterest.svg" alt="pinterest icon" className="footer-social-icon" /></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Footer