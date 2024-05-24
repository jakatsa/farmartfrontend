import LandingPageHeader from "./LandingPageHeader";
import { NavLink } from "react-router-dom";

function LandingPageHero() {
  return (
    <div className="hero">
      {/* Header */}
      <LandingPageHeader />
      {/* Hero text*/}
      <div className="hero-text-wrapper">
        <div className="container">
          <section className="hero-text | flow text-accent-100 ">
            <h1 className="uppercase font-bold text-6xl">live stock market</h1>
            <p className="hero-paragraph">
              Welcome to the Livestock Marketplace, where farmers and customers
              converge to facilitate seamless transactions of quality farm
              animals. For farmers, this platform offers unparalleled visibility
              and access to a wide pool of eager buyers, ensuring swift and
              profitable sales. Customers, on the other hand, can explore a
              diverse range of premium livestock,meticulously curated by trusted
              breeders, guaranteeing satisfaction and peace of mind.
            </p>
            {/* Join Now btn */}
            <div className="btn-ghost-white | rounded-lg text-center ">
              <NavLink
                className="capitalize font-bold text-accent-100"
                to="/signup"
              >
                join now
              </NavLink>
            </div>
          </section>
          {/* <p className="hero-accent-text | text-accent-100 text-center italic">Join us today and experience the convenience and reliability of the online livestock market place</p> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPageHero;
